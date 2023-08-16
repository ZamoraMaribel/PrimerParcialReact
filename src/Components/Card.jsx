import {useState} from 'react'

const Card = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        musicaFavorita: '',
    
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    

    const handleSubmit = (event) => {
        event.preventDefault()
        const nameSinEspacio = usuario.name.trim()
        if(nameSinEspacio.length > 2 && usuario.musicaFavorita.length > 5){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }

    console.log(usuario) 

return (

    <form  onSubmit={handleSubmit}>

        <label >Ingresa tu nombre:</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, name: event.target.value})}/>
        <label >Ingresa tu música favorita:</label>
        <input type="text" onBlur={(event) => setUsuario({...usuario, musicaFavorita: event.target.value})}/>
        <button>Enviar</button>

        {error && <h6 style={{color:"red"}}>“Por favor chequea que la información sea correcta”</h6>}

        {show ? <>
            <h4>Hola {usuario.name}!</h4>
            <h4 >Sabemos que tu música favorita es:{usuario.musicaFavorita}!</h4>
        </>
        : null
        }
        </form>
        
)
}

export default Card