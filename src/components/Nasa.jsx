import { useEffect, useState } from "react"
import axios from "axios"
import { Loading } from "./Loading"
const API_KEY = import.meta.env.VITE_API_KEY

function Nasa() {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)

    const img = async () => {
        try {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
            const response = await axios.get(url)
            setResult({
                date: response.data.date,
                imgUrl: response.data.url,
                title: response.data.title,
                explanation: response.data.explanation
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        img()
    }, [])

    return (
        <>
            {loading && <Loading />}
            {!loading && (
                <div className="h-screen relative">
                    <img src={result.imgUrl} alt="nasa-img" className="h-full w-full" />
                    <div className="absolute bottom-0 px-2 py-3 backdrop-blur-lg rounded bg-black/20">
                        <h1 className="text-xl text-gray-300">{result.title}</h1>
                        <h2 className="text-lg text-gray-200">{result.date}</h2>
                        <p className="text-lg text-gray-200">{result.explanation}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Nasa
