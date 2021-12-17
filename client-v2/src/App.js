import './App.css';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Layout from './layout/Layout';
import Landing from './screens/Landing';
import Skills from './screens/Skills'
import Aboutme from './screens/Aboutme';
import Projects from './screens/Projects';

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
          <Route path='/About Me'>
            <Aboutme />
          </Route>
          <Route path='/Projects'>
            <Projects />
          </Route>
        </Switch>
      </Layout>
    </div >
  );
}

export default App;
