export const searchValue = function(values: Array<number>, valueToFind: number){

    let j = Math.floor(values.length / 2);
    let i = Math.floor(values.length / 2) - 1;

    for(let k = 0; k < values.length; k++){
        if(values[i] == valueToFind){
            return ["Valor: " + values[i], "Indice: " + i];
        }
        if(values[j] == valueToFind){
            return ["Valor: " + values[j], "Indice: " + j];
        }
        j++
        i--
    }

    return "-1";
}