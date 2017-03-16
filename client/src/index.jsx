import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pizzas: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/pizza', 
      success: (data) => {
        this.setState({
          pizzas: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Pizza List</h1>
      <List pizzas={this.state.pizzas}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));