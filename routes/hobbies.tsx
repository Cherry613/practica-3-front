import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";


export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext) => {

        const hobbies = await axios.get("https://lovers.deno.dev/hobbies");

        if(!hobbies) {
            return new Response("Error fetching hobbies", {status: 500})
        }
        return ctx.render(hobbies.data);
    }
}

const Page= (props: PageProps) => {
    const hobbies = props.data;

    return(
        <div>
            {hobbies.map((elem:string) => <div>{elem}</div>)}
        </div>
    )
}

export default Page;