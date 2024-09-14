import axios from "axios"
import { useState, useEffect } from "react"
import Footer from "./components/footer"
const API_KEY = import.meta.env.VITE_API_KEY


function App() {

    const [result, setResult] = useState([])

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
        }
    }

    useEffect(() => {
        img()
    }, [])

    return (
        <>
            <img src={result.imgUrl} alt="" />
            <Footer title={result.title} date={result.date} />
        </>
    )
}

export default App
