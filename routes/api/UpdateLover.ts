import { FreshContext, Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    PUT: async (req: Request, ctx: FreshContext) => {
        const data = await req.json();
        console.log(data);

        const response = await fetch(`https://lovers.deno.dev/${data.name}`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name: data.name, 
                                password: data.password,
                                age: data.age, 
                                sex: data.sex, 
                                description: data.description, 
                                hobbies: data.hobbies, 
                                photo: data.photo, 
                                comments: data.comments}),
            });

        return response;
    }
}