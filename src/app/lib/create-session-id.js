import Axios from "axios"

export default async function createSessionId(request_token) {
    try {
        const response = await Axios.post("https://api.themoviedb.org/3/authentication/session/new", {
            request_token: request_token
        }, {    
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw"
            }
        })
        
        return response.data.session_id
    } catch (error) {
        console.error(error)
        return null
    }
}
