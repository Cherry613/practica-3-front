import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const updateData: FunctionComponent = () => {

    const [name, setName] = useState<string> ("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [comments, setComments] = useState<string[]>([])

    const Update = async () => {
        //coger las cookies y si ahora el nombre o la contraseña son distintos de los q habia eliminar las anteriores y guardar las nuevas
        /*const cookies = document.cookie.split("; ");
        const userC = cookies.find((row) => row.startsWith("user="));
        const passwordC = cookies.find((row) => row.startsWith("password="));
        const userC_value= userC ? userC.split("=")[1] : null;
        const passwordC_value = passwordC ? passwordC.split("=")[1] : null;

        if(name !== userC_value){
            document.cookie = `user=${name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }
        else if (password !== passwordC_value){
            document.cookie = `password=${password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        }*/

        debugger;
        //update con los datos nuevos y si no ha tocado nada el usuario ps digo yo q no cambiará nada xd  
        const response = await fetch(`/api/UpdateLover`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: name, password: password, age: age, sex: sex, description: description, hobbies: hobbies, photo: photo, comments: comments}),
            });
            
    }

    return(
        <div>
            <input type ="text" id="name" name = "name" placeholder={"Nombre"} onBlur={(n) => setName(n.currentTarget.value)}></input>
            <input type ="number" id="age" name = "age" placeholder={"Edad"} onBlur={(a) => setAge(parseInt(a.currentTarget.value))}></input>
            <input type ="text" id="sex" name = "sex" placeholder={"Sexo"} onBlur={(s) => setSex(s.currentTarget.value)}></input>
            <input type ="text" id="description" name = "description" placeholder={"Descripcion"} onBlur={(d) => setDescription(d.currentTarget.value)}></input>
            <input type ="text" id="hobbies" name = "hobbies" placeholder={"Hobbies"} onBlur={(h) => setHobbies(h.currentTarget.value.split(", "))}></input>
            <input type ="text" id="photo" name = "photo" placeholder={"Foto"} onBlur={(n) => setPhoto(n.currentTarget.value)}></input>
            <input type ="text" id="password" name = "password" placeholder={"Contraseña"} onBlur={(n) => setPassword(n.currentTarget.value)}></input>

            <button onClick={() => Update}>Actualizar</button>
        </div>
    )
}

export default updateData;