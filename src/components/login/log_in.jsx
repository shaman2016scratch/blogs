import { createRoot } from "react-dom/client";
import { getAuthCode, loginBlogs } from "../../lib/utils/api.js"
import { Message } from "../utils/message.jsx"

async function loginOk() {
    const id = document.getElementById('id')
    const scratch = document.getElementById('scratch')
    const message = createRoot(document.getElementById("message"))
    try {
        await loginBlogs()
        message.render(
            <p>Ok!</p>
        )
    } catch (error) {
        message.render(
            <p>Error: {error.message}</p>
        )
    }
}

async function loginInBlogs() {
    const authCode = getAuthCode()
    createRoot(document.getElementById("message")).render(
        <div>
            <p>Confirm account - send '${authCode}' to <a href='https://scratch.mit.edu/projects/1297964685/'>this project</a></p>
            <button onClick={() => loginOk()}>CONFIRM</button>
        </div>
    )
}

const LoginComponent = () => {
    return (
        <div>
            <h1><Message id={'tp.login'} /></h1>
            <label for='id'>ID </label>
            <input type='number' id='id' />
            <br /><label for='pass'>Scratch account </label>
            <input id='scratch' />
            <div id='message'>
                <p>Tap login button.</p>
                <button onClick={() => loginInBlogs}>LOGIN</button>
            </div>
        </div>
    )
}

export default LoginComponent