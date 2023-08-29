import "../shared/Shared.styles.css";
import PluginList from "../../Components/PluginList/PluginList";

import { usePlugins } from "../usePlugins.logic";

function Personnel({ isAllPluginsDisabled }) {
  const { isLoading, availablePlugins, updatePluginStatus } = usePlugins("/api/plugins/personnel");

  return isLoading ? (
    <p>...Loading</p>
  ) : (
    <div className='plugin-page-wrapper'>
      <h3 className='page-title'>Personnel Plugins</h3>
      <PluginList
        onToggleHandler={updatePluginStatus}
        isAllPluginsDisabled={isAllPluginsDisabled}
        availablePlugins={availablePlugins}
      />
    </div>
  );
}

export default Personnel;
