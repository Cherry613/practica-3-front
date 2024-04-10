import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";
import LoverComp from "./Lover.tsx"


type loversProps ={
    data : Lover[];
}

const Lovers: FunctionComponent<loversProps> = (props) => {
    const {data} = props
   // console.log(data);
    return (
        <div class="lovers">
           {data.map((lover) => <LoverComp name = {lover.name}  description = {lover.description} photo= {lover.photo}/>)} 
        </div>
    )
}

export default Lovers;