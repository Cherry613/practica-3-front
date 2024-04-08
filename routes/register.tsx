import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import RegisterForm from "../islands/RegisterForm.tsx";
import { Lover } from "../types.ts";


export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        //guardarlo en las cookies
        const dataForm = await req.formData();
        const data = {
            name: dataForm.get("name") || undefined,
            password: dataForm.get("password") || undefined,
            age: dataForm.get("age") || undefined,
            sex: dataForm.get("sex") || undefined,
            description: dataForm.get("description")|| undefined, 
            hobbies: dataForm.get("hobbies") || undefined,
            photo: dataForm.get("photo") || undefined,
        }

        /*document.cookie = `user=${data.name}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
        document.cookie = `password=${data.password}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;*/
        debugger;
        //alert('¡Cuenta creada! Puedes iniciar sesión ahora.');

        const response = await axios.post<Lover>("https://lovers.deno.dev/", {
            name:data.name,
            password: data.password,
            age: data.age,
            sex:data.sex,
            description: data.description,
            hobbies: data.hobbies,
            photo:data.photo,
            comments: []
        })

        if(response.status !== 201){
            return ctx.render({
                message: "",
                error: "No se ha podido crear el lover"
            })
        }

        return ctx.render();
    } 
}


const Page = (props: PageProps) => {

    return (
        <div>
            <h1>Introduce tus datos</h1>
            <RegisterForm/>
        </div>
        
    )
}

export default Page;