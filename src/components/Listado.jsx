import React, {Fragment, useState} from "react";

const Listado = () => {
    const [numero, setNumero] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (<Fragment>
        <h2>Listado</h2>
        <ul>{
            numero.map((item, index) =>
                <li key={index}>{item}</li>)
        }
            }
        </ul>

    </Fragment>)
}
export default Listado
