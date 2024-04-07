import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import RegisterForm from "../islands/RegisterForm.tsx";


export const handler: Handlers = {
    POST: async (req: Request, ctx: FreshContext) => {
        //guardarlo en las cookies
        const dataForm = await req.formData();
        const data = {
            name: dataForm.get("name") || undefined,
            age: dataForm.get("age") || undefined,
            sex: dataForm.get("sex") || undefined,
            description:
            hobbies:
            photo:
            comments:

        }

        /*
        _id: string,
    name: string,
    age: number,
    sex: string,
    description: string,
    hobbies: Array<string>,
    photo: string,
    comments: Array<string>
        */

        
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