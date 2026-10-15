/* Run against a local Python static server; requires Playwright and Chromium. */
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const base = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8765';

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    await page.clock.setFixedTime(new Date('2026-10-15T04:00:00Z'));
    const errors = [], failures = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) failures.push(response.url()); });
    await page.goto(base);
    assert.equal(await page.locator('main').count(), 1);
    assert(await page.evaluate(() => scrollY < 10 && document.activeElement.id !== 'terminal-input'));
    assert.deepEqual(await page.locator('main > section').evaluateAll(nodes => nodes.map(n => n.id)), ['hero','progression','research','certs','domain-map','terminal','connect']);
    assert.equal(await page.locator('html').getAttribute('lang'), 'en-SG');
    assert.equal((await page.locator('h1').textContent()).trim(), 'TAY Kai Keng');
    assert.equal(await page.locator('.hero-title .highlight').textContent(), 'TAY');
    assert.equal(await page.locator('.hero-title .highlight').evaluate(e => getComputedStyle(e).color), 'rgb(56, 189, 248)');
    assert.equal(await page.locator('.brand-badge').textContent(), 'KK//SEC');
    assert.equal(await page.locator('#work-progression-container .progression-step').count(), 3);
    assert.doesNotMatch(await page.locator('body').textContent(), /RSAF|Kai Keng TAY|TK\/\/SEC|Selected Credentials/);
    assert.equal(await page.locator('#filter-cert-level, .level-badge').count(), 0);
    assert.equal(await page.locator('.domain-evidence').count(), 12);
    assert((await page.locator('#research-contribution').textContent()).includes('gathering malware samples'));
    assert.equal(await page.locator('#credential-catalog').isVisible(), true);
    assert.equal(await page.locator('#reset-cert-filters').isDisabled(), true);
    assert.equal(await page.locator('.cert-card').count(), 21);
    assert.equal(await page.locator('.cert-card .credential-badge').count(), 13);
    assert.equal(await page.locator('.cert-card .credential-link').count(), 13);
    for (const img of await page.locator('.credential-badge, .issuer-logo').all()) {
      await img.scrollIntoViewIfNeeded(); await img.evaluate(i => i.decode());
      assert(await img.evaluate(i => i.naturalWidth > 0));
    }
    const sources = require('../assets/img/badges/sources.json');
    const credentials = await page.evaluate(() => window.PORTFOLIO_DATA.certifications);
    assert(credentials.every(c => !Object.hasOwn(c, 'level')));
    for (const source of sources) {
      const c = credentials.find(c => c.id === source.credentialId);
      assert.equal(c.credentialUrl, source.verificationUrl);
      assert.equal(c.expiresOn, source.expiresOn);
    }
    await page.locator('[data-cert-cat="course"]').click();
    assert.equal(await page.locator('.cert-card').count(), 4);
    assert.equal(await page.locator('.cert-card .status-badge.completed').count(), 4);
    await page.locator('[data-cert-cat="all"]').click();
    await page.locator('[data-cert-status="expired"]').click();
    assert.equal(await page.locator('.cert-card').count(), 4);
    await page.locator('#filter-cert-domain').selectOption('ai');
    assert.equal(await page.locator('.cert-card').count(), 0);
    assert.match(await page.locator('#cert-results-count').textContent(), /0 of 21/);
    await page.locator('#reset-cert-filters').click();
    assert.equal(await page.locator('#filter-cert-domain').inputValue(), 'all');
    assert.equal(await page.locator('[data-cert-cat="all"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('[data-cert-status="all"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#reset-cert-filters').isDisabled(), true);
    assert.equal(await page.locator('.cert-card').count(), 21);
    const validity = await page.evaluate(() => {
      const c = window.PORTFOLIO_DATA.certifications.find(c => c.id === 'gcfe');
      return [window.getCredentialStatus(c, new Date('2027-01-31T15:59:59Z')), window.getCredentialStatus(c, new Date('2027-01-31T16:00:00Z'))];
    });
    assert.deepEqual(validity, ['active', 'expired']);
    await page.locator('[data-cert-status="active"]').click();
    assert.equal(await page.locator('.cert-card').count(), 17);
    await page.locator('[data-cert-cat="proctored"]').click();
    await page.locator('#filter-cert-domain').selectOption('cloud');
    assert.deepEqual(await page.locator('.cert-card').evaluateAll(nodes => nodes.map(n => n.dataset.credentialId)), ['gcp-ace', 'kcna', 'ms-azure-fund']);
    await page.locator('#reset-cert-filters').click();
    console.log('PASS full catalogue, credential artwork, provenance, combined filters, reset, and Singapore expiry boundary');

    const domains = await page.evaluate(() => window.PORTFOLIO_DATA.competencyRadar);
    for (const domain of domains) {
      await page.locator(`[data-domain="${domain.id}"]`).focus(); await page.keyboard.press('Enter');
      assert(await page.locator(`#domain-${domain.id}`).evaluate(e => e.open));
      assert((await page.locator(`#domain-${domain.id}`).textContent()).includes(domain.nextStep));
    }
    await page.goto(base + '/#domain-offensive');
    assert(await page.locator('#domain-offensive').evaluate(e => e.open));
    assert.equal(await page.locator('#terminal-disclosure').evaluate(e => e.open), false);
    await page.locator('[data-cli-cmd="research"]').first().click();
    assert(await page.locator('#terminal-disclosure').evaluate(e => e.open));
    assert((await page.locator('#terminal-output').textContent()).includes('gathering malware samples'));
    await page.locator('[data-cli-cmd="radar"]').first().click();
    assert((await page.locator('#terminal-output').textContent()).includes('Offensive Security & Vulnerability Assessment'));
    await page.locator('[data-cli-cmd="work"]').first().click();
    await page.locator('[data-cli-cmd="help"]').first().click();
    assert.doesNotMatch(await page.locator('#terminal-output').textContent(), /RSAF|Kai Keng TAY/);
    console.log('PASS keyboard domain exploration, deep links, and terminal shortcuts opening the disclosure');

    const patterns = [];
    for (const [key, name] of [['wannacry','Ransomware.WannaCry.exe'], ['emotet','Trojan.Emotet.dll'], ['agenttesla','Spyware.AgentTesla.bin']]) {
      await page.locator(`#sample-${key}`).click();
      assert.equal(await page.locator('.sandbox-btn[aria-pressed="true"]').count(), 1);
      assert((await page.locator('#model-output-display').textContent()).includes(name));
      patterns.push(await page.locator('canvas').evaluate(e => e.toDataURL()));
    }
    assert.equal(new Set(patterns).size, 3);
    console.log('PASS all illustrative research samples');

    for (const width of [320,375,390,768,1024,1440]) {
      await page.setViewportSize({ width, height: 1000 }); await page.goto(base);
      const overflow = await page.evaluate(() => [...document.querySelectorAll('body *')].filter(e => {
        const b = e.getBoundingClientRect(); return b.width > 0 && (b.left < -1 || b.right > innerWidth + 1);
      }).map(e => `${e.tagName}.${e.className}#${e.id}`));
      assert.deepEqual(overflow, [], `horizontal overflow at ${width}px`);
      if (width <= 1100) {
        const toggle = page.locator('.mobile-nav-toggle'); await toggle.click();
        assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
        await page.locator('#primary-navigation a[href="#research"]').click();
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
        await toggle.click(); await page.keyboard.press('Escape');
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      }
    }
    assert.equal(await page.locator('#primary-navigation').evaluate(e => getComputedStyle(e).position), 'static');
    console.log('PASS 320–1440px layouts, mobile menu close/Escape, and desktop resize');

    await page.locator('[data-cert-cat="online"]').click();
    await page.locator('[data-cert-status="expired"]').click();
    await page.locator('#credential-catalog a[href="profile.html"]').click();
    const profile = await page.locator('#profile-content').textContent();
    assert(profile.includes('gathering malware samples') && profile.includes('breach timeline reconstruction'));
    assert.doesNotMatch(profile, /RSAF|Kai Keng TAY|Selected credentials/);
    assert.equal(await page.locator('h1').textContent(), 'TAY Kai Keng');
    assert.equal(await page.locator('#profile-current-credentials li').count(), 13);
    assert.equal(await page.locator('#profile-completed-courses').count(), 0);
    const expectedPrint = await page.evaluate(() => window.PORTFOLIO_DATA.certifications.filter(c => c.category !== 'course' && window.getCredentialStatus(c) === 'active').map(c => c.id).sort());
    const actualPrint = await page.locator('.profile-credentials li').evaluateAll(nodes => nodes.map(n => n.dataset.credentialId).sort());
    assert.deepEqual(actualPrint, expectedPrint);
    for (const id of ['aws-ccp', 'ccna', 'proofpoint-dlp', 'opswat-cip', 'cisco-cybersecurity-essentials', 'google-it-support', 'ntuc-ml', 'basistech-autopsy']) {
      assert.equal(await page.locator(`[data-credential-id="${id}"]`).count(), 0);
    }
    await page.evaluate(() => { window.print = () => { window.printCalled = true; }; });
    await page.locator('#print-profile').click(); assert(await page.evaluate(() => window.printCalled));
    await page.emulateMedia({media:'print'});
    assert.equal(await page.locator('.profile-toolbar').isVisible(), false);
    assert.equal(await page.locator('#profile-content').isVisible(), true);
    assert.equal(await page.locator('#credentials').evaluate(e => getComputedStyle(e).breakBefore), 'page');
    await page.clock.setFixedTime(new Date('2027-02-01T00:00:00Z'));
    await page.reload();
    assert.equal(await page.locator('[data-credential-id="gcfe"]').count(), 0);
    assert.equal(await page.locator('#profile-completed-courses').count(), 0);
    await page.emulateMedia({media:'screen'});
    await page.setViewportSize({width:320,height:900});
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    assert.deepEqual(errors, []); assert.deepEqual(failures, []);
    console.log('PASS printable profile, print control, responsive profile, and no browser errors');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
