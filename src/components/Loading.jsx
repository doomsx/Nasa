import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = () => {
    return (
        <main className="h-screen flex justify-center items-center">
            <AiOutlineLoading3Quarters className="text-5xl font-black animate-spin" />
        </main>
    )
}
