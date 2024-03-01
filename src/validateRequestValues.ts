export const validateRequestValues = (values: Array<number>): Array<number | ''> => {
   
    if (values.length < 4) {
        return [];
    }
    
    const valuesSorted = values.sort((a, b) => a - b);
    return valuesSorted;
}