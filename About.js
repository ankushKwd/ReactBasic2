import React, { Component } from 'react'
import { connect } from 'react-redux';
import Auxiliary from '../HOC/Auxiliary';
import { fetchGithubData } from '../Redux/Actions/ItemActions';


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.fetchData();
  }
  render() {
    return (<Auxiliary classN="extra">
      <h2>This is About Component</h2>
      {console.log(this.props.data)}
    </Auxiliary>);
  }
}

/*export default About;
 const About=(props) =>{
    return (
      <Auxiliary classN="extra">
        <h2>This is About Component</h2>
        {console.log(props.data)}
      </Auxiliary>
    );
  }
 */
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    //addProject:project=>dispatch(Actions(project))
    fetchData: () => dispatch(fetchGithubData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);


/*   fetchData = () => {
    this.props.dispatch(dispatch => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          if (data) {
            //console.log("Users Data", data);
            dispatch(Actions(data));
          } else {
            console.log("Error in API call");
            this.handleErrors
          }
        });
    });
  }
  // Handle HTTP errors since fetch won't.
  handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  } */