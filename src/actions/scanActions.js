import { 
  WRITE_SCAN_DETAILS_REQUEST,
  WRITE_SCAN_DETAILS_SUCCESS,
  WRITE_SCAN_DETAILS_FAILURE,
  FETCH_SCAN_LIST_REQUEST,
  FETCH_SCAN_LIST_SUCCESS,
  FETCH_SCAN_LIST_FAILURE
} from "../constants/scan";
import firebase from "../firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function writeScanDetailsRequest() {
  return {
    type: WRITE_SCAN_DETAILS_REQUEST
  };
}

export function writeScanDetailsSuccess(data) {
  return {
    type: WRITE_SCAN_DETAILS_SUCCESS,
    payload: data
  };
}

export function writeScanDetailsFailure(error) {
  return {
    type: WRITE_SCAN_DETAILS_FAILURE,
    errors: error
  };
}

export function writeScanDetails(data) {
  return async dispatch =>  {
    dispatch(writeScanDetailsRequest());
    dispatch(showLoading());

    try {
      const user = await firebase.auth().currentUser;
      const uid = user.uid;

      if (user != null) {
        const newScanDetails = await firebase.database().ref('/users/' + uid + '/scans').push({ scan: data });
        dispatch(writeScanDetailsSuccess(newScanDetails));
      }
    } catch (error) {
      dispatch(writeScanDetailsFailure(error));
    } finally {
      dispatch(hideLoading());
    }
  };
}

export function fetchScanListRequest() {
  return {
    type: FETCH_SCAN_LIST_REQUEST
  };
}

export function fetchScanListSuccess(data) {
  return {
    type: FETCH_SCAN_LIST_SUCCESS,
    payload: data
  };
}

export function fetchScanListFailure(error) {
  return {
    type: FETCH_SCAN_LIST_FAILURE,
    errors: error
  };
}

export function fetchScanList() {
  return async dispatch => {
    dispatch(fetchScanListRequest());
    dispatch(showLoading());

    try {
      const user = await firebase.auth().currentUser;
      const uid = user.uid;

      if (user != null) {
        await firebase.database().ref('/users/' + uid + '/scans').on('value', snapshot => {
          const scanArray = [];
          snapshot.forEach(snap => {
            scanArray.push(snap.val());
          });
          
          dispatch(fetchScanListSuccess(scanArray));
        });
      }
    } catch (error) {
      dispatch(fetchScanListFailure(error));
    } finally {
      dispatch(hideLoading());
    }
  }
}