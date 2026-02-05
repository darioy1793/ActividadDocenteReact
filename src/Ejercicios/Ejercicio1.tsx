
export const Ejercicio1 = () => {
    //calcular el area del cuadrado
    const area = (lado:number): number =>{
        return Math.pow(lado, 2); 

    }
    
  return (
    <div>
        <h2><u>Ejercicio 1</u></h2>
        <p>Crear una función con parámetros que permita calcular el área de un cuadrado.</p>
        <strong> El área del cuadrado es: {area(6)}  m²</strong>
        <hr />
    </div>
  )
}
