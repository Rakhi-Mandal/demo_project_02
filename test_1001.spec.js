import testData from './test-data.json';
import { test, expect } from '@playwright/test';

test('2026 06 26T09 35 05', async ({ page }) => {
  // 1. Go to the application
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // 2. Enter username/email
  const usernameInput = page.locator('input[aria-label="Enter your username or email address"]');
  await expect(usernameInput).toBeVisible();
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.enterYourUsernameOrEmail);

  const continueButton = page.locator('button[aria-label="Continue"]');
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  // 4. Enter password
  const passwordInput = page.locator('input[aria-label="Password"]');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const signInButton = page.locator('#next');
  await expect(signInButton).toBeEnabled();
  await signInButton.click();

  // 6. Focus search input (no fill, just focus)
  const searchInput = page.locator('input[aria-label="Search"]');
  await expect(searchInput).toBeVisible();

  const clientAbOption = page.locator('span').filter({ hasText: /^client AB$/ }).first();
  await expect(clientAbOption).toBeVisible();
  await expect(clientAbOption).toBeEnabled();
  await clientAbOption.click();

  const shipmentLink = page.getByRole('link', { name: 'Shipment', exact: true });
  await expect(shipmentLink).toBeVisible();
  await expect(shipmentLink).toBeEnabled();
  await shipmentLink.click();

  const newShipmentButton = page.locator('[data-testid="shipment-list-new-button"]');
  await expect(newShipmentButton).toBeVisible();
  await expect(newShipmentButton).toBeEnabled();
  await newShipmentButton.click();

  // 10. Stop 1: Open location dropdown
  const stop1LocationForm = page.locator('form[id="stop-1-content-location"]');
  const stop1LocationDropdownButton = stop1LocationForm.locator('button[type="button"]').first();
  await expect(stop1LocationDropdownButton).toBeVisible();
  await expect(stop1LocationDropdownButton).toBeEnabled();
  await stop1LocationDropdownButton.click();

  // 11. Stop 1: Select location "Novapath Supply Chain Systems"
  const stop1LocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]');
  await expect(stop1LocationOption).toBeVisible();
  await expect(stop1LocationOption).toBeEnabled();
  await stop1LocationOption.click();

  // 12. Stop 1: Open date picker
  const chooseDateButton = page.locator('button[aria-label="Choose Date"]');
  await expect(chooseDateButton).toBeVisible();
  await expect(chooseDateButton).toBeEnabled();
  await chooseDateButton.click();

  // 13. Stop 1: Select day "27"
  const day27 = page.locator('span').filter({ hasText: /^27$/ }).first();
  await expect(day27).toBeVisible();
  await expect(day27).toBeEnabled();
  await day27.click();

  // 14. Stop 1: Check "Requested Date Lock"
  const requestedDateLockCheckbox = page.locator('#stop-1-content-requested-date-lock');
  await expect(requestedDateLockCheckbox).toBeVisible();
  await requestedDateLockCheckbox.check();
  await expect(requestedDateLockCheckbox).toBeChecked();

  // 15. Stop 2: Open location dropdown
  const stop2LocationForm = page.locator('form[id="stop-2-content-location"]');
  const stop2LocationDropdownButton = stop2LocationForm.locator('button[type="button"]').first();
  await expect(stop2LocationDropdownButton).toBeVisible();
  await expect(stop2LocationDropdownButton).toBeEnabled();
  await stop2LocationDropdownButton.click();

  // 16. Stop 2: Select location "Haldex Brake Products Corporation"
  const stop2LocationOption = page.locator('li[aria-label="Haldex Brake Products Corporation"]');
  await expect(stop2LocationOption).toBeVisible();
  await expect(stop2LocationOption).toBeEnabled();
  await stop2LocationOption.click();

  // 17. Line Item 1: Open product/description dropdown
  const lineItem1Form = page.locator('div[id="line-item-num-1-content"]');
  const lineItem1DropdownButton = lineItem1Form.locator('button[type="button"]').first();
  await expect(lineItem1DropdownButton).toBeVisible();
  await expect(lineItem1DropdownButton).toBeEnabled();
  await lineItem1DropdownButton.click();

  // 18. Line Item 1: Select product "some desc"
  const productOption = page.locator('li[aria-label="some desc"]');
  await expect(productOption).toBeVisible();
  await expect(productOption).toBeEnabled();
  await productOption.click();

  // 19. Line Item 1: Click Handling input
  const handlingInput = page.locator('#handling-0');
  await expect(handlingInput).toBeVisible();
  await expect(handlingInput).toBeEnabled();
  await handlingInput.click();

  // 20. Bill To: Open location dropdown
  const billToLocationForm = page.locator('form[id="bill-to-content-location"]');
  const billToLocationDropdownButton = billToLocationForm.locator('button[type="button"]').first();
  await expect(billToLocationDropdownButton).toBeVisible();
  await expect(billToLocationDropdownButton).toBeEnabled();
  await billToLocationDropdownButton.click();

  // 21. Bill To: Select location "Novapath Supply Chain Systems"
  const billToLocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]');
  await expect(billToLocationOption).toBeVisible();
  await billToLocationOption.click();

  const directionCombobox = page.locator('span[aria-label="Select Direction"]');
  await expect(directionCombobox).toBeVisible();
  await expect(directionCombobox).toBeEnabled();
  await directionCombobox.click();

  const outboundOption = page.locator('li[aria-label="Outbound"]');
  await expect(outboundOption).toBeVisible();
  await expect(outboundOption).toBeEnabled();
  await outboundOption.click();

  // 24. Confirm DIRECTION Outbound selection (click on summary div)
  const directionSummaryDiv = page.locator('div').filter({ hasText: /^DIRECTION Outbound 5 results are available Inbound Outbound Transfer Third Party Customer Return 1 i$/ }).first();
  await expect(directionSummaryDiv).toBeVisible();
  await expect(directionSummaryDiv).toBeEnabled();
  await directionSummaryDiv.click();

  const billingTermsCombobox = page.locator('span[aria-label="Select Billing Terms"]');
  await expect(billingTermsCombobox).toBeVisible();
  await expect(billingTermsCombobox).toBeEnabled();
  await billingTermsCombobox.click();

  const thirdPartyOption = page.locator('li[aria-label="3rd Party"]');
  await expect(thirdPartyOption).toBeVisible();
  await expect(thirdPartyOption).toBeEnabled();
  await thirdPartyOption.click();

  // 27. Confirm BILLING TERMS 3rd Party selection (click on summary div)
  const billingTermsSummaryDiv = page.locator('div').filter({ hasText: /^DIRECTION Outbound BILLING TERMS 3rd Party 3 results are available Prepaid Collect 3rd Party 1 items$/ }).first();
  await expect(billingTermsSummaryDiv).toBeVisible();
  await expect(billingTermsSummaryDiv).toBeEnabled();
  await billingTermsSummaryDiv.click();

  // 28. Internal Notes: Click and fill
  const internalNotesTextarea = page.locator('#internal-notes');
  await expect(internalNotesTextarea).toBeVisible();
  await expect(internalNotesTextarea).toBeEditable();
  await internalNotesTextarea.fill(testData.stop1ContentInternalNotes);

  const createShipmentButton = page.locator('button[aria-label="Create Shipment for client AB"]');
  await expect(createShipmentButton).toBeEnabled();
  await createShipmentButton.click();

  const successToast = page.locator('div').filter({ hasText: /^Successfully saved shipment$/ }).first();
  await expect(successToast).toBeVisible();
});