import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"

import "./style_DB.css"

export default function Dashboard(){
    // Ela vem do BACKEND como Array, entao começamos com um array vazio
    const [spots, setSpots] = useState ([])

    //Toad vez que isso executar, ele recarrega a pagina
    // Vai ser o filtro do site
    useEffect(() => {
        async function loadSpots(){
            // Buscando o usuario do (Header), esta salvo como user no Login
            const user_id = localStorage.getItem("user")
            const response = await api.get("/dashboard", {
                headers: {user_id}
            })
            //Onde vem os dados da nossa API
            setSpots(response.data)
        }

        // executa a propria funçao
        loadSpots()
    // Se o array ficar vazio, significa que isso vai executar uma unica vez
    }, [])


    // Adiciona o <> pois tera mais de um elemento dentro da pagina
    // Preciso informar a key para mostrar que o spot é unico e ele encotra o spot pelo _id
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{backgroundImage: `url(${spot.thumbnail_url})`}} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `RS${spot.price}/dia` : "GRATUITO"}</span>
                    </li> 
                ))}
            </ul>
            <Link to="/new">
                <button className="btn"> Cadastrar novo spot</button>
            </Link>
        </>
    )
}