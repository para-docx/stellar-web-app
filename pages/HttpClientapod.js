import axios from "axios"

export default {
  getApod() {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=vRjbG1KkWxFf5DJQPypSpEFd3GuIbRXDNeyt9Vfs")
  },
}