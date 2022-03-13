import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserContextProvider} from './components/hooks/UserContext'
import {LoginStatusProvider} from './components/hooks/LoginStatusContext'




ReactDOM.render(
<React.StrictMode>
  <LoginStatusProvider>
    <UserContextProvider>
     <App />
    </UserContextProvider>
  </LoginStatusProvider>
</React.StrictMode>,
  document.getElementById('root')
);


