import { cleanup, render, screen, } from '@testing-library/react';
import { ItemList } from '.';
import axiosMock from '../../Helper/axios'
import data from '../../data/dataItemsMock.json'

jest.mock('axios')

describe('Item List', () => {

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    test('Get all', async () => {
        axiosMock.get.mockResolvedValueOnce(data);

        render(<ItemList />)
        expect(screen.getByTestId('data-testid')).toBeInTheDocument();

        const altgo = await screen.findByTestId('item-list-container');
        expect(altgo).toBeInTheDocument();


    })

    // const Element =
    //     <Routes>
    //         <ItemList />
    //     </Routes>

    // render(Element);
    // test('algo', () => {
    //     expect(screen.getByText('Cargando...')).toBeInTheDocument();
    // })

})

