import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LaunchMissionsCard } from "./components/LaunchMissionsCard";
import { ModalItem } from "./components/ModalItem";
import Loader from "./components/Loader";
import "./App.css";

const GET_MISSIONS = gql`
  query {
    launchesPast(limit: 12) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
      ships {
        name
        image
      }
      id
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(GET_MISSIONS);

  if (error) return <div>Error</div>;
  if (loading) return <Loader />;

  return (
    <div className="container mt-2">
      <h1 align="center" className="p-2 mt-5 mb-5 text-white">
        SpaceX API
      </h1>
      <div className="row">
        {data.launchesPast.map((launch) => {
          return (
            <React.Fragment>
              <LaunchMissionsCard launch={launch} />
              <ModalItem launch={launch} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
