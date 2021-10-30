import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddService from './Pages/AddService/AddService';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/addservice">
              <AddService></AddService>
            </Route>
            <PrivateRoute  exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
