import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from '../api/AuthenticationApiService'
import { apiClient } from "../api/ApiClient";

// Create context
const AuthContext = createContext()

// Create hook to use the created context from another component
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {

    // Create state variables to be shared across all {children} component
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    const useJwt = true

    const login = async (username, password) => {
        return useJwt ? loginJwtAuth(username, password)
            : loginBasicAuth(username, password)
    }

    async function loginJwtAuth(username, password) {

        try {

            const response = await executeJwtAuthenticationService(username, password)

            if (response.status == 200) {

                const jwtToken = 'Bearer ' + response.data.token

                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    async function loginBasicAuth(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        apiClient.interceptors.request.use(
            (config) => {
                config.headers.Authorization = baToken
                return config
            }
        )

        try {
            const response = await executeBasicAuthenticationService()

            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )

}