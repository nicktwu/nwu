/**
 * Created by nwu on 2/25/18.
 */
import {StyleSheet} from 'aphrodite';
import {welcomeFont} from '../fonts';

const rotateKeyFrames = {
  '0%' : {
    transform: 'rotate(0deg)'
  },
  '100%' : {
    transform: 'rotate(360deg)'
  }
};

const style = StyleSheet.create({
  baseLoader: {
    backgroundColor: "transparent",
    border: "3px solid transparent",
    borderRadius: "50%",
    zIndex: 1500,
    animationName: [rotateKeyFrames],
    animationDuration: "3s",
    animationTimingFunction: "cubic-bezier(0.7,0.2,0.3,0.8)",
    animationIterationCount: "infinite"
  },
  box: {
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    borderRadius: "50%"
  },
  outerLoader: {
    display: "block",
    position: "relative",
    left: "50%",
    top: "50%",
    width: "150px",
    height: "150px",
    margin: "-75px 0 0 -75px",
  },
  innerLoader: {
    display: "block",
    position: "absolute",
    top: "5px",
    left: "5px",
    right: "5px",
    bottom: "5px",
  },
  loader1 : {
    borderTopColor: "#ffffff",
  },
  loader2 : {
    borderTopColor: "#cccccc",
  },
  loader3 : {
    borderTopColor: "#999999",
  },
  loader4 : {
    borderTopColor: "#666666",
  },
  loader5: {
    borderTopColor: "#333333"
  },
  wrapper: {
    position: "fixed",
    backgroundColor: "black",
    color: "white",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1000
  },
  header: {
    lineHeight: "150px",
    textAlign: "center",
    fontFamily: [welcomeFont, "sans-serif"],
    fontSize: "40px"
  }
});

export default style;