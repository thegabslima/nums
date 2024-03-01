export const validateRequestValues = (values: Array<number>): Array<number | ''> => {
   
    if (values.length < 5) {
        return [];
    }
    
    const valuesSorted = values.sort((a, b) => a - b);
    return valuesSorted;
}