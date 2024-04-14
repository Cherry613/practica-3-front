import { Handler } from "$fresh/server.ts";


export const handler: Handler = {
    POST: async (req: Request) => {
        const data = await req.json();
        console.log(data);

        const response = await fetch(`https://lovers.deno.dev/login`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name: data.name, password: data.password}),
            });

        return response;
    }
}