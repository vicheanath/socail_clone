import axios from "axios";

export default axios.create({
    baseURL: "https://asia-east2-restaurantmenu-fda8e.cloudfunctions.net/apiv1/",
    responseType: "json"
});