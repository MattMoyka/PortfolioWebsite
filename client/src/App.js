import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './screens/Home'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
