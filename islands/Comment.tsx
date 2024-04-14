import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type commentProps ={
    name: string,
}


const Comment: FunctionComponent<commentProps> = (props) => {
    //user y password desde las cookies

    //name y message, name -> props pq vengo de la ruta de /search/nsq
    //message va a ser el input q le metamos
    const {name} = props
    const [message, setMessage] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loggeado, setLoggeado] = useState<boolean>(false)

    let userC_value = null;
    
    //en vez de mirar toooodo esto, usar su endpoint
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
        const response = await fetch(`/api/AddComment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user: userC_value, password: password, name: name, message: message}),
        });
    }


    return(
        <div>
            Password del lover: <input type="text" id="password" name="password" onBlur={(e) => setPassword(e.currentTarget.value)}></input>
            Comentatio:<input type="text" id="message" name="message" onBlur={(e) => setMessage(e.currentTarget.value)}></input>
            
            <button disabled = {loggeado === false} onClick={comentar}>Publish</button>
        </div>
    )
}

export default Comment;