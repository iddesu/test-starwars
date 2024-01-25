import { Routes, Route } from 'react-router-dom';

import routesConfig from '@routes/routesConfig.js';
import Header from '@components/Header/Header.jsx';

// import styles from './App.module.css';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {routesConfig.map((route, index) => (
        <Route 
        key = {index}
        path= {route.path}
        exact = {route.exact}
        element={<route.element />}
        />
      ))}
      </Routes>
      
    </>
  );
};

export default App;