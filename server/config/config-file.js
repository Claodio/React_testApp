const Directories ='{"SERVER_DIRECTORY":"server","TEST_DIRECTORY":"test","CLIENT_DIRECTORY":"client","SCRIPTS_DIRECTORY":"scripts","COMPONENTS_DIRECTORY":"components","DIRECTIVES_DIRECTORY":"directives","MODULES_DIRECTORY":"modules","HTML_DIRECTORY":"html","LAYOUTS_DIRECTORY":"layouts","MARKUPS_DIRECTORY":"markups","ELEMENTS_DIRECTORY":"elements","STYLES_DIRECTORY":"styles","CSS_DIRECTORY":"css","SCSS_DIRECTORY":"scss","LESS_DIRECTORY":"less","STYLUS_DIRECTORY":"stylus","POSTCSS_DIRECTORY":"postcss","BUNDLES_DIRECTORY":"bundles","PRODUCTION_DIRECTORY":"production","THEME_NAME_DIRECTORY":"AppName","BOWER_COMPONENTS_DIRECTORY":"bower_components","NODE_MODULES_DIRECTORY:"node_modules"}';
const Dirs = JSON.parse(Directories);

const Network ='{"PORT":"1335","IP_ADDRESS":"127.0.0.1","SUBNET_MASK":"255.255.240.0"}'
const Net = JSON.parse(Network);

const Browser ='{"PORT":"3000","UI_PORT":"3001"}'
const BrowserSync = JSON.parse(Browser);

const configDirectory = ({
  clientDir = Dirs.CLIENT_DIRECTORY,
  serverDir = Dirs.SERVER_DIRECTORY,
  testDir = Dirs.TEST_DIRECTORY,
}) => {
  return {
    clientDir,
    serverDir,
    testDir,
  };
};

const configNetwork = ({
  port = Net.PORT,
  ipAddress = Net.IP_ADDRESS,
  subnet = Net.SUBNET_MASK,
}) => {
  return {
    port,
    ipAddress,
    subnet,
  };
};

const configOpenBrowser = ({
  browserSyncPort = BrowserSync.PORT,
  browserSyncUiPort = BrowserSync.UI_PORT,
}) => {
  return {
    browserSyncPort,
    browserSyncUiPort,
  };
};

export default {
  clientDir: configDirectory.clientDir,
  serverDir: configDirectory.serverDir,
  testDir: configDirectory.testDir,
  port: configNetwork.port,
  ipAddress: configNetwork.ipAddress,
  subnet: configNetwork.subnet,
  browserSyncPort: configOpenBrowser.browserSyncPort,
  browserSyncUiPort: configOpenBrowser.browserSyncUiPort,
};
