import React, { createContext, useEffect, useState } from "react";

const PluginsContext = createContext();

function AllPluginsProvider({ children }) {
  const [allPlugins, setAllPlugins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/plugins/");
        const plugins = await response.json();
        setAllPlugins(plugins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log({ allPlugins });
  return <PluginsContext.Provider value={allPlugins}>{children}</PluginsContext.Provider>;
}

export { PluginsContext, AllPluginsProvider };
