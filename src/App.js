import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/topMenu.js';
import Header from './Component/Header/Header';
import Section from './Component/Section/Section';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Section  title = "For those about to rock..." 
                  img = "img/01.jpg"
                  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                  vitriimg = "order-lg-1" 
                  vitritext = "order-lg-2"
          />
        <Section  title = "We salute you!" 
                  img = "img/02.jpg"
                  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                  vitriimg = "order-lg-2" 
                  vitritext = "order-lg-1"
          />
          <Section  title = "Let there be rock!" 
                  img = "img/03.jpg"
                  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
                  vitriimg = "order-lg-1" 
                  vitritext = "order-lg-2"
          />

          <Footer content = "Copyright &copy; Your Website 2018" />



          
      </div>
    );
  }
}

export default App;
