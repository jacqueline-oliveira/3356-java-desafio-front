// URL base da API
const baseURL = 'http://localhost:8080';

export default function getDados(endpoint) {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Erro ao acessar o endpoint /series/frases', error);
        });
}