import React, { useState } from "react"
import api from "../../services/api"


// history é responsavel pela navegaçao
export default function Login({history}){
    // Parte importante sobre o React! 
    // Manter atualizado o ultimo valor de email
    const [email, setEmail] = useState("")


    async function handleSubmit(event){
      event.preventDefault()  // Para nao mudar de pagina
      // Vai aguardar a chamada a api e salvar o valor do email.
      const response = await api.post("/sessions", { email })  // Quando a chave é igual ao valor pode se usar {email}
      // Receber o id do usuario no data. No terminal da page ele mostra as informaçoes contidas no DATA
      // Na aba Application
      const {_id} = response.data
      // Salva na nossa aplicacao o valor do id ao um user
      localStorage.setItem("user", _id)


      // Apos executar um event, entrar na aba dashboard
      history.push("/dashboard")
    }


    // Criando tag vazia, para nao dar problema no CSS
    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong> talentos</strong> para sua empresa
            </p>

            <form onSubmit= {handleSubmit}>
                <label htmlFor="email"> E-MAIL *</label>
                <input 
                id="email" 
                type="email" 
                placeholder="Seu melhor e-mail"
                // Passa para o imput sempre o valor atualizado do email
                value = {email}
                // Sempre que o usuario adicionar um email ele é atualizado 
                onChange={event => setEmail(event.target.value)}
                />

                <button 
                className = "btn"
                type="submit"> Entrar </button>
            </form>
        </>
    )
}