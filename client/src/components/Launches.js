import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);
  //   console.log(data);
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  );
}
