import React from 'react'
import { connect } from 'react-redux';
import Auxiliary from '../HOC/Auxiliary'
import UserPopup from './newComponents/Popup'
import Carousal from './newComponents/carousal/Carousal';
import Users from './UserComponent/Users'
import PageUsers from './UserComponent/PageUsers'
import Pagination from './UserComponent/Pagination'

const Home = (props) => {
  return (
    <Auxiliary classN="extra">
      <header><h2>Home</h2></header>
      <main className="mainclass">
        <div className="row">
        <div className="Box Red"><Carousal/></div>
        <div className="Box Green"> <Carousal/></div>
        <div className="Box Blue"> <Carousal/></div>
        </div>
        <div className="row">
          <div className="leftcolumn">
          <h1 className="sticky">Users</h1>
            <div className="row img-container">
              <Users/>
            </div>
          </div>
          <div className="rightcolumn">
            <div className="rightDiv">
              <UserPopup/>
              {props.fetchedUsers?  <Pagination users={props.fetchedUsers}/>:"loading..."}
              {/* <Pagination props={props.fetchedUsers}/> */}
            </div>
            <div className="rightDiv">
            {
              props.fetchedUsers?  <PageUsers fetchedUsers={props.fetchedUsers}/>:"loading..."
            }
            
            </div>
          </div>
        </div>
        <footer className="footer"></footer>
      </main>
    </Auxiliary>
  );
}

const mapStateToProps = (state) => ({
    fetchedUsers: state.employee
})


export default connect(mapStateToProps)(Home);