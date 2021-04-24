import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import Expenses from "./components/Expenses";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="text-center">Budget Tracker App</h1>
        <div className="row">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Expenses />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
