import React, { Component } from 'react'
import ListArticles from './ListArticles'

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 3)

    var dd = oneWeekAgo.getDate();
    var mm = oneWeekAgo.getMonth() + 1
    var yyyy = oneWeekAgo.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    var newsurl = 'https://newsapi.org/v2/everything?' +
      'q=nba&' +
      'sources=espn,business-insider,bleacher-report&' +
      'from=' + yyyy + '-' + mm + '-' + dd + '&' +
      'language=en&' +
      'sortBy=relevancy&' +
      'apiKey=9686d92a39f845f9aab9f7674aa08654'

    fetch(newsurl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            articles: result.articles
          })
        }
      )
  }

  render() {
    return (
      <div>
        <ListArticles articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
