const baseURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

const radianceProducts = async () => {
    const sendReq = await fetch(`${baseURL}`);
    const resp = await sendReq.json();
    console.log(resp) 
}
radianceProducts();