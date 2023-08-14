import React from "react";
import classNames from "classnames";
import moment from "moment";

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

  const renderJobDescription = () => {
    if (typeof achievements === "string") {
      return (
        <p className={classNames("card-text", { "text-muted": isPassed })}>
          {achievements}
        </p>
      );
    } else if (achievements instanceof Array) {
      return (
        <ul className={classNames("card-text company-achievement-list", { "text-muted": isPassed })}>
          {achievements.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      );
    }
  };

  return (
    <div className="job-description row">
      <div className="col-auto text-center flex-column d-none d-sm-flex">
        <div className="row h-50">
          <div className={classNames("col", { "border-right": isPassed })}>&nbsp;</div>
          <div className="col">&nbsp;</div>
        </div>
        <h5 className="m-2">
            <span
              className={classNames("badge", "badge-pill", isPassed ? "bg-secondary" : "bg-success border")}>
              &nbsp;
            </span>
        </h5>
        <div className="row h-50">
          <div className="col border-right">&nbsp;</div>
          <div className="col">&nbsp;</div>
        </div>
      </div>
      <div className="col py-2">
        <div
          className={classNames("card", "shadow", isPassed ? "border-secondary" : "border-success")}>
          <div className="card-header">
            <div className={classNames("float-left", "company-header", { "text-muted": isPassed })}>
              {companyName}
            </div>
            <div className={classNames("float-right", "company-header", { "text-muted": isPassed })}>
              {renderDate()}
            </div>
            <h2 className={classNames("card-title", { "text-muted": isPassed })}>
              {position}
            </h2>
          </div>

          <div className="card-body">
            {renderJobDescription()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
