// gives us access to form
const form = document.querySelector("form")!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

// retrieving search address
function searchAddressHandler(event: Event) {
  event.preventDefault();
  
  const enteredAddress = addressInput.value;
  console.log('Entered address:', enteredAddress);

  // send search to googles api
}

// adding event listener to form
form.addEventListener('submit', searchAddressHandler);