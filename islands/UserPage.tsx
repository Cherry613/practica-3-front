import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact";
import FullLover from "../components/FullLover.tsx";
import { useEffect, useState } from "preact/hooks";
import Logout from "./Logout.tsx";
import DeleteLover from "./DeleteLover.tsx";
import { Lover } from "../types.ts";


const UserPage: FunctionComponent = () => {
    const [loggeado, setLoggeado] = useState<boolean>(false)
    const [lover, setLover] = useState<Lover>([])

    const cookies = async () => {
        
        const cookies = document.cookie.split("; ");

        const userC = cookies.find((row) => row.startsWith("user="));
        const passwordC = cookies.find((row) => row.startsWith("password="));

        const userC_value = userC ? userC.split("=")[1] : null;
        const passwordC_value = passwordC ? passwordC.split("=")[1] : null;

        const response_login = await fetch(`/api/Login`, {  //si esto es correcto tenemos un usuario valido
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: userC_value, password: passwordC_value}),
        });

        if(response_login.status !== 200){
            window.location.href =`/login`;
        }

        const response = await fetch(`/api/GetLover?name=${userC_value}`);

        const data = await response.json(); 
        
        setLover(data)
        setLoggeado(true)
    }
            
    return(
        <div>
            <button onClick={() => window.location.href='/'}>Pagina principal</button>
            <button onClick={cookies}>Mostrar perfil</button>
            {loggeado && (
                <div>
                    <FullLover data={lover}></FullLover>
                    <Logout />
                    <DeleteLover name={lover.name}></DeleteLover>
                </div>
                )}
        </div>
        
    )
}

export default UserPage;