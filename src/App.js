import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import ListArticles from './Components/ListArticles'
import RedditPage from './Components/RedditPage'

class App extends Component {
  state = {
    articles: [],
    currentPage: "articles"
  }

  changeCurrentPage = () => {
    this.setState({currentPage: this.state.currentPage === "articles" ? "reddit" : "articles"})
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
      .catch(err => {
        console.log("Error: ", err);
      })
  }

  render() {
    return (
      <div>
        <Header 
          currentPage={this.state.currentPage}
          changeCurrentPage={this.changeCurrentPage}
        />
        <Route exact path="/" render={() => (
          <ListArticles articles={this.state.articles} />
        )} />
        <Route path="/reddit" render={() => (
          <h1><RedditPage /></h1> 
        )} />
      </div>
    );
  }
}

export default App;
