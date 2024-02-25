import { useEffect, useState } from "react"

export const _useHash = () => {
    const [hash, setHash] = useState<string>('')

    const updateColorsbyHash = (colors: string[]) => {
        setHash(colors.toString())
    }


    useEffect(() => {
        document.location.hash = hash
    }, [hash])


    return {
        updateColorsbyHash
    }
}