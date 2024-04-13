import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";



const LoginForm: FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [logeado, setLogeado] = useState<boolean>(false)


    const faltanDatos = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];

        if(name === ""|| password == "") {
            errorMsg.push("Missing name or password");
        }

        if(errorMsg.length > 0) setError(errorMsg.join(" | "));
        else{
            setError("");
            setLogeado(true)
            if(IS_BROWSER){
                document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

                window.location.href = `/search/${name}`;
            }
            
            /*const cookies = document.cookie.split("; ");
            const userC = cookies.find((row) => row.startsWith("user="));
            const passwordC = cookies.find((row) => row.startsWith("password="));
            const userC_value= userC ? userC.split("=")[1] : null;
            const passwordC_value = passwordC ? passwordC.split("=")[1] : null;

            if(name === userC_value && password === passwordC_value){
                window.location.href = `/search/${name}`;
            }*/
            //e.currentTarget.submit();
        }
    }


    //quitar el formulario, dejar solo inputs y luego lo de aqui arriba en vez de coger las cosas del formulario desde una 
    return (
        <form onSubmit={faltanDatos}>
            <div> 
            <input type="text" id="name" name="name"
                placeholder={"Introduce tu nombre"}
                onFocus={() => setError("")}
                onBlur={(p) => setName(p.currentTarget.value)}/>                    
            </div>

            <div>
            <input type="text" id="password" name="password"
                placeholder={"Password"}
                onFocus={() => setError("")}
                onBlur={(p) => setPassword(p.currentTarget.value)}/>                    
            </div>
            
            <div>
            <button type="submit" disabled = {error !== ""}>Submit</button> 
            </div>
            <div>
                {error !== "" && <div class="error">{error}</div>}
            </div>
        </form>
    )
}

export default LoginForm;