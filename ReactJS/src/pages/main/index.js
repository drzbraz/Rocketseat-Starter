import React, { Component } from 'react'
import api from '../../services/api'

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = api.get()
  }

  render() {
    return <h1> Hello World</h1>
  }
}