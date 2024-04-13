import { FreshContext, Handler, PageProps } from "$fresh/server.ts";
import {DeleteLover} from "../../islands/DeleteLover.tsx";

export const handler : Handler = {
    GET: async (_req: Request, ctx: FreshContext) => {
        //el name lo cogemos de la url
        const url = new URL(ctx.url);
        //const password = url.searchParams.get("password");
        const {name} = ctx.params;
        console.log(name);

        return ctx.render(name);
        //+ mostrar el personajes
    }
}


const Page = (props: PageProps) => {
    const name = props.data

    return(
        <div>
            <DeleteLover name={name}/>
        </div>
        
    )
}

export default Page;