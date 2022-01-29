import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthContext";
import AddService from "./Pages/AddService/AddService";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Admin from "./Pages/Admin/Admin";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
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
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;

// http://localhost:5000/
