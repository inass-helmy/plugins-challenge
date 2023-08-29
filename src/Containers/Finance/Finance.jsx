import "../shared/Shared.styles.css";
import PluginList from "../../Components/PluginList/PluginList";

import { usePlugins } from "../usePlugins.logic";

function Finance({ isAllPluginsDisabled }) {
  const { isLoading, availablePlugins, updatePluginStatus } = usePlugins("/api/plugins/finance");

  return isLoading ? (
    <p>...loading</p>
  ) : (
    <div className='plugin-page-wrapper'>
      <h3 className='page-title'>Finance Plugins</h3>
      <PluginList
        onToggleHandler={updatePluginStatus}
        isAllPluginsDisabled={isAllPluginsDisabled}
        availablePlugins={availablePlugins}
      />
    </div>
  );
}

export default Finance;
