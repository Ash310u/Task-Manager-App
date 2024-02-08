import Route from "./components/Route";
import Dashboard from "./components/pages/Dashboard";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
    return (
        <div className='w-screen h-screen bg-black bg-login bg-no-repeat bg-fixed bg-cover bg-center flex justify-center items-center overflow-hidden'>
            <Route path='/'><LoginPage /></Route>
            <Route path='/dashboard'><Dashboard /></Route>
        </div>
    )
}

export default App;