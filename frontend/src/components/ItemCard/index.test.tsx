import { render, screen, waitFor } from '@testing-library/react';
import { ItemCard } from './index';
import Item from '../../model/Item';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from './../Router/Router';
import { RouterLayout } from '../Router/RouterLayout';

describe('item card render', () => {

    let item = {} as Item;
    const Element = (item: Item): JSX.Element => {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemCard item={item} />} />
            </Routes>
        </BrowserRouter>
    }
    beforeEach(() => {
        item = {
            "id": "MLA1132229645",
            "title": "Smart Tv Tcl P725-series 55p725 Dled 4k 55  100v/240v",
            "price": {
                "currency": "ARS",
                "amount": 105999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_621435-MLA51571231623_092022-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Campana",
            "sold_quantity": -1,
            "description": ""
        }
    })

    test('Elements Appear', async () => {


        render(Element(item));
        // render(<ItemCard item={item} />);

        await waitFor(() => { expect(screen.getByTestId('item')).toBeInTheDocument(); })

        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.getByTestId('item-shipping')).toBeInTheDocument();
        expect(screen.getByTestId('item-title')).toBeInTheDocument();
        expect(screen.getByTestId('item-location')).toBeInTheDocument();
    })


    test('Without free shipping', async () => {

        item.free_shipping = false;
        render(Element(item));

        await waitFor(() => { expect(screen.getByTestId('item')).toBeInTheDocument(); })

        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.queryByTestId('item-shipping')).not.toBeInTheDocument();
        expect(screen.getByTestId('item-title')).toBeInTheDocument();
        expect(screen.getByTestId('item-location')).toBeInTheDocument();
    })



})