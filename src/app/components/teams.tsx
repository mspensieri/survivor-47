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
    textAlign: "center" as any,
    position: "absolute" as any,
    right: "10px",
    top: "10px",
    backgroundColor: "#facf8b",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "12pt",
    lineHeight: "1",
    fontWeight: "400",
  },
  medal: {
    fontSize: "17pt",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "red",
  },
  card: {
    minHeight: "270px",
  },
  teamName: {
    fontSize: "20pt",
    marginBottom: "20px",
  },
  captain: {
    marginTop: "-5px",
    marginBottom: "20px",
    fontWeight: "400",
    fontSize: "12pt",
    color: "#84827a",
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
                {first && (
                  <Card.Text>
                    <span style={styles.medal}>🥇</span>S{first.join(", ")}
                  </Card.Text>
                )}
                {second && (
                  <Card.Text>
                    <span style={styles.medal}>🥈</span>S{second.join(", ")}
                  </Card.Text>
                )}
                {third && (
                  <Card.Text>
                    <span style={styles.medal}>🥉</span>S{third.join(", ")}
                  </Card.Text>
                )}
              </div>
            );
          }

          return (
            <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center" style={styles.card}>
                {accoladesComponent}
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title style={styles.teamName}>
                    {teamScore.team.name}
                  </Card.Title>
                  {/* <Card.Title style={styles.captain}>
                    {teamScore.team.captain}
                  </Card.Title> 
                   { accoladesComponent} */}
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
