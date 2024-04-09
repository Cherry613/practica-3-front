import { FreshContext, Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    DELETE: async (req: Request, ctx: FreshContext) => {
        const data = await req.json();

        const response = await fetch(`https://lovers.deno.dev/${data.name}`, {
            method: "delete",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({password: data.password}),
            });

        return response;

    }
}