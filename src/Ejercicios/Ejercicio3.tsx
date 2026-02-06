

export const Ejercicio3 = () => {
const arreglo:number[]  =  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  // 1. Primero hacemos el cálculo fuera del return
  const nuevoArreglo:number[] = arreglo.map(valor => valor / 5);

  return (
    <div className="w-full p-5">
      <h2 className="text-center"><u>Ejercicio3</u></h2>
      <p>
        Arreglo original: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      </p>
        <strong>Nuevo arreglo dividido para 5 es: [ {nuevoArreglo.join(', ')} ]</strong>
      <hr />
    </div>
  );
};