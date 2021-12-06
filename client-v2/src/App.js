import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Layout from './layout/Layout';
import Landing from './screens/Landing';


function App() {
  return (
    <div className="App" >
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/Home'>
            <Landing />
          </Route>
        </Switch>
      </Layout>
    </div >
  );
}

export default App;
