import { useState, useEffect } from "react";

export const AcessoHook = () => {
    //ID do usuario ----------> Apenas como exemplo
    const id = 1;

    //Acesso do usuario
    const [acessos, setAcessos] = useState("");
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/trabalhador/acesso?id=' + id, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setAcessos(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Não conseguimos verificar seu acesso');
            })
    }, []);

    return { acessos, isLoading };
}