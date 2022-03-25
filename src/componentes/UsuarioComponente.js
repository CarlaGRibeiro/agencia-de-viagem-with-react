import react from 'react';
import React from 'react';
import UsuarioService from '../services/UsuarioService';

class UsuarioComponente extends React.Component{
constructor (props){
    super(props)
    this.state = {
        usuario:[]
    }
}

componentDidMount(){

    UsuarioService.getusuario().then((responde)=>{
this.setState ({usuario:response.data})
    });
}
render(){
    return(
        <> 
       
           { this.state.usuario.map( 
               usuario => 
        <p>key = {usuario.id_usuario} 
        Nome: {usuario.Nome }   
          Sobrenome: {usuario.Sobrenome }  
        E-mail: {usuario.Email }  </p>
           )
            }
        </>
    )
}
}
export default UsuarioComponente;
