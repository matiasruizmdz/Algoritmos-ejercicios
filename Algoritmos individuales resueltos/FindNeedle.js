/* Encontrar el indice de la primera aparición
de un string (needle) dentro de otro(haystack)

EJEMPLO:
needle: redux
haystack: react-redux
output: 5

needle: puntual
haystack: pinky
output: -1 

No se puedeusar indexOf()

*/

// solucion: 
const findNeedle = (haystack, needle) => {
    // iteramos sobre el haystack
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
        // comenzamos a iterar sobre el needle
        for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1) {
            // comparamos la letra del needle en la que estamos con la letra del haystack
            // cuando no hay match cortamos de comparar el needle
            if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
            // si terminamos de recorrer la needle devolvemos el haystackIndex
            if (needleIndex + 1 === needle.length) return haystackIndex;
        }
    }
    // una vez que termina el loop devolvemos -1
    return -1;
}
//complejidad de tiempo: 0(n*m)  complejidad de espacio: 0(1)



// solucion alternativa:
function findNeedle2(haystack, needle) {
    // iterar sobre el haystack
    for (let i = 0; i < haystack.length; i += 1) {
        // si la substring matchea el neddle podemos devoler el valor de i
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}
//complejidad de tiempo: 0(n*m)  complejidad de espacio: 0(1)