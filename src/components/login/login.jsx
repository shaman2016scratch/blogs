import LoginComponent from './log_in.jsx'
import JoinComponent from './join.jsx'

const LOGIN = ({type}) => {
    const isLogin = type === 'login'
    const isJoin = type === 'join'
    return (
        <div>
            {isLogin ? (
                <LoginComponent />
            ) : null}
            {isJoin ? (
                <JoinComponent />
            ) : null}
        </div>
    )
}

export { LOGIN }