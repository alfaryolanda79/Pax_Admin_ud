import { useState } from "react";
import Header from "../components/Header"
import Formulario from "../components/Formulario"
import ListadoPacientes from "../components/ListadoPacientes";

function Landingpage(){

    const [pacientes, setPacientes] = useState([]);

    return(
        <div className="container mx-auto mt-5">
            <Header />
            <div className="mt-5 md:flex">
                <Formulario 
                    pacientes={pacientes}
                    setPacientes = {setPacientes}
                />
                    
                <ListadoPacientes
                    pacientes={pacientes}

                />
            </div>
           
        </div>
    )
}

export default Landingpage;