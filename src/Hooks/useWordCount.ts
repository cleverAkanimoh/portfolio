import { useCallback, useEffect, useState } from 'react'

export default function useWordCount(messageText: string) {
    const [wordCountValue, setWordCountValue] = useState<number | null>(null)

    function wordCounterFn() {
        let newWord = messageText.trim().split(" ")

        messageText.length === 0 ? setWordCountValue(null) : setWordCountValue(newWord.length)
    }

    const wordCountFn = useCallback(wordCounterFn, [messageText])

    useEffect(wordCountFn, [messageText])

    return wordCountValue
}
