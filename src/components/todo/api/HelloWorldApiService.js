import { apiClient } from './ApiClient';

export const retrieveHelloWorldBean
    = () => apiClient.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldPathVariable
    = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`)