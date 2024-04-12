import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Lovers from "../components/Lovers.tsx"
import {Lover} from "../types.ts";
import Filtros from "../islands/Filtros.tsx";


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

  //<Lovers dataLovers ={props.data} />
  return (
    <div class="mainPage">
      <h1>LoversMatch</h1>
      <button class="register-button" onClick="location.href='/register'">Register</button>
      <Filtros data = {props.data} />
      
     
    </div>
  );
}
