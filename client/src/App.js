import Topbar from "./components/Topbar/Topbar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Blog from "./Pages/Blog/Blog";
import Ragi from "./Pages/ragi/Ragi";
import Greengram from "./Pages/greengram/Greengram";
import Redgram from "./Pages/redgram/Redgram";
import Paddy from "./Pages/paddy/Paddy";
import Cereal from "./Pages/cereals/Cereal";
import Pulses from "./Pages/pulses/Pulses";
import Agri from "./Pages/Agriculture/Agri";
import Horti from "./Pages/Horticulture/Horti";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
      <Route exact path="/greengram">
          <Greengram/>
        </Route>
      <Route exact path="/redgram">
          <Redgram/>
        </Route>
      <Route exact path="/horticulture">
          <Horti />
        </Route>
      <Route exact path="/Ragi">
          <Ragi/>
        </Route>
      <Route exact path="/Paddy">
          <Paddy/>
        </Route>
      <Route exact path="/pulses">
          <Pulses />
        </Route>
      <Route exact path="/cereal">
          <Cereal />
        </Route>
      <Route exact path="/agriculture">
          <Agri />
        </Route>
      <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;