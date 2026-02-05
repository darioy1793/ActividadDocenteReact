

export const Ejercicio3 = () => {
const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  
  // 1. Primero hacemos el cálculo fuera del return
  const nuevoArreglo = arreglo.map(valor => valor / 5);

  return (
    <div>
      <h2><u>Ejercicio3</u></h2>
      <p>
        Arreglo original: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
      </p>
        <strong>Nuevo arreglo (dividido para 5) es: [ {nuevoArreglo.join(', ')} ]</strong>
      <hr />
    </div>
  );
};