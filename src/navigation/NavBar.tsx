import * as React from "react";
import navBarStyles from "../styles/navigation/NavBar.module.scss";
import { SOCIAL_MEDIA_LINKS } from "../home/SocialMediaLinks";
import { Link } from "react-router-dom";

export class NavBar extends React.PureComponent {
  render() {
    return (
      <div className={navBarStyles.navBarContainer}>
        <div className={navBarStyles.logoContainer}>
          <Link to="/">
            <img src="img/TMLI_Logo.png" alt="" className={navBarStyles.logo} />
          </Link>
        </div>
        <div className={navBarStyles.internalLinkContainer}>nav stuff</div>
        <div className={navBarStyles.externalLinkContainer}>
          {SOCIAL_MEDIA_LINKS.map(link => (
            <img
              className={navBarStyles.linkImage}
              key={link.id}
              src={link.image}
              alt=""
              onClick={() => this.handleOpenExternalLink(link.url)}
            />
          ))}
        </div>
        <div className={navBarStyles.attributionContainer}>
          <span className={navBarStyles.copyright}>© 2020</span>
          <span className={navBarStyles.author}>Becky Moore</span>
        </div>
      </div>
    );
  }

  private handleOpenExternalLink = (url: string) => {
    window.open(url, "_blank");
  };
}
