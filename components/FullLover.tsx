import { FunctionComponent } from "preact";
import { Lover, comment} from "../types.ts";


type loverProps = {
    data: Lover
}

const FullLover: FunctionComponent<loverProps> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments} = props.data;

    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age} <br/> Sex: {sex} <br/> </p>
            <image src={photo} alt={name+ "'s photo"}/>
            <p>Description: {description}</p>
            <p>Hobbies: {hobbies}</p>
            <p>Comentarios: {comments.map((elem) => {
                return(
                    <div>
                        <p>User: {elem.user}</p>
                        <p>Comentario: {elem.message} </p> 
                    </div>
                )
            })}</p>
        </div>
    )
}

export default FullLover;