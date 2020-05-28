import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import DefaultNav from './components/Navbars/DefaultNav';
import { Scrollbars } from 'react-custom-scrollbars';


class App extends Component {
  state = {
    collapseID: '',
    width: window.innerWidth,
    height: window.innerHeight,
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <Scrollbars style={{ height: this.state.height }}>
          <div className='flyout' style={{ maxWidth: this.state.width }}>
            <DefaultNav toggleCollapse={this.toggleCollapse} closeCollapse={this.toggleCollapse} collapseID={collapseID} />
            {collapseID && overlay}
            <main style={{ width: this.state.width, maxWidth: this.state.width }}>
              <Routes />
            </main>
          </div>
        </Scrollbars>
      </Router>
    );
  }
}

export default App;
