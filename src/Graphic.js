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
    const images = ['https://i.imgur.com/P6pnJLF.png',
      'https://i.imgur.com/mMBgzru.png',
      'https://i.imgur.com/sOpDrdZ.png',
      'https://i.imgur.com/Vdx5z1U.png']
    const { n } =  this.props
    const widths = ['30%', '38%', '50%','53%']
    return (
      <div onClick={this.minus}>
        <Image onLoad={this.onImgLoad} style={{width:'70%', marginLeft:'2.5%'}} src='https://i.imgur.com/cAtvnUH.png' />
        <Image
          src={images[n]}
          style={{
            position: 'absolute',
            width:"53%",
            top: widths[n],
            left: '13%',
          }}
        />
        <div style={{
          position: 'absolute',
          top: `${100-this.props.percent - 28}%`,
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
