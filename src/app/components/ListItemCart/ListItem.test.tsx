import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItemCart, { ItemCart } from './ListItemCart';

describe('ListItemCart', () => {
    it('should render the item name', () => {
        const { getByText } = render(<ListItemCart name="Test Item" />);
        expect(getByText('Test Item')).toBeInTheDocument();
    });

    it('should render the item quantity', () => {
        const { getByText } = render(<ListItemCart name="Test Item" quantity={2} />);
        expect(getByText('2x')).toBeInTheDocument();
    });

    it('should render the item price', () => {
        const { getByText } = render(<ListItemCart name="Test Item" price={10.99} />);
        expect(getByText('$10.99')).toBeInTheDocument();
    });

    it('should render the item total', () => {
        const { getByText } = render(<ListItemCart name="Test Item" quantity={2} price={10.99} />);
        expect(getByText('$21.98')).toBeInTheDocument();
    });

    describe('ItemCart', () => {
        it('should call the removeProduct function when the remove button is clicked', () => {
            const mockRemoveProduct = jest.fn();
            const { getByTestId } = render(<ItemCart name="Test Item" removeProduct={mockRemoveProduct} />);
            fireEvent.click(getByTestId('remove-button'));
            expect(mockRemoveProduct).toHaveBeenCalled();
        });
    });
});
