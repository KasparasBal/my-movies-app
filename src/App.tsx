import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from 'navigation/MainRouter';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout Footer={Footer} Header={Header}>
        <MainRouter />
      </Layout>
      ;
    </BrowserRouter>
  );
}

export default App;
