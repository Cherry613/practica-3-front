import { PageProps } from "$fresh/server.ts";
import UserPage from "../islands/UserPage.tsx";


const Page = (props: PageProps) => {

    return (
        <body class="profilePage">
            <div class="profile">
                <h1>Introduce tus datos</h1>
                <UserPage/>
            </div>
        </body>
       
        
    )
}

export default Page;