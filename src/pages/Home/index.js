import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as S from './styled';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState(false);

  async function handlePesquisar() {
    try {
      const response = await axios.get(`https://api.github.com/users/${usuario}/repos`);
      const repos = response.data;
      const repoNames = repos.map(repository => repository.name);
      localStorage.setItem('repositoriesName', JSON.stringify(repoNames));
      setError(false);
      history.push('/repositories')
    } catch (e) {
      setError(true);
    }
    
  }

  return (
    <S.HomeContainer>
      <S.Content>     
        <S.Input value={usuario} 
        className="usuarioInput" 
        placeholder="Usuário" 
        onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisar} >Pesquisar</S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente. :( </S.ErrorMsg> : '' }
      
    </S.HomeContainer>    
  );
}

export default App;
