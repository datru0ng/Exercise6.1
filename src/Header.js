
import React from "react"


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
        };    
    }
    changeTitle = () => {
        this.setState({title:"Cool title"})
    }
    render() {
        return (
        <header className="header" onClick={this.changeTitle}>
        <div className="logo"/>
        <span className="title">LetsChat!</span>
      </header>
        );
    }
}

export default Header