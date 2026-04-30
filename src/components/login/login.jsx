import LoginComponent from './log_in.jsx'
import JoinComponent from './join.jsx'

const LOGIN = ({type}) => {
    const isLogin = type === 'login'
    return (
        <div>
            {isLogin ? (
                <LoginComponent />
            ) : (
                <JoinComponent />
            )}
        </div>
    )
}

export { LOGIN }