import "./myTodo.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadWeather } from "./redux/reducers/weatherReducer";

function Weather() {
    const [text, setText] = useState("")
    const weather = useSelector((state) => state.weather)
    const weatherName = useSelector((state) => state.weather.data.name)
    const weatherLon = useSelector((state) => state.weather?.data?.coord?.lon)
    const weatherLat = useSelector((state) => state.weather?.data?.coord?.lat)

    const dispatch = useDispatch()

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "50px",
            }}
        >
            <div style={{ margin: "0 auto" }}>
                <h1 style={{ paddingLeft: "23px" }}>Weather</h1>
                <input
                    placeholder="Enter any city..."
                    className="inputTask"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></input>
            </div>
            <button
                style={{ margin: "0 auto", width: "100px" }}
                onClick={() => dispatch(loadWeather(text))}
                className="btnWeather"
            >
                Submit
            </button>
                <div style={{alignSelf: 'center'}}>
                    {!weather.error ? 
                        (<div >
                            <h1>{weatherName}</h1>
                            <p>{weatherLon}</p>
                            <p>{weatherLat}</p>
                        </div>) 
                        : (
                            <div style={{marginTop: '15px'}}>Something went wrong...</div>
                        )
                    }
                </div>
        </div>
    );
}

export default Weather;
