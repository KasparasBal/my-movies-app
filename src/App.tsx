import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import Layout from 'components/Layout/Layout';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout footer="footer" header="header">
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;
