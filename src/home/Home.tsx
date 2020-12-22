import * as React from "react";
import homeStyles from "../styles/home/Home.module.scss";
import pageStyles from "../styles/shared/Page.module.scss";
import classNames from "classnames";
import { SOCIAL_MEDIA_LINKS } from "./SocialMediaLinks";
import { isMobileOnly } from "react-device-detect";
import { Button, Colors, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Link } from "react-router-dom";

export class Home extends React.PureComponent {
  render() {
    return (
      <div
        className={classNames(pageStyles.page, homeStyles.homeApp, {
          [homeStyles.mobile]: isMobileOnly
        })}
      >
        <div className={homeStyles.logoContainer}>
          <img
            src="img/TMLI_Logo_White.png"
            alt=""
            className={homeStyles.logo}
          />
        </div>
        <div className={homeStyles.bottomContainer}>
          <Link className={homeStyles.enterButton} to="/about">
            <Button
              minimal={true}
              text="Check it out"
              large={true}
              rightIcon={
                <Icon icon={IconNames.CHEVRON_RIGHT} color={Colors.WHITE} />
              }
            />
          </Link>
          <div className={homeStyles.linkContainer}>
            {SOCIAL_MEDIA_LINKS.map(link => (
              <img
                className={homeStyles.linkImage}
                key={link.id}
                src={link.image}
                alt=""
                onClick={() => this.handleOpenLink(link.url)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  private handleOpenLink = (url: string) => {
    window.open(url, "_blank");
  };
}
