import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Card from "../components/Card.jsx";
import { GlobalContext } from "../components/App.jsx";

describe('Card component', () => {
    const mockAddToCart = vi.fn();
    const mockChangeQuantity = vi.fn();
    const providerValue = {
        cart: [[1,2], [5,5], [3,8]],
        addToCart: mockAddToCart,
        changeQuantity: mockChangeQuantity,
    };
    
    const title = "product title";
    const price = "28.92";
    const url = "image url";
    const id = 1;

    beforeEach(() => {
        render(
            <GlobalContext.Provider value={providerValue}>
                <Card title={title} price={price} url={url} id={id}/>
            </GlobalContext.Provider>
        )
    })

    it('renders correct data', () => {
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(`$${price}`)).toBeInTheDocument();
        expect(screen.getByAltText('')).toHaveAttribute('src', url);

    })

    it('adds product to the cart', () => {
        const addButton = screen.getByRole('button');
        fireEvent.click(addButton);

        expect(mockAddToCart).toHaveBeenCalledWith(1,1)
    })

    it('changes quantity in the cart', () => {
        const changeInput = screen.getByRole('spinbutton');
        expect(changeInput).toHaveValue(2);
    })

    it('calls changeQuantity on input change', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '3' } });
        expect(mockChangeQuantity).toHaveBeenCalledWith(1, 3);
      });
      
})