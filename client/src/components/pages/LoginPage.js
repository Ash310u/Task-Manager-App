import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from 'react'
import Input from "../Input";
import { useCreateAccountMutation } from "../../store";
import Link from "../Link"

const LoginPage = () => {
    const [opacityDiv, setOpacityDiv] = useState(false)
    const [opacityInput, setOpacityInput] = useState(false)
    const [googlePing, setGooglePing] = useState(false)

    // const [createAccount, results] = useCreateAccountMutation()

    const handleSubmit = (e) => {
        e.preventDefault()

        let user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        // createAccount(user)
    }


    const handleClickPing = () => {
        setGooglePing(true)
        setTimeout(() => {
            setGooglePing(false)
        }, 1000);
    }

    useEffect(() => {
        const opacityPause =setTimeout(() => {
                setOpacityDiv(true)
                setTimeout(() => {
                    setOpacityInput(true)
                }, 200);
            }, 1000);

        return () => {
            clearTimeout(opacityPause)
        }
    }, [])

    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-hidden backdrop-blur-md">
            <div
                className={`
                    relative rounded-full bg-login bg-fixed bg-center bg-no-repeat blur-none w-2/4 aspect-square
                    transition-opacity duration-700 ease-in-out ${opacityDiv ? 'opacity-100' : ' opacity-0'}
                `}
            >
                <div className={`
                        absolute flex flex-col items-center justify-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden rounded-full w-login h-login  bg-white bg-opacity-20 backdrop-blur p-5 bg-no-repeat transition-opacity duration-700 ease-in ${opacityInput ? 'opacity-100' : 'opacity-0'}
                    `} >
                    <div className='flex flex-row justify-center items-center  bg-opacity-10 w-full h-full rounded-full bg-login bg-center bg-fixed bg-no-repeat'>
                        <form onSubmit={handleSubmit} className="m-2 flex flex-col h-form justify-between items-center gap-20 font-extralight ">
                            <div className="flex flex-col justify-between items-center gap-2 text-white ">
                                <Input name='name' type={'text'} placeholder={'Enter your name'} >Name</Input>
                                <Input name='email' type={'email'} placeholder={'Enter your email'} >Email</Input>
                                <Input name='password' type={'password'} placeholder={'Enter a password'} >Password</Input>
                            </div>
                            <div className=" h-20 flex flex-col justify-between items-center">
                                <Link to='/dashboard'>
                                    <button
                                        className='w-72 p-1 bg-gray-200 border-gray-200  opacity-80 bg-opacity-30 hover:bg-opacity-100 text-white  hover:text-gray-950 rounded-full'
                                    >
                                        Sign In
                                    </button>
                                </Link>
                                <Link to='/dashboard'>
                                    <button
                                        onClick={handleClickPing} className=' flex flex-row justify-center items-center gap-2 w-72 p-1 bg-gray-200 text-gray-950 opacity-70 hover:opacity-100 border-gray-200 rounded-full'
                                    >
                                        <FcGoogle className={`${googlePing ? 'animate-ping' : 'animate-none'}`} />
                                        Sign In with Google
                                    </button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;