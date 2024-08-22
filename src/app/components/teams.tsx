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
  playerEliminated: {
    textDecoration: "line-through",
    color: "red",
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
          return (
            <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title>{teamScore.team.name}</Card.Title>
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
