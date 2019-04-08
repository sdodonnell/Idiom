import React, { Component } from 'react'
import SearchResults from './search_results';

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
      this.renderResults = this.renderResults.bind(this)
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

  renderResults() {
    let results = this.props.results
    if (Object.keys(results).length > 0) return <SearchResults clear={this.props.clearResults} results={results}/>
    else return null
  }
  
  render() {
    return (
      <div className="nav-bar-search">
        <button onClick={this.toggle}><i className="fas fa-search"></i></button>
        <div className={`search-${this.state.display}`}>
          <form onSubmit={this.handleSubmit}>
            <input type="search" onChange={this.handleChange}/>
          </form>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}
