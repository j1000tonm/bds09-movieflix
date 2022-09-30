import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, TokenData } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/requests';
import './styles.css';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [AuthData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md bg-warning main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
      </div>
      <div>
        {AuthData.authenticated ? (
          <>
            <span>{AuthData.tokenData?.user_name}</span>
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
