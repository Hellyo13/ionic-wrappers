import { QRScanner } from './ionic-wrappers/qrscanner_source/src';
window.IonicNative = {
QRScanner
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);