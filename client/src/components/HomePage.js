import React, {
  Component
} from 'react';
//import { Link } from 'react-router-dom';
//import '../styles/about-page.css';
import snippets from './FractalRouter.js';

//import './App.css';

//let res = this.menu.value;

export default class App extends Component {
  componentDidMount() {
    this.createCanvas();
  }

  
  componentDidUpdate() {
    
    this.createCanvas()
  }
  

  createCanvas() {
    const node = this.node;
   
    snippets.main(node, this.props.value.toLowerCase());
    //alert(this.props.value.toLowerCase());
    //  d3Snippets.createSVG(node);
  }

  render() {
    return ( //<svg ref = {node => this.node = node} 
               // width = {1200} 
               // height = {960} 
               // />
     // </svg>
     <div>
     <canvas ref={node => this.node = node} className ="canvas center-align" width={800} height={600} />
     </div>

    )
  }
}