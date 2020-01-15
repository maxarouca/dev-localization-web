import React, { useState, useEffect } from 'react';

import { AppContainer } from './components/styled-components/App';
import { Sidebar } from './components/styled-components/Sidebar';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
import { Main } from './components/styled-components/Main';

import api from './services/api';
import Loading from './components/Loading';

function App() {
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data.devs);
      setLoading(false);
    }
    loadDevs();
  }, []);

  const handleSubmit = async data => {
    const response = await api.post('/dev', data);

    if (response) {
      setDevs([...devs, response.data.dev]);
    }
  };

  return (
    <AppContainer>
      <Sidebar>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleSubmit} />
      </Sidebar>
      <Main>
        {loading ? (
          <Loading />
        ) : (
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
        )}
      </Main>
    </AppContainer>
  );
}

export default App;
