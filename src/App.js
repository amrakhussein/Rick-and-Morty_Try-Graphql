import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HashRouter as Router } from 'react-router-dom';
import Layout from './components/layout/TheLayout';
import Home from './pages/Home';

// const uri = 'https://rickandmortyapi.com/graphql'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // https://rickandmortyapi.com/graphql
  return (
    <Router>
      <ApolloProvider client={client}>
        <Layout>
          <Home />
        </Layout>
      </ApolloProvider>
    </Router>
  );
}

export default App;
