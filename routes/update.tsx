import { PageProps } from "$fresh/server.ts";
import UpdateData from "../islands/UpdateData.tsx";


const Page = (props: PageProps) => {

    return (
        <div class="register">
            <h1>Introduce tus datos</h1>
            <UpdateData />
        </div>
        
    )
}

export default Page;