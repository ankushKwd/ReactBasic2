import React, {Component} from 'react';
import Auxiliary from '../HOC/Auxiliary';
import {connect} from 'react-redux';
import Actions from '../Redux/Actions/ProjectActions';

class Pojects extends Component {
    constructor(props){
        super(props);
    };
  state = {
    title: '',
    details: '',
    data: [],
    errors: '',
  };
  onChanegeHandler = e => {
    this.setState ({[e.target.name]: e.target.value});
  };
  submitHandler = e => {
    e.preventDefault ();
    //console.log(this.state)
    const data = {
      title: this.state.title,
      details: this.state.details,
    };
    if (data.title !== '' && data.details !== '') {
      const result = [...this.state.data];
      result.push (data);
      this.setState ({data: result, title: '', details: '', errors: ''});
      this.props.addProject (result);
    } else {
      this.setState ({errors: 'Input Box should not empty'});
    }
  };

  render () {
    const errors = (
      <Auxiliary classN="errorClasss">
        {this.state.errors ? this.state.errors : ''}
      </Auxiliary>
    );

    const printDetails = (
      <Auxiliary classN="extra">
        {
          <table className="table table-bordered tableContent">
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Title</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {this.props.projects
                ? this.props.projects.map ((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{item.title}</td>
                        <td>{item.details}</td>
                      </tr>
                    );
                  })
                : ''}
            </tbody>
          </table>
        }
      </Auxiliary>
    );
    return (
      <Auxiliary classN="extra">
          <div className="jumbotron projectContent topdata">
            <input
              type="text"
              id="title"
              value={this.state.title}
              name="title"
              onChange={this.onChanegeHandler}
            />
            <br />
            <br />
            <input
              type="text"
              id="details"
              value={this.state.details}
              name="details"
              onChange={this.onChanegeHandler}
            />
            <br />
            <br />
            <button type="submit" value="Submit" onClick={this.submitHandler}>
              Submit
            </button>
            {errors}
          </div>
        {printDetails}
      </Auxiliary>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProject: project => dispatch (Actions (project)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Pojects);
