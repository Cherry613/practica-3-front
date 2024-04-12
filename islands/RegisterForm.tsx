import { useState } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";
import { comment } from "../types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";


//hacer el formulario para el nombre y la contraseña
// hacer funcion para comprobar que están los dos cosos antes de hacer submit
/*
    tmbn estaria bn q si no pones del todo correcto el nombre del personaje te diga algo la pagina y no te salte el error ese rojo to feo
    en su defecto hacer q eso no pase tambien estaria bn ^^ como cuando los heroes
*/

//en el handler del register supongo, poner lo de las cookies
// hacer otra pagina para el login aaaaunq creo q puedo reusar este formulario y cambiar el handler y seria igual aprox

//no hay llamadas a una ruta -> cliente

//datos confidenciales -> sí o sí en el servidor
//para q los motores de busqueda posicionen mi pag (SEO)
/* hook -> acciones que se lanzan como reaccion a algo
*/


const RegisterForm: FunctionComponent = () => {

    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [description, setDesc] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");


    const faltanDatos = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        const errorMsg: string[] = [];

        if(name === "" || sex === "" || description === "" || photo === "" || password == "") {
            errorMsg.push("Missing name, sex, description, photo or password");
        }

        if(age === null){
            errorMsg.push("Missing age or comments");
        }

        if(hobbies.length === 0){
            errorMsg.push("Missing hobbies")
        }

        if(errorMsg.length > 0) setError(errorMsg.join(" | "));
        else{
            setError("");
            if(IS_BROWSER){
                document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                 //alert('¡Cuenta creada! Puedes iniciar sesión ahora.');
            }
            e.currentTarget.submit();
        }
    }


    //quitar el formulario, dejar solo inputs y luego lo de aqui arriba en vez de coger las cosas del formulario desde una 
    return (
        <form  action ="/register" method="POST" onSubmit={faltanDatos}>
            <div> 
            <input type="text" id="name" name="name"
                placeholder={"Introduce tu nombre"}
                onFocus={() => setError("")}
                onBlur={(p) => setName(p.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="number" id="age" name="age"
            placeholder={"Edad"}
            onFocus={() => setError("")}
            onBlur={(e) => setAge(parseInt(e.currentTarget.value))}/>                    
            </div>
            <div> 
            <input type="text" id="sex" name="sex"
            placeholder={"Sexo"}
            onFocus={() => setError("")}
            onBlur={(s) => setSex(s.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="text" id="description" name="description"
            placeholder={"Descripcion"}
            onFocus={() => setError("")}
            onBlur={(d) => setDesc(d.currentTarget.value)}/>                    
            </div>
            <div>
            <input type="text" id="hobbies" name="hobbies"
            placeholder={"Hobbies"}
            onFocus={() => setError("")}
            onBlur={(h) => setHobbies([...hobbies ,h.currentTarget.value])}/>                    
            </div>
            <div>
            <input type="text" id="photo" name="photo"
            placeholder={"Photo"}
            onFocus={() => setError("")}
            onBlur={(p) => setPhoto(p.currentTarget.value)}/>                    
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

export default RegisterForm;