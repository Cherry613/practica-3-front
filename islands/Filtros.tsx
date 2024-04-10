import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";
import Lovers from "../components/Lovers.tsx"
import { JSX } from "preact";

type FilterProps ={
    data: Lover[];
}

const Filtros: FunctionComponent<FilterProps> = (props) => {
    const {data} = props

    const [name, setName] = useState<string> ("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);

    const [lista, setLista] = useState<Lover[]>([]);

    const lover: Lover[] = data;

    const Filter = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
        e.preventDefault();
        if(name !== ""){
            lover.filter((elem) => elem.name === name)
        }
        if(sex !== ""){
            lover.filter((elem) => elem.sex === sex)
        }
        if(age !== 0){
            lover.filter((elem) => elem.age === age)
        }
        if(hobbies.length !== 0){
            lover.filter((elem) => elem.hobbies === hobbies)
        }

        setLista(lover);
        e.currentTarget.submit();
    }


    //[...hobbies, h.currentTarget.value]
    return(
        <div>
            <form>
                <input type ="text" id="name" name = "name" placeholder={"Nombre"} onBlur={(n) => setName(n.currentTarget.value)}></input>
                <input type ="number" id="age" name = "age" placeholder={"Edad"} onBlur={(a) => setAge(parseInt(a.currentTarget.value))}></input>
                <input type ="text" id="sex" name = "sex" placeholder={"Sexo"} onBlur={(s) => setSex(s.currentTarget.value)}></input>
                <input type ="text" id="hobbies" name = "hobbies" placeholder={"Hobbies"} onBlur={(h) => setHobbies(h.currentTarget.value.split(", "))}></input>
                <button type="submit" onSubmit={() => Filter}>Filtrar</button>
            </form>
            <div>
                <Lovers data ={lista} />
            </div>
        </div>
    )
}

export default Filtros;