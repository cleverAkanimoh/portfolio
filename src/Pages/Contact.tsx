import { useState } from 'react';
import { motion as m } from 'framer-motion'
import { animateHeader as h, animateHeader as h1, container, item } from '../ts/framerAnimation';
import { useWindowTitle } from '../Hooks/useWindowTitle';
import useWordCount from '../Hooks/useWordCount';
// import { handleChange } from '../Hooks/handleChange';

export default function Contact() {

  const [messageText, setMessageText] = useState('Message goes here...')

  useWindowTitle('Connect | Portfolio')

  const handleChange = (event: any) => {
    event.preventDefault()
    const { value } = event.target
    setMessageText(value)
  }

  const handleClick = () => alert(messageText)


  const wordCount = useWordCount(messageText)

  return (
    <m.header
      initial={h.initial}
      animate={h.animate}
      transition={h.transition}
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-chocolate text-white font-sans"
    >
      <section className='overflow-hidden p-2 my-20'>
        <m.h1
          initial={h1.initial}
          animate={h1.animate}
          transition={h1.transition}
          className="text-4xl font-bold font-sofia"
        >Let's Connect</m.h1>
      </section>

      <m.section
        variants={container}
        initial="hidden"
        animate="show"
        className='w-[97%] min-w-[300px] max-w-[600px]'
      >
        <div className='bg-white w-full h-30 py-4 px-6 rounded-2xl overflow-hidden'>
          <div className='overflow-hidden'>
            <m.h1 variants={item} className='text-black font-Inter text-xl sm:text-2xl font-semibold'>Send me a private message</m.h1>
          </div>
          <div className='flex items-center my-4 w-full border-2 border-chocolate rounded-xl px-5 py-2 overflow-hidden'>
            <m.textarea
              name='messageBox'
              value={messageText}
              onChange={handleChange}
              variants={item}
              placeholder="you've typed nothing..."
              className='text-lg resize-none font-Handrawn text-gray flex-1 mr-4 rounded-lg outline-none'
            />

            <m.button
              onClick={handleClick}
              variants={item}
              className='text-white font-lato p-2 py-3 rounded-lg bg-gradient-to-r from-chocolate to-copper transition-all duration-500'
            >Send</m.button>
          </div>
          {wordCount && <span className='text-white font-bold bg-chocolate rounded-lg p-1'><i>{wordCount}</i> {wordCount === 1 ? "word" : "words"}</span>}
        </div>
      </m.section>
    </m.header>
  )
}
