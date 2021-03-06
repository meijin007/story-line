import { CssBaseline } from "@material-ui/core";
import React from "react";
import * as Resources from "../resources";
import ButtonAppBar from "./ButtonAppBar";
import Footer from "./Footer";
import Main from "./Main";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar appName={Resources.projectName} buttonText="login" />
      <Main />
      <Footer
        author={Resources.author}
        projectName={Resources.projectName}
        github={Resources.githubAddress}
      />
    </React.Fragment>
  );
}
