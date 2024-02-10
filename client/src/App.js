import Route from "./components/Route";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
    return (
        <div className="min-w-screen min-h-screen  bg-gray-950">
            <Route path='/'><LoginPage /></Route>
            <Route path='/dashboard'><DashboardPage /></Route>
        </div>
    )
}

export default App;