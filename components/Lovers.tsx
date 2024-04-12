import { FunctionComponent } from "preact";
import { Lover } from "../types.ts";


type loversProps ={
    dataLovers : Lover[];
}

const Lovers: FunctionComponent<loversProps> = (props) => {
    const {dataLovers} = props
   // console.log(data);
    return (
        <div class="lovers">
           {dataLovers.map((lover) =>{
                return(
                     <div class="lover">
                        <img class="image" src={lover.photo} alt={lover.name+ "'s photo"}/>
                        <h2><a href={`/search/${lover.name}`}>{lover.name}</a></h2>
                        <p>{lover.description}</p>
                    </div>
                )
           })
        }  
        </div>
    )
}

export default Lovers;