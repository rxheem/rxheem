import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/animate.css';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

// Components
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

// Views
import MainNvaigation from './views/mainNvaigation/MainNvaigation';
import Footer from './views/footer/Footer';

function App() {
  return (
    <div className='App'>
      {/* Main Navigation  */}
      <Route path='/' component={MainNvaigation} />

      {/* Switch */}
      <Switch>
        <Route exact path='/contact/' component={Contact} />
        <Route exact path='/portfolio/' component={Portfolio} />
      </Switch>

      {/* Footer */}
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
