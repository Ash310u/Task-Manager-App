import Route from "./components/Route";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => {
    return (
        <div>
            <Route path='/'><LoginPage /></Route>
            <Route path='/dashboard'><DashboardPage /></Route>
        </div>
    )
}

export default App;