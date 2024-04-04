import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Lover } from "../../types.ts";
import FullLover from "../../components/FullLover.tsx";


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
    const {name, age, sex, description, hobbies, photo, comments} = props.data;

    return (
        <div>
            <FullLover name={name} age= {age} sex={sex} description={description} hobbies={hobbies} photo={photo} comments={comments} />
        </div>
    )

}

export default Page;