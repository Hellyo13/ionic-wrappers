'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var KeychainTouchId = /** @class */ (function (_super) {
    tslib.__extends(KeychainTouchId, _super);
    function KeychainTouchId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeychainTouchId.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    KeychainTouchId.prototype.save = function (key, password, userAuthenticationRequired) { return core.cordova(this, "save", {}, arguments); };
    KeychainTouchId.prototype.verify = function (key, message) { return core.cordova(this, "verify", {}, arguments); };
    KeychainTouchId.prototype.has = function (key) { return core.cordova(this, "has", {}, arguments); };
    KeychainTouchId.prototype.delete = function (key) { return core.cordova(this, "delete", {}, arguments); };
    KeychainTouchId.prototype.setLocale = function (locale) { return core.cordova(this, "setLocale", {}, arguments); };
    KeychainTouchId.pluginName = "KeychainTouchId";
    KeychainTouchId.plugin = "cordova-plugin-keychain-touch-id";
    KeychainTouchId.pluginRef = "plugins.touchid";
    KeychainTouchId.repo = "https://github.com/sjhoeksma/cordova-plugin-keychain-touch-id";
    KeychainTouchId.platforms = ["Android", "iOS"];
    KeychainTouchId.decorators = [
        { type: core$1.Injectable }
    ];
    return KeychainTouchId;
}(core.AwesomeCordovaNativePlugin));

exports.KeychainTouchId = KeychainTouchId;
