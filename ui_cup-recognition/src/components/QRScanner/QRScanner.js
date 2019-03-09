import React from "react";
import jsQR from "jsqr";
import styles from "./styles.module.css";
import Blanket from '../Blanket';
var debounce = require('lodash.debounce');


class QRScanner extends React.Component {

    state = {
        qrDetected: false,
    }
  
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.canvasRef = React.createRef();
        this.setInterval = undefined;
    }

    async componentDidMount() {
        this.videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
        await this.videoRef.current.play();
        this.setInterval = setInterval(this.detectQRCode, 200);
        this.draw();
    }
  
    render() {
        const { qrDetected } = this.state;
    return (
      <div className={styles.QRScannerContainer}>
        {qrDetected && <Blanket showExit={false} isActive={qrDetected} />}
        <video className={styles.video} ref={this.videoRef} muted />
        <canvas className={styles.canvas} ref={this.canvasRef} />
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.setInterval);
}

  draw = () => {
    requestAnimationFrame(this.draw);

      const context = this.canvasRef.current.getContext('2d');
      // Draw video frame
      context.drawImage(this.videoRef.current, 0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
  }

  detectQRCode = () => {

    const w = this.videoRef.current.videoWidth;
    const h = this.videoRef.current.videoHeight;

    this.canvasRef.current.width = w;
    this.canvasRef.current.height = h;

    const ctx = this.canvasRef.current.getContext('2d');
    ctx.drawImage(this.videoRef.current, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h).data;

    const code = jsQR(imageData, this.videoRef.current.videoWidth, this.videoRef.current.videoHeight);
    if (!code) {
        if (this.state.qrDetected) this.setState({qrDetected: false});
        return;
    }

    this.setState({qrDetected: true});
    this.callAPI();
    // trigger API call here
  }

    // implement leading debounce the api call to a time > setInterval
  callAPI = debounce(() => {
      console.log('call API');
  }, 500, {
    'leading': true,
    'trailing': false
  })
}

export default QRScanner;
