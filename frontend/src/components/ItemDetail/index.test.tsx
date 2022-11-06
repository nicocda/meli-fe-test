import { render, screen, waitFor } from '@testing-library/react';
import { ItemDetail } from '.';
import axios from 'axios';
import data from '../../data/ItemMock.json'

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
mockedAxios.get.mockResolvedValue(data);

describe('Item Detail', () => {


    test('empty item', async () => {

        render(<ItemDetail />)
        expect(screen.getByText('Cargando...')).toBeInTheDocument();


        await waitFor(() => {

            expect(mockedAxios.get).toHaveBeenCalledWith('api/items/MLA1150461708');
            // expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
        })
    })
})