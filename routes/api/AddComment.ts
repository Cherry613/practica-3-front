import { FreshContext, Handler } from "$fresh/server.ts";


export const handler: Handler = {
    POST: async (req: Request, ctx: FreshContext) => {
        const data = await req.json();
        console.log(data);

        const response = await fetch(`https://lovers.deno.dev/${data.name}/comment`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({user: data.user, password: data.password, message: data.message}),
            });

        return response;
    }
}