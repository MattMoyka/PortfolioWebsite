import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Layout from './layout/Layout';
import Landing from './screens/Landing';
import Skills from './screens/Skills'

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
          <Route path='/Skills'>
            <Skills />
          </Route>
        </Switch>
      </Layout>
    </div >
  );
}

export default App;
