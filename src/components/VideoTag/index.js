import React, { Component } from "react"

class VideoTag extends Component {

  constructor(props) {
    super(props);
  }

//   toWord() {
//     let num = this.props.number;
//     const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//     const numString = num.toString();

//     console.log(num);

//     if (num < 0) throw new Error('Negative numbers are not supported.');

//     if (num === 0) return 'zero';

//     //the case of 1 - 20
//     if (num < 20) {
//       return ones[num];
//     }

//     if (numString.length === 2) {
//       return tens[numString[0]] + ' ' + ones[numString[1]];
//     }

//     //100 and more
//     if (numString.length > 2) {
//       if (num < 0) throw new Error('Numbers above 99 are not supported.');
//     }
//   }

  render () {
    
    return (
        <video loop muted autoPlay poster={this.props.videoPoster}>
            <source src={this.props.videoFile} type="video/mp4" />
        </video>
    )

  }
}

export default VideoTag
