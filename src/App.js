import './css/App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Layout} from "./components/Layout.js";
import {BannerHome} from "./components/BannerHome.js";
import {NavBar} from "./components/NavBar.js";
import {Legenda} from "./components/Legenda.js";
import {BtnConta} from "./components/BtnConta.js";
import {Busca} from "./components/Busca.js";
import {NavTabDestaqueTodos} from "./components/NavTabDestaqueTodos.js";
import {InfoFundosMobile} from "./components/InfoFundosMobile.js";
import {InfoFundos} from "./components/InfoFundos.js";
import {HeaderInfoFundos} from "./components/HeaderInfoFundos.jsx"
import {Footer} from "./components/Footer.js"


function App() {
  return (
    <React.Fragment>
      <BannerHome/>
          <Router>
          <NavBar/>
            <Switch>
              <Route exact path="/"></Route>
            </Switch>
          </Router>

      <Layout>
        <Legenda/>
        <Busca/>
        <NavTabDestaqueTodos/>
        <HeaderInfoFundos/>
        <InfoFundosMobile/>
        <InfoFundos/>
      </Layout>

      <BtnConta/>

      <Footer/>
    </React.Fragment>
  );
}

export default App;
