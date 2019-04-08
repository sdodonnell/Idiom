import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SearchResults extends Component {
  
  constructor(props) {
      super(props)
      this.renderResults = this.renderResults.bind(this)
  }

  renderResults() {
      return Object.values(this.props.results).map( result => {
          const storyDate = new Date(result.publishDate);
          const storyDateString = storyDate.toDateString();
          return (
            <Link to={`/stories/${result.id}`} key={result.id}>
                <div className="search-result">
                    <p>{result.title}</p>
                    <p>{result.authorName}</p>
                    <p>{storyDateString}</p>
                </div>
            </Link>
          )
      })
  }
  
  render() {
    return (
        <>
            <div className="search-results-overlay" onClick={this.props.clear}></div>
            <div className="search-results">
                {this.renderResults()}
            </div>
        </>
    )
  }
}
