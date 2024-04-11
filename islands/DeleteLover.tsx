import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type deleteProps ={
    name: string
}

export const DeleteLover: FunctionComponent<deleteProps> = (props) => {

    const {name} = props;
    const [password, setPassword] = useState<string> ("");
    const [message, setMessage] = useState<string> ("");

    
    const deleteHero = async () => {
        const response = await fetch(`/api/DeleteLover`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({password: password, name: name}),
        });
        
        
        const data = await response.json();
        
        /*if(data.status === 200){ //preguntar por el .success / .done / .ok

        }  */ 
        
    }

    return(
        <div>
            <input type="text" id="password" name = "password" placeholder={"Contraseña"} onBlur={(p) => setPassword(p.currentTarget.value)}></input>
            <button class = "delete" onClick = {deleteHero}>Delete</button>
            {message !== "" && <div>{message}</div>}
        </div>
    )
}

export default DeleteLover;