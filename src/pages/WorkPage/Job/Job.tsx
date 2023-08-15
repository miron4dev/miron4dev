import React from "react";
import classNames from "classnames";
import moment from "moment";
import { Card, ListGroup } from "react-bootstrap";
import * as styles from "./Job.module.less";

interface JobProps {
  companyName: string,
  from: string,
  to?: string,
  position: string,
  achievements?: string[] | string;
}

const DATE_FORMAT_FROM = "MM.YYYY";
const DATE_FORMAT_TO = "MMMM YYYY";

const Job = ({ companyName, from, to, position, achievements }: JobProps) => {

  const isPassed = to !== undefined;

  const renderDate = () => {
    const fromDate = moment(from, DATE_FORMAT_FROM).format(DATE_FORMAT_TO);
    const toDate = to ? moment(to, DATE_FORMAT_FROM).format(DATE_FORMAT_TO) : "Ongoing";
    return fromDate + " - " + toDate;
  };

  return (
    <div className={styles.jobsWrapper}>
      <div className="flex-column d-sm-flex">
        <div className="row h-50">
          <div className={classNames("col", isPassed ? styles.borderRight : "")}>&nbsp;</div>
          <div className="col">&nbsp;</div>
        </div>
        <h5 className="m-2">
              <span
                className={classNames("badge", styles.badgePill, isPassed ? "bg-secondary" : "bg-success")}>
                &nbsp;
              </span>
        </h5>
        <div className="row h-50">
          <div className={`col ${styles.borderRight}`}>&nbsp;</div>
          <div className="col">&nbsp;</div>
        </div>
      </div>
      <Card className={isPassed ? styles.cardWrapperPast : styles.cardWrapperCurrent}>
        <Card.Header className={styles.cardHeader}>
          {position} at {companyName} <span>{renderDate()}</span>
        </Card.Header>
        <Card.Body className={styles.cardBody}>
          <ListGroup>
            {achievements.map((value, index) =>
              <ListGroup.Item key={index} className={styles.jobAchievement}>
                {value}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Job;
