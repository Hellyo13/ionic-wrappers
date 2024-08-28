'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AndroidFingerprintAuth = /** @class */ (function (_super) {
    tslib.__extends(AndroidFingerprintAuth, _super);
    function AndroidFingerprintAuth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property containing all possible errors
         */
        _this.ERRORS = {
            BAD_PADDING_EXCEPTION: 'BAD_PADDING_EXCEPTION',
            CERTIFICATE_EXCEPTION: 'CERTIFICATE_EXCEPTION',
            FINGERPRINT_CANCELLED: 'FINGERPRINT_CANCELLED',
            FINGERPRINT_DATA_NOT_DELETED: 'FINGERPRINT_DATA_NOT_DELETED',
            FINGERPRINT_ERROR: 'FINGERPRINT_ERROR',
            FINGERPRINT_NOT_AVAILABLE: 'FINGERPRINT_NOT_AVAILABLE',
            FINGERPRINT_PERMISSION_DENIED: 'FINGERPRINT_PERMISSION_DENIED',
            FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST: 'FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST',
            ILLEGAL_BLOCK_SIZE_EXCEPTION: 'ILLEGAL_BLOCK_SIZE_EXCEPTION',
            INIT_CIPHER_FAILED: 'INIT_CIPHER_FAILED',
            INVALID_ALGORITHM_PARAMETER_EXCEPTION: 'INVALID_ALGORITHM_PARAMETER_EXCEPTION',
            IO_EXCEPTION: 'IO_EXCEPTION',
            JSON_EXCEPTION: 'JSON_EXCEPTION',
            MINIMUM_SDK: 'MINIMUM_SDK',
            MISSING_ACTION_PARAMETERS: 'MISSING_ACTION_PARAMETERS',
            MISSING_PARAMETERS: 'MISSING_PARAMETERS',
            NO_SUCH_ALGORITHM_EXCEPTION: 'NO_SUCH_ALGORITHM_EXCEPTION',
            SECURITY_EXCEPTION: 'SECURITY_EXCEPTION',
        };
        return _this;
    }
    AndroidFingerprintAuth.prototype.encrypt = function (options) { return core.cordova(this, "encrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.decrypt = function (options) { return core.cordova(this, "decrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    AndroidFingerprintAuth.prototype.delete = function (options) { return core.cordova(this, "delete", {}, arguments); };
    AndroidFingerprintAuth.pluginName = "AndroidFingerprintAuth";
    AndroidFingerprintAuth.plugin = "cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.pluginRef = "FingerprintAuth";
    AndroidFingerprintAuth.repo = "https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.platforms = ["Android"];
    AndroidFingerprintAuth.decorators = [
        { type: core$1.Injectable }
    ];
    return AndroidFingerprintAuth;
}(core.AwesomeCordovaNativePlugin));

exports.AndroidFingerprintAuth = AndroidFingerprintAuth;
