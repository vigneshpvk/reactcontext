import { AppContext, toggleColorMode } from "./appcontext";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import Profile from "./pages/profile";

function App() {
  const firstValue = "hello";
  const secondValue = "world";
  const contextValues = { firstValue, secondValue, toggleColorMode };
  return (
    <AppContext.Provider value={contextValues}>
      <BrowserRouter>
        <main className="content">
          <Router />
        </main>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
