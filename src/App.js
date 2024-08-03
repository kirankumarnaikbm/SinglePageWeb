import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import Contact from './components/Contact'

import './App.css'

const App = () => (
  <>
    <div className="d-flex justify-content-center p-5 bg-container">
      <div className="w-75 T-card">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </>
)

export default App
