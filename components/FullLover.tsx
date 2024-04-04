import { FunctionComponent } from "preact";

type loverProps = {
    name: string,
    age: number,
    sex: string,
    description: string,
    hobbies: Array<string>,
    photo: string,
    comments: Array<string>
}

const Lover: FunctionComponent<loverProps> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments} = props;

    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age} <br/> Sex: {sex} <br/> </p>
            <image src={photo} alt={name+ "'s photo"}/>
            <p>Description: {description} <br/> Hobbies: {hobbies} <br/> Comments: {comments} </p>
            

        </div>
    )
}

export default Lover;