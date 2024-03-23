import './App.css';
import Layout from './Components/layout';
import RoutingComponent from './Components/RoutingComponent'
import {BrowserRouter as Router } from 'react-router-dom'
import store from './Store/index';
import { Provider } from 'react-redux'

function App() {


  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <RoutingComponent />
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
