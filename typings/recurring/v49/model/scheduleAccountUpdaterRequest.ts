/**
 * Adyen Recurring API
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/checkout/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v49/disable ```
 *
 * The version of the OpenAPI document: 49
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 
 import { Card } from './card.ts';

export class ScheduleAccountUpdaterRequest {
    /**
    * This field contains additional data, which may be required for a particular request.
    */
    'additionalData'?: object;
    'card'?: Card;
    /**
    * Account of the merchant.
    */
    'merchantAccount': string;
    /**
    * A reference that merchants can apply for the call.
    */
    'reference': string;
    /**
    * The selected detail recurring reference.  Optional if `card` is provided.
    */
    'selectedRecurringDetailReference'?: string;
    /**
    * The reference of the shopper that owns the recurring contract.  Optional if `card` is provided.
    */
    'shopperReference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "selectedRecurringDetailReference",
            "baseName": "selectedRecurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ScheduleAccountUpdaterRequest.attributeTypeMap;
    }
}

