import auth0 from 'auth0-js'



export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "andrea.au.auth0.com",
    clientID: "vOhvT85qYH16aHfW4ag3sExQLb4flzug",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://andrea.au.auth0.com/userinfo",
    responceType: "token id_token",
    scope: 'openid'
  })
  
  constructor() {
    this.signIn = this.signIn.bind(this)
  }
  
  signIn = () =>  auth0.authorize();
  

}