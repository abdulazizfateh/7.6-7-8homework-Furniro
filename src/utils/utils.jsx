import { Suspense } from "react"
import "./utils.css";

const Loading = () => {
    return <div className="flex items-center justify-center w-full h-screen">
        <div className="loader"></div>
    </div>
}

export const SuspenseCustom = ({ children }) => {
    return <div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
}