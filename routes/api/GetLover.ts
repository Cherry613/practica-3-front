import { FreshContext, Handler } from "$fresh/server.ts";
import axios from "npm:axios";
import { Lover } from "../../types.ts";


export const handler: Handler = {
    GET: async (req: Request, ctx: FreshContext) => {
        const url = new URL(req.url);
        const name = url.searchParams.get("name")

        
        const response = await fetch(`https://lovers.deno.dev/${name}`);

        if (!response) {
            return new Response ("Error fetching lover", {status: 500});
        }
        
        return(response);
    }

    
}