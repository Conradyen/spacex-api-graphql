import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  return (
    <div className="card card-body md-3">
      <div className="row">
        {" "}
        <div className="col-md-9">
          <h4>
            Mission name :{" "}
            <span className={launch_success ? `text-success` : `text-danger`}>
              {mission_name}
            </span>
          </h4>
          <p>
            Date :{" "}
            <Moment formate="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
