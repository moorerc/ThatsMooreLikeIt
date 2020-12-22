import * as React from "react";
import aboutMeStyles from "../styles/about/AboutMe.module.scss";
import pageStyles from "../styles/shared/Page.module.scss";
import classNames from "classnames";
import { NavBar } from "../navigation/NavBar";

export class AboutMe extends React.PureComponent {
  render() {
    return (
      <div className={classNames(pageStyles.page, aboutMeStyles.aboutMePage)}>
        <NavBar />
        <div className={aboutMeStyles.pageContent}>About me. yo yo yo.</div>
      </div>
    );
  }
}
