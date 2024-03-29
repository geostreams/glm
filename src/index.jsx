// @flow

/* eslint-disable */
// $FlowFixMe
const __old_config = require('./oldConfig')
window.configruntime = __old_config

// $FlowFixMe
import { addEndpoints, fetchSensors as __old_fetchSensors } from '@geostreams/core__old/app/actions'

import render from '@geostreams/core/src/render';
import { updateGeoStreamingConfig } from '@geostreams/geostreaming/src/actions/config';
import { fetchParameters } from '@geostreams/geostreaming/src/actions/parameters';
import { fetchSensors } from '@geostreams/geostreaming/src/actions/sensors';

// $FlowFixMe
import '@geostreams/glm__old/app/styles/mainStyle.css';
// $FlowFixMe
import '@geostreams/glm__old/app/styles_custom/react-mdc-web.css';
import 'material-components-web/dist/material-components-web.min.css';

import config from './config';
import reducers from './reducers'
import routes from './routes'
import theme from './theme'
/* eslint-enable */

render(
    reducers,
    routes,
    (store) => {
        store.dispatch(updateGeoStreamingConfig(config));
        store.dispatch(addEndpoints());
        store.dispatch(__old_fetchSensors(config.geostreamingEndpoint));
        store.dispatch(fetchParameters());
        store.dispatch(fetchSensors());
    },
    theme
);
