import LoginForm from "../islands/LoginForm.tsx";


const Page = (props: PageProps) => {

    return (
        <body class="loginPage">
           <img class="imagen-escalada-login" src={("https://files.catbox.moe/hiq1jt.png")}></img>
           <div class="register-login">
                <h1>Login</h1>
                <LoginForm/>
                <button class="pink-button" onClick="window.location.href='/'">Pagina principal</button>
            </div> 
        </body>
        
        
    )
}

export default Page;