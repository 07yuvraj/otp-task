import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Success from './Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/success' component={Success} />
          <Route path='/' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
