import React,{Component} from 'react'
import UsuarioService from '../services/UsuarioService'

export default class ListarUsuarios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarios: []
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.editUsuario = this.editUsuario.bind(this);
        this.deleteUusario = this.deleteUsuario.bind(this);
    }

    deleteUsuario(id) {
        UsuarioService.deleteUsuario(id).then(res => {
            this.setState({ usuarios: this.state.usuarios.filter(usuario => usuario.id !== id) });
        });
    }

    viewUsuario(id){
        this.props.history.push(`/view-usuario/${id}`);
    }
    editUsuario(id){
        this.props.history.push(`/add-usuaario/${id}`);
    }

    componentDidMount(){
        UsuarioService.getUsuario().then((res) => {
            this.setState({ usuarios: res.data});
        });
    }

    addUsuario(){
        this.props.history.push('/add-usuario/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUsuario}> Adicionar usuario</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nome</th>
                                    <th> Sobrenome</th>
                                    <th> CPF</th>
                                    <th> AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.usuarios.map(
                                        usuario => 
                                        <tr key = {usuario.id}>
                                             <td> { usuario.nome} </td>   
                                             <td> {usuario.sobrenome}</td>
                                             <td> {usuario.cpf}</td>
                                             <td>
                                                 <button onClick={ () => this.editUsuario(usuario.id)} className="btn btn-info">Editar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUsuario(usuario.id)} className="btn btn-danger">Deletar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUsuario(usuario.id)} className="btn btn-info">Visualizar cadastro </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}



