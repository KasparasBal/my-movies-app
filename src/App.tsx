import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout Footer={Footer} Header={Header}>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;
