import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.weatherstack.com/current?query=RiodeJaneiro",
        {
          headers: {
            Authorization: "9e5a42dea2e493e4176f3723994abb9d",
          },
        }
      );
      setData(res?.data);
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData()
  }, [])

  console.log(data);
  return (
    <>
      <div className="flex bg-black">
        <h3>City</h3>
        <div className="flex flex-row">
          <div>
            <h3>icon</h3>
            <h2>climate</h2>
          </div>
          <h2>22degree</h2>
          <div className="flex">
            <h4>wind:</h4>
            <h4>precip</h4>
            <h4>pressure</h4>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex">
            <h2>wed</h2>
            <h6>icon</h6>
            <h5>degree</h5>
          </div>
          <div className="flex">
            <h2>wed</h2>
            <h6>icon</h6>
            <h5>degree</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
