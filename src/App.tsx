import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout Header={Header} footer="footer">
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;
