import React, {Component} from 'react';

// 四角or丸の領域を作成するコンポーネント
class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  color = "white";
  style = {};

  constructor(props) {
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.radius = props.r;
    this.style = {
      backgroundColor: this.color,
      position: "absolute",
      left: this.x + "px",
      top: this.y + "px",
      width: this.width + "px",
      height: this.height + "px",
      borderRadius: this.radius + "px"
    }
  }

  render() {
    return <div style={this.style}></div>;
  }
}

export default Rect;


//リスト3-24
// import React, { Component } from 'react';
// import Rect from './Rect';
// import './App.css';

// //表示をする要素を入れるコンポーネント
// class App extends Component {
//   data = [
//     "this is list sample",
//     "これはリストサンプルです",
//     "配列をリストに変換します"
//   ];

//   msgStyle = {
//     fontSize: "20pt",
//     color: "#900",
//     margin: "20px 0",
//     padding: "5px,"
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.data
//     };
//   }

//   render() {
//     return <div>
//       <h1>React</h1>
//       <h2 style={this.msgStyle}>show list.</h2>
//       <List title="サンプルリスト" data={this.data} />
//     </div>;
//   }
// }

// class List extends Component {
//   number = 1;

//   title = {
//     fontSize: "20pt",
//     fontWeight: "bold",
//     color: "blue",
//   };

//   render() {
//     let data = this.props.data;
//     return(
//       <div>
//         <p style={this.title}>{this.props.title}</p>
//         <ul>
//           {data.map((item) => 
//             <Item number={this.number++} value={item} key={this.number} />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// class Item extends Component {
//   li = {
//     listStyleType: "square",
//     fontSize: "16pt",
//     color: "#06",
//     margin: "0px",
//     padding: "0px",
//   }
//   num = {
//     fontWeight: "bold",
//     color: "red",
//   }

//   render() {
//     return (
//       <li style={this.li}>
//         <span style={this.num}>[{this.props.number}] </span>
//           {this.props.value}
//       </li>
//     );
//   }
// }

// export default App;


// //リスト3-23
// import React, { Component } from 'react';
// import Rect from './Rect';
// import './App.css';

// //表示をする要素を入れるコンポーネント
// class App extends Component {
//   data = [];

//   msgStyle = {
//     fontSize: "20pt", 
//     color: "#900",
//     margin: "20px 0px",
//     padding: "5px",
//   }
//   area = {
//     width: "500px",
//     height: "500px",
//     border: "1px solid blue",
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.data
//     };
//     this.doAction = this.doAction.bind(this);
//   }

//   doAction(e) {
//     let x = e.pageX;
//     let y = e.pageY;
//     this.data.push({x:x, y:y});
//     this.setState({
//       list: this.data 
//     });
//   }

//   draw(d) {
//     let s = {
//       position: "absolute",
//       left: (d.x - 25) + "px",
//       top: (d.y - 25) + "px",
//       width: "50px",
//       height: "50px",
//       backgroundColor: "#66f3",
//     };
//     return <div style={s}></div>;
//   }

//   render() {
//     return <div>
//       <h1>React</h1>
//       <h2 style={this.msgStyle}>show rect.</h2>
//       <div style={this.area} onClick={this.doAction}>
//         {this.state.list.map((value) => this.draw(value))}
//       </div>
//     </div>;
//   }
// }

// export default App;