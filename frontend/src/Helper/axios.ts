import data from '../data/dataItemsMock.json'

export default {
    get: jest.fn().mockResolvedValue(data)
}