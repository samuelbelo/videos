import axios from 'axios'



const KEY = 'AIzaSyDvfO0nPj7zLU7nc10ZdYHCfQt59zgMxcc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})