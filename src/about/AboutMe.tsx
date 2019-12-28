import * as React from "react";
import aboutMeStyles from "../styles/about/AboutMe.module.scss";
import pageStyles from "../styles/shared/Page.module.scss";
import classNames from "classnames";

export class AboutMe extends React.PureComponent {
  render() {
    return (
      <div className={classNames(pageStyles.page, aboutMeStyles.aboutMePage)}>
        About me. yo yo yo.
      </div>
    );
  }
}
