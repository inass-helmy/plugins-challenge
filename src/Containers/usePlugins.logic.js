import { useCallback, useContext, useEffect, useState } from "react";
import { PluginsContext } from "../providers/AllPluginsProvider";

export function usePlugins(targetUrl) {
  const [availablePlugins, setAvailablePlugins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const allPlugins = useContext(PluginsContext);

  const addStatusToPlugin = useCallback(
    (data) => {
      const { active, inactive, disabled: disabledPlugins } = data;
      const availablePluginIds = [...active, ...inactive, ...disabledPlugins];
      const plugins = allPlugins
        .filter((plugin) => availablePluginIds.includes(plugin.id))
        .map((plugin) => {
          let status = "active";
          if (active.includes(plugin.id)) {
            status = "active";
          } else if (inactive.includes(plugin.id)) {
            status = "inactive";
          }
          const disabled = disabledPlugins.includes(plugin.id);
          return { ...plugin, status, disabled };
        });
      return plugins;
    },
    [allPlugins]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(targetUrl);
        const data = await response.json();

        const availablePlugins = addStatusToPlugin(data);
        setAvailablePlugins(availablePlugins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [allPlugins, targetUrl, addStatusToPlugin]);

  const updatePluginStatus = async (status, id) => {
    try {
      const response = await fetch(`${targetUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }), // Send the new status
      });
      if (!response.ok) {
        throw new Error("Error updating toggle status");
      }

      const updatedItem = await response.json();
      return updatedItem;
    } catch (error) {
      console.error("Error updating toggle status:", error);
      return null;
    }
  };

  return {
    isLoading,
    availablePlugins,
    updatePluginStatus,
  };
}
