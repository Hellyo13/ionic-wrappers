import { AndroidFingerprintAuth } from './ionic-wrappers/androidfingerprintauth_source/src';
window.IonicNative = {
AndroidFingerprintAuth
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);