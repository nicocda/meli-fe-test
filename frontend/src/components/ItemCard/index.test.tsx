import { render, screen } from '@testing-library/react';
import { ItemCard } from './index';
import data from '../../data/dataItemsMock.json'
import { Routes } from 'react-router-dom';

describe('item card render', () => {

    test('Elements Appear', () => {

        render(<Routes> <><ItemCard item={data.items[0]} /></></Routes>);


        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.getByTestId('item-shipping')).toBeInTheDocument();
        expect(screen.getByTestId('item-title')).toBeInTheDocument();
        expect(screen.getByTestId('item-location')).toBeInTheDocument();
    })
})