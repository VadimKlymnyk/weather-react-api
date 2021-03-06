export async function SearchCity(dispatch, city) {
  try {
    dispatch({ type: "GET_WEATHER" });
    let data = await makeRequest(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738&units=metric`
    );
    //console.log(data)
    //let data = await response.json();
    dispatch({ type: "GET_WEATHER_SUCCESS", data });
    return data;
  } catch (error) {
    dispatch({ type: "GET_WEATHER_ERROR", error });
    console.log(error);
  }
}

export async function RequestWeatherFiveDay(dispatch, city) {
  try {
    dispatch({ type: "GET_WEATHER_FIVE" });
    let data = await makeRequest(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c2dcf8ffb5cdc3f8977bfd2ae7ea4738&units=metric`
    );
    //let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_WEATHER_FIVE_SUCCESS", data });
    return data;
  } catch (error) {
    dispatch({ type: "GET_WEATHER_FIVE_ERROR", error });
    console.log(error);
  }
}

function makeRequest(url, options = {}) {
  return fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return response.text.then((text) => {
        throw new Error(text);
      });
    }
    return response.json();
  });
}
