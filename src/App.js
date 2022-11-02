
import* as React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.onOverlayClick = () => {
          this.setState({ hideDialog: true });
      };
      this.dialogClose = () => {
          this.setState({ hideDialog: false });
      };
      this.state = {
          hideDialog: true
      };
  }

  render() {
  return (
    <div className="App"  id='dialog-target'>
        <header>
        <h2 style={{color: 'white'}}>HUGO</h2>
          <div className='menu-header'>
            <a>News</a>
            <a>Docs</a>
            <a>Themes</a>
            <a>Showcase</a>
            <a>Community</a>
            <a>Github</a>
          </div>
          <div className='search-icon'>
         
          <input type="text" placeholder='Search the doc...'></input>
          </div>
         
        </header>
        <section>
          <div className='logo'>
          <img src ="https://d33wubrfki0l68.cloudfront.net/c38c7334cc3f23585738e40334284fddcaf03d5e/2e17c/images/hugo-logo-wide.svg" />
          </div>
          <div className="title-btn">
            <h3>The world’s fastest framework for building websites</h3>
            <p>Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.

            </p>
            <button>Quick Start</button>
          </div>
        </section>
        <dialog width='250px' isModal={true} target='#dialog-target' visible={this.state.hideDialog} close={this.dialogClose} overlayClick={this.onOverlayClick}>
          This is a modal Dialog </dialog>
    

    </div>
    

  );
}
};
export default App;
