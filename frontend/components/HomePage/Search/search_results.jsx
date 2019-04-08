import React, { Component } from 'react'

export default class SearchResults extends Component {
  
  constructor(props) {
      super(props)
      this.renderResults = this.renderResults.bind(this)
  }

  renderResults() {
      return Object.values(this.props.results).map( result => {
          const storyDate = new Date(story.publishDate);
          const storyDateString = storyDate.toDateString();
          return (
            <div>
                <p>{result.title}</p>
                <p>{result.authorName}</p>
                <p>{result.storyDateString}</p>
            </div>
          )
      })
  }
  
  render() {
    return (
      <div className="search-results">
        {this.renderResults()}
      </div>
    )
  }
}
