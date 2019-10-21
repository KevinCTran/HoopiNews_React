import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faComment } from '@fortawesome/free-solid-svg-icons'

class RedditPage extends Component {
    static propTypes = {
        setPage: PropTypes.func.isRequired
    }

    state = {
        redditPosts: []
    }

    componentDidMount() {
        this.props.setPage("reddit")
        fetch('https://www.reddit.com/r/nba.json?limit=12')
            .then(res => res.json())
            .then(result => {
                this.setState({redditPosts: result.data.children})
            })
    }

    render() {
        return (
            <div className="reddit-container">
                <div className="reddit-uibar">
                    <FontAwesomeIcon icon={faArrowUp} className="arrow-up-icon"/>
                    <FontAwesomeIcon icon={faComment} className="comment-icon"/>
                    <a 
                        href="https://www.reddit.com/r/nba" 
                        className="title-link" 
                        target="_blank"
                        rel="noopener noreferrer">r/NBA
                    </a>
                </div>
                <div className="reddit-posts">
                    {this.state.redditPosts.map(post => (
                        <div className="post-container" key={post.data.url}>
                            <a 
                                href={"https://www.reddit.com" + post.data.permalink}
                                target="_blank"
                                rel="noopener noreferrer">
                                {post.data.ups}
                            </a>
                            <a 
                                href={"https://www.reddit.com" + post.data.permalink}
                                target="_blank"
                                rel="noopener noreferrer">
                                {post.data.num_comments}
                            </a>
                            <a
                                className="postTitle"
                                href={post.data.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                {post.data.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default RedditPage