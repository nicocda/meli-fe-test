import { render, screen } from '@testing-library/react';
import { ItemCard } from './index';
import data from '../../data/dataItemsMock.json'
import Item from '../../model/Item';

describe('item card render', () => {

    test('Elements Appear', () => {
        render(<ItemCard item={data.items[0] as Item} />);
        render(<ItemCard item={data.items[1] as Item} />);
        render(<ItemCard item={data.items[2] as Item} />);
        render(<ItemCard item={data.items[3] as Item} />);
        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.getByTestId('item-shipping')).toBeInTheDocument();
        expect(screen.getByTestId('item-title')).toBeInTheDocument();
        expect(screen.getByTestId('item-location')).toBeInTheDocument();
    })
})