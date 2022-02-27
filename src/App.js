
import './App.css';
import NaveBarClass from './NavBar';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import RegisterationFunComponent from '../src/Registeration'
import LoginFuncComponent from './Login';
import MoviesList from './Movies';
import MovieDetails from './MovieDetails';
import Favorite from './Favorite';
import Home from './home';
import { useState } from 'react';
import { LanguageContext } from './context';

function App() {

  const [contextLanguage, setContextLanguage]= useState('EN')
  return (
    <div className="App">
  
      <BrowserRouter> 

      <LanguageContext.Provider value={{contextLanguage, setContextLanguage}}>
      <NaveBarClass />       
        <Switch>
          <Route path= "/moviedetails/:id" exact component={MovieDetails} />
          <Route path= "/favorits" exact component={Favorite} />
          <Route path= "/movies" exact component={MoviesList} />
          <Route path= "/login" exact component={LoginFuncComponent} />
          <Route path= "/register" exact component={RegisterationFunComponent} />
          <Route path= "/" exact component={Home} />
          <Route path={"*"} component={NotFound} />
        </Switch>
        </LanguageContext.Provider>

     </BrowserRouter>
      
    </div>
  );
}

export default App;
