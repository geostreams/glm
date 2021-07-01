// @flow
import hocs from '@geostreams/core/src/utils/hocs';
import Explore from '@geostreams/geostreaming/src/containers/Explore';
import SensorDetail from '@geostreams/geostreaming/src/containers/Sensor/Detail';
import Trends from '@geostreams/geostreaming/src/containers/Trends';
import TrendDetail from '@geostreams/geostreaming/src/containers/Trends/Detail';

// $FlowFixMe
import __old_Search from '@geostreams/glm__old/app/pages/Search';
// $FlowFixMe
import __old_TrendsStation from '@geostreams/glm__old/app/pages/TrendsSensor';

import GLMLayout from './containers/Layout';
import About from './containers/About';
import Home from './containers/Home';

const routes = {
    '/': { exact: true, component: hocs.withLayout(GLMLayout, Home, { hasFooter: true }) },
    '/about': { exact: true, component: hocs.withLayout(GLMLayout, About, { hasFooter: true }) },
    '/explore/:stations': { component: hocs.withLayout(GLMLayout, Explore), exact: true },
    '/:parent(explore|trendsstations)/detail/location/:name/:category': { component: hocs.withLayout(GLMLayout, SensorDetail) },
    '/search': { component: hocs.withLayout(GLMLayout, __old_Search) },
    '/trendsstations': { component: hocs.withLayout(GLMLayout, __old_TrendsStation), exact: true },
    '/trends/:category(stations|regions)': { component: hocs.withLayout(GLMLayout, Trends), exact: true },
    '/trends/regions/:region/:parameter/:season': { component: hocs.withLayout(GLMLayout, TrendDetail), exact: true }
};

export default routes;
