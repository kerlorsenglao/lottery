class Auth {
    constructor(){
        this.authenticated = false
    }

    Login(callBack){
        this.authenticated = true;
        callBack();
    }
    logOut(callBack){
        this.authenticated = false;
        callBack()
    }
    isAuthenticated(){
        return this.authenticated
    }
}

export default Auth();