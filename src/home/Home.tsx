import * as React from "react";
import homeStyles from "../styles/home/Home.module.scss";
import pageStyles from "../styles/shared/Page.module.scss";
import { Button, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import classNames from "classnames";

export class Home extends React.PureComponent {
  render() {
    return (
      <div className={classNames(pageStyles.page, homeStyles.homeApp)}>
        Hello world!
        <Button
          text="My Button"
          icon={IconNames.HOME}
          intent={Intent.PRIMARY}
          minimal={true}
        />
      </div>
    );
  }
}
