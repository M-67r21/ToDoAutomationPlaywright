import { test, expect } from '@playwright/test';

test('Todo App Automation @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.locator('html').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Shopping');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Pay bills');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('Pay bills')).toBeVisible();
  await page.getByText('Pay bills').click();
  await expect(page.getByTestId('todo-list')).toContainText('Pay bills');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(2);
});