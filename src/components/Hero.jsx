import React from 'react'
function Hero() {
    return (
        <header className='w-full flex 
        justify-center items-center flex-col'>

            <nav className='flex justify-between
            items-center w-full mb-10 pt-3'>
                <img src="https://i.pinimg.com/originals/19/80/35/1980357581c853767f02a98d9daf14f1.png" alt="sumz_logo" className='w-28 h-12 object-contain' />
                <button type='button' onClick={() => window.open('https://github.com/Amcelo13/OpenAI_URL_summarizer')}
                    className='black_btn'>
                    Github
                </button>
            </nav>

            <h1 className="head_text pb-2">
                Summarize Articles with <br className='max-md:hidden' />
                <span className='blue_gradient'>
                    OpenAI GPT-4
                </span>
            </h1>

            <h2 className='desc'>
                Simplify your reading with Summize, an
                open-source article summarizer
                that transforms lengthy articles into
                clear and concise summaries
            </h2>
        </header>
    )
}

export default Hero