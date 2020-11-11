/* Dado un arreglo de números ordenados y un integro,
ver si dos números suman al segundo

EJEMPLO:
arreglo: [2,4,5,9]
numero: 9
return: true

arreglo: [2,4,5,9]
numero: 12
return: false

*/

// Solución Naive: 
function sumArray(arr, n) {
    // itero sobre el arreglo
    for (let i = 0; i < arr.length - 1; i += 1) {
        // itero sobre los numeros siguientes
        for (let j = i + 1; j < arr.length; j += 1) {
            // veo si son iguales a la suma y devuelvo true
            if (arr[i] + arr[j] === n) return true;
        }
    }
    // si termine de recorrer el arreglo devuelvo false
    return false;
}
//Time Complexity: O(n^2)  Space Complexity: O(1)

//pero esta ordenado!

// Mejor Solución:
function sumArray2(arr, n) {
    // creo un puntero para el principio y el final
    let start = 0;
    let end = arr.length - 1;
    // mientras el puntero del principio sea menor al del final
    while (start < end) {
        // guardo el resultado de la suma
        const sum = arr[start] + arr[end];
        // Si son iguales devuelvo true
        if (sum === n) return true;
        // Si es menor aumento el puntero de start
        else if (sum < n) start += 1;
        // si es mayor decremento el puntero de end
        else end -= 1;
    }
    // si salimos del for loop significa q no hay coincidencia
    return false;
}
//Time Complexity: O(n) Space Complexity: O(1)