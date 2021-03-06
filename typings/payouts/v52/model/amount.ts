/**
 * Adyen Payout API
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Online payouts](https://docs.adyen.com/checkout/online-payouts).
 *
 * The version of the OpenAPI document: 52
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

 

export class Amount {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
    */
    'currency': string;
    /**
    * The payable amount that can be charged for the transaction.  The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
    */
    'value': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Amount.attributeTypeMap;
    }
}

