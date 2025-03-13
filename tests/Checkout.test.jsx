import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";
import Checkout from "../components/Checkout.jsx";
import { GlobalContext } from "../components/App.jsx";


describe("Checkout component", () => {
    const mockAddToCart = vi.fn();
    const mockChangeQuantity = vi.fn();
    const mockRemoveFromCart = vi.fn();

    const mockProducts = [
        {id: 1, title: 'product1', price: 10, image: '/product1'},
        {id: 5, title: 'product2', price: 2.54, image: '/product2'}
    ]

    const total = 12.54;
    
    const providerValue = {
        cart: [[1,1], [5,1]],
        addToCart: mockAddToCart,
        changeQuantity: mockChangeQuantity,
        removeFromCart: mockRemoveFromCart,
        products: mockProducts,
    };


    beforeEach(() => {
        // Render the component with context provider
        render(
          <GlobalContext.Provider value={providerValue}>
            <Checkout />
          </GlobalContext.Provider>
        );
      });
    it('renders correct data', () => {
        const itemElement = screen.getByTestId(`item-${mockProducts[0].id}`)
        const imgElement = within(itemElement).getByAltText('');
        expect(imgElement).toHaveAttribute('src', mockProducts[0].image)

        expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
        expect(screen.getByText(`$${(mockProducts[0].price).toFixed(2)}`)).toBeInTheDocument();
        expect(screen.getByText(mockProducts[1].title)).toBeInTheDocument();
    })

    it('removes products from the cart', () => {
        const card = screen.getByTestId(`item-${mockProducts[0].id}`)
        const btn = within(card).getByRole('button');
        expect(btn).toBeInTheDocument();

        fireEvent.click(btn);
        expect(mockRemoveFromCart).toHaveBeenCalled();
    })

    it('changes quantity', () => {
        const card = screen.getByTestId(`item-${mockProducts[0].id}`)
        const btn = within(card).getByRole('spinbutton');

        fireEvent.change(btn, { target: { value: '3' } });
        expect(mockChangeQuantity).toHaveBeenCalledWith(1, 3);
    })
})