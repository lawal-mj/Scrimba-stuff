function Card(props) {
  return (

    <>
    <div className="card">
      <div className="card--image">
        <img src={"./images/" + props.img} alt="a1.png" />
      </div>

      <div className="card--body">
        <div className="card--location--line">
          <p className="card--location--logo-country">
            <span>
              <img className="card--location-icon" src="./images/icons/location.png" alt="" />
            </span>
            <span>{props.country}</span>
          </p>
          <div className="map--link">
          <span>
            <a href="www.google.com">View on google Maps</a>
          </span>
        </div>
        </div>


        <h1 className="card--maintext">{props.location}</h1>
        <p className="card--dates">{props.date}</p>
        <p>
          {props.description}
        </p>
      </div>
    </div>
    <hr />

    </>
  );
}

export default Card;
