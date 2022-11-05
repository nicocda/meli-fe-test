import { render, screen } from '@testing-library/react';
import { BreadCrumb } from '.';

describe('BreadCrumb', () => {

    test('empty', () => {
        render(<BreadCrumb steps={[]} />)

        expect(screen.queryByText('>')).not.toBeInTheDocument();
    })

    test('one element', () => {
        render(<BreadCrumb steps={["First Element"]} />)

        expect(screen.queryByText('>')).not.toBeInTheDocument();
        expect(screen.getByText('First Element')).toBeInTheDocument();
    })

    test('two or more elements', () => {
        render(<BreadCrumb steps={["First Element", "Anothers"]} />)

        expect(screen.getByText('>')).toBeInTheDocument();
        expect(screen.getByText('First Element')).toBeInTheDocument();
    })
})