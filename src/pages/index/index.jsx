import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div>
      <h1>index</h1>

      <Link to="auth">Auth</Link>
    </div>
  );
};

export default IndexPage;
