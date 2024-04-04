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
            <a href={`/search/${name}`}>{name}</a>
            <image src={photo} alt={name+ "'s photo"}/>
            <p>{description}</p>
        </div>
    )
}

export default Lover;