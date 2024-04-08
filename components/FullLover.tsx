import { FunctionComponent } from "preact";
import { comment, Lover } from "../types.ts";


type loverProps = {
    name: string,
    age: number,
    sex: string,
    description: string,
    hobbies: Array<string>,
    photo: string,
    comments: comment[],
}

const Lover: FunctionComponent<loverProps> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments} = props;

    //Comments: {comments}
    //hobbies.length>1? hobbies.join(", "): hobbies --> para q me sacase todo de seguido, pero da error el .join

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

export default Lover;