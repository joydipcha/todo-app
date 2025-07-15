import { apiClient } from "./ApiClient"

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`
    //     NO Longer needed as Interceptor is configured in AuthContext.js
    //     , {
    //     headers: {
    //         Authorization: token
    //     }
    // }
    )

    export const executeJwtAuthenticationService
    = (username, password) => 
        apiClient.post(`/authenticate`,{username,password})