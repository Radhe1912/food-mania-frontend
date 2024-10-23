import React from 'react'
import './App.css';
import RoutesLink from './RoutesLink';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log('Current User', user);
  return (
    <div className="App">
      {/* <div style={{height:"100px"}}></div>
      {isAuthenticated && <h3>Hello {user.name}</h3>}
      {isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  ):(<button onClick={() => loginWithRedirect()}>Log In with Redirect</button>)} */}
      <RoutesLink />
    </div>
  );
}

export default App;
