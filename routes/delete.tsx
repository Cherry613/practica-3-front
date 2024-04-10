import { FreshContext, Handler, PageProps } from "$fresh/server.ts";

export const handler : Handler = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        //el name lo cogemos de la url
        const {name} = ctx.params;
        //en la url pedimos la contraseña
       /* const response = await fetch(`https://supermondongo.deno.dev/${name}`, 
            {method: "delete",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({password: data.creator}),
            });*/

            debugger;
        return ctx.render({name});
        //+ mostrar el personajes
    }
}


const Page = (props: PageProps) => {
    const name = props.data

    /*
     <input type="text" id="password" name="password">Contraseña: </input>
            <button type="submit">Confirmar</button>
    */
    return(
        <div>
            hola
        </div>
        
    )
}

export default Page;