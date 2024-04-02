import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Lovers from "../components/Lovers.tsx"
import {Lover} from "../types.ts";


export const handler : Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Lover[]>) => {
    
    const response = await axios.get<Lover[]>("https://lovers.deno.dev/");
    if (!response) {
      return new Response ("Error fetching lovers", {status: 500})
    }

    return ctx.render(response.data);
  }
}


export default function Home(props: PageProps<Lover[]>) {

  return (
    <div>
      <Lovers data={props.data} />
    </div>
  );
}
