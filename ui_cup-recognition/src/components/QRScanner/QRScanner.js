import React from "react";
import styles from "./styles.module.css";

// hmm, seems like we need access to the phone camera
// directly here to get a stream. This could be an issue
// since this would require native access.
// we might have to add cordova to this project to access
// some native apis like the camera.

// could also use the <input type="file" accept="image/*" capture="camera">
// https://stackoverflow.com/questions/8581081/how-to-access-a-mobiles-camera-from-a-web-app
// tag, but this would make the experience alot less smooth.
// need to think and discuss this a bit more.

// ok, there is an actual solution to this. wow.
// https://youtu.be/z9unKFzAj1w?t=1904
class QRScanner extends React.Component {
  
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
        this.canvasRef = React.createRef();
    }

    async componentDidMount() {
        this.videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
        await this.videoRef.current.play();
        this.draw();
    }
  
    render() {
    return (
      <div className={styles.QRScannerContainer}>
        <video className={styles.video} ref={this.videoRef} muted style={{ display: "none" }} />
        <canvas className={styles.canvas} ref={this.canvasRef} />
      </div>
    );
  }

  draw = () => {
      requestAnimationFrame(this.draw);

      const context = this.canvasRef.current.getContext('2d');
      // Draw video frame
      context.drawImage(this.videoRef.current, 0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
  }

//   async getUserMedia() {
//     // get camera stream  
//     this.videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
//     await this.videoRef.current.play();
//     this.draw();
//   }
}


export default QRScanner;
