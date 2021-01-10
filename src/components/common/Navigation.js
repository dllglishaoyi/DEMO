import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const nav_links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

const Navigation = ({user}) => {
    
    const [menuActive, setMenuActive] = useState(false)
    
    return (
        <nav className="site-navigation" role="navigation">
           <span className="menu-title">React Blog</span>
           <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {nav_links.map((link, index) =><li key={index}>
                    <Link to={link.path}>{link.title}</Link></li>)}
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>    
                </span>
           </div>
           <i className="icon ion-ios-menu" onClick={()=>setMenuActive(!menuActive)}/>
        </nav>
    )
}

export default Navigation
