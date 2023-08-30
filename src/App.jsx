import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./Components/Navigation/index";
import Marketing from "./Containers/Marketing/Marketing";
import Finance from "./Containers/Finance/Finance";
import Personnel from "./Containers/Personnel/Personnel";
import { useState } from "react";

function App() {
  const [isAllPluginsDisabled, setIsPluginsDisabled] = useState(false);

  const handleToggleAllPlugins = () => {
    setIsPluginsDisabled(!isAllPluginsDisabled);
  };

  return (
    <div className='app-container'>
      <Router>
        <Navigation onDisableHandler={handleToggleAllPlugins} />
        <Routes>
          <Route exact path='/' Component={() => <Navigate to='/marketing' />} />
          <Route
            path='/marketing'
            element={<Marketing isAllPluginsDisabled={isAllPluginsDisabled} />}
          />
          <Route
            path='/finance'
            element={<Finance isAllPluginsDisabled={isAllPluginsDisabled} />}
          />
          <Route
            path='/personnel'
            element={<Personnel isAllPluginsDisabled={isAllPluginsDisabled} />}
          />
          <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
