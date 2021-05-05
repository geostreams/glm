import hocs from '@geostreams/core/src/utils/hocs';
// @flow
import SensorDetail from '@geostreams/geostreaming/src/containers/Sensor/Detail';

// $FlowFixMe
import Explore from '@geostreams/geostreaming/src/containers/Explore';
// $FlowFixMe
import __old_Search from '@geostreams/glm__old/app/pages/Search';
// $FlowFixMe
import __old_TrendsStation from '@geostreams/glm__old/app/pages/TrendsSensor';
// $FlowFixMe
import __old_TrendsRegion from '@geostreams/glm__old/app/pages/TrendsRegion';
// $FlowFixMe
import __old_TrendsDetail from '@geostreams/glm__old/app/pages/TrendsDetail';
import GLMLayout from './containers/Layout';
import About from './containers/About';
import Home from './containers/Home';

const routes = {
    '/': { exact: true, component: hocs.withLayout(GLMLayout, Home, { hasFooter: true }) },
    '/about': { exact: true, component: hocs.withLayout(GLMLayout, About, { hasFooter: true }) },
    '/explore/:stations': { component: hocs.withLayout(GLMLayout,Explore), exact: true },
    '/:parent(explore|trendsstations)/detail/location/:name/:category': { component: hocs.withLayout(GLMLayout,SensorDetail) },
    '/search': { component: hocs.withLayout(GLMLayout,__old_Search) },
    '/trendsstations': { component: hocs.withLayout(GLMLayout,__old_TrendsStation), exact: true },
    '/trendsregions': { component: hocs.withLayout(GLMLayout,__old_TrendsRegion) },
    '/trendsdetail/region/:region/:parameter/:season': { component: hocs.withLayout(GLMLayout,__old_TrendsDetail) }
};

export default routes;
