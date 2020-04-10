import React, { Component } from 'react';
import './App.css';

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px",
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px",
  }
};

const ThemeContext = React.createContext(theme.dark);
//表示をする要素を入れるコンポーネント
class App extends Component {
  static contextType = ThemeContext;

  render() {
    return <div style={this.context}>
      <Title value="Content Page" />
      <Message value="This is Content sample" />
      <Message value="※これはテーマのサンプルです" />
    </div>
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;


