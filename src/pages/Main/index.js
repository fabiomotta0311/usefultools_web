import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () =>{
        
    }

    render(){
        return <h1>Hello Rocketseat</h1>;
    }
}