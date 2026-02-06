import { useState } from "react"


export const Ejercicio5 = () => {
const [contador, setcontador] = useState<number>(0);

const cambiarContador =(numero:number): void =>{
    setcontador(contador+numero);
}
  return (
    <div className="p-5">
        <h2 className="text-center"><u>Ejercicio5</u></h2><br />
        <p>Empleado el hook useState crear un acumulador de 5. Se debe 
            visualizar el valor del acumular y dos botones (incrementar - disminuir)</p>
            <br />
            <h4>Contador: <span >{contador}</span></h4><br />
            <button className="btn btn-primary" onClick={()=>cambiarContador(5)}>incrementar +5</button>
            &nbsp;
            <button className="btn btn-primary" onClick={()=>cambiarContador(-5)}>disminuir -5</button>
    </div>
  )
}
