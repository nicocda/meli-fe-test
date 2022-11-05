import { render, screen } from '@testing-library/react';
import { Price } from '.';

describe('Price', () => {


    test('full price', () => {

        render(<Price itemPrice={{ amount: 12312, currency: 'ARS', decimals: 5 }} />);
        expect(screen.getByText('12.312')).toBeInTheDocument();
        expect(screen.getByText('ARS')).toBeInTheDocument();
        expect(screen.getByText('05')).toBeInTheDocument();
    })


    test('without currency', () => {

        render(<Price itemPrice={{ amount: 12312, currency: 'ARS', decimals: 50 }} showCurrency={false} />);
        expect(screen.getByText('12.312')).toBeInTheDocument();
        // expect(screen.queryAllByTestId('price-currency')).not.toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    })
})