import axios from "axios";

const baseURL = 'https://lepeshka25-fcb6c-default-rtdb.firebaseio.com/'

const instance = axios.create({baseURL})

export default instance