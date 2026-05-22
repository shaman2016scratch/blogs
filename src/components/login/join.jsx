import { joinBlogs } from "../../lib/utils/api.js"
import { Message, Warn } from "../utils/message.jsx"

const JoinComponent = () => {
    return (
        <div>
            <Warn id='inDev.text' />
            <h1><Message id={'tp.join'} /></h1>
            <label for='id'>ID </label>
            <input type='number' id='id' />
            <br /><label for='pass'><Message id='password.text' /> </label>
            <input type='password' id='pass' />
            <br /><button type='submit' onClick={() => joinBlogs}>JOIN</button>
        </div>
    )
}

export default JoinComponent