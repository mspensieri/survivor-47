"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

import { computePlayerScore } from "../data/weeks";
import { TeamRankings } from "../data/rankings";

const styles = {
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "green",
  },
  cardNumber: {
    fontSize: "80pt",
  },
  accolades: {
    fontSize: "15pt",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginBottom: "15px",
    marginTop: "-10px",
    backgroundColor: "#facf8b",
    borderRadius: "10px",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "red",
  },
  card: {
    minHeight: "270px",
  },
  teamName: {
    marginBottom: "20px",
  },
};

class Teams extends React.Component<{
  thisWeekRankings: TeamRankings;
  currentWeek: number;
}> {
  render() {
    const { thisWeekRankings = [], currentWeek } = this.props;

    return (
      <Row>
        {...thisWeekRankings.map((teamScore) => {
          let accoladesComponent;

          if (teamScore.team.accolades) {
            const { first, second, third } = teamScore.team.accolades;
            accoladesComponent = (
              <div style={styles.accolades}>
                {first && <Card.Text>🥇 Season {first.join(", ")}</Card.Text>}
                {second && <Card.Text>🥈 Season {second.join(", ")}</Card.Text>}
                {third && <Card.Text>🥉 Season {third.join(", ")}</Card.Text>}
              </div>
            );
          }

          return (
            <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center" style={styles.card}>
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title style={styles.teamName}>
                    {teamScore.team.name}
                  </Card.Title>
                  {accoladesComponent}
                  {...[...teamScore.team.players]
                    .sort(
                      (a, b) =>
                        computePlayerScore(b, currentWeek, "total") -
                        computePlayerScore(a, currentWeek, "total")
                    )
                    .map((player, j) => {
                      return (
                        <Card.Text key={j}>
                          {player === teamScore.team.winner ? (
                            <span style={styles.indicatorGreenLarge}>[W] </span>
                          ) : (
                            ""
                          )}
                          {typeof player.eliminatedWeek !== "undefined" ? (
                            <span style={styles.playerEliminated}>
                              {player.name}
                            </span>
                          ) : (
                            player.name
                          )}{" "}
                          ({computePlayerScore(player, currentWeek, "total")})
                        </Card.Text>
                      );
                    })}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Teams;
