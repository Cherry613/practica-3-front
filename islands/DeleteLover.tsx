import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import axios from "npm:axios";

type deleteProps ={
    name: string
}

export const DeleteLover: FunctionComponent<deleteProps> = (props) => {

    const {name} = props;
    const [password, setPassword] = useState<string> ("");
    const [message, setMessage] = useState<string> ("");

    const deleteHero = async () => {
        //console.log("a");
        const response = await axios.delete(`/api/DeleteLover`, {data: {
            name: name,
            password: password,
        }});
        
        if(response.status === 204){
            setMessage("Se ha borrado el heroe")
        }
    }

    return(
        <div>
            <input type="text" id="password" name = "password" placeholder={"Contraseña"} onInput={(p) => setPassword(p.currentTarget.value)}></input>
            <button class = "delete" onClick = {deleteHero}>Delete</button>
            {message !== "" && <div>{message}</div>}
        </div>
        
    )
}

export default DeleteLover;