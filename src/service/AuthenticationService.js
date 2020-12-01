import axios from 'axios'
import { refreshToken } from 'api/apiCalls';
import { UserContext } from "login/UserContext";

const API_URL = process.env.REACT_APP_API_URL;

export const TOKEN_SESSION_ATTRIBUTE_NAME = 'token'
export const EXPIRATION_SESSION_ATTRIBUTE_NAME = 'expiration'
export const ID_SESSION_ATTRIBUTE_NAME = 'id'
export const NOME_SESSION_ATTRIBUTE_NAME = 'nome'
export const ISADMIN_SESSION_ATTRIBUTE_BOOL = 'isAdmin'

class AuthenticationService {

    static contextType = UserContext

    executeJwtAuthenticationService(email, senha) {
        return axios.post(`${API_URL}/authenticate`, {
            email,
            senha
        })
    }

    registerSuccessfulLoginForJwt(token, expiration) {
        sessionStorage.setItem(TOKEN_SESSION_ATTRIBUTE_NAME, token)
        sessionStorage.setItem(EXPIRATION_SESSION_ATTRIBUTE_NAME, expiration)

        this.setupAxiosInterceptors()
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    refresh() {
        this.setupAxiosInterceptors()
        refreshToken()
            .then((response) => {
                console.log('sucesso refresh:', response.data)

                let token = response.data.token
                let expiration = response.data.expiration

                this.registerSuccessfulLoginForJwt(token, expiration)
            })
            .catch((error) => {
                console.log('erro refresh:', error.response)
            })
    }

    logout() {
        sessionStorage.removeItem(TOKEN_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(EXPIRATION_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(NOME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(ID_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(ISADMIN_SESSION_ATTRIBUTE_BOOL);
    }

    isTokenExpired() {
        let expiration = sessionStorage.getItem(EXPIRATION_SESSION_ATTRIBUTE_NAME)
        return expiration === null || expiration < new Date().getTime()
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getToken() {
        let token = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
        if (token === null) return ''
        return token
    }

    setupAxiosInterceptors() {
        let token = this.createJWTToken(sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME))

        if (this.isUserLoggedIn()) {
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}

export default new AuthenticationService()