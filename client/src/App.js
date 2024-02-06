import Route from "./components/Route";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
    return (
        <div className='w-screen h-screen bg-login bg-fixed bg-cover bg-center flex justify-center items-center overflow-hidden'>
            <Route path='/'><LoginPage /></Route>
        </div>
    )
}

export default App;