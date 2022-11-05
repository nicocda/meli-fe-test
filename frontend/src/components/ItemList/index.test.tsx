import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemList } from '.';
import datos from '../../data/dataItemsMock.json'


module.exports = {
    get: jest.fn((url) => {
        if (url === '/api/item/s') {
            return Promise.resolve({
                data: datos
            });
        }
        return Promise.reject({ error: { status: 404, message: 'Not Found' } });
    }),
};

const Element = <BrowserRouter>
    <Routes>
        <Route path='/api/item/search=televisor' element={<ItemList />} />
    </Routes>
</BrowserRouter>;

test('algo', () => {
    render(Element);
    expect(screen.getByText('no se')).toBeInTheDocument();
})
