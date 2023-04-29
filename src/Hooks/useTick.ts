import { useCallback, useEffect, useState } from 'react';

const useTick = (
    skills: string[],
    typingSpeed: number,
    deletionSpeed?: number | undefined,
) => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    useEffect(() => {
        let ticker = setInterval(() => tick(), delta)

        return () => clearInterval(ticker)
    }, [text])

    const tick = useCallback(tickFn, [text])

    function tickFn() {
        let i = loopNum % skills.length
        let fullText = skills[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) setDelta((prevDelta: number) => prevDelta / 2)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(typingSpeed)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(deletionSpeed || 1000)
        }
    }

    return text;
}


export default useTick;