import React, {Component} from 'react'
import {connect} from 'react-redux'
import './layout.css'
import DropDown from "../../components/Dropdown/Dropdown";

class Layout extends Component {

    render() {
        return (
            <div className='layout'>
                <nav className="navbar navbar-dark bg-dark justify-content-between navigation">
                    <a className="navbar-brand">{'Suridata test'.toUpperCase()}</a>
                    <div>
                        <DropDown/>
                    </div>
                </nav>
                <main className='container'>
                    {this.props.children}
                </main>
            </div>
        )
    }
}


export default Layout
