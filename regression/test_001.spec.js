import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('Create new order flow @sanity', async ({ page }) => {
  // 1. Go to the main page
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // 2. Login: username/email
  const usernameInput = page.locator('input[aria-label="Enter your username or email address"]');
  await expect(usernameInput).toBeVisible();
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.enterYourUsernameOrEmail);

  // 3. Login: Continue button
  const continueButton = page.locator('button[aria-label="Continue"]');
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  // 4. Login: password
  const passwordInput = page.locator('input[aria-label="Password"]');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  // 5. Login: Sign in button
  const signInButton = page.locator('#next');
  await expect(signInButton).toBeEnabled();
  await signInButton.click();

  await page.waitForLoadState('domcontentloaded');


  const clientAbText = page.locator('span').filter({ hasText: /^client AB$/ }).first();
  await expect(clientAbText).toBeVisible();
  await expect(clientAbText).toBeEnabled();
  await clientAbText.click();


  const orderLink = page.getByRole('link', { name: 'Order', exact: true });
  await expect(orderLink).toBeVisible();
  await expect(orderLink).toBeEnabled();
  await orderLink.click();

  await page.waitForTimeout(7000);
  const newOrderButton = page.locator('[data-testid="order-list-new-button"]');
  await expect(newOrderButton).toBeVisible();
  await expect(newOrderButton).toBeEnabled();
  await newOrderButton.click();

  // 10. Stop 1: open location dropdown
  await expect(page.locator("xpath=//form[@id=\"stop-1-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeVisible();
  await expect(page.locator("xpath=//form[@id=\"stop-1-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeEnabled();
  await page.locator("xpath=//form[@id=\"stop-1-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]").click();

  // 11. Stop 1: select location option
  const stop1LocationOption = page.locator('li[aria-label="Haldex Brake Products Corporation"]');
  await expect(stop1LocationOption).toBeVisible();
  await expect(stop1LocationOption).toBeEnabled();
  await stop1LocationOption.click();

  // 12. Stop 1: open date picker
  const stop1ChooseDateButton = page.locator('button[aria-label="Choose Date"]').first();
  await expect(stop1ChooseDateButton).toBeVisible();
  await expect(stop1ChooseDateButton).toBeEnabled();
  await stop1ChooseDateButton.click();

  // 13. Stop 1: select date "19"
  const stop1Date19 = page.locator('span').filter({ hasText: /^19$/ }).first();
  await expect(stop1Date19).toBeVisible();
  await expect(stop1Date19).toBeEnabled();
  await stop1Date19.click();

  // 14. Stop 1: check "Appointment Required"
  const stop1AppointmentRequired = page.locator('#stop-1-content-appointment-required');
  await stop1AppointmentRequired.check();
  await expect(stop1AppointmentRequired).toBeChecked();

  // 15. Stop 2: open location dropdown
  await expect(page.locator("xpath=//form[@id=\"stop-2-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeVisible();
  await expect(page.locator("xpath=//form[@id=\"stop-2-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeEnabled();
  await page.locator("xpath=//form[@id=\"stop-2-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]").click();

  // 16. Stop 2: select location option
  const stop2LocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(stop2LocationOption).toBeVisible();
  await expect(stop2LocationOption).toBeEnabled();
  await stop2LocationOption.click();

  // 17. Stop 2: check "Appointment Required"
  const stop2AppointmentRequired = page.locator('#stop-2-content-appointment-required');
  await stop2AppointmentRequired.check();
  await expect(stop2AppointmentRequired).toBeChecked();

  // 18. Line Item 1: open product/description dropdown
  await expect(page.locator("xpath=//div[@id=\"line-item-num-1-content\"]//button[@type=\"button\"]")).toBeVisible();
  await expect(page.locator("xpath=//div[@id=\"line-item-num-1-content\"]//button[@type=\"button\"]")).toBeEnabled();
  await page.locator("xpath=//div[@id=\"line-item-num-1-content\"]//button[@type=\"button\"]").click();

  // 19. Line Item 1: select product/description option
  const lineItem1DescriptionOption = page.locator('li[aria-label="This is for testing"]');
  await expect(lineItem1DescriptionOption).toBeVisible();
  await expect(lineItem1DescriptionOption).toBeEnabled();
  await lineItem1DescriptionOption.click();

  // 20. Line Item 1: Handling input 
  const handlingInput = page.locator('#handling-0');
  await expect(handlingInput).toBeVisible();
  await expect(handlingInput).toBeEnabled();
  await handlingInput.fill(testData.handlingInput);

  // 21. Line Item 1: Weight input 
  const weightInput = page.locator('#weight-0');
  await expect(weightInput).toBeVisible();
  await expect(weightInput).toBeEnabled();
  await weightInput.fill(testData.weightInput);

  // 23. Bill To: open location dropdown
  await expect(page.locator("xpath=//form[@id=\"bill-to-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeVisible();
  await expect(page.locator("xpath=//form[@id=\"bill-to-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]")).toBeEnabled();
  await page.locator("xpath=//form[@id=\"bill-to-content-location\"]/div[1]/div[1]/div[1]/button[@type=\"button\"]").click();

  // 24. Bill To: select location option
  const billToLocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(billToLocationOption).toBeVisible();
  await billToLocationOption.click();

  // 25. Direction: open dropdown
  const directionDropdown = page.locator('span[aria-label="Select Direction"]');
  await expect(directionDropdown).toBeVisible();
  await expect(directionDropdown).toBeEnabled();
  await directionDropdown.click();

  // 26. Direction: select "Inbound"
  const directionInboundOption = page.locator('li[aria-label="Inbound"]');
  await expect(directionInboundOption).toBeVisible();
  await expect(directionInboundOption).toBeEnabled();
  await directionInboundOption.click();

  // 27. Billing Terms: open dropdown
  const billingTermsDropdown = page.locator('span[aria-label="Select Billing Terms"]');
  await expect(billingTermsDropdown).toBeVisible();
  await expect(billingTermsDropdown).toBeEnabled();
  await billingTermsDropdown.click();

  // 28. Billing Terms: select "3rd Party"
  const billingTermsOption = page.locator('li[aria-label="3rd Party"]');
  await expect(billingTermsOption).toBeVisible();
  await expect(billingTermsOption).toBeEnabled();
  await billingTermsOption.click();

  // 29. Internal Notes: fill textarea
  const internalNotesTextarea = page.locator('#internal-notes');
  await expect(internalNotesTextarea).toBeVisible();
  await expect(internalNotesTextarea).toBeEditable();
  await internalNotesTextarea.fill(testData.stop1ContentInternalNotes);
  await expect(internalNotesTextarea).toHaveValue(testData.stop1ContentInternalNotes);

  // 30. Customer Routed: check
  const customerRoutedCheckbox = page.locator('#customer-routed');
  await customerRoutedCheckbox.check();
  await expect(customerRoutedCheckbox).toBeChecked();

  // 31. Create Order for client AB: click
  const createOrderButton = page.locator('button[aria-label="Create Order for client AB"]');
  await expect(createOrderButton).toBeEnabled();
  await createOrderButton.click();
});