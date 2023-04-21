import './App.css';
import Home from "../src/components/Home/Home.jsx"
import Landing from "./components/Landing/Landing.jsx"
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Landing />
      <BrowserRouter>
      <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
    </BrowserRouter>
      <h1>Henry Food</h1>
      
    </div>
  );
}

export default App;
