// import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from 'react'
import Input from "../SmallComps/Input";
import { useCreateAccountMutation } from "../../store";
import useNavigation from '../../hooks/useNavigation'

const LoginPage = () => {
    const { navigate } = useNavigation()
    const authToken =window.localStorage.getItem('authToken')
    
    if(authToken) {
        navigate('/dashboard')
    }

    const [opacityDiv, setOpacityDiv] = useState(false)
    const [opacityInput, setOpacityInput] = useState(false)
    // const [googlePing, setGooglePing] = useState(false)

    const [loginAccount, results] = useCreateAccountMutation()

    const handleSubmit = (e) => {
        e.preventDefault()

        let user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        loginAccount(user)
    }

    if (results.isSuccess) {
        window.localStorage.setItem('authToken', results.data.token)
        navigate('/dashboard')
    }

    // const handleClickPing = () => {
    //     setGooglePing(true)
    //     setTimeout(() => {
    //         setGooglePing(false)
    //     }, 500);
    // }

    useEffect(() => {
        const opacityPause = setTimeout(() => {
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
        <div className="w-screen h-screen bg-login bg-no-repeat bg-fixed bg-cover bg-center flex justify-center items-center overflow-hidden">
            <div className="w-full h-full flex justify-center items-center overflow-hidden backdrop-blur">
                <div
                    className={`
                    relative rounded-full bg-login bg-cover bg-fixed bg-center bg-no-repeat blur-none w-2/4 aspect-square
                    transition-opacity duration-700 ease-in-out ${opacityDiv ? 'opacity-100' : ' opacity-0'}
                `}
                >
                    <div className={`
                        absolute flex flex-col items-center justify-center top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden rounded-full w-login h-login transition-opacity duration-700 ease-in ${opacityInput ? 'opacity-100 backdrop-blur' : 'opacity-0 backdrop-blur-none'}
                    `} >
                        <div className='flex flex-row justify-center items-center xl:w-full xl:h-full rounded-lg lg:w-md-login lg:h-md-login '>
                            <form onSubmit={handleSubmit} className="m-2 flex flex-col h-form justify-between items-center xl:gap-15 lg:gap-10 font-extralight">
                                <div className="flex flex-col justify-between items-center xl:gap-2 lg:gap-1 text-white ">
                                    <Input name='name' type={'text'} placeholder={'Enter your name'} >Name</Input>
                                    <Input name='email' type={'email'} placeholder={'Enter your email'} >Email</Input>
                                    <Input name='password' type={'password'} placeholder={'Enter a password'} >Password</Input>
                                </div>
                                <div className=" h-10 flex flex-col justify-between items-center">

                                    <button
                                        className='xl:w-64 lg:w-56 p-1 bg-black  border-black  text-white rounded-full bg-opacity-50 hover:bg-opacity-70'
                                    >
                                        Sign in
                                    </button>
                                    {/* <button
                                        onClick={handleClickPing} className=' flex flex-row justify-center items-center gap-2 w-72 p-1  bg-black  border-black  text-white rounded-full bg-opacity-50 hover:bg-opacity-70'
                                    >
                                        <FcGoogle className={`${googlePing ? 'animate-ping' : 'animate-none'}`} />
                                        Sign In with Google
                                    </button> */}
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;