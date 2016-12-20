import React, { Component } from 'react';
import './FoldFive.scss';

class FoldFive extends Component {
  render() {
    return (
      <div className="FoldFive" id="FoldFive">
      <div className="content">
        <div className="anchor5"></div>
        {/* <h3>Connect</h3> */}

        <div id="connections1">
          <div className="connection" id="GitHub">
            <a href="https://github.com/EricCasey" target="_blank">
              <img src="http://i.imgur.com/WeeNM8F.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="Linkedin">
            <a href="https://ca.linkedin.com/in/ericsebastiancasey" target="_blank">
              <img src="http://i.imgur.com/oDMwYCE.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="Reddit">
            <a href="https://www.reddit.com/user/Casey_works/" target="_blank">
              <img src="http://i.imgur.com/qvrLHEi.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="twitch">
            <a href="https://www.twitch.tv/casey_works" target="_blank">
              <img src="http://i.imgur.com/F5uBFAE.png" role="presentation"/>
            </a>
          </div>
        </div>

        <div id="connections2">
          <div className="connection">
            <a href="skype:ericcasey509?userinfo" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Skype_logo.svg/2000px-Skype_logo.svg.png" role="presentation" id="skype"/>
            </a>
          </div>

          <div className="connection" >
            <a href="" target="_blank">
              <img src="http://i.imgur.com/4bcLHMV.png" id="steam" role="presentation"/>
            </a>
          </div>

          <div className="connection">
            <a href="https://www.codewars.com/users/EricCasey" target="_blank">
              <img src="http://i.imgur.com/dpxnuUE.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="email">
            <a href="mailto:eric@casey.works" target="_blank">
              <p>email?</p>
            </a>
          </div>
        </div>

      </div>
      </div>
    );
  }
}

export default FoldFive;
