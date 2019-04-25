import React, { Component } from 'react';
import './landingstyles.css';
import { Link } from 'react-router-dom';
import  LandingHeaderComponent  from "./../landingHeaderComponent/landingHeaderComponent"
class LandingComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date().toLocaleString()
      }
   }
   render() {
      return (
         <React.Fragment>
            {/* <Link to="/">Home</Link> */}
            <div className="landing-main-div">
               {/* <p>{this.props.match.params.username}</p> */}
            </div>
            <LandingHeaderComponent username={this.props.match.params.username}></LandingHeaderComponent>
         </React.Fragment>
      );
   }
}
export default LandingComponent;