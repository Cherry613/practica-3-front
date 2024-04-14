import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";



const LoginForm: FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");   


    const faltanDatos = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];

        if(name === ""|| password == "") {
            errorMsg.push("Missing name or password");
        }

        if(errorMsg.length > 0) setError(errorMsg.join(" | "));
        else{
            const response = await fetch(`/api/Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, password: password}),
            });
            
            if(response.status !== 200) {

                setError("No estas registrado!")
                return 
            }

            setError("");

            if(IS_BROWSER){
                document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

                window.location.href = `/profile`;
            }
        }   
    }

    return (
        <form class="login-form" onSubmit={faltanDatos}>
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
                {error !== "" && <div>{error}</div>}
                {error === "No estas registrado!" && <div>
                    <button onClick={() => window.location.href = `/register`}>Registrarse</button>
                    </div>}
            </div>
        </form>
    )
}

export default LoginForm;