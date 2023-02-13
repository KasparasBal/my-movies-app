import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from 'navigation/MainRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout Footer={Footer} Header={Header}>
          <MainRouter />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
