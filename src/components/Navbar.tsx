import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Pismo glava</a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Igra</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/statistika'>Statistika</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
