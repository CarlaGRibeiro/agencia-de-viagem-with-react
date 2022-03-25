import axios from 'axios'

const url_data_api = 'http://localhost:8080/api/usuarios';

class UsuarioService{

    
    createUsuario(usuario){
        return axios.post(url_data_api, usuario);
    }
    getUsuario() {
        return axios.get(url_data_api);
    }
    getUsuarioById(usuarioId){
        return axios.get(url_data_api + '/' + usuarioId);
    }

    updateUsuario(usuario, usuarioId){
        return axios.put(url_data_api + '/' + usuarioId, usuario);
    }

    deleteEmployee(usuarioId){
        return axios.delete(url_data_api + '/' + usuarioId);
    }
}

export default new UsuarioService;