import React, { Component } from 'react'

export default class Search extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
          display: "hidden",
          query: "",
      }
      this.toggle = this.toggle.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggle() {
    this.state.display === "hidden" ?
        this.setState({
            display: "visible"
        }) :
        this.setState({
            display: "hidden"
        })
  }

  handleChange(e) {

      this.setState({
        query: e.target.value
      })
    
  }

  handleSubmit() {
    this.props.fetchResults(this.state.query)
  }
  
  render() {
    return (
      <div className="nav-bar-search">
        <button onClick={this.toggle}><i className="fas fa-search"></i></button>
        <div className={`search-${this.state.display}`}>
          <form onSubmit={this.handleSubmit}>
            <input type="search" onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    )
  }
}
