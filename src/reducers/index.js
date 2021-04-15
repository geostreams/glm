// @flow
import geostreamingReducers from '@geostreams/geostreaming/src/reducers';

// $FlowFixMe
import __old_reducers from '@geostreams/glm__old/app/reducers';

export default {
    ...__old_reducers,
    ...geostreamingReducers
};
