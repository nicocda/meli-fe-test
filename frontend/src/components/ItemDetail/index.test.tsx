import { cleanup, render, screen } from '@testing-library/react';
import { ItemDetail } from '.';
import axios from 'axios';
import data from '../../data/ItemMock.json'


jest.mock('axios', () => ({
    get: jest.fn(),
}))

describe('Item Detail', () => {
    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test('Null item', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { item: null } });

        render(<ItemDetail />)
        expect(screen.getByTestId('loading')).toBeInTheDocument();

        expect(await screen.findByTestId('error')).toHaveTextContent('Item not found');
    })


    test('Get Success', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: data });

        render(<ItemDetail />)
        await screen.findByTestId('detail-container');
        expect(screen.getByTestId('item-picture')).toBeInTheDocument();
        expect(screen.getByTestId('item-condition')).toHaveTextContent('Nuevo');
        expect(screen.getByTestId('item-condition-sold-quantity-separator')).toHaveTextContent('-');
        expect(screen.getByTestId('item-sold-quantity')).toHaveTextContent(`${data.item.sold_quantity} vendidos`);
        expect(screen.getByTestId('item-title')).toHaveTextContent(data.item.title);
        //price'content is validated in the test price
        expect(screen.getByTestId('item-price')).toBeInTheDocument();
        expect(screen.getByTestId('item-description')).toHaveTextContent(data.item.description);
    })

    test('Get used', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { ...data, item: { ...data.item, condition: 'used' } } });

        render(<ItemDetail />)
        await screen.findByTestId('detail-container');

        expect(screen.getByTestId('item-condition-sold-quantity-separator')).toHaveTextContent('-');
        expect(screen.getByTestId('item-condition')).toHaveTextContent('Usado');
    })


    test('Get unknow condition', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { ...data, item: { ...data.item, condition: 'unknow condition' } } });

        render(<ItemDetail />)
        await screen.findByTestId('detail-container');

        expect(screen.getByTestId('item-condition-sold-quantity-separator')).toHaveTextContent('');
        expect(screen.getByTestId('item-condition')).toHaveTextContent('');
    })


    test('Get without sold quantities', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { ...data, item: { ...data.item, sold_quantity: 0 } } });

        render(<ItemDetail />)
        await screen.findByTestId('detail-container');
        expect(screen.getByTestId('item-condition-sold-quantity-separator')).toHaveTextContent('');
        expect(screen.getByTestId('item-sold-quantity')).toHaveTextContent('');
    })

    test('Get empty description', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { ...data, item: { ...data.item, description: '' } } });

        render(<ItemDetail />)
        await screen.findByTestId('detail-container');
        expect(screen.getByTestId('item-description')).toHaveTextContent('not description');
    })

    test('Get error', async () => {
        const msg = 'Ocurrio un error';
        (axios.get as jest.Mock).mockRejectedValue({ message: msg });
        render(<ItemDetail />)

        const error = await screen.findByTestId('error');
        expect(error).toHaveTextContent(msg);
    })
})