import { useState, useEffect } from 'react'

const App = () => {
    const [isValid, setIsValid] = useState(false)
    const [opacity, setOpacity] = useState(false)

    useEffect(() => {
        const animationPause = setTimeout(() => {
            setIsValid(true)
        }, 1000);

        const opacityPause = setTimeout(() => {
            setOpacity(true)
        }, 1300);

        return () => {
            clearTimeout(animationPause)
            clearTimeout(opacityPause)
        }
    }, [])

    return (
        <div className="w-screen h-screen bg-login flex bg-no-repeat bg-gray-950 justify-center items-center overflow-hidden">
            <div
                className={`
                    relative rounded-full bg-gradient-to-t from-gray-700 via-gray-950 to-black w-2/5 aspect-square overflow-hidden
                    transform transition-transform duration-300 ease-in-out ${isValid ? '-translate-y-50' : 'translate-y-full'}
                `}
            >
                <div className={`
                        absolute flex flex-col items-center justify-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden rounded-3xl w-login h-login bg-white bg-tasks bg-center bg-no-repeat 
                        transition-opacity duration-1000 ${opacity ? 'opacity-100' : 'opacity-0'}
                    `} >
                    <div className='bg-gradient-to-t from-gray-700 via-gray-450 bg-opacity-40 w-login h-login'>
                        {/* Login Stuffx */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App;