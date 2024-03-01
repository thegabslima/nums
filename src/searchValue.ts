export const searchValue = function(values: Array<number>, valueToFind: number){
    let j = values.length / 2 + 1;
    let i = values.length / 2 - 1;

    for(let k = 0; k < values.length; k++){
        if(values[i] == valueToFind || values[j] == valueToFind){
            return [values[i], i];
        }
        j++
        i--
    }

    return -1;
}