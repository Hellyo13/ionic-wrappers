import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AndroidFingerprintAuth = /** @class */ (function (_super) {
    __extends(AndroidFingerprintAuth, _super);
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
    AndroidFingerprintAuth.prototype.encrypt = function (options) { return cordova(this, "encrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.decrypt = function (options) { return cordova(this, "decrypt", {}, arguments); };
    AndroidFingerprintAuth.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    AndroidFingerprintAuth.prototype.delete = function (options) { return cordova(this, "delete", {}, arguments); };
    AndroidFingerprintAuth.pluginName = "AndroidFingerprintAuth";
    AndroidFingerprintAuth.plugin = "cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.pluginRef = "FingerprintAuth";
    AndroidFingerprintAuth.repo = "https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth";
    AndroidFingerprintAuth.platforms = ["Android"];
    AndroidFingerprintAuth.decorators = [
        { type: Injectable }
    ];
    return AndroidFingerprintAuth;
}(AwesomeCordovaNativePlugin));
export { AndroidFingerprintAuth };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBK0poRCwwQ0FBMEI7OztRQUNwRTs7V0FFRztRQUNILFlBQU0sR0FtQkY7WUFDRixxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMscUJBQXFCLEVBQUUsdUJBQXVCO1lBQzlDLHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5Qyw0QkFBNEIsRUFBRSw4QkFBOEI7WUFDNUQsaUJBQWlCLEVBQUUsbUJBQW1CO1lBQ3RDLHlCQUF5QixFQUFFLDJCQUEyQjtZQUN0RCw2QkFBNkIsRUFBRSwrQkFBK0I7WUFDOUQsMENBQTBDLEVBQUUsNENBQTRDO1lBQ3hGLDRCQUE0QixFQUFFLDhCQUE4QjtZQUM1RCxrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMscUNBQXFDLEVBQUUsdUNBQXVDO1lBQzlFLFlBQVksRUFBRSxjQUFjO1lBQzVCLGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsV0FBVyxFQUFFLGFBQWE7WUFDMUIseUJBQXlCLEVBQUUsMkJBQTJCO1lBQ3RELGtCQUFrQixFQUFFLG9CQUFvQjtZQUN4QywyQkFBMkIsRUFBRSw2QkFBNkI7WUFDMUQsa0JBQWtCLEVBQUUsb0JBQW9CO1NBQ3pDLENBQUM7OztJQVFGLHdDQUFPLGFBQUMsT0FBdUI7SUFVL0Isd0NBQU8sYUFBQyxPQUF1QjtJQVMvQiw0Q0FBVztJQVVYLHVDQUFNLGFBQUMsT0FBeUI7Ozs7Ozs7Z0JBaEZqQyxVQUFVOztpQ0EvSlg7RUFnSzRDLDBCQUEwQjtTQUF6RCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFGQUF1dGhPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBSZXF1aXJlZFxyXG4gICAqIFVzZWQgYXMgdGhlIGFsaWFzIGZvciB5b3VyIGtleSBpbiB0aGUgQW5kcm9pZCBLZXkgU3RvcmUuXHJcbiAgICovXHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBjcmVhdGUgY3JlZGVudGlhbCBzdHJpbmcgZm9yIGVuY3J5cHRlZCB0b2tlbiBhbmQgYXMgYWxpYXMgdG8gcmV0cmlldmUgdGhlIGNpcGhlci5cclxuICAgKi9cclxuICB1c2VybmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBjcmVhdGUgY3JlZGVudGlhbCBzdHJpbmcgZm9yIGVuY3J5cHRlZCB0b2tlblxyXG4gICAqL1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXF1aXJlZCBmb3IgZGVjcnlwdCgpXHJcbiAgICogRW5jcnlwdGVkIHVzZXIgY3JlZGVudGlhbHMgdG8gZGVjcnlwdCB1cG9uIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb24uXHJcbiAgICovXHJcbiAgdG9rZW4/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIHJlbW92ZSB0aGUgXCJVU0UgQkFDS1VQXCIgYnV0dG9uXHJcbiAgICovXHJcbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZSB0aGUgbGFuZ3VhZ2UuIChlbl9VUyBvciBlcylcclxuICAgKi9cclxuICBsb2NhbGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXZpY2UgbWF4IGlzIDUgYXR0ZW1wdHMuIFNldCB0aGlzIHBhcmFtZXRlciBpZiB5b3Ugd2FudCB0byBhbGxvdyBmZXdlciB0aGFuIDUgYXR0ZW1wdHMuXHJcbiAgICovXHJcbiAgbWF4QXR0ZW1wdHM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmUgdGhlIHVzZXIgdG8gYXV0aGVudGljYXRlIHdpdGggYSBmaW5nZXJwcmludCB0byBhdXRob3JpemUgZXZlcnkgdXNlIG9mIHRoZSBrZXkuXHJcbiAgICogTmV3IGZpbmdlcnByaW50IGVucm9sbG1lbnQgd2lsbCBpbnZhbGlkYXRlIGtleSBhbmQgcmVxdWlyZSBiYWNrdXAgYXV0aGVudGljYXRlIHRvXHJcbiAgICogcmUtZW5hYmxlIHRoZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBkaWFsb2cuXHJcbiAgICovXHJcbiAgdXNlckF1dGhSZXF1aXJlZD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdGl0bGUgb2YgdGhlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGRpYWxvZy5cclxuICAgKi9cclxuICBkaWFsb2dUaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBtZXNzYWdlIG9mIHRoZSBmaW5nZXJwcmludCBhdXRoZW50aWNhdGlvbiBkaWFsb2cuXHJcbiAgICovXHJcbiAgZGlhbG9nTWVzc2FnZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBoaW50IGRpc3BsYXllZCBieSB0aGUgZmluZ2VycHJpbnQgaWNvbiBvbiB0aGUgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gZGlhbG9nLlxyXG4gICAqL1xyXG4gIGRpYWxvZ0hpbnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQUZBRGVjcnlwdE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEJpb21ldHJpYyBhdXRoZW50aWNhdGlvblxyXG4gICAqL1xyXG4gIHdpdGhGaW5nZXJwcmludDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBBdXRoZW50aWNhdGlvbiB1c2luZyBiYWNrdXAgY3JlZGVudGlhbCBhY3Rpdml0eVxyXG4gICAqL1xyXG4gIHdpdGhCYWNrdXA6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRmluZ2VycHJpbnRBdXRoLkNpcGhlck1vZGUuREVDUllQVFxyXG4gICAqIERlY3J5cHRlZCBwYXNzd29yZFxyXG4gICAqL1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQUZBRW5jcnlwdFJlc3BvbnNlIHtcclxuICAvKipcclxuICAgKiBCaW9tZXRyaWMgYXV0aGVudGljYXRpb25cclxuICAgKi9cclxuICB3aXRoRmluZ2VycHJpbnQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQXV0aGVudGljYXRpb24gdXNpbmcgYmFja3VwIGNyZWRlbnRpYWwgYWN0aXZpdHlcclxuICAgKi9cclxuICB3aXRoQmFja3VwOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGJhc2U2NGVuY29kZWQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHVzZXIgY3JlZGVudGlhbHNcclxuICAgKi9cclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFGQUF2YWlsYWJsZVJlc3BvbnNlIHtcclxuICBpc0F2YWlsYWJsZTogYm9vbGVhbjtcclxuICBpc0hhcmR3YXJlRGV0ZWN0ZWQ6IGJvb2xlYW47XHJcbiAgaGFzRW5yb2xsZWRGaW5nZXJwcmludHM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQUZBRGVsZXRlT3B0aW9ucyB7XHJcbiAgY2xpZW50SWQ6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQW5kcm9pZCBGaW5nZXJwcmludCBBdXRoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBuYXRpdmUgZGlhbG9nIGZyYWdtZW50IHByb21wdGluZyB0aGUgdXNlciB0byBhdXRoZW50aWNhdGUgdXNpbmcgdGhlaXIgZmluZ2VycHJpbnQuIElmIHRoZSBkZXZpY2UgaGFzIGEgc2VjdXJlIGxvY2tzY3JlZW4gKHBhdHRlcm4sIFBJTiwgb3IgcGFzc3dvcmQpLCB0aGUgdXNlciBtYXkgb3B0IHRvIGF1dGhlbnRpY2F0ZSB1c2luZyB0aGF0IG1ldGhvZCBhcyBhIGJhY2t1cC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQW5kcm9pZEZpbmdlcnByaW50QXV0aCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1maW5nZXJwcmludC1hdXRoL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5kcm9pZEZpbmdlcnByaW50QXV0aDogQW5kcm9pZEZpbmdlcnByaW50QXV0aCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmFuZHJvaWRGaW5nZXJwcmludEF1dGguaXNBdmFpbGFibGUoKVxyXG4gKiAgIC50aGVuKChyZXN1bHQpPT4ge1xyXG4gKiAgICAgaWYocmVzdWx0LmlzQXZhaWxhYmxlKXtcclxuICogICAgICAgLy8gaXQgaXMgYXZhaWxhYmxlXHJcbiAqXHJcbiAqICAgICAgIHRoaXMuYW5kcm9pZEZpbmdlcnByaW50QXV0aC5lbmNyeXB0KHsgY2xpZW50SWQ6ICdteUFwcE5hbWUnLCB1c2VybmFtZTogJ215VXNlcm5hbWUnLCBwYXNzd29yZDogJ215UGFzc3dvcmQnIH0pXHJcbiAqICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICogICAgICAgICAgICBpZiAocmVzdWx0LndpdGhGaW5nZXJwcmludCkge1xyXG4gKiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGVuY3J5cHRlZCBjcmVkZW50aWFscy4nKTtcclxuICogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuY3J5cHRlZCBjcmVkZW50aWFsczogJyArIHJlc3VsdC50b2tlbik7XHJcbiAqICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQud2l0aEJhY2t1cCkge1xyXG4gKiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkIHdpdGggYmFja3VwIHBhc3N3b3JkIScpO1xyXG4gKiAgICAgICAgICAgIH0gZWxzZSBjb25zb2xlLmxvZygnRGlkblxcJ3QgYXV0aGVudGljYXRlIScpO1xyXG4gKiAgICAgICAgIH0pXHJcbiAqICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICogICAgICAgICAgICBpZiAoZXJyb3IgPT09IHRoaXMuYW5kcm9pZEZpbmdlcnByaW50QXV0aC5FUlJPUlMuRklOR0VSUFJJTlRfQ0FOQ0VMTEVEKSB7XHJcbiAqICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gY2FuY2VsbGVkJyk7XHJcbiAqICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAqICAgICAgICAgfSk7XHJcbiAqXHJcbiAqICAgICB9IGVsc2Uge1xyXG4gKiAgICAgICAvLyBmaW5nZXJwcmludCBhdXRoIGlzbid0IGF2YWlsYWJsZVxyXG4gKiAgICAgfVxyXG4gKiAgIH0pXHJcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFGQUF1dGhPcHRpb25zXHJcbiAqIEFGQUVuY3J5cHRSZXNwb25zZVxyXG4gKiBBRkFEZWNyeXB0T3B0aW9uc1xyXG4gKiBBRkFBdmFpbGFibGVSZXNwb25zZVxyXG4gKiBBRkFEZWxldGVPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQW5kcm9pZEZpbmdlcnByaW50QXV0aCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1maW5nZXJwcmludC1hdXRoJyxcclxuICBwbHVnaW5SZWY6ICdGaW5nZXJwcmludEF1dGgnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWp3aGVhdGxleS9jb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLWZpbmdlcnByaW50LWF1dGgnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZHJvaWRGaW5nZXJwcmludEF1dGggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgY29udGFpbmluZyBhbGwgcG9zc2libGUgZXJyb3JzXHJcbiAgICovXHJcbiAgRVJST1JTOiB7XHJcbiAgICBCQURfUEFERElOR19FWENFUFRJT046IHN0cmluZztcclxuICAgIENFUlRJRklDQVRFX0VYQ0VQVElPTjogc3RyaW5nO1xyXG4gICAgRklOR0VSUFJJTlRfQ0FOQ0VMTEVEOiBzdHJpbmc7XHJcbiAgICBGSU5HRVJQUklOVF9EQVRBX05PVF9ERUxFVEVEOiBzdHJpbmc7XHJcbiAgICBGSU5HRVJQUklOVF9FUlJPUjogc3RyaW5nO1xyXG4gICAgRklOR0VSUFJJTlRfTk9UX0FWQUlMQUJMRTogc3RyaW5nO1xyXG4gICAgRklOR0VSUFJJTlRfUEVSTUlTU0lPTl9ERU5JRUQ6IHN0cmluZztcclxuICAgIEZJTkdFUlBSSU5UX1BFUk1JU1NJT05fREVOSUVEX1NIT1dfUkVRVUVTVDogc3RyaW5nO1xyXG4gICAgSUxMRUdBTF9CTE9DS19TSVpFX0VYQ0VQVElPTjogc3RyaW5nO1xyXG4gICAgSU5JVF9DSVBIRVJfRkFJTEVEOiBzdHJpbmc7XHJcbiAgICBJTlZBTElEX0FMR09SSVRITV9QQVJBTUVURVJfRVhDRVBUSU9OOiBzdHJpbmc7XHJcbiAgICBJT19FWENFUFRJT046IHN0cmluZztcclxuICAgIEpTT05fRVhDRVBUSU9OOiBzdHJpbmc7XHJcbiAgICBNSU5JTVVNX1NESzogc3RyaW5nO1xyXG4gICAgTUlTU0lOR19BQ1RJT05fUEFSQU1FVEVSUzogc3RyaW5nO1xyXG4gICAgTUlTU0lOR19QQVJBTUVURVJTOiBzdHJpbmc7XHJcbiAgICBOT19TVUNIX0FMR09SSVRITV9FWENFUFRJT046IHN0cmluZztcclxuICAgIFNFQ1VSSVRZX0VYQ0VQVElPTjogc3RyaW5nO1xyXG4gIH0gPSB7XHJcbiAgICBCQURfUEFERElOR19FWENFUFRJT046ICdCQURfUEFERElOR19FWENFUFRJT04nLFxyXG4gICAgQ0VSVElGSUNBVEVfRVhDRVBUSU9OOiAnQ0VSVElGSUNBVEVfRVhDRVBUSU9OJyxcclxuICAgIEZJTkdFUlBSSU5UX0NBTkNFTExFRDogJ0ZJTkdFUlBSSU5UX0NBTkNFTExFRCcsXHJcbiAgICBGSU5HRVJQUklOVF9EQVRBX05PVF9ERUxFVEVEOiAnRklOR0VSUFJJTlRfREFUQV9OT1RfREVMRVRFRCcsXHJcbiAgICBGSU5HRVJQUklOVF9FUlJPUjogJ0ZJTkdFUlBSSU5UX0VSUk9SJyxcclxuICAgIEZJTkdFUlBSSU5UX05PVF9BVkFJTEFCTEU6ICdGSU5HRVJQUklOVF9OT1RfQVZBSUxBQkxFJyxcclxuICAgIEZJTkdFUlBSSU5UX1BFUk1JU1NJT05fREVOSUVEOiAnRklOR0VSUFJJTlRfUEVSTUlTU0lPTl9ERU5JRUQnLFxyXG4gICAgRklOR0VSUFJJTlRfUEVSTUlTU0lPTl9ERU5JRURfU0hPV19SRVFVRVNUOiAnRklOR0VSUFJJTlRfUEVSTUlTU0lPTl9ERU5JRURfU0hPV19SRVFVRVNUJyxcclxuICAgIElMTEVHQUxfQkxPQ0tfU0laRV9FWENFUFRJT046ICdJTExFR0FMX0JMT0NLX1NJWkVfRVhDRVBUSU9OJyxcclxuICAgIElOSVRfQ0lQSEVSX0ZBSUxFRDogJ0lOSVRfQ0lQSEVSX0ZBSUxFRCcsXHJcbiAgICBJTlZBTElEX0FMR09SSVRITV9QQVJBTUVURVJfRVhDRVBUSU9OOiAnSU5WQUxJRF9BTEdPUklUSE1fUEFSQU1FVEVSX0VYQ0VQVElPTicsXHJcbiAgICBJT19FWENFUFRJT046ICdJT19FWENFUFRJT04nLFxyXG4gICAgSlNPTl9FWENFUFRJT046ICdKU09OX0VYQ0VQVElPTicsXHJcbiAgICBNSU5JTVVNX1NESzogJ01JTklNVU1fU0RLJyxcclxuICAgIE1JU1NJTkdfQUNUSU9OX1BBUkFNRVRFUlM6ICdNSVNTSU5HX0FDVElPTl9QQVJBTUVURVJTJyxcclxuICAgIE1JU1NJTkdfUEFSQU1FVEVSUzogJ01JU1NJTkdfUEFSQU1FVEVSUycsXHJcbiAgICBOT19TVUNIX0FMR09SSVRITV9FWENFUFRJT046ICdOT19TVUNIX0FMR09SSVRITV9FWENFUFRJT04nLFxyXG4gICAgU0VDVVJJVFlfRVhDRVBUSU9OOiAnU0VDVVJJVFlfRVhDRVBUSU9OJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhIG5hdGl2ZSBkaWFsb2cgZnJhZ21lbnQgdG8gdXNlIHRoZSBkZXZpY2UgaGFyZHdhcmUgZmluZ2VycHJpbnQgc2Nhbm5lciB0byBhdXRoZW50aWNhdGUgYWdhaW5zdCBmaW5nZXJwcmludHMgcmVnaXN0ZXJlZCBmb3IgdGhlIGRldmljZS5cclxuICAgKiBAcGFyYW0ge0FGQUF1dGhPcHRpb25zfSBvcHRpb25zIE9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBRkFFbmNyeXB0UmVzcG9uc2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmNyeXB0KG9wdGlvbnM6IEFGQUF1dGhPcHRpb25zKTogUHJvbWlzZTxBRkFFbmNyeXB0UmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGEgbmF0aXZlIGRpYWxvZyBmcmFnbWVudCB0byB1c2UgdGhlIGRldmljZSBoYXJkd2FyZSBmaW5nZXJwcmludCBzY2FubmVyIHRvIGF1dGhlbnRpY2F0ZSBhZ2FpbnN0IGZpbmdlcnByaW50cyByZWdpc3RlcmVkIGZvciB0aGUgZGV2aWNlLlxyXG4gICAqIEBwYXJhbSB7QUZBQXV0aE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFGQURlY3J5cHRPcHRpb25zPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVjcnlwdChvcHRpb25zOiBBRkFBdXRoT3B0aW9ucyk6IFByb21pc2U8QUZBRGVjcnlwdE9wdGlvbnM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHNlcnZpY2UgaXMgYXZhaWxhYmxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QUZBQXZhaWxhYmxlUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIGZpbmdlcnByaW50IGF1dGggaXMgYXZhaWxhYmxlIG9uIHRoZSBkZXZpY2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxBRkFBdmFpbGFibGVSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIHRoZSBjaXBoZXIgdXNlZCBmb3IgZW5jcnlwdGlvbiBhbmQgZGVjcnlwdGlvbiBieSB1c2VybmFtZVxyXG4gICAqIEBwYXJhbSB7QUZBRGVsZXRlT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBkZWxldGVkOiBib29sZWFuIH0+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBjaXBoZXIgd2FzIHN1Y2Nlc3NmdWxseSBkZWxldGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlbGV0ZShvcHRpb25zOiBBRkFEZWxldGVPcHRpb25zKTogUHJvbWlzZTx7IGRlbGV0ZWQ6IGJvb2xlYW4gfT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufSJdfQ==