import { render, screen } from '@testing-library/react';
import { Price } from '.';

describe('Price', () => {


    test('full price', () => {

        render(<Price itemPrice={{ amount: 12312, currency: 'ARS', decimals: 5 }} />);

        expect(screen.getByTestId('price-left-part')).toHaveTextContent('12.312');
        expect(screen.getByTestId('price-right-part')).toHaveTextContent('05');
        expect(screen.getByTestId('price-currency')).toHaveTextContent('ARS');
    })


    test('without currency', () => {

        render(<Price itemPrice={{ amount: 12312, currency: 'ARS', decimals: 50 }} showCurrency={false} />);
        expect(screen.getByTestId('price-left-part')).toHaveTextContent('12.312');
        expect(screen.getByTestId('price-right-part')).toHaveTextContent('50');
        expect(screen.getByTestId('price-currency')).not.toHaveTextContent('ARS');
    })


    test('without decimals', () => {

        render(<Price itemPrice={{ amount: 12312, currency: 'ARS', decimals: 0 }} />);
        expect(screen.getByTestId('price-left-part')).toHaveTextContent('12.312');
        expect(screen.getByTestId('price-right-part')).not.toHaveTextContent('00');
        expect(screen.getByTestId('price-currency')).toHaveTextContent('ARS');
    })
})