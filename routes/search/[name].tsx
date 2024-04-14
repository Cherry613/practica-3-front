import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Lover } from "../../types.ts";
import FullLover from "../../components/FullLover.tsx";
import Logout from "../../islands/Logout.tsx";
import Comment from "../../islands/Comment.tsx";
import DeleteComments from "../../islands/DeleteComments.tsx";



export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Lover>) => {

        const {name} = ctx.params;

        const response = await axios.get<Lover>(`https://lovers.deno.dev/${name}`);

        if (!response) {
            return new Response ("Error fetching lover", {status: 500});
        }

        //debugger;

        return ctx.render(response.data);
    }
}


const Page = (props: PageProps<Lover>) => {
    const {name, age, sex, description, hobbies, photo, comments, password} = props.data;

    return (
        <div>
           <FullLover data={props.data}/>
           <Comment name={name} />
           <DeleteComments name={name} />
          
        </div>
    )

}

export default Page;