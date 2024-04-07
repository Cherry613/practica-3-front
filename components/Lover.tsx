import { FunctionComponent } from "preact";

type loverProps = {
    name: string,


    description: string,

    photo: string,

}

const Lover: FunctionComponent<loverProps> = (props) => {
    const {name, description, photo} = props;

    return(
        <div>
            <a href={`/search/${name}`}>{name}</a>
            <image src={photo} alt={name+ "'s photo"}/>
            <p>{description}</p>
        </div>
    )
}

export default Lover;