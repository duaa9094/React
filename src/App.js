import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';
import Data from './components/Data.json';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Data: Data,
       showModel: false,
      selectedBeast: {}
    }
  }

  selectedUpdate = (title) => {
    let selected = [];
    Data.forEach((beast) => {
      if (beast.title === title) {
        selected = beast;
      }
    })
    this.setState({ showModel: true, selectedBeast: selected })
  }
  handleClose = () => {
    this.setState({ showModel: false })
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          Data={this.state.Data}
          selectedUpdate={this.selectedUpdate}
        />
        <SelectedBeast
          Data={this.state.selectedBeast}
          show={this.state.showModel}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    )
  }
}
export default App;