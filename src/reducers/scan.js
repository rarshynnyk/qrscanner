import { 
  WRITE_SCAN_DETAILS_REQUEST,
  WRITE_SCAN_DETAILS_SUCCESS,
  WRITE_SCAN_DETAILS_FAILURE,
  FETCH_SCAN_LIST_REQUEST,
  FETCH_SCAN_LIST_SUCCESS,
  FETCH_SCAN_LIST_FAILURE
} from "../constants/scan";

const initialState = {
  scans: [],
  errors: null
}

export default function scan(state = initialState, action) {
  switch (action.type) {
    case WRITE_SCAN_DETAILS_REQUEST:
      return { ...state }
    case WRITE_SCAN_DETAILS_SUCCESS:
      return { 
        ...state,
        scans: action.payload
      }
    case WRITE_SCAN_DETAILS_FAILURE:
      return {
        ...state,
        errors: action.errors
      }
    case FETCH_SCAN_LIST_REQUEST:
      return { ...state }
    case FETCH_SCAN_LIST_SUCCESS:
      return {
        ...state,
        scans: action.payload
      }
    case FETCH_SCAN_LIST_FAILURE:
      return {
        ...state,
        errors: action.errors
      }
    default:
      return state;
  }
}
