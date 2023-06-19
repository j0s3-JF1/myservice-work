import React, { useState, useEffect } from "react";

export const UsuarioHook = () => {

    const [usuario, setUsuario] = useState("");
    const [isLoading, setLoading] = useState(false);

    //ID do usuario
    const id = 1;

    //trabalhador
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/trabalhador/' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setUsuario(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não encontrado');
            })
    }, []);

    return { usuario, isLoading };
}