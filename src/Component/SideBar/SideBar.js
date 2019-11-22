import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import {  faMinusCircle, faCogs,  faPlusCircle,  faUserMd,  faChartPie, faListAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo1 from '../../assets/logo1.png';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AddDisease from '../Disease/AddDisease/Disease'
import ManageDisease from '../Disease/UpdateDisease/Disease'


class SideBar extends Component {
    render() {
      return (
        <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
    <NavItem eventKey="home">
            <NavIcon >
                    <img src={logo1} width="35" />       
            </NavIcon>
            <NavText>
                        MEDLIFE ADMIN
            </NavText>     
    </NavItem>
        <NavItem eventKey="disease">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                <FontAwesomeIcon icon={faUserMd} />
            </NavIcon>
            <NavText>
                 Diseases
            </NavText>
       
            <NavItem eventKey="disease/addDisease">
                <NavText>
                  <FontAwesomeIcon icon={faPlusCircle}  />
                   <span className="pl-2"> Add Disease </span >
                </NavText>
            </NavItem>
            <NavItem eventKey="disease/updateDisease">
                <NavText>
                    <FontAwesomeIcon icon={faCogs} />
                    <span className="pl-2">Upadate Disease</span>
                </NavText>
            </NavItem>
        <NavItem eventKey="disease/deleteDisease">
                <NavText>
                    <FontAwesomeIcon icon={faMinusCircle} />
                    <span className="pl-2">Remove Disease</span>
                </NavText>
        </NavItem>
       
      </NavItem>



      <NavItem eventKey="healthtips">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                <FontAwesomeIcon icon={faListAlt} />
            </NavIcon>
            <NavText>
                 Health Tips
            </NavText>
       
            <NavItem eventKey="healthtips/addHealthTips">
                <NavText>
                  <FontAwesomeIcon icon={faPlusCircle}  />
                   <span className="pl-2"> Add HealthTip</span >
                </NavText>
            </NavItem>
            <NavItem eventKey="healthtips/upadateHealthTips">
                <NavText>
                    <FontAwesomeIcon icon={faCogs} />
                    <span className="pl-2">Upadate HealthTip</span>
                </NavText>
            </NavItem>
        <NavItem eventKey="healthtips/removeHealthTips">
                <NavText>
                    <FontAwesomeIcon icon={faMinusCircle} />
                    <span className="pl-2">Remove HealthTip</span>
                </NavText>
        </NavItem>
       
      </NavItem>


      <NavItem eventKey="survey">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                <FontAwesomeIcon icon={faChartPie} />
            </NavIcon>
            <NavText>
                 Survey Information
            </NavText>
       
            <NavItem eventKey="survey/addSurveyInformation">
                <NavText>
                  <FontAwesomeIcon icon={faPlusCircle}  />
                   <span className="pl-2"> Add Information</span >
                </NavText>
            </NavItem>
            <NavItem eventKey="healthtips/upadateSurveyInformation">
                <NavText>
                    <FontAwesomeIcon icon={faCogs} />
                    <span className="pl-2">Upadate Information</span>
                </NavText>
            </NavItem>
        <NavItem eventKey="healthtips/removeSurveyInformation">
                <NavText>
                    <FontAwesomeIcon icon={faMinusCircle} />
                    <span className="pl-2">Remove Information</span>
                </NavText>
        </NavItem>
       
      </NavItem>

      <NavItem eventKey="logout">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                <FontAwesomeIcon icon={faSignOutAlt} />
            </NavIcon>
            <NavText>
                Admin
            </NavText>
            <NavItem eventKey="logOut/logout1">
                <NavText>
                  <FontAwesomeIcon icon={faSignOutAlt}  />
                   <span className="pl-2"> Log Out</span >
                </NavText>
            </NavItem>
       
       
      </NavItem>
        
    </SideNav.Nav>
</SideNav>
            <main>
                <Route path="/disease/addDisease" exact component={props => <AddDisease />} />
                <Route path="/disease/updateDisease" component={props => <ManageDisease />} />
                {/* <Route path="/devices" component={props => <Devices />} /> */}
            </main>
        </React.Fragment>
    )}
    />
</Router>

          );
    }
  }
  
  export default SideBar;