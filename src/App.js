import './App.css';
import './components/css/footer.css'
import './components/css/nav.css'

import Footer from './components/Footer';
import Nav from "./components/Nav.js"
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import Logement from './components/pages/Logement';
import Apropos from './components/pages/Apropos';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
      <Switch>
          <Route path="/Apropos">
            <Apropos />
          </Route>
          <Route path="/Logement">
            <Logement />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={PageNotFound}>
            
          </Route>
        </Switch>
    </Router>

  );
}

export default App;