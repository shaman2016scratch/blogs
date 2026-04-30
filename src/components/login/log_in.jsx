import { loginBlogs } from "../../lib/utils/api.js"
import { Message } from "../utils/message.jsx"

const LoginComponent = () => {
    async function logIn() {
        await loginBlogs()
        alert('This is blank')
    }
    return (
        <div>
            <h1><Message id={'tp.login'} /></h1>
            <label for='id'>ID </label>
            <input type='number' id='id' />
            <br /><label for='pass'>Password </label>
            <input type='password' id='pass' />
            <br /><button type='submit' onClick={() => logIn()}>LOG IN</button>
        </div>
    )
}

export default LoginComponent