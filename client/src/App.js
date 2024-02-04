import { useState, useEffect } from 'react'

const App = () => {
    const [isValid, setIsValid] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const animationPause = setTimeout(() => {
            setIsValid(true)
        }, 1000);

        const opacityPause = setTimeout(() => {
            setIsVisible(true)
        }, 3000);

        return () => {
            clearTimeout(animationPause)
            clearTimeout(opacityPause)
        }
    }, [])

    return (
        <div className="w-screen h-screen bg-login flex justify-center items-center overflow-hidden">
            <div
                className={`
                    relative rounded-full bg-gradient-to-b from-gray-700 via-gray-900 to-black w-2/5 aspect-square
                    transform transition-transform duration-1000 ease-in-out ${isValid ? 'translate-y-50' : '-translate-y-full'}
                `}
            >
                {isVisible &&
                    <div className={`absolute flex flex-col items-center justify-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden rounded-3xl w-login h-login bg-white opacity-100`} >
                        <div className='flex flex-col items-center justify-between m-10 px-8 py-12'>
                            <h1 className='text-xl font-bold text-gray-900 '>Action</h1>
                            <form className='flex flex-col p-10 gap-2 items-center justify-center rounded-md'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                                <input type='password' placeholder='Password' />
                                <button>Sign Up</button>
                            </form>
                            <div className='flex flex-col items-center justify-between'>
                                <div>Log In</div>
                                <div>Goggle</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default App;