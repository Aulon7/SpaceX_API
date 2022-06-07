export const LaunchMissionsCard = ({ launch }) => (
  <div className="col-sm-6">
    <div className="card" key={launch.id}>
      <img
        src={
          launch && launch.ships[0] && launch.ships[0].image
            ? launch.ships[0].image
            : require("./img/spacex-ship-pic.jpg")
        }
        className="card-img-top"
        alt={launch.mission_name}
      />
      <div className="card-body">
        <h5 className="card-title">{launch.mission_name}</h5>
        <p className="card-text">{launch.launch_site.site_name_long}</p>
        <a
          href="#"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#card${launch.id}`}
        >
          View More
        </a>
      </div>
    </div>
  </div>
);
