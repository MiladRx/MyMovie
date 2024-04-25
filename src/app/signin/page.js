"use client"

import Axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SigninPage() {
	const [token, setToken] = useState(null)

	async function createToken() {
		const response = await Axios.get("https://api.themoviedb.org/3/authentication/token/new", {
			headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2ViN2U5N2I1N2JhOGUwMGY3MjEyMGQyNTI2M2JlMyIsInN1YiI6IjY2MGZiZTYyZDQ4Y2VlMDE5ZmJkYjFkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F09Nb0fZo2SGzY1Z-zS8vr3_wkboDFex5AsUVaEqaIw"
			}
		})

		setToken(response.data.request_token)
	}
	
	useEffect(function() {
		createToken()
	}, [])

  return (
    <>
			<Link href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}>Sign in with TMDB</Link>
		</>
  )
}
