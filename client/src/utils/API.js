import axios from "axios";

export default {
    createReadme: function (data) {
        console.log(data)
        return axios.post("/createfile", data)
    }
}