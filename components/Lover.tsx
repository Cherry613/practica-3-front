import { FunctionComponent } from "preact";

type loverProps = {
    name: string,
    description: string,
    photo: string,
}

const Lover: FunctionComponent<loverProps> = (props) => {
    const {name, description, photo} = props;

    return(
        <div class="lover">
            <image class="image" src={photo} alt={name+ "'s photo"}/>
            <h2><a href={`/search/${name}`}>{name}</a></h2>
            <p>{description}</p>
        </div>
    )
}

export default Lover;