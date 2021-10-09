//library
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import {getAuthMeTC} from './Redux/auth-Reduser'
import { withSuspense } from './Hoc/withSuspense';
//Component
import HeaderContainer from './Conponents/Header/HeaderContainer.jsx';
import Nav from './Conponents/Nav/Nav.jsx';
import News from './Conponents/News/News.jsx'
import PreLoader from './Conponents/PreLoader/PreLoader';
const Settings = React.lazy(() => import('./Conponents/Settings/Settings.jsx'));
const HumansContainer = React.lazy(() => import('./Conponents/Humans/HumansContainer'));
const ProfileContainer = React.lazy(() => import('./Conponents/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./Conponents/Login/Login.jsx'));
const Dialogs = React.lazy(() => import('./Conponents/Dialogs/Dialogs.jsx'));




class App extends React.Component {
  async componentDidMount()  {
    await this.props.getAuthMeTC();
  }
  
  render() {
    if(this.props.login===null) {
      return <PreLoader/>
    }
    return (
      <BrowserRouter>

        <div className="app-wraper">
          <HeaderContainer />
          <Nav myId={this.props.myId}/>
          <div className="content">

            <Route path='/Profile/:userId?' render={withSuspense(ProfileContainer)} />

            <Route path='/Dialogs/:userId?' render={withSuspense(Dialogs)} />

            <Route path='/News' render={() => <News />} />
            <Route path='/Humans' render={withSuspense(HumansContainer)} />
            <Route path='/Settings' render={withSuspense(Settings)} />
            <Route path='/login' render={withSuspense(Login)} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}


const mapstateToProps = (state)=>{
  
  return{
    login:state.auth.login,
    myId:state.auth.id
  }
}
const DispatchToProps ={
  getAuthMeTC,
  
}

export default connect(mapstateToProps,DispatchToProps)(App);
