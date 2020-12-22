import * as React from "react";
import triviaStyles from "../styles/trivia/Trivia.module.scss";
import classNames from "classnames";
import { Button, Icon } from "@blueprintjs/core";
// import firebase from "firebase";
import { firebaseDB } from "../firebase";
import { IconNames } from "@blueprintjs/icons";
import { TriviaTeam } from "../state/trivia-app/TriviaAppState";

export class Trivia extends React.PureComponent {
  public componentDidMount() {
    firebaseDB
      .ref("teams")
      .once(`value`)
      .then((things: any) => {
        console.log(things.val());
      })
      .catch((err: any) => console.error(err));
  }

  public render() {
    return (
      <div className={classNames(triviaStyles.triviaPage)}>
        <div className={triviaStyles.triviaPageLeft}>
          <div className={triviaStyles.categoryHeader}>Round 1 Categories</div>
          <div className={triviaStyles.categoryBanner}>
            <div className={triviaStyles.bannerLabel}>1: Sports</div>
            <div className={triviaStyles.arrowRightFill} />
            <div className={triviaStyles.arrowRight} />
          </div>
          <div
            className={classNames(
              triviaStyles.categoryBanner,
              triviaStyles.currentCategory
            )}
          >
            <div className={triviaStyles.bannerLabel}>2: History</div>
            <div className={triviaStyles.arrowRight} />
          </div>
          <div className={triviaStyles.categoryBanner}>
            <div className={triviaStyles.bannerLabel}>3: Words</div>
            <div className={triviaStyles.arrowRightFill} />
            <div className={triviaStyles.arrowRight} />
          </div>
        </div>
        <div className={triviaStyles.triviaPageBase}>
          <div className={triviaStyles.baseHeader}>
            Rival Trivia for Charity
          </div>
          <div className={triviaStyles.baseContent}>
            <div className={triviaStyles.questionWrapper}>
              <div className={triviaStyles.category}>History</div>
              <div className={triviaStyles.question}>
                Why did the chicken cross the road?
              </div>
            </div>
          </div>
          <div className={triviaStyles.baseFooter}>
            Brought to you by Rival Gives Back
          </div>
        </div>
        <div className={triviaStyles.triviaPageRight}>
          <div className={triviaStyles.teamList}>
            <div className={triviaStyles.teamWrapper}>
              <Icon
                icon={IconNames.TICK_CIRCLE}
                className={triviaStyles.teamWrapperIcon}
              />
              Team 1
            </div>
            <div className={triviaStyles.teamWrapper}>
              <Icon
                icon={IconNames.REFRESH}
                className={triviaStyles.teamWrapperIcon}
              />
              Team 2
            </div>
          </div>
          <Button text="Do shit" onClick={this.handleClickDoShit} />
        </div>
        {/* <Button text="Do shit" onClick={this.handleClickDoShit} />
        <Button text="Get shit" onClick={this.handleClickGetShit} /> */}
      </div>
    );
  }

  private addTeam = () => {
    const teamsRef = firebaseDB.ref("teams");
    const team = {
      name: "Quizzin' on a Prayer",
      members: ["Dustin", "Elliot", "Snaps", "Ben"],
      charity: "La Soupe",
      location: "Columbus, OH",
    };
    teamsRef.push(team);
  };

  private handleClickDoShit = () => {
    this.addTeam();
    // console.log("handleClickDoShit");
    // const itemsRef = firebaseDB.ref("teams");
    // const item = {
    //   title: "chips",
    //   user: "becky",
    // };
    // itemsRef.push(item);
  };

  private handleClickGetShit = () => {
    // console.log(firebaseDB.ref("items").once(`value`));
    firebaseDB
      .ref("items")
      .once(`value`)
      .then((things: any) => {
        console.log(things.val());
      })
      .catch((err: any) => console.error(err));
  };
}
