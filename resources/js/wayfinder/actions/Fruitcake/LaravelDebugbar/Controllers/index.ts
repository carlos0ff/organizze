import AssetController from './AssetController';
import CacheController from './CacheController';
import OpenHandlerController from './OpenHandlerController';
import QueriesController from './QueriesController';

const Controllers = {
    OpenHandlerController: Object.assign(OpenHandlerController, OpenHandlerController),
    CacheController: Object.assign(CacheController, CacheController),
    QueriesController: Object.assign(QueriesController, QueriesController),
    AssetController: Object.assign(AssetController, AssetController),
};

export default Controllers;
