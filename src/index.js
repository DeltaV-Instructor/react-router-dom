import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Auth0Provider
//   domain={process.env.REACT_APP_DOMAIN}
//   clientId={process.env.REACT_APP_CLIENTID}
//   redirect_uri={window.location.origin} 
// >
//   <App />
// </Auth0Provider>
// );

ReactDOM.render(
  <Auth0Provider
    domain="process.env.REACT_APP_DOMAIN"
    clientId="1SNr2B95r1JtZwK6dUKNzqCSOc21ccIp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
