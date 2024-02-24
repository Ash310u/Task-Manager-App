import Route from "./components/SmallComps/Route";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
    return (
        <div className="min-w-screen min-h-screen bg-login bg-cover bg-fixed overflow-hidden">
            <Route path='/'><LoginPage /></Route>
            <Route path='/dashboard'><DashboardPage /></Route>
        </div>
    )
}

export default App;