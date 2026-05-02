import { joinBlogs } from "../../lib/utils/api.js"
import { Message } from "../utils/message.jsx"

const JoinComponent = () => {
    return (
        <div>
            <h1><Message id={'tp.login'} /></h1>
            <label for='id'>ID </label>
            <input type='number' id='id' />
            <br /><label for='pass'>Password </label>
            <input type='password' id='pass' />
            <br /><button type='submit'>JOIN</button>
        </div>
    )
}

export default JoinComponent