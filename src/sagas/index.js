import { all } from 'redux-saga/effects';
import { documentsWatcher, documentWatcher } from './documents';
import { newsWatcher, newWatcher } from './news';
import { alertsWatcher, setAlertWatcher } from './alerts';
import { setDeviceToken } from './notifications';
import { complaintImagesWatcher } from './images';
import {
  loginFlow,
  logoutFlow,
  updateUserWatcher,
  userWatcher,
  setEnrollmentWatcher,
  setComplaintWatcher,
  changeUserPassWatcher,
  resetUserPassWatcher,
  newPasswordWatcher,
  complaintsWatcher,
  informationWatcher
} from './user';

export default function* rootSaga() {
  yield all([
    documentsWatcher(),
    documentWatcher(),
    newsWatcher(),
    newWatcher(),
    loginFlow(),
    logoutFlow(),
    updateUserWatcher(),
    userWatcher(),
    setEnrollmentWatcher(),
    setComplaintWatcher(),
    changeUserPassWatcher(),
    resetUserPassWatcher(),
    newPasswordWatcher(),
    complaintsWatcher(),
    complaintImagesWatcher(),
    alertsWatcher(),
    setAlertWatcher(),
    informationWatcher(),
    setDeviceToken(),
  ]);
}
