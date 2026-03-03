// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link
        to='/'
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#52489c',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
