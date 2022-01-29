import React from "react"

/*A different way for React to display the header using props, confusing*/

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