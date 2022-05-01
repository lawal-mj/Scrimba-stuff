import React from 'react';


function Card(props) {

  const [count, setCount] = React.useState(0)

    function add() {
      setCount(function(oldCount) {
        return oldCount + 1
      })
    }

    function Subtract() {
      setCount(function(oldCount) {
        return oldCount -1
      })
    }
  return (

    <>
    <div className="card">
      <div className="card--image">
        <img src={"./images/" + props.item.img} alt="a1.png" />
      </div>

      <div className="card--body">
        <div className="card--location--line">
          <p className="card--location--logo-country">
            <span>
              <img className="card--location-icon" src="./images/icons/location.png" alt="" />
            </span>
            <span>{props.item.country}</span>
          </p>
          <div className="map--link">
          <span>
            <a href="www.google.com">View on google Maps</a>
          </span>
        </div>
        </div>


        <h1 className="card--maintext">{props.item.location}</h1>
        <p className="card--dates">{props.item.date}</p>
        <p>
          {props.item.description}
          <button onClick={Subtract}>Subtract 1</button>
          <span>{count}</span>
          <button onClick={add}>Add 1</button>
          
        </p>
      </div>
    </div>
    <hr />

    </>
  );
}

export default Card;



// function Example() {
//   // Declare a new state variable, which we'll call "count"  ;
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }