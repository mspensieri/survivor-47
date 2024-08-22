"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/esm/Navbar";
import { useState } from "react";

import { players } from "./data/players";
import { weeks } from "./data/weeks";
import { getTeamRankings, getPlayerRankings } from "./data/rankings";
import { teams, fakeTeams } from "./data/teams";
import Leaderboard from "./components/leaderboard";
import Teams from "./components/teams";
import Scores from "./components/scores";

const currentWeek = weeks.length;
const teamRankings = getTeamRankings(teams);
const playerRankings = getPlayerRankings(players);

const styles = {
  bold: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  rulesList: { listStyleType: "disc", lineHeight: 2 },
  firstListItem: {
    marginTop: "10px",
  },
  spoilersButton: {
    color: "white",
    backgroundColor: "rgb(57, 3, 1)",
    width: "200px",
    height: "50px",
    border: "1px solid white",
    borderRadius: "25px",
    left: "50%",
    marginTop: "200px",
    transform: "translateX(-50%)",
    display: "block",
    position: "absolute",
    zIndex: 10,
  },
};

function UncontrolledExample() {
  const [reveal, setReveal] = useState(false);

  function SpoilersButton() {
    return (
      <button
        style={styles.spoilersButton as any}
        onClick={() => setReveal(true)}
      >
        Reveal Spoilers
      </button>
    );
  }

  function SpoilerMask({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <SpoilersButton></SpoilersButton>
        <div className="blur">{children}</div>
      </div>
    );
  }

  function generateLeaderboardForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Leaderboard
            thisWeekRankings={getTeamRankings(fakeTeams)[0]}
            lastWeekRankings={getTeamRankings(fakeTeams)[0]}
          ></Leaderboard>
        </SpoilerMask>
      );
    } else {
      return (
        <Leaderboard
          thisWeekRankings={teamRankings[weekNumber]}
          lastWeekRankings={teamRankings[weekNumber - 1]}
        ></Leaderboard>
      );
    }
  }

  function generatePlayerScoresForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Scores
            thisWeekRankings={getPlayerRankings(players)[0]}
            lastWeekRankings={getPlayerRankings(players)[0]}
            weekNumber={0}
            teams={teams}
          ></Scores>
        </SpoilerMask>
      );
    } else {
      <Scores
        thisWeekRankings={playerRankings[weekNumber]}
        lastWeekRankings={playerRankings[weekNumber - 1]}
        weekNumber={weekNumber}
        teams={teams}
      ></Scores>;
    }
  }

  function generateTeams() {
    if (reveal) {
      return (
        <Teams
          thisWeekRankings={teamRankings[currentWeek - 1]}
          currentWeek={currentWeek}
        ></Teams>
      );
    } else {
      return (
        <SpoilerMask>
          return{" "}
          <Teams
            thisWeekRankings={getTeamRankings(fakeTeams)[0]}
            currentWeek={currentWeek}
          ></Teams>
          ;
        </SpoilerMask>
      );
    }
  }

  return (
    <Row>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand>
          <img
            src="torch.webp"
            alt="survivor logo"
            width={30}
            height={30}
            style={{ display: "inline" }}
          ></img>
          Survivor Pool Season 47
        </Navbar.Brand>
      </Navbar>
      <Tabs
        defaultActiveKey="leaderboard"
        id="uncontrolled-tab-example"
        variant="underline"
        className="mb-3"
        style={{ paddingLeft: "15px" }}
      >
        <Tab eventKey="leaderboard" title="Leaderboard">
          <Tabs
            defaultActiveKey={currentWeek}
            id="week-selector-leaderboard"
            className="mb-3"
          >
            {[...Array(13)].map((_, index) => {
              const weekNumber = index;
              const disabled = currentWeek < weekNumber + 1;
              return (
                <Tab
                  key={weekNumber}
                  eventKey={weekNumber + 1}
                  title={`Week ${weekNumber + 1}`}
                  disabled={disabled}
                >
                  {generateLeaderboardForWeek(weekNumber)}
                </Tab>
              );
            })}
          </Tabs>
        </Tab>
        <Tab eventKey="teams" title="Teams">
          {generateTeams()}
        </Tab>
        <Tab eventKey="players" title="Players">
          <Tabs
            defaultActiveKey={currentWeek}
            id="week-selector-players"
            className="mb-3"
          >
            {[...Array(13)].map((_, index) => {
              const weekNumber = index;
              const disabled = currentWeek < weekNumber + 1;
              return (
                <Tab
                  key={weekNumber}
                  eventKey={weekNumber + 1}
                  title={`Week ${weekNumber + 1}`}
                  disabled={disabled}
                >
                  {generatePlayerScoresForWeek(weekNumber)}
                </Tab>
              );
            })}
          </Tabs>
        </Tab>
        <Tab eventKey="rules" title="Rules" className="rules">
          The score per team is the sum of the scores of all players on the team
          across all weeks of play. In the event of a tie, the team whose
          predicted winner made it farthest in the season will win the pool.
          <br />
          <br /> The scores per player are calculated according to the following
          rules:
          <ul style={styles.rulesList}>
            <li style={styles.firstListItem}>
              <span style={styles.bold}>Immunity (team):</span> If a player is
              part of a team winning immunity: they receive 1 point
            </li>
            <li>
              <span style={styles.bold}>Immunity (indiv.):</span> If a player
              wins individual immunity: they receive 2 points
            </li>
            <li>
              <span style={styles.bold}>Advantage:</span> If a player receives
              an advantage (from a journey, a random twist, etc.): they receive
              1 point
            </li>
            <li>
              <span style={styles.bold}>Idols Found:</span> If a player finds a
              hidden immunity idol: they receive 2 points
            </li>
            <li>
              <span style={styles.bold}>Votes Nullified:</span> If a player
              properly uses an idol: they receive 1 point for every vote
              nullified
            </li>
            <li>
              <span style={styles.bold}>Jury Placement:</span> Initial jury
              members will receive 2 points, the 5th and 4th runner up get 3
              points, 3rd and 2nd runner up will receive 5 points, and the
              winner will receive 7 points. The player who wins fire will
              receive 1 extra point.{" "}
            </li>
          </ul>
        </Tab>
      </Tabs>
    </Row>
  );
}

export default UncontrolledExample;
