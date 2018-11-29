import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <footer className="py-5 bg-black">
        <div className="container">
          <p className="m-0 text-center text-white small">{this.props.content}</p>
        </div>
      </footer>
        );
    }
}

export default Footer;