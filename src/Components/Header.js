import React from 'react'
import Icon from '../Images/header_icon.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <div className="navibar">
            <img src={Icon} alt="icon" className="header-icon" /> 
            <Link 
                to={props.currentPage === "articles" ? "/reddit" : "/"}
                onClick={props.changeCurrentPage}>
                {props.currentPage === "articles" ? "Reddit" : "Articles"} 
            </Link>
        </div>
    )
}

Header.propTypes = {
    currentPage: PropTypes.string.isRequired,
    changeCurrentPage: PropTypes.func.isRequired
}

export default Header