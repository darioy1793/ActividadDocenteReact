
export const Ejercicio2 = () => {

    const sumarElemento = (numeros: number[]):number =>{
        return numeros.reduce((acumulador, valor) => acumulador + valor, 0 );
    }
    const datos: number[] = [27, 15, 20, 12];

  return (
    <div>
        <h2><u>Ejercicio 2</u></h2>
        <p>Desarrolle una función que reciba un arreglo como parámetro y 
            como resultado retorne la suma de los elementos del arreglo. </p>
        <strong> La suma del arreglo es: {sumarElemento(datos)}</strong>
        <hr />
    </div>
  )
}
