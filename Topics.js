import React from 'react'
import Auxiliary from '../HOC/Auxiliary'
import {connect} from 'react-redux'

const Topics=(props) =>{
    return (
      <Auxiliary classN="extra">
        <h2>This is Topics Component</h2>
        {props.projects?props.projects.map((item,index)=>{
          return(
            <div key={index}>{item.title}</div>
          );
        }):""}
      </Auxiliary>
    );
  }

  const mapStateToProps=(state)=>{
    return{
      projects:state.projects
    }
  }


  export default connect(mapStateToProps)(Topics);