export const ModalItem = ({ launch }) => (
  <div
    className="modal fade"
    id={`card${launch.id}`}
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title text-center" id="exampleModalLabel">
            {launch.mission_name}
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
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
                <h5 className="card-title">
                  Ship:{" "}
                  {launch && launch.ships[0] && launch.ships[0].name
                    ? launch.ships[0].name
                    : "SpaceX"}
                </h5>
                <hr />
                  <h6>Rocket: {launch.rocket.rocket_name}</h6>
                  <h6>RocketType: {launch.rocket.rocket_type}</h6>
                  <hr />
                  <h6>LaunchSite: {launch.launch_site.site_name_long}</h6>
                  <h6>LaunchTime: {launch.launch_date_local}</h6>
              </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
