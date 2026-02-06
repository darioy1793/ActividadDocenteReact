//creacion de las interfaces
interface Alumnos {
  nombre: string;
  edad:number;
  calificacion:number;
}

export const Ejercicio4 = () => {

//crear objecto
const alumnos: Alumnos [] = [
 {
        nombre: "Viviana",
        edad: 19,
        calificacion: 10,
    },
    {
        nombre:"Wendy" ,
        edad: 20,
        calificacion: 8,
    },
    {
        nombre: "Gerson",
        edad: 18,
        calificacion: 9,
    }
];

 // Función para calcular el promedio de calificaciones
  const promedio = (lista: Alumnos[]): number => {
    const suma = lista.reduce((acum, alumno) => acum + alumno.calificacion, 0);
    return suma / lista.length;
  };



  return (
    <div className="p-5">
      <h2 className="text-center"><u>Ejercicio4</u></h2>
      <p>Crear un arreglo con objetos "alumno" y sus propiedades son nombre, 
        edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones. </p>
         <br />
        
         <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{alumno.nombre}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
          <strong>El promedio de las calificaciones es: {promedio(alumnos)}</strong>
    </div>
  )
}
