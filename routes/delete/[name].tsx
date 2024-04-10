import { FreshContext, Handler, PageProps } from "$fresh/server.ts";
import {DeleteLover} from "../../islands/DeleteLover.tsx";

export const handler : Handler = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        //el name lo cogemos de la url
        const url = new URL(ctx.url);
        const password = url.searchParams.get("password");
        const {name} = ctx.params;

        //en la url pedimos la contraseña
        const response = await fetch(`https://supermondongo.deno.dev/${name}`, 
            {method: "delete",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({password: password}),
            });

            debugger;
        return ctx.render({name});
        //+ mostrar el personajes
    }
}


const Page = (props: PageProps) => {
    const name = props.data

    /*
    <form>
                Contraseña:<input type="text" id="password" name="password"></input>
                <button type="submit">Confirmar</button>
            </form>
        
    */
    return(
        <div>
            <DeleteLover name={name}/>
        </div>
        
    )
}

export default Page;