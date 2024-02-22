import { Component } from "react";

export default class ErrorBoundary extends Component {

    constructor(){
        super();
    }
    componentDidCatch(){}
    render (){
        return this.props.children
    }
}