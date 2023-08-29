import "./PluginList.styles.css";
import "../../Containers/shared/Shared.styles.css";
import PluginItem from "../PluginItem/PluginItem";

function PluginList({ onToggleHandler, isAllPluginsDisabled, availablePlugins }) {
  return (
    <div className='pluginList-container'>
      {availablePlugins?.map((plugin) => {
        return (
          <PluginItem
            key={plugin.id}
            title={plugin.title}
            description={plugin.description}
            toggleSwitchStatus={plugin.status}
            onToggleHandler={(status) => onToggleHandler(status, plugin.id)}
            isDisabled={isAllPluginsDisabled || plugin.disabled}
          />
        );
      })}
    </div>
  );
}

export default PluginList;
