import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from '.';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));


beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Test from Search', () => {

    //Search is contained inside Header
    const Element = <BrowserRouter>
        <Routes>
            <Route path='*' element={<Search />} />
        </Routes>
    </BrowserRouter>;

    test('Elements Appear', () => {
        render(Element);
        expect(screen.getByTestId('main-search')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button-img')).toBeInTheDocument();
    })

    test('Handle Submit with Televisor text', async () => {

        render(Element);

        const component = screen.getByRole('textbox', { name: '' });
        fireEvent.change(component, { target: { value: 'televisor' } });
        fireEvent.click(screen.getByTestId('main-search-button'), {});

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/items?search=televisor');
    })


    test('Handle Submit without text', () => {

        render(Element);

        const component = screen.getByRole('textbox', { name: '' });
        fireEvent.change(component, { target: { value: '' } });
        fireEvent.click(screen.getByTestId('main-search-button'), {});

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/');

    })


})


