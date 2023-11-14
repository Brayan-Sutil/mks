import { render, screen } from '@testing-library/react';
import Api from './Api';

describe('API', () => {
    test('should create a new item', async () => {
        const newItem = { name: 'New Item', description: 'This is a new item' };
        const response = await Api.createItem(newItem);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(newItem);
    });

    test('should get all items', async () => {
        const response = await Api.getAllItems();
        expect(response.status).toBe(200);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get a single item', async () => {
        const response = await Api.getItem(1);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
    });

    test('should update an existing item', async () => {
        const updatedItem = { name: 'Updated Item', description: 'This item has been updated' };
        const response = await Api.updateItem(1, updatedItem);
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject(updatedItem);
    });

    test('should delete an item', async () => {
        const response = await Api.deleteItem(1);
        expect(response.status).toBe(204);
    });
});
