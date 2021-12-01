// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import {RefObject, useEffect, useState} from "react"
import {ApiResponse} from "punkApi";
// import '@testing-library/jest-dom'

export function useErika(audioRef: RefObject<HTMLAudioElement>, currentBeer: number) {
    const [buffer, setBuffer] = useState<string[]>([])

    function handleKeyDown(event: KeyboardEvent) {
        const key = event.key.toLowerCase()
        setBuffer((buffer) => [...buffer, key])
    }

    useEffect(() => {
        if(JSON.stringify(buffer.slice(-5, buffer.length)) === JSON.stringify(['e','r','i','k','a'])) {
            if(audioRef.current && currentBeer === 3) audioRef.current.play()
        }
    }, [buffer])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown)
            if(audioRef.current) audioRef.current.pause();
        }
        // eslint-disable-next-line
    }, [currentBeer])
}
