import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent } from "preact";

type LogoutProps = {
    name: string,
    password: string,
}


const Logout: FunctionComponent<LogoutProps> = ({name, password}) => {

    const logout = () => {
        const d = new Date();
        d.setTime(d.getTime() - 1);

        if(IS_BROWSER){
            document.cookie = `user=${name}; expires=${d.toUTCString()}; path=/`;
            document.cookie = `password=${password}; expires=${d.toUTCString()}; path=/`;   //expires=Fri, 31 Dec 2000 0:0:0 GMT

            window.location.href = `/`;
        }
    }

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
        
    )
}


export default Logout;