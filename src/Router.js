import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/allListings'
import Listing from './containers/Listing'
import Login from './containers/Login'
import Add from './containers/Add'

// const UsernameContext = React.createContext('');

// const onUsernameChange = (username) => {
//     this.setState({ 
//       username: username
//     });
//   }

// currently workig 


const Router = () => {


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
  }
  
  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
  }
  
  return (
    
    <Switch>
      
      <Route exact path="/" component={Listings}/>
      <Route path="/listing/:id" component={Listing}/>
      <Route path="/login" component={Login}/>
      {/* <Route path="/account" component={Account} username={this.state.username} />} /> */}
      <ProtectedRoute path="/add" component={Add}/>
    </Switch>
   
  );
};




export default Router;




