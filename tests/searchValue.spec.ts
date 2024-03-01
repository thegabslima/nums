import { searchValue } from '../src/searchValue';

describe('searchValue', () => {
    it('Will return the value and index value with odd quantity in array', () => {
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const valueToFind: number = 2;
        const index: number = 1;

        expect(searchValue(values, valueToFind)).toStrictEqual([valueToFind, index]);
    });

    it('Will return the value and index values with pair quantity in array', () => {
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
        const valueToFind: number = 7;
        const index: number = 6;

        expect(searchValue(values, valueToFind)).toStrictEqual([valueToFind, index]);
    });

    it('Will return -1 if the value is not found', () => {
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const valueToFind: number = 11;

        expect(searchValue(values, valueToFind)).toBe("-1");
    })

});