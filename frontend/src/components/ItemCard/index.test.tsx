import { render, screen } from '@testing-library/react';
import { ItemCard } from './index';
import data from '../../data/dataItemsMock.json'
import { Route, Routes } from 'react-router-dom';

import router from 'react-router'
import { ItemList } from '../ItemList';
describe('item card render', () => {


    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    test('Elements Appear', () => {


        // render(<ItemList />)
        // render(<ItemCard item={data.items[0]} />);


        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.getByTestId('item-shipping')).toBeInTheDocument();
        expect(screen.getByTestId('item-title')).toBeInTheDocument();
        expect(screen.getByTestId('item-location')).toBeInTheDocument();
    })
})