import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

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
      }
      ships {
        name
        image
      }
      id
    }
  }
`;

export default function LaunchMissions() {

  const { data, error, loading } = useQuery(GET_MISSIONS);

  if (error) return <div>Something Went Wrong!</div>;
  if (loading) return <Loader />;

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Typography variant="h1">SpaceX API</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 5,
          gridTemplateColumns: "repeat(2, 600px)",
          justifyContent: "center",
          alignItems: "center",
         }}
        >
        {data.launchesPast.map((launch) => {
          return (
              <Card key={launch.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    alt={launch.mission_name}
                    src={
                      launch && launch.ships[0] && launch.ships[0].image
                        ? launch.ships[0].image
                        : require("./img/spacex-ship-pic.jpg")
                    }
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-around",
                        height: "130px",
                      }}
                    >
                      <Typography variant="h5">
                        {launch.mission_name}
                      </Typography>
                      <Typography variant="caption" color="gray">
                        {launch.launch_site.site_name_long}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
          );
        })}
      </Box>
    </React.Fragment>
  );
}
