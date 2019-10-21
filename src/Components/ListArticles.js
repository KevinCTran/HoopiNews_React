import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ListArticles extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        setPage: PropTypes.func.isRequired
    }
    
    componentDidMount() {
        this.props.setPage("articles")
    }

    render() {
        return (
            <div className="articles-container">
                {this.props.articles.map(article => (
                    <div key={article.title}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img src={article.urlToImage ? article.urlToImage : "https://preview.ibb.co/fzgBm8/nbalogo.jpg"} alt={article.source.name} />
                        </a>
                        <a className="link-btn" href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListArticles;