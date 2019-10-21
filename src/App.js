import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Components/Header'
import ListArticles from './Components/ListArticles'
import RedditPage from './Components/RedditPage'

class App extends Component {
  state = {
    articles: [],
    currentPage: ""
  }

  setPage = (page) => {
    this.setState({currentPage: page})
  }

  getDate = () => {
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

    var dateObject = {
      year: yyyy,
      month: mm,
      day: dd
    }

    return dateObject
  }

  componentDidMount() {
    var date = this.getDate();

    var newsurl = 'https://newsapi.org/v2/everything?' +
      'q=nba&' +
      'sources=espn,business-insider,bleacher-report&' +
      'from=' + date["year"] + '-' + date["month"] + '-' + date["day"] + '&' +
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
        />
        <Route path="/index.html" render={() => (
          <ListArticles articles={this.state.articles} setPage={this.setPage} />
        )} />
        <Route exact path="/" render={() => (
          <ListArticles articles={this.state.articles} setPage={this.setPage} />
        )} />
        <Route path="/reddit" render={() => (
          <h1><RedditPage setPage={this.setPage}/></h1> 
        )} />
      </div>
    );
  }
}

export default App;
