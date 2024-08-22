"use client";

import React from "react";
import Accordion from "react-bootstrap/esm/Accordion";
import Button from "react-bootstrap/esm/Button";

const styles = {
  weekButtonContainer: {
    borderTop: "0.1em solid var(--bs-link-color)",
  },
  weekButton: {
    borderRadius: "0",
    backgroundColor: "transparent",
    width: "100%",
    dropShadow: "none",
    textDecoration: "none",
  },
  selectedWeekButton: {
    backgroundColor: "var(--link-color-dark)",
    color: "black",
    border: "none",
    width: "100%",
  },
};

class WeekSelectorAccordion extends React.Component<
  {
    selectedWeek: number;
    setSelectedWeek: (week: number) => void;
    currentWeek: number;
  },
  {
    activeKey: string | null;
  }
> {
  constructor(props: {
    selectedWeek: number;
    setSelectedWeek: (week: number) => void;
    currentWeek: number;
  }) {
    super(props);

    this.state = {
      activeKey: null,
    };
  }

  render() {
    const { selectedWeek, setSelectedWeek, currentWeek } = this.props;

    return (
      <Accordion
        activeKey={this.state.activeKey}
        onClick={() => {
          if (this.state.activeKey) {
            this.setState({ activeKey: null });
          } else {
            this.setState({ activeKey: "0" });
          }
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Week {selectedWeek + 1}</Accordion.Header>
          <Accordion.Body>
            {[...Array(13)].map((_, index) => {
              const weekNumber = index;
              const disabled = currentWeek < weekNumber + 1;

              return (
                <div
                  style={{
                    ...styles.weekButtonContainer,
                    ...(weekNumber === 12 && {
                      borderBottom: "0.1em solid var(--bs-link-color)",
                    }),
                  }}
                  key={weekNumber}
                >
                  <Button
                    variant="link"
                    style={{
                      ...styles.weekButton,
                      ...(selectedWeek === weekNumber &&
                        styles.selectedWeekButton),
                    }}
                    onClick={() => {
                      setSelectedWeek(weekNumber);
                      this.setState({ activeKey: null });
                    }}
                    disabled={disabled}
                  >
                    Week {weekNumber + 1}
                  </Button>
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
}

export default WeekSelectorAccordion;
