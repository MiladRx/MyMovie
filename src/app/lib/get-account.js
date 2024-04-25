import Axios from "axios"

export default async function getAccount(session_id) {
    try {
        const response = await Axios.get(`https://api.themoviedb.org/3/account?api_key=83eb7e97b57ba8e00f72120d25263be3&session_id=${session_id}`)
        return response.data
    } catch (error) {
        console.error(error)
        return null
    }
}
