import { KeychainTouchId } from './ionic-wrappers/keychaintouchid_source/src';
window.IonicNative = {
KeychainTouchId
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);