// @ts-check
import { test, expect } from '@playwright/test';

test('Get request', async ({ request}) => {
    const response = await request.get ('/api/index.php?endpoint=products')
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('Mysz Gamingowa');
  
});

test('Post request', async ({ request}) => {
    const response = await request.post ('/api/index.php?endpoint=products', {
    data: {
  "name": "Testowy produkt",
  "price": 123.45,
  "currency": "PLN"
}
    })

    expect(response.status()).toBe(201);
    expect(await response.text()).toContain('PLN');
  
});