import { FunctionComponent } from "preact";
import { Lover, comment} from "../types.ts";


type loverProps = {
    data: Lover
}

const FullLover: FunctionComponent<loverProps> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments} = props.data;

    return(
        <div class="full-lover">
            <div class="full-lover-main">
                <img class="img" src={photo} alt={name+ "'s photo"}/>
                <h3>{name}</h3>
                <p>{description}</p>   
            </div>
            
            <div class="full-lover-extra">
                <p><strong>Edad:</strong> {age} <strong>Sexo:</strong> {sex} </p>           
                <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
                <p><strong>Comentarios:</strong> {comments.map((elem) => {
                    return(
                        <div>
                            <p>@{elem.user}: {elem.message}</p>
                        </div>
                    )
                })}</p>
            </div>
        </div>
    )
}

export default FullLover;