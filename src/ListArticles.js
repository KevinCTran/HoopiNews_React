import React, { Component } from 'react';

class ListArticles extends Component {
    render() {
        return (
            <div>
                {this.props.articles.map(article => (
                    <div key={article.title}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img src={article.urlToImage ? article.urlToImage : "https://preview.ibb.co/fzgBm8/nbalogo.jpg"} />
                        </a>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default ListArticles;