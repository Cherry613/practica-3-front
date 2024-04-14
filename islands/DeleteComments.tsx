import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type deleteProps = {
    name: string
}

const DeleteComments: FunctionComponent<deleteProps> = (props) => {

    const {name} = props;
    const [password, setPassword] = useState<string>("");

    const [loggeado, setLoggeado] = useState<boolean>(false)

    let userC_value = null;
    
    if(IS_BROWSER){
        const cookies = document.cookie.split("; ");
        const userC = cookies.find((row) => row.startsWith("user="));
        userC_value = userC ? userC.split("=")[1] : null;

        if(userC_value !== null ){
        setLoggeado(true);
        }
        else{
            window.location.href =`/login`;
        } 
    }
    

    const comentar = async () => {
        const response = await fetch(`/api/DeleteComment`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: userC_value, password: password, name: name}),
        });
    }


    return(
        <div>
            Contraseña del lover del perfil-para borrar mis comentarios de aqui:<input type="text" id="password" name="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>
            <button disabled = {loggeado === false} onClick={comentar}>Eliminar</button>

        </div>
    )
}

export default DeleteComments;