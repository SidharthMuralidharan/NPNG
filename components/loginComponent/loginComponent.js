import React, { Component } from 'react';
import './loginstyles.css';
import FootComponent from './../footerComponent/footerComponent';
import { Link } from 'react-router-dom';

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: '',
         pass: ''
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleUsernameChange(event) {
      this.setState({ user: event.target.value });
   }
   handlePasswordChange(event) {
      this.setState({ pass: event.target.value });
   }
   handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.user + '' + this.state.pass);
      // event.preventDefault();
      this.props.history.push(`/welcome/${this.state.user}`);
   }

   render() {
      return (
         <React.Fragment>
            {/* <Link to="/welcome">Users</Link> */}
            <div className="login-main-div">
               <div className="dummy">
                  <img id="logo-image" src="./../assets/mainlogo.png"></img>
               </div>
               <div className="wrapper">
                  <div className="login-left-panel">
                     {/* <img id="logo-image" src="./../assets/mainlogo.png"></img> */}
                  </div>
                  <div className="login-right-panel">
                     <div className="form-area">
                        <form onSubmit={this.handleSubmit}>
                           <div className="form-input-area">
                              <label className="input-label">
                                 Username:
                     <input type="text" value={this.state.user} onChange={this.handleUsernameChange} />
                              </label>
                           </div>
                           <div className="form-input-area">
                              <label className="input-label">
                                 Password :
                     <input type="password" value={this.state.pass} onChange={this.handlePasswordChange} />
                              </label>
                           </div>
                           <div className="form-action-area">
                              <input type="submit" value="Submit" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <FootComponent ></FootComponent>
            </div>
         </React.Fragment>
      );
   }
}
export default Login;