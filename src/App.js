import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">

            {/* Router */}
            <Router>
              {/* Side bar */}
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId" >
                  {/* Chat messages */}
                  <Chat />
                </Route>
                <Route path="/">
                  {/* Chat messages */}
                  <Chat />
                </Route>
              </Switch>
            </Router>

          </div>
        )}
    </div>
  );
}

export default App;
