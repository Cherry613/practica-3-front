import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

const RegisterForm: FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [description, setDesc] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [message, setMessage] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);


    const faltanDatos = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const Msg: string[] = [];

        if(name === "" || sex === "" || description === "" || photo === "" || password == "") {
            Msg.push("Missing name, sex, description, photo or password");
        }

        if(age === null){
            Msg.push("Missing age or comments");
        }

        if(hobbies.length === 0){
            Msg.push("Missing hobbies")
        }

        if(Msg.length > 0) setMessage(Msg.join(" | "));
        else{
            setMessage("Success");
            setSuccess(true);
            if(IS_BROWSER){
                document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                 //alert('¡Cuenta creada! Puedes iniciar sesión ahora.');
            }
            e.currentTarget.submit();
        }
    }

    //<button onClick="window.location.href='/login'">Confirm</button> 
    return (
        <form class="register-form" action ="/register" method="POST" onSubmit={faltanDatos}>
            <div> 
            <input type="text" id="name" name="name"
                placeholder={"Introduce tu nombre"}
                onFocus={() => setMessage("")}
                onBlur={(p) => setName(p.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="number" id="age" name="age"
            placeholder={"Edad"}
            onFocus={() => setMessage("")}
            onBlur={(e) => setAge(parseInt(e.currentTarget.value))}/>                    
            </div>
            <div> 
            <input type="text" id="sex" name="sex"
            placeholder={"Sexo"}
            onFocus={() => setMessage("")}
            onBlur={(s) => setSex(s.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="text" id="description" name="description"
            placeholder={"Descripcion"}
            onFocus={() => setMessage("")}
            onBlur={(d) => setDesc(d.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="text" id="hobbies" name="hobbies"
            placeholder={"Hobbies"}
            onFocus={() => setMessage("")}
            onBlur={(h) => setHobbies([...hobbies ,h.currentTarget.value])}/>                    
            </div>
            <div>
            <input type="text" id="photo" name="photo"
            placeholder={"Photo"}
            onFocus={() => setMessage("")}
            onBlur={(p) => setPhoto(p.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="text" id="password" name="password"
            placeholder={"Password"}
            onFocus={() => setMessage("")}
            onBlur={(p) => setPassword(p.currentTarget.value)}/>                    
            </div>
            
            <div>
            <button type="submit" disabled = {message !== ""}>Submit</button>
            
            </div>
            <div>
                {message !== "" && <div class="error">{message}</div>}
            </div>
    </form>
    )
}

export default RegisterForm;