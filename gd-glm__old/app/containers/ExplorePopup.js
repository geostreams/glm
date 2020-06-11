/*
 * @flow
 */

import {connect} from 'react-redux';
import ExplorePopupComponent from '../components/ExplorePopup';
import type {Dispatch} from "../utils/flowtype";
import {resetDetailPage, resetExploreSensors, initializeExploreDataSources, selectSensorDetail} from "../actions";

const mapStateToProps = (state) => {
    return {
        popupSensorname: state.sensorDetail.name,
        showPopup: state.sensorDetail.showExplorePopup,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        resetDetailPageSelection: () => {
            dispatch(resetDetailPage());
            dispatch(initializeExploreDataSources());
            dispatch(resetExploreSensors());
        }
    }
};

const ExplorePopup = connect(mapStateToProps, mapDispatchToProps)(ExplorePopupComponent);

export default ExplorePopup;