import React from "react";
import {connect} from "react-redux";
import App from "./App";

let AppWith = connect(mapStateToProps,mapDispatchToProps)(App)
