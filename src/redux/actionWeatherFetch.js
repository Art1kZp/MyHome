  
// export const fetchWeather = (city) => async dispatch => {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdc99ac434a0f71ae697e7181f6707e5`);
//     dispatch({ type: "FETCH_WEATHER", payload: res });
//   };

// export function fetchWeather(city) {
//     return function action(dispatch) {
//         console.log('[2]', 2);
//       dispatch({ type: "FETCH_WEATHER"})
//     const request = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bdc99ac434a0f71ae697e7181f6707e5`)
      
//       return request.then(
//         console.log('[3]', 3)
//         response => console.log('[response]', response),
//         err => console.log('[err]', err)
//         response => dispatch(fetchOffersSuccess(response)),
//         err => dispatch(fetchOffersError(err))
//       );
//     }
//   }
