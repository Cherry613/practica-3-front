import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import RegisterForm from "../islands/RegisterForm.tsx";


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
        //guardar en cookies el nombre y la contraseña... where tf esta la contraseña huh??


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