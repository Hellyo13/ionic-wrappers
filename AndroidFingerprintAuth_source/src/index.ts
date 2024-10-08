import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

export interface AFAAuthOptions {
  /**
   * Required
   * Used as the alias for your key in the Android Key Store.
   */
  clientId: string;

  /**
   * Used to create credential string for encrypted token and as alias to retrieve the cipher.
   */
  username?: string;

  /**
   * Used to create credential string for encrypted token
   */
  password?: string;

  /**
   * Required for decrypt()
   * Encrypted user credentials to decrypt upon successful authentication.
   */
  token?: string;

  /**
   * Set to true to remove the "USE BACKUP" button
   */
  disableBackup?: boolean;

  /**
   * Change the language. (en_US or es)
   */
  locale?: string;

  /**
   * The device max is 5 attempts. Set this parameter if you want to allow fewer than 5 attempts.
   */
  maxAttempts?: number;

  /**
   * Require the user to authenticate with a fingerprint to authorize every use of the key.
   * New fingerprint enrollment will invalidate key and require backup authenticate to
   * re-enable the fingerprint authentication dialog.
   */
  userAuthRequired?: boolean;

  /**
   * Set the title of the fingerprint authentication dialog.
   */
  dialogTitle?: string;

  /**
   * Set the message of the fingerprint authentication dialog.
   */
  dialogMessage?: string;

  /**
   * Set the hint displayed by the fingerprint icon on the fingerprint authentication dialog.
   */
  dialogHint?: string;

  encryptNoAuth?: boolean;
}

export interface AFADecryptOptions {
  /**
   * Biometric authentication
   */
  withFingerprint: boolean;
  /**
   * Authentication using backup credential activity
   */
  withBackup: boolean;
  /**
   * FingerprintAuth.CipherMode.DECRYPT
   * Decrypted password
   */
  password: string;
}

export interface AFAEncryptResponse {
  /**
   * Biometric authentication
   */
  withFingerprint: boolean;
  /**
   * Authentication using backup credential activity
   */
  withBackup: boolean;
  /**
   * base64encoded string representation of user credentials
   */
  token: string;
}

export interface AFAAvailableResponse {
  isAvailable: boolean;
  isHardwareDetected: boolean;
  hasEnrolledFingerprints: boolean;
}

export interface AFADeleteOptions {
  clientId: string;
  username: string;
}

/**
 * @name Android Fingerprint Auth
 * @description
 * This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.
 * @usage
 * ```typescript
 * import { AndroidFingerprintAuth } from '@ionic-wrappers/android-fingerprint-auth/ngx';
 *
 * constructor(private androidFingerprintAuth: AndroidFingerprintAuth) { }
 *
 * ...
 *
 *
 * this.androidFingerprintAuth.isAvailable()
 *   .then((result)=> {
 *     if(result.isAvailable){
 *       // it is available
 *
 *       this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
 *         .then(result => {
 *            if (result.withFingerprint) {
 *                console.log('Successfully encrypted credentials.');
 *                console.log('Encrypted credentials: ' + result.token);
 *            } else if (result.withBackup) {
 *              console.log('Successfully authenticated with backup password!');
 *            } else console.log('Didn\'t authenticate!');
 *         })
 *         .catch(error => {
 *            if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
 *              console.log('Fingerprint authentication cancelled');
 *            } else console.error(error)
 *         });
 *
 *     } else {
 *       // fingerprint auth isn't available
 *     }
 *   })
 *   .catch(error => console.error(error));
 * ```
 * @interfaces
 * AFAAuthOptions
 * AFAEncryptResponse
 * AFADecryptOptions
 * AFAAvailableResponse
 * AFADeleteOptions
 */
@Plugin({
  pluginName: 'AndroidFingerprintAuth',
  plugin: 'cordova-plugin-android-fingerprint-auth',
  pluginRef: 'FingerprintAuth',
  repo: 'https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth',
  platforms: ['Android'],
})
@Injectable()
export class AndroidFingerprintAuth extends AwesomeCordovaNativePlugin {
  /**
   * Convenience property containing all possible errors
   */
  ERRORS: {
    BAD_PADDING_EXCEPTION: string;
    CERTIFICATE_EXCEPTION: string;
    FINGERPRINT_CANCELLED: string;
    FINGERPRINT_DATA_NOT_DELETED: string;
    FINGERPRINT_ERROR: string;
    FINGERPRINT_NOT_AVAILABLE: string;
    FINGERPRINT_PERMISSION_DENIED: string;
    FINGERPRINT_PERMISSION_DENIED_SHOW_REQUEST: string;
    ILLEGAL_BLOCK_SIZE_EXCEPTION: string;
    INIT_CIPHER_FAILED: string;
    INVALID_ALGORITHM_PARAMETER_EXCEPTION: string;
    IO_EXCEPTION: string;
    JSON_EXCEPTION: string;
    MINIMUM_SDK: string;
    MISSING_ACTION_PARAMETERS: string;
    MISSING_PARAMETERS: string;
    NO_SUCH_ALGORITHM_EXCEPTION: string;
    SECURITY_EXCEPTION: string;
  } = {
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

  /**
   * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
   * @param {AFAAuthOptions} options Options
   * @returns {Promise<AFAEncryptResponse>}
   */
  @Cordova()
  encrypt(options: AFAAuthOptions): Promise<AFAEncryptResponse> {
    return;
  }

  /**
   * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
   * @param {AFAAuthOptions} options Options
   * @returns {Promise<AFADecryptOptions>}
   */
  @Cordova()
  decrypt(options: AFAAuthOptions): Promise<AFADecryptOptions> {
    return;
  }

  /**
   * Check if service is available
   * @returns {Promise<AFAAvailableResponse>} Returns a Promise that resolves if fingerprint auth is available on the device
   */
  @Cordova()
  isAvailable(): Promise<AFAAvailableResponse> {
    return;
  }

  /**
   * Delete the cipher used for encryption and decryption by username
   * @param {AFADeleteOptions} options Options
   * @returns {Promise<{ deleted: boolean }>} Returns a Promise that resolves if the cipher was successfully deleted
   */
  @Cordova()
  delete(options: AFADeleteOptions): Promise<{ deleted: boolean }> {
    return;
  }
}