import axios from 'axios'

const url_data_api_viagem = 'http://localhost:8080/api/ad/viagens';

class ViagemService{

    
    createViagem(viagem){
        return axios.post(url_data_api_viagem, viagem);
    }
    getViagem() {
        return axios.get(url_data_api_viagem);
    }
    getViagemById(viagemId){
        return axios.get(url_data_api_viagem + '/' + viagemId);
    }

    updateViagem(viagem, viagemId){
        return axios.put(url_data_api_viagem + '/' + viagemId, viagem);
    }

    deleteViagem(viagemId){
        return axios.delete(url_data_api_viagem + '/' + viagemId);
    }
}

export default new ViagemService;