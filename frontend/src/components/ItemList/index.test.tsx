import { cleanup, render, screen, } from '@testing-library/react';
import { ItemList } from '.';
import axios from 'axios'
import data from '../../data/dataItemsMock.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

jest.mock('axios', () => ({
    get: jest.fn(),
}))

const Element = (text: string): JSX.Element => {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<ItemList text={text} />} />
        </Routes>
    </BrowserRouter>)
}
describe('Item List', () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test('Cargando', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: data });
        render(Element('algo'));

        expect(screen.getByTestId('loading')).toBeInTheDocument();
    })

    test('Empty text', async () => {
        render(Element(''));

        const error = await screen.findByTestId('error');
        expect(error).toHaveTextContent(/Ingrese un parametro de busqueda/i);
    })

    test('Empty items', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: { items: [] } });
        render(Element('algo'));

        const error = await screen.findByTestId('error');
        expect(error).toHaveTextContent(/No se encontraron Items acorde a la descripcion/i);
    })

    test('Get success', async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: data });
        render(Element('algo'));

        const itemContainer = await screen.findByTestId('item-list-container');
        expect(itemContainer).toBeInTheDocument();
        expect(screen.getByText("Electrónica, Audio y Video")).toBeInTheDocument();
        expect(screen.getAllByTestId('item')).toHaveLength(4);
    })


    test('Get error', async () => {
        const msg = 'Ocurrio un error';
        (axios.get as jest.Mock).mockRejectedValue({ message: msg });
        render(Element('algo'));

        const error = await screen.findByTestId('error');
        expect(error).toHaveTextContent(msg);
    })


})

