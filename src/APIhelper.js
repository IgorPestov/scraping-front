import axios from 'axios'

const API_URL = "http://localhost:3000/"

async function send (postData) {
const {data: newData} = await axios.post(API_URL +`send`, {postData})
return newData
}

export default {
    send
}