/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/marketpay). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v5/createAccountHolder ```
 *
 * The version of the OpenAPI document: 5
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class AccountEvent {
    /**
    * The event. >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`. For more information, refer to [Verification checks](https://docs.adyen.com/marketpay/onboarding-and-verification/verification-checks).
    */
    'event': AccountEvent.EventEnum;
    /**
    * The date on which the event will take place.
    */
    'executionDate': Date;
    /**
    * The reason why this event has been created.
    */
    'reason': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "event",
            "baseName": "event",
            "type": "AccountEvent.EventEnum"
        },
        {
            "name": "executionDate",
            "baseName": "executionDate",
            "type": "Date"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountEvent.attributeTypeMap;
    }
}

export namespace AccountEvent {
    export enum EventEnum {
        InactivateAccount = <any> 'InactivateAccount',
        RefundNotPaidOutTransfers = <any> 'RefundNotPaidOutTransfers'
    }
}
