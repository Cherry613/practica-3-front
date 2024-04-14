import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";
import Lovers from "../components/Lovers.tsx"

type FilterProps ={
    data: Lover[];
}

const Filtros: FunctionComponent<FilterProps> = (props) => {
    const {data} = props

    const [name, setName] = useState<string> ("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [lista, setLista] = useState<Lover[]>(data);

    let listaLovers: Lover[] = data;

    const Filter = () => {
        if(name !== ""){
            listaLovers = listaLovers.filter((elem) => elem.name.includes(name))
        }
        if(sex !== ""){
            listaLovers = listaLovers.filter((elem) => elem.sex === sex)
        }
        if(age > 0){
            listaLovers = listaLovers.filter((elem) => elem.age === age)
        }
        if(hobbies.length !== 0 && hobbies[0]!== ""){
            listaLovers = listaLovers.filter((elem) => hobbies.some(hobby => elem.hobbies.includes(hobby))) 
        }
        console.log(listaLovers);
        setLista(listaLovers);
    }

    return(
        <div>
            <input class="filter-input" type ="text" id="name" name = "name" placeholder={"Nombre"} onBlur={(n) => setName(n.currentTarget.value)}></input>
            <input class="filter-input" type ="number" id="age" name = "age" placeholder={"Edad"} onBlur={(a) => setAge(parseInt(a.currentTarget.value))}></input>
            <input class="filter-input" type ="text" id="sex" name = "sex" placeholder={"Sexo"} onBlur={(s) => setSex(s.currentTarget.value)}></input>
            <input class="filter-input" type ="text" id="hobbies" name = "hobbies" placeholder={"Hobbies"} onBlur={(h) => setHobbies(h.currentTarget.value.split(", "))}></input>
            
            <button class= "pink-button" onClick={Filter}>Filtrar</button>

            <Lovers dataLovers ={lista} />
            
        </div>
    )
}

export default Filtros;