import React from "react";
import styles from "./styles.module.css";

// hmm, seems like we need access to the phone camera
// directly here to get a stream. This could be an issue
// since this would require native access.
// we might have to add cordova to this project to access
// some native apis like the camera.

// could also use the <input type="file" accept="image/*" capture="camera">
// tag, but this would make the experience alot less smooth.
// need to think and discuss this a bit more.
class QRScanner extends React.Component {
  render() {
    return <div className={styles.QRScannerContainer}>test</div>;
  }
}

export default QRScanner;