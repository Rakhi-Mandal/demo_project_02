import testData from '../test-data.json';
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

  const clientAbSpan = page.locator('span').filter({ hasText: /^client AB$/ }).first();
  await expect(clientAbSpan).toBeVisible();
  await expect(clientAbSpan).toBeEnabled();
  await clientAbSpan.click();

  const shipmentLink = page.getByRole('link', { name: 'Shipment', exact: true });
  await expect(shipmentLink).toBeVisible();
  await expect(shipmentLink).toBeEnabled();
  await shipmentLink.click();

  const newShipmentButton = page.locator('[data-testid="shipment-list-new-button"]');
  await expect(newShipmentButton).toBeVisible();
  await expect(newShipmentButton).toBeEnabled();
  await newShipmentButton.click();

  // 9. Stop 1: Open location dropdown
  const stop1LocationForm = page.locator('form[id="stop-1-content-location"]');
  const stop1LocationDropdownButton = stop1LocationForm.locator('button[type="button"]').first();
  await expect(stop1LocationDropdownButton).toBeVisible();
  await expect(stop1LocationDropdownButton).toBeEnabled();
  await stop1LocationDropdownButton.click();

  // 10. Stop 1: Select location "Novapath Supply Chain Systems"
  const stop1LocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(stop1LocationOption).toBeVisible();
  await expect(stop1LocationOption).toBeEnabled();
  await stop1LocationOption.click();

  // 11. Stop 1: Open date picker
  const chooseDateButton = page.locator('button[aria-label="Choose Date"]');
  await expect(chooseDateButton).toBeVisible();
  await expect(chooseDateButton).toBeEnabled();
  await chooseDateButton.click();

  // 12. Stop 1: Select date "27"
  const date27Span = page.locator('span').filter({ hasText: /^27$/ }).first();
  await expect(date27Span).toBeVisible();
  await expect(date27Span).toBeEnabled();
  await date27Span.click();

  // 13. Stop 1: Lock requested date
  const requestedDateLockCheckbox = page.locator('#stop-1-content-requested-date-lock');
  await expect(requestedDateLockCheckbox).toBeVisible();
  await requestedDateLockCheckbox.check();
  await expect(requestedDateLockCheckbox).toBeChecked();

  // 14. Stop 2: Open location dropdown
  const stop2LocationForm = page.locator('form[id="stop-2-content-location"]');
  const stop2LocationDropdownButton = stop2LocationForm.locator('button[type="button"]').first();
  await expect(stop2LocationDropdownButton).toBeVisible();
  await expect(stop2LocationDropdownButton).toBeEnabled();
  await stop2LocationDropdownButton.click();

  // 15. Stop 2: Select location "Haldex Brake Products Corporation"
  const stop2LocationOption = page.locator('li[aria-label="Haldex Brake Products Corporation"]').first();
  await expect(stop2LocationOption).toBeVisible();
  await expect(stop2LocationOption).toBeEnabled();
  await stop2LocationOption.click();

  // 16. Line Item 1: Open product/description dropdown
  const lineItem1ContentDiv = page.locator('div[id="line-item-num-1-content"]');
  const lineItem1DropdownButton = lineItem1ContentDiv.locator('button[type="button"]').first();
  await expect(lineItem1DropdownButton).toBeVisible();
  await expect(lineItem1DropdownButton).toBeEnabled();
  await lineItem1DropdownButton.click();

  // 17. Line Item 1: Select product "some desc"
  const productOption = page.locator('li[aria-label="some desc"]').first();
  await expect(productOption).toBeVisible();
  await expect(productOption).toBeEnabled();
  await productOption.click();

  // 18. Line Item 1: Click Handling input
  const handlingInput = page.locator('#handling-0');
  await expect(handlingInput).toBeVisible();
  await expect(handlingInput).toBeEnabled();
  await handlingInput.click();

  // 19. Bill To: Open location dropdown
  const billToLocationForm = page.locator('form[id="bill-to-content-location"]');
  const billToLocationDropdownButton = billToLocationForm.locator('button[type="button"]').first();
  await expect(billToLocationDropdownButton).toBeVisible();
  await expect(billToLocationDropdownButton).toBeEnabled();
  await billToLocationDropdownButton.click();

  // 20. Bill To: Select location "Novapath Supply Chain Systems"
  const billToLocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(billToLocationOption).toBeVisible();
  await billToLocationOption.click();

  const directionCombobox = page.locator('span[aria-label="Select Direction"]');
  await expect(directionCombobox).toBeVisible();
  await expect(directionCombobox).toBeEnabled();
  await directionCombobox.click();

  // 22. Choose "Outbound"
  const outboundOption = page.locator('li[aria-label="Outbound"]').first();
  await expect(outboundOption).toBeVisible();
  await expect(outboundOption).toBeEnabled();
  await outboundOption.click();

  const billingTermsCombobox = page.locator('span[aria-label="Select Billing Terms"]');
  await expect(billingTermsCombobox).toBeVisible();
  await expect(billingTermsCombobox).toBeEnabled();
  await billingTermsCombobox.click();

  // 24. Choose "3rd Party"
  const thirdPartyOption = page.locator('li[aria-label="3rd Party"]').first();
  await expect(thirdPartyOption).toBeVisible();
  await expect(thirdPartyOption).toBeEnabled();
  await thirdPartyOption.click();

  const internalNotesTextarea = page.locator('#internal-notes');
  await expect(internalNotesTextarea).toBeVisible();
  await expect(internalNotesTextarea).toBeEditable();
  await internalNotesTextarea.fill(testData.stop1ContentInternalNotes);
  await expect(internalNotesTextarea).toHaveValue(testData.stop1ContentInternalNotes);

  const createShipmentButton = page.locator('button[aria-label="Create Shipment for client AB"]');
  await expect(createShipmentButton).toBeEnabled();
  await  createShipmentButton.click();

  const successMessage = page.locator('div').filter({ hasText: /^Successfully saved shipment$/ }).first();
  await expect(successMessage).toBeVisible();
});