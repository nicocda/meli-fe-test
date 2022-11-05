import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '.';

describe('Cabecera', () => {
    const ElementWithRoutes = <BrowserRouter>
        <Routes>
            <Route path='' element={<Header />} />
        </Routes>
    </BrowserRouter>;


    test('Elements Appear', () => {

        render(ElementWithRoutes);
        expect(screen.getByTestId('nav-header')).toBeInTheDocument();
        expect(screen.getByTestId('img-logo')).toBeInTheDocument();
        expect(screen.getByTestId('main-search')).toBeInTheDocument();
    })


    test('Styles and Specifications', () => {
        render(ElementWithRoutes);


        expect(screen.getByTestId('nav-header')).toHaveClass('nav-header');
        expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
    })
})