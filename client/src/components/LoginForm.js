function LoginForm() {
    return (
        <div className="signInContainer">
            <div id="loginContainer" className="container-sm">
                <h1><u>Log In</u></h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary shadow md-body rounded">Log In</button>
                </form>
            </div>
        </div>

    );
}
export default LoginForm;