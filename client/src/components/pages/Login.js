import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from 'react'
import Input from "../Input";

const LoginPage = () => {
    const [isValid, setIsValid] = useState(false)
    const [isOpacity, setIsOpacity] = useState(false)
    const [googlePing, setGooglePing] = useState(false)

    const handleClickPing = () => {
        setGooglePing(true)
        setTimeout(() => {
            setGooglePing(false)
        }, 1000);
    }

    useEffect(() => {
        const animationPause = setTimeout(() => {
            setIsValid(true)
        }, 1000);

        const opacityPause = setTimeout(() => {
            setIsOpacity(true)
        }, 1300);

        return () => {
            clearTimeout(animationPause)
            clearTimeout(opacityPause)
        }
    }, [])

    return (
        <div
            className={`
                    relative rounded-full bg-gradient-to-t from-gray-700 via-gray-950 to-black w-2/5 aspect-square overflow-hidden
                    transform transition-transform duration-300 ease-in-out ${isValid ? '-translate-y-50' : 'translate-y-full'}
                `}
        >
            <div className={`
                        absolute flex flex-col items-center justify-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden rounded-3xl w-login h-login bg-white bg-tasks bg-center bg-no-repeat 
                        transition-opacity duration-1000 ease-in ${isOpacity ? 'opacity-100' : 'opacity-0'}
                    `} >
                <div className='flex flex-row justify-center items-center bg-gradient-to-t  from-gray-700 via-gray-450 bg-opacity-40 w-login h-login'>
                    <div className='flex flex-col justify-center items-center'>
                        <form className="m-2 flex flex-col h-form justify-between items-center font-extralight ">
                            <div  className=" h-20 flex flex-col justify-between items-center gap-2 text-white ">
                                <Input type={'text'} placeholder={'Enter your name'} >Name</Input>
                                <Input type={'email'} placeholder={'Enter your email'} >Email</Input>
                            </div>
                            <div  className=" h-20 flex flex-col justify-between items-center">
                                <button
                                    className='w-72 p-1 bg-gray-200 border-gray-200 hover:bg-gray-950 hover:border-gray-950  bg-opacity-30 hover:bg-opacity-90 hover:text-white rounded-lg'
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={handleClickPing} className=' flex flex-row justify-center items-center gap-2 w-72 p-1 bg-gray-200 text-gray-900 opacity-70 hover:opacity-100 border-gray-200 rounded-lg'
                                >
                                    <FcGoogle className={`${googlePing ? 'animate-ping' : 'animate-none'}`} />
                                    Sign In with Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage;