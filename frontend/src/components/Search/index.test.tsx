import { fireEvent, render, screen } from '@testing-library/react';
import router, { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Search } from '.';

describe('Test from Search', () => {

    const mockedNavigator = jest.fn();

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom') as any,
        useNavigate: () => ({
            navigate: mockedNavigator
        }),
    }));

    const Element = <BrowserRouter>
        <Routes>
            <Route path='' element={<Search />} />
        </Routes>
    </BrowserRouter>;

    test('Elements Appear', () => {
        render(Element);
        expect(screen.getByTestId('main-search')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button-img')).toBeInTheDocument();
    })

    // test('Handle Submit with Televisor text', () => {

    //     render(Element);
    //     const component = screen.getByTestId('main-search');
    //     fireEvent.change(component, { target: { value: 'televisor' } });
    //     fireEvent.click(screen.getByTestId('main-search-button'), {});

    //     expect(mockedNavigator).toHaveBeenCalledTimes(1)
    //     expect(mockedNavigator).toHaveBeenCalledWith('/api/items?search=televisor')

    // })


    // test('Handle Submit without text', () => {

    //     render(Element);
    //     const component = screen.getByTestId('main-search');
    //     fireEvent.change(component, { target: { value: '' } });
    //     fireEvent.keyDown(component, { key: 'Enter', code: 'Enter', charCode: 13 });

    //     expect(mockedNavigator).toHaveBeenCalledTimes(1)
    //     expect(mockedNavigator).toHaveBeenCalledWith('/')

    // })


})


