import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
 class ProjectNew extends Component {
    state = {
        title: '',
        content: '',
    }
    handleChange = (e) => {
            this.setState({
                [e.target.id] : e.target.value
            })
    }
    handleClick = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/'); 
        //it likes <Redirect to='/' />
    }

  render() {
      console.log(this.props)
      const {auth} =this.props
      if(!auth.uid) return <Redirect to='/signIn' />
    return (
      <div className="container">
        <form className="white">
            <h5 className="grey-text text-darken-3">
                Project
            </h5>
            <div className="input-field">
                <label htmlFor="title">title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="Content" >Content</label>
                <textarea name="content" id="content" cols="30" rows="10"  onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button onClick={this.handleClick}>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectNew);
