import testData from '../../test-data.json';
const { test, expect } = require('../../fixtures/walker_fixture.js');
const { heal } = require('../../fixtures/inline_healer.js');

test('2026 06 26T09 35 05', async ({ page }) => {
  // 1. Go to the application
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // 2. Enter username/email
  await heal(page, 'username field', 'visible', null,
    () => page.locator('input[aria-label="Enter your username or email address"]'));
  await heal(page, 'username field', 'fill', testData.enterYourUsernameOrEmail,
    () => page.locator('input[aria-label="Enter your username or email address"]'));

  await heal(page, 'continue button', 'click', null,
    () => page.locator('button[aria-label="Continue"]'));

  // 4. Enter password
  await heal(page, 'password field', 'visible', null,
    () => page.locator('input[aria-label="Password"]'));
  await heal(page, 'password field', 'fill', testData.password,
    () => page.locator('input[aria-label="Password"]'));

  await heal(page, 'sign in button', 'click', null,
    () => page.locator('#next'));

  await heal(page, 'client ab span', 'visible', null,
    () => page.locator('span').filter({ hasText: /^client AB$/ }).first());
  await heal(page, 'client ab span', 'click', null,
    () => page.locator('span').filter({ hasText: /^client AB$/ }).first());

  await heal(page, 'shipment link', 'visible', null,
    () => page.getByRole('link', { name: 'Shipment', exact: true }));
  await heal(page, 'shipment link', 'click', null,
    () => page.getByRole('link', { name: 'Shipment', exact: true }));

  await heal(page, 'new shipment button', 'visible', null,
    () => page.locator('[data-testid="shipment-list-new-button"]'));
  await heal(page, 'new shipment button', 'click', null,
    () => page.locator('[data-testid="shipment-list-new-button"]'));

  // 9. Stop 1: Open location dropdown
  await heal(page, 'stop 1 location dropdown button', 'visible', null,
    () => page.locator('form[id="stop-1-content-location"]').locator('button[type="button"]').first());
  await heal(page, 'stop 1 location dropdown button', 'click', null,
    () => page.locator('form[id="stop-1-content-location"]').locator('button[type="button"]').first());

  // 10. Stop 1: Select location "Novapath Supply Chain Systems"
  await heal(page, 'stop 1 location option', 'visible', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());
  await heal(page, 'stop 1 location option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  // 11. Stop 1: Open date picker
  await heal(page, 'choose date button', 'visible', null,
    () => page.locator('button[aria-label="Choose Date"]'));
  await heal(page, 'choose date button', 'click', null,
    () => page.locator('button[aria-label="Choose Date"]'));

  // 12. Stop 1: Select date "27"
  await heal(page, 'date 27 span', 'visible', null,
    () => page.locator('span').filter({ hasText: /^27$/ }).first());
  await heal(page, 'date 27 span', 'click', null,
    () => page.locator('span').filter({ hasText: /^27$/ }).first());

  // 13. Stop 1: Lock requested date
  await heal(page, 'requested date lock checkbox', 'visible', null,
    () => page.locator('#stop-1-content-requested-date-lock'));
  await heal(page, 'requested date lock checkbox', 'check', null,
    () => page.locator('#stop-1-content-requested-date-lock'));

  // 14. Stop 2: Open location dropdown
  await heal(page, 'stop 2 location dropdown button', 'visible', null,
    () => page.locator('form[id="stop-2-content-location"]').locator('button[type="button"]').first());
  await heal(page, 'stop 2 location dropdown button', 'click', null,
    () => page.locator('form[id="stop-2-content-location"]').locator('button[type="button"]').first());

  // 15. Stop 2: Select location "Haldex Brake Products Corporation"
  await heal(page, 'stop 2 location option', 'visible', null,
    () => page.locator('li[aria-label="Haldex Brake Products Corporation"]').first());
  await heal(page, 'stop 2 location option', 'click', null,
    () => page.locator('li[aria-label="Haldex Brake Products Corporation"]').first());

  // 16. Line Item 1: Open product/description dropdown
  await heal(page, 'line item 1 dropdown button', 'visible', null,
    () => page.locator('div[id="line-item-num-1-content"]').locator('button[type="button"]').first());
  await heal(page, 'line item 1 dropdown button', 'click', null,
    () => page.locator('div[id="line-item-num-1-content"]').locator('button[type="button"]').first());

  // 17. Line Item 1: Select product "some desc"
  await heal(page, 'product option', 'visible', null,
    () => page.locator('li[aria-label="some desc"]').first());
  await heal(page, 'product option', 'click', null,
    () => page.locator('li[aria-label="some desc"]').first());

  // 18. Line Item 1: Click Handling input
  await heal(page, 'handling input', 'visible', null,
    () => page.locator('#handling-0'));
  await heal(page, 'handling input', 'click', null,
    () => page.locator('#handling-0'));

  // 19. Bill To: Open location dropdown
  await heal(page, 'bill to location dropdown button', 'visible', null,
    () => page.locator('form[id="bill-to-content-location"]').locator('button[type="button"]').first());
  await heal(page, 'bill to location dropdown button', 'click', null,
    () => page.locator('form[id="bill-to-content-location"]').locator('button[type="button"]').first());

  // 20. Bill To: Select location "Novapath Supply Chain Systems"
  await heal(page, 'bill to location option', 'visible', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());
  await heal(page, 'bill to location option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  await heal(page, 'direction combobox', 'visible', null,
    () => page.locator('span[aria-label="Select Direction"]'));
  await heal(page, 'direction combobox', 'click', null,
    () => page.locator('span[aria-label="Select Direction"]'));

  // 22. Choose "Outbound"
  await heal(page, 'outbound option', 'visible', null,
    () => page.locator('li[aria-label="Outbound"]').first());
  await heal(page, 'outbound option', 'click', null,
    () => page.locator('li[aria-label="Outbound"]').first());

  await heal(page, 'billing terms combobox', 'visible', null,
    () => page.locator('span[aria-label="Select Billing Terms"]'));
  await heal(page, 'billing terms combobox', 'click', null,
    () => page.locator('span[aria-label="Select Billing Terms"]'));

  // 24. Choose "3rd Party"
  await heal(page, 'third party option', 'visible', null,
    () => page.locator('li[aria-label="3rd Party"]').first());
  await heal(page, 'third party option', 'click', null,
    () => page.locator('li[aria-label="3rd Party"]').first());

  await heal(page, 'internal notes textarea', 'visible', null,
    () => page.locator('#internal-notes'));
  await heal(page, 'internal notes textarea', 'fill', testData.stop1ContentInternalNotes,
    () => page.locator('#internal-notes'));

  await heal(page, 'create shipment button', 'click', null,
    () => page.locator('button[aria-label="Create Shipment for client AB"]'));

  await heal(page, 'success message', 'visible', null,
    () => page.locator('div').filter({ hasText: /^Successfully saved shipment$/ }).first());
});