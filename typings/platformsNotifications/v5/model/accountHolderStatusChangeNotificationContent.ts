/**
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay/marketpay-notifications).
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { AccountHolderStatus } from './accountHolderStatus.ts';
 import { ErrorFieldType } from './errorFieldType.ts';

export class AccountHolderStatusChangeNotificationContent {
    /**
    * The code of the account holder.
    */
    'accountHolderCode': string;
    /**
    * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    'newStatus': AccountHolderStatus;
    'oldStatus': AccountHolderStatus;
    /**
    * The reason for the status change.
    */
    'reason': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "newStatus",
            "baseName": "newStatus",
            "type": "AccountHolderStatus"
        },
        {
            "name": "oldStatus",
            "baseName": "oldStatus",
            "type": "AccountHolderStatus"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderStatusChangeNotificationContent.attributeTypeMap;
    }
}

