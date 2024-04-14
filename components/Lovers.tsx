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
                        <a style="text-decoration:none;" href={`/search/${lover.name}`}>
                            <img class="image" src={lover.photo} alt={lover.name+ "'s photo"}/>
                            <h2>{lover.name}</h2>
                            <p>{lover.description}</p>
                        </a>
                    </div>
                )
           })
        }  
        </div>
    )
}

export default Lovers;