import { useState } from "react"

const useHover = () => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return {
        isHover,
        setIsHover,
    }
}

export default useHover
