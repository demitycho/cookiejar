import React, { Component } from 'react';
import { Grid, Segment, Divider, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Graphic extends Component {
  state = {
    loaded: false
  }
  minus = () => {
    this.props.minus();
  }
  onImgLoad = ({target:img}) => {
    this.setState({
      height:img.offsetHeight,
      width:img.offsetWidth,
      loaded:true
    });
  }
  render() {

    return (
      <div onClick={this.minus}>
        <Image onLoad={this.onImgLoad} style={{width:'30%', marginLeft:'2.5%'}} src='https://i.imgur.com/cAtvnUH.png' />
        <div style={{
          position: 'absolute',
          top: this.props.percent,
          left: '5%',
          borderStyle: 'dotted',
          borderWidth: '2px 0px 0px 0px',
          width: '90%',
          borderColor: 'red',
          textAlign:'right',
          color:'red'
        }}>Goal</div>
          {/*{this.state.loaded ?*/}
            {/*<img style={{*/}
              {/*position: 'absolute',*/}
              {/*top: 0,*/}
              {/*left: '-56px',*/}
              {/*width: this.state.height,*/}
              {/*clip: 'rect(0px 180px 6 0px 0px)',*/}
            {/*}}*/}

            {/*src='https://i.imgur.com/I3wwIPp.jpg' />*/}
            {/*: null }*/}
      </div>

    );
  }
}

const styles={
  redLine: {
    position:'absolute',
    top:0,
    left:0,
    borderStyle: 'dotted',
    borderWidth: '2px 0px 0px 0px',
    width: '100%',
    borderColor: 'red'
  }
}

export default Graphic;
