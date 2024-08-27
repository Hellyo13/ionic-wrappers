import { QRScanner } from './apps/cgd-qrscanner-wrapper/src';
window.IonicNative = {
QRScanner
};
require('./@awesome-cordova-plugins/core/bootstrap').checkReady();
require('./@awesome-cordova-plugins/core/ng1').initAngular1(window.IonicNative);