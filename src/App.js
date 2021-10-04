
import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Apply from './components/Apply/Apply';

function App() {
  return (
    <div className="App">
  <Router>
    <Header></Header>
    <Switch>
    <Route exact path= "/">
     <Home></Home>
      </Route>
      <Route exact path= "/home">
       <Home></Home>
      </Route>
      <Route exact path= "/about">
        <AboutUs></AboutUs>
      </Route>
      <Route exact path = "/apply">
        <Apply></Apply>
      </Route>
      <Route exact path = "/services">
         <Services></Services>
      </Route>
      <Route path= "*">
      <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
