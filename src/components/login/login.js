import "./login.css"
function Login (){
    return (
        <div className="body">
            <form>
                <h1>
                    Login Form
                </h1>
                <label>
                    EMAIL :
                    <input type="email" required placeholder="email"></input>
                </label>
                <br />
                <label>
                    PASSWORD :
                    <input type="password" required placeholder="password"></input>
                </label>
                <br />
        <button className="button">
            LOGIN   
        </button>
            </form>
        </div>
    )
}
export default Login;