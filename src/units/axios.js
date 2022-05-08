import axios from "axios";

const instancce = axios.create({
    baseURL:"http://localhost:4000",
})

export default instancce;