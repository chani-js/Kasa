import './App.css';
import './components/css/footer.css'
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
</style> 

function App() {
  return (
    <Router>
      <Nav />
      <Footer />
      <Switch>
          <Route path="/Apropos">
            <Apropos />
          </Route>
          <Route path="/Logement/:id">
            <Logement />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
    </Router>

  );
}

export default App;
