import { validateRequestValues } from '../src/validateRequestValues';	

describe('validateRequestValues', () => {
    it('should return true if all values are numbers and descendented order', () => {
        const values: number[] = [1, 2, 5, 4, 5, 3, 8, 10];
        const valuesSorted: number[] = values.sort((a, b) => a - b);

        expect(validateRequestValues(values)).toBe(valuesSorted);
    });

    it('if the array have less than necessary, return empty array', () => {
        const values = [1, 2];
        expect(validateRequestValues(values)).toStrictEqual([]);
    })
})