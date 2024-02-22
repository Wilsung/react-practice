import { useState, useEffect } from "react";

import Error from "./Error.jsx";
import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchingAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // fetch("http://localhost:3000/places").then((response) => {
    //   return response.json();
    // }).then((resData) => {
    //   setAvailablePlaces(resData.places)
    // });

    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchingAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
        });
        setAvailablePlaces(places);
        setIsFetching(false); //Since we are using navigator above, this is not handled by await,
        //therefore useEffect will continue to run without waiting for navigator data.
        //So we have to setFetching here since doing it after catch will be too early.
      } catch (error) {
        setError({ message: error.message || "Could not fetch places!" });
        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error has occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching locations..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
