import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default class LayoutReactjs extends Component {
    render() {
        return (
            <>
                <Nav/>
                <Header/>
                <Content/>
                <Footer/>
            </>
        )
    }
}
