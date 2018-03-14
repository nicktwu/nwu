import {StyleSheet} from 'aphrodite';
import {headerFont} from '../fonts';

const style = StyleSheet.create({
  wrapper : {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  box: {
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
  },
  banner : {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    textAlign: "center",
    zIndex: 1
  },
  mobileBanner: {
    height: "200px",
    width: "100%",
    marginBottom: "10px"
  },
  defaultBanner: {
    height: "100%",
    width: "calc(50% - 5px)",
    marginRight: "10px"
  },
  bar: {
    display: "block",
    position: "absolute",
  },
  mobileBar: {
    bottom: 0,
  },
  defaultBar: {
    right: 0
  },
  titleText: {
    position: "relative",
    top: "50%",
    marginTop: "-30px",
    lineHeight: "60px",
    fontFamily: [headerFont, "sans-serif"],
    fontSize: "40px"
  },
  container : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: "30px 30px 30px 30px",
    textAlign: "center",
    flexDirection: "column"
  },
  mobileContainer: {
    width: "calc(100% - 60px)",
    top: "210px",
    height: "calc(100% - 270px)"
  },
  defaultContainer: {
    width: "calc(50% - 65px)",
    height: "calc(100% - 60px)",
    right: 0,
    top: 0
  },
  linkBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "35px 35px 35px 35px"
  },
  link: {
    fontFamily: [headerFont, "sans-serif"],
    textAlign: "center",
    textDecoration: "none",
    position: "relative"
  }
});

export default style