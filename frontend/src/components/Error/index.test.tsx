import { render, screen } from '@testing-library/react';
import { Error } from '.'

describe('Error Component', () => {

    test('empty', () => {
        render(<Error error='' />)
        expect(screen.getByText('Not error specified')).toBeInTheDocument();
    })


    test('with error message', () => {
        const message = 'Ocurrio un error inesperado';
        render(<Error error={message} />)
        expect(screen.getByText(message)).toBeInTheDocument();
    })
})