/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom'
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/">Characters</NavLink>
                    </li>
                    <span style={{ 'cursor': 'default' }}>/</span>
                    <li><NavLink
                        style={({ isActive }) => ({ color: isActive ? '#9f0013' : 'inherit' })}
                        to="/comics">Comics</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;