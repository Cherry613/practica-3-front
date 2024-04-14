import { PageProps } from "$fresh/server.ts";
import UserPage from "../islands/UserPage.tsx";


const Page = (props: PageProps) => {

    return (
        <div class="register">
            <h1>Introduce tus datos</h1>
            <UserPage/>
        </div>
        
    )
}

export default Page;