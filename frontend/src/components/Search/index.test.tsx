import { fireEvent, render, screen } from '@testing-library/react';
import { Search } from './index'

describe('Test from Search', () => {
    let handleSubmit: (text: string) => void
    beforeEach(() => {
        handleSubmit = () => { }
    })


    test('Elements Appear', () => {
        render(<Search />);
        expect(screen.getByTestId('main-search')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button')).toBeInTheDocument();
        expect(screen.getByTestId('main-search-button-img')).toBeInTheDocument();
    })

    test('Handle Submit with Televisor text', () => {
        handleSubmit = jest.fn();
        render(<Search />);
        const component = screen.getByTestId('main-search');
        fireEvent.change(component, { target: { value: 'televisor' } });
        fireEvent.keyDown(component, { key: 'Enter', code: 'Enter', charCode: 13 });

        expect(handleSubmit).toHaveBeenCalledWith('televisor');
    })


})


