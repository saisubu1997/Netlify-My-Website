import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Gait Line Analysis</h1>
          </p>
          <br />
          <p1>
            <h2>
              Designed and Devoloped By- Sai Subramaniam V , Rajesh B, Sai
              Krishnan M
            </h2>

            <h4>(Finalyear Project)</h4>
          </p1>
          <div>
            <h5>The objectives of this system are listed as follows:</h5>
            <div>
               It is used to analyze various gait patterns and identify each of
              them uniquely.
              <br /> From the analysis results, security and authentication -
              with respect to each individual’s posture and movements, is
              achieved.
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Served From Host <code>src/App.js</code>
          </p>

          <img
            src="https://cdn-images-1.medium.com/max/1600/1*1F2CGO_OyhOnp397-1ysNw.gif"
            alt="logo"
          />
          <p>
            <h4>Pipelined to Firebase:</h4>
            <div>
              The proposed system is focused on the authentication part of gait
              analysis, in order to achieve a unique security mechanism.
              Moreover, this system will be able to differentiate various gait
              patterns of humans and identifies the exact body posture and
              movements of each individual, so as to authenticate the system.
              Also, it provides an additional level of authentication and
              security along with other methods.
              <div>
                <br />
                1.1 VIDEO CAPTURING:
                <br />
                This is the first module, where the gait of the individual is
                captured and stored with the help of video capturing technique.
                In this application, this technique is carried out with the help
                of web camera. The gait captured from this web camera is stored
                in a database and it is trained. This training of the gait is
                performed in the further module.
              </div>
              <div>
                <br />
                1.2 TRAINING OF THE GAIT:
                <br />
                This module describes about the training of the captured gait.
                Here, the gait is trained and tested in accordance with
                previously stored gait, of the respective individual. This is
                one of the major and crucial modules of this application.
              </div>
              <div>
                <br />
                1.3 PUSHING INTO THE DATABASE:
                <br />
                Firebase data is retrieved by attaching an asynchronous listener
                to a ‘firebase.database.Reference’. The listener is triggered
                once for the initial state of the data and again anytime the
                data changes.
              </div>
              <div>
                <br />
                1.4 PREDICTION & AUTHENTICATION:
                <br />
                Trained and tested gaits are stored in a database for the sole
                purpose of predicting the gait pattern with the respect to the
                captured gait from the first module. The main functionality of
                this application is performed in this module. Here, the captured
                gait is authenticated by comparing it with the stored gaits and
                the outcome is predicted, whether it is the gait of the same
                individual or not.
              </div>
              <div>
                <br />
                1.5 EXPORTING THE TRAINED MODEL:
                <br />
                An export operation copies documents from your database to a set
                of files in a Cloud Storage bucket. Note that an export is not
                an exact database snapshot taken at the export start time. An
                export may include changes made while the operation was running.
                Use the ‘firestore export’ command to export all the documents
                in your database, replacing [BUCKET_NAME] with the name of your
                Cloud Storage bucket. Add the ‘–async’ flag to prevent the
                ‘gcloud’ tool from waiting for the operation to complete.
              </div>
            </div>
            <br />
            <h4>FUTURE SCOPE:</h4>
            The future of gait analysis will require the ability to identify the
            critical tests, interpret data more quickly, predict the outcome of
            various clinical procedures, and quantify the outcome. Gait
            classification techniques will allow this to happen. The computer
            revolution will aid in developing new paradigms for computerized
            human movement analysis. New experimental techniques will be
            developed that will allow us to obtain real-time motion
            measurements. It is increasingly important that we consider the
            effectiveness of gait analysis and the role it will play in shaping
            the outcome of security and analysis phase.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
