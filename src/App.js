import './css/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from "./components/Layout.js";
import { BannerHome } from "./components/BannerHome.js";
import { NavBar } from "./components/NavBar.js";
import { Legenda } from "./components/Legenda.js";
import { BtnConta } from "./components/BtnConta.js";
import { InfoFundosMobile } from "./components/InfoFundosMobile.js";
import { Footer } from "./components/Footer.js"
import { SideBarFilter } from "./components/SideBarFilter.js";


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])




  return (
    <React.Fragment>
      <BannerHome />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>

      <Layout class="row">
        <div className="columns small-12 medium-12 large-9">
          <Legenda />
          <InfoFundosMobile data={data} />
          <Footer />
        </div>

        <div className="columns large-3 sidebarFiltros">
          <SideBarFilter/>

        </div>
      </Layout>
      <BtnConta />
    </React.Fragment>
  );
}

export default App;
