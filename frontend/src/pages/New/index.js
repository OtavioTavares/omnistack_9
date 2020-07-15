import React, {useState, useMemo} from "react"
import api from "../../services/api"

import camera from "../../assets/camera.svg"

import "./style_NewSpot.css"

export default function New({history}){
    const [company, setCompany] = useState("")
    const [techs, setTechs] = useState("")
    const [price, setPrice] = useState("")
    // Previu do arquivo enviado
    const [thumbnail, setThumbnail] = useState(null)

    //POR UTILIZAR useMemo, se a variavel que ele esta olhando alterar ele atualiza ela
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
        },[thumbnail])

    //Trasnformar o modo em async pois ira acessar a api
    async function handleSubmit (event){
        // Nao deixar que o formulario leve o usuario para outro lugar
        event.preventDefault()

        // Como o POST nao é JSON temos que fazer isso!
        const data = new FormData()
        data.append("thumbnail", thumbnail)
        data.append("techs", techs)
        data.append("company", company)
        data.append("price", price)
        // Buscando o usuario do (Header), esta salvo como user no Login, com o header user_id
        const user_id = localStorage.getItem("user")

        await api.post("/spots",data, {
            headers: {user_id}
        })

        history.push("/dashboard")

    }
    return (
        <form onSubmit={handleSubmit}>
            <label 
            id="thumbnail" 
            style={{backgroundImage: `url(${preview})`}}
            className={thumbnail ? "has-thumbanil" : ""}>
                <input 
                type="file" 
                onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor = "company"> Empresa * </label>
            <input 
                id="company"
                placeholder="Sua empresa"
                value={company}
                onChange={event => setCompany(event.target.value)}
                />
            <label htmlFor = "techs"> TECNOLOGIAS * <span> (separadas por vírgula)</span> </label>
            <input 
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
                />
            <label htmlFor = "price"> VALOR DA DIARIA *<span> (em branco para GRATUITO)</span> </label>
            <input 
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)}
                />
            <button type="submit" className="btn"> Registrar</button>
        </form>

    )
}