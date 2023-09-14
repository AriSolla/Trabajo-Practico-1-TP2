// //****************************LAS LLAMADAS DE LAS FUNCIONES ESTAN AL FINAL************************************/
// //****************************EJECUTAR CON npm start************************************/
//
const fs = require('fs')

// ------------------ 1 ---------------------
const leerArchivoComoString = (ruta) => {
    try {
        return fs.readFileSync(ruta,"utf-8")
        
    } catch (error) {
        //si no existe la ruta (archivo.txt).. entra al error
        return "Error: " + error
    }
}


// ------------------------2-------------------
const escribirTextoEnArchivo = (ruta, texto, crear) =>{
    if(crear){
        fs.writeFileSync(ruta, texto)
        console.log("Archivo escrito...")
    } 
    else {
       throw new Error("El archivo no existe")
    }
}

// ------------------------3-------------------

const transformarStringEnArrayDeNumeros = (texto, separador) =>{
    return texto.split(separador).map(e => e.trim()).filter(e => !isNaN(e))
}
// /*
// 1. texto.split(separador) retorna un array del string separado por el "separador"
// 2. .map recorre ese nuevo array y le borra los espacios en blanco que tiene cada elemento (y retorna ese nuevo array)
// 3. .filter va retornar un nuevo array con los elementos filtrados (en este caso, cada elemento que SEA un numero, va estar en el nuevo array)
// 4. la funcion retorna ese nuevo array 
// */

// //--------------------------------4------------------------------------------------

const transformarArrayDeNumerosAUnSoloString_1 = (arr, separador) =>{
    return arr.join(separador)
}
// /*
// 1. .join convierte un array en una sola cadena de texto... el parametro que recibe este metodo lo usara como separador entre cada elemento (puede ser vacio)
// */

const transformarArrayDeNumerosAUnSoloString_2 = (arr, separador) =>{
    let nuevoArr = arr.map((e) => e.toString() + separador)

    let txt = ""
    nuevoArr.forEach(e=>{
        txt = txt.concat("",e)
    })
    return txt.substring(txt.length-1, 0)
}
// /*
// 1. guardo en una variable el nuevo array con los numeros y el separador juntos y pasados a texto
// 2. creo una variable String "txt" vacio
// 3. recorro el array anterior y concateno cada elemento en la variable "txt"
// 4. retorno el String txt (con el substring le saco la ultima "," (coma) que sobraba)
// */   


// //------------------------------------------5--------------------------------------------

const combinarDosArraysConSort= (arr1, arr2) =>{
    let arrConcat = arr1.concat(arr2);

    //Elimino los duplicados con Set
    let arrFinal = Array.from(new Set(arrConcat))

    //Ordeno con .sort (a-b de mayor a menor)
    arrFinal.sort((a,b) => a-b)
    // console.log(arrFinal);
    return arrFinal

}

const combinarDosArraysConBurbuja= (arr1, arr2) =>{
    let arrConcat = arr1.concat(arr2);

    //Elimino los duplicados con Set
    let arrFinal = Array.from(new Set(arrConcat))

    //Ordeno con algoritmo "Burbuja"
    let aux;
    for (let j = 1; j < arrFinal.length; j++) {
        for (let i = 0; i < (arrFinal.length - j); i++) {
            if (arrFinal[i] > arrFinal[i + 1]) {
                    aux = arrFinal[i];
                    arrFinal[i] = arrFinal[i + 1];
                    arrFinal[i + 1] = aux;
                }
            }
        }
    // console.log(arrFinal)
    return arrFinal
}

// //--------------------------------------6-----------------------------------------------
const combinarNArrays= (arr) =>{
    //.flat crea una nueva matriz con los subs-arrays
    arr = arr.flat(Infinity) //el infinity es la profundidad (saca todos los subs-arrays)
    
    //ordeno el nuevo array de mayor a menor
    arr.sort((a,b) => a - b)
    // console.log(x);
    return arr;
}
// //---------------------------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------------------------

// //-----------------------------------LLAMADAS--------------------------------------------------------

console.log("*************** Leer archivo como String ***************");
console.log(leerArchivoComoString('archivo.txt'));
console.log("--------------------------------------------------------------------------");
console.log("\n");

// //---------------------------------------------------------------------------------------------------

console.log("*************** Escribir texto en archivo ***************");
console.log(escribirTextoEnArchivo("prueba.txt", "Creando prueba", true))
console.log("--------------------------------------------------------------------------");
console.log("\n");


// //---------------------------------------------------------------------------------------------------

console.log("*************** Transformar un string en un array de numeros ***************");
console.log(transformarStringEnArrayDeNumeros("123 | 456 | 789 | 1bc | 10", "|"))
console.log("--------------------------------------------------------------------------");
console.log("\n");

// //---------------------------------------------------------------------------------------------------

console.log("*************** Transformar un array a un solo string (metodo 1) ***************");
console.log(transformarArrayDeNumerosAUnSoloString_1([123, 456, 789, 10], ","))
console.log("--------------------------------------------------------------------------");
console.log("\n");

console.log("*************** Transformar un array a un solo string (metodo 2) ***************");
console.log(transformarArrayDeNumerosAUnSoloString_2([123, 456, 789, 10], ","))
console.log("--------------------------------------------------------------------------");
console.log("\n");

// //---------------------------------------------------------------------------------------------------

console.log("*************** Combinar dos arrays (con sort) ***************");
console.log(combinarDosArraysConSort([1, 5, 10], [2, 3, 8, 11]))
console.log("--------------------------------------------------------------------------");
console.log("\n");

console.log("*************** Combinar dos arrays (con algoritmo burbuja) ***************");
console.log(combinarDosArraysConBurbuja([1, 5, 10], [2, 3, 8, 11]))
console.log("--------------------------------------------------------------------------");
console.log("\n");

// //---------------------------------------------------------------------------------------------------

console.log("*************** Combinar N arrays ***************");
console.log(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]))
console.log("--------------------------------------------------------------------------");
console.log("\n");


