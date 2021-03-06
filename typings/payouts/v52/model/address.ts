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

 

export class Address {
    /**
    * The name of the city.
    */
    'city': string;
    /**
    * The two-character country code as defined in ISO-3166-1 alpha-2. For example, **US**. > If you don\'t know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
    */
    'country': string;
    /**
    * The number or name of the house.
    */
    'houseNumberOrName': string;
    /**
    * A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
    */
    'postalCode': string;
    /**
    * State or province codes as defined in ISO 3166-2. For example, **CA** in the US or **ON** in Canada. > Required for the US and Canada.
    */
    'stateOrProvince'?: string;
    /**
    * The name of the street. > The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
    */
    'street': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "houseNumberOrName",
            "baseName": "houseNumberOrName",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "stateOrProvince",
            "baseName": "stateOrProvince",
            "type": "string"
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}

