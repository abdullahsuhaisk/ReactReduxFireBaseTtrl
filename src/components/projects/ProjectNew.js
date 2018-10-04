import React, { Component } from 'react'

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
        console.log(this.state)
    }

  render() {
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
export default ProjectNew;
