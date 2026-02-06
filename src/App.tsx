import { Ejercicio1 } from "./Ejercicios/Ejercicio1";
import { Ejercicio2 } from "./Ejercicios/Ejercicio2";
import { Ejercicio3 } from "./Ejercicios/Ejercicio3";
import { Ejercicio4 } from "./Ejercicios/Ejercicio4";
import { Ejercicio5 } from "./Ejercicios/Ejercicio5";


const App = () => {
  return (
    <div>
      <h1 className="text-center mt-3 bg-black text-white">Actividad Contacto Docente</h1>
    
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
      <Ejercicio4/>
      <Ejercicio5/>
    </div>
  )
}

export default App;