import React, { Component } from "react";
import { TopNavBarComponent } from "../../../components/TopNavBarCompontnent/TopNavBarComponent";
import { BottomFooterComponent } from "../../../components/BottomFooterComponent/BottomFooterComponent";
import { StringTable } from "../../../service/StringTable";
import "./MembersPageComponent.scss";
import { IconTable } from "../../../service/IconTable";

class MembersPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam:  "all",
    }
  }

  
  onClickTeamSelectButton(buttonTitle) {
    console.log(buttonTitle);
    this.setState({
      selectedTeam: buttonTitle,
    });
  }


  render() {
    let teamSelectButtons = ['all', 'startegy', 'finance', 'management'].map((item) => {
      let buttonClass = this.state.selectedTeam === item
        ? `team-select-button selected`
        : `team-select-button`;
      return (
        <div className={buttonClass} onClick={() => this.onClickTeamSelectButton(item)}>
          {item.toUpperCase()}
        </div>
      )
    })

    let displayedMemberCards = StringTable.MEMBERS.MAIN.CARDS
      .filter((card) => card.data.team.indexOf(this.state.selectedTeam) > -1)
      .map((card) => {
        
        let bottomHandleIcon = card.selected ? IconTable.HOME.BLACK : IconTable.MENU.BLACK;
        let detailContentClass = card.selected ? "card-detail-content selected" : "card-detail-content";
        let postionItems = card.data.positions.map((positions) => (
          <span className="position-item">{positions}</span>
        ));

        return(
          <div className="members-card-item shadow-3">
            <div className="card-main-content">
              <div className="main-content-left-wrapper">
                <div className="profile-img-wrapper" 
                  style={{
                    backgroundImage:`url(${card.data.profile_img_src}`,
                    borderColor: card.color,
                  }}
                ></div>
              </div>
              <div className="main-content-right-wrapper">
                <div className="name-wrapper">{card.data.name}</div>
                <div className="university-wrapper">{card.data.university}</div>
                <div className="major-wrapper">{card.data.major}</div>
                <div className="position-items-wrapper">{postionItems}</div>
              </div>
            </div>

            <div className={detailContentClass}>
              <div className="contact-wrapper"></div>
              <div className="career-wrapper"></div>
            </div>

            <div className="card-bottom-handle">
              <div className="card-bottom-handler-icon-wrapper" style={{backgroundImage:`url(${bottomHandleIcon})`}}></div>
            </div>

          </div>
        )
      });

    return (
      <div className="members-page-component-wrapper page-component-wrapper">
        <div className="members-page-main-content-wrapper">
          <TopNavBarComponent theme="white-black" />

          <div className="members-page-img-banner-wrapper"></div>

          <div className="members-page-main-content-inner-wrapper">
            <div className="members-content-wrapper responsive-handler-wrapper">
              <div className="title-wrapper">
                <div className="title-text">MEMBERS</div>
                <div className="title-line"></div>
              </div>

              <div className="logo-wrapper"></div>

              <div className="members-select-button-wrapper">
                {teamSelectButtons}
              </div>

              <div className="members-cards-wrapper">
                {displayedMemberCards}
              </div>
            </div>
          </div>

          <BottomFooterComponent theme="black-white" />
        </div>
      </div>
    );
  }
}
export default MembersPageComponent;
