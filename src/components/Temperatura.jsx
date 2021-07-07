import React, {useState} from "react";

const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19)
    const subir = () => {
        setTemperatura(temperatura + 1)
    }
    const bajar = () => {
        setTemperatura(temperatura - 1)
    }
    return (
        <div className='container'>
            <h2>La temperatura es: {temperatura}</h2>
            <p className={temperatura>21 ? 'alert alert-danger':'alert alert-primary'}>
                {
                    temperatura>21 ? 'Hace cule calor':'ta melo el clima'
                }
            </p>
            <button className='btn btn-danger btn-block' onClick={subir}>Aumentar temperatura</button>
            <button className='btn btn-primary btn-block' onClick={bajar}>Reducir temperatura</button>
        </div>
    )
}
export default Temperatura
