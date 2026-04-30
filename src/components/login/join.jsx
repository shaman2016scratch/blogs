import { joinBlogs } from "../../lib/utils/api.js"

const JoinComponent = () => {
    async function joinButton() {
        await joinBlogs()
        alert('This is blank')
    }
    return (
        <div>
            <h1><Message id={'tp.login'} /></h1>
            <label for='id'>ID </label>
            <input type='number' id='id' />
            <br /><label for='pass'>Password </label>
            <input type='password' id='pass' />
            <br /><button type='submit' onClick={() => joinButton()}>JOIN</button>
        </div>
    )
}

export default JoinComponent