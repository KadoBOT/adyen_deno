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

 
 import { ShareholderContact } from './shareholderContact.ts';

export class BusinessDetails {
    /**
    * The registered name of the company (if it differs from the legal name of the company).
    */
    'doingBusinessAs'?: string;
    /**
    * The legal name of the company.
    */
    'legalBusinessName'?: string;
    /**
    * The registration number of the company.
    */
    'registrationNumber'?: string;
    /**
    * Each of the shareholders associated with the company. Each array entry should represent one shareholder.
    */
    'shareholders'?: Array<ShareholderContact>;
    /**
    * The tax ID of the company.
    */
    'taxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "doingBusinessAs",
            "baseName": "doingBusinessAs",
            "type": "string"
        },
        {
            "name": "legalBusinessName",
            "baseName": "legalBusinessName",
            "type": "string"
        },
        {
            "name": "registrationNumber",
            "baseName": "registrationNumber",
            "type": "string"
        },
        {
            "name": "shareholders",
            "baseName": "shareholders",
            "type": "Array<ShareholderContact>"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BusinessDetails.attributeTypeMap;
    }
}

