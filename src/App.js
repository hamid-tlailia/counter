import Api from "./components/api";
import Content from "./components/content";
import Header from "./components/header";
import Home from "./components/home";
import Counter from "./redux/counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route  exact path="/">
        <Home/> 
        </Route>
        <Route  path="/form">
        <Content/> 
        </Route>
        <Route path="/api">
        <Api/>
        </Route>
        <Route path="/counter">
        <Counter/>
        </Route>
        <Route path="/test_params">
        <Home/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
