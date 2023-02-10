import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';

const MoviesListContainer: React.FC = () => {
  const { data: healthy } = useQuery('status', fetchStatus);
  return (
    <>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </>
  );
};

export default MoviesListContainer;
