/// <reference types="@types/googlemaps" />
import axios from "axios";


// Define the response type
type GoogleGeoCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

// Gives us access to form
const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyA82Ierp43O2hP24YNm7p972oWtEUgs-3E";

// Retrieving search address
function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;
  console.log("Entered address:", enteredAddress);

  // Send HTTP request to Google Geocoding API
  axios
    .get<GoogleGeoCodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    // checks response and saves coordinates
    .then(response => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 16
      }); 

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((error) => {
      alert(error.message);
      console.log("Error:", error);
    });
}

// Adding event listener to form
form.addEventListener("submit", searchAddressHandler);
