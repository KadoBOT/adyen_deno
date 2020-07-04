export * from './accountInfo';
export * from './additionalData3DSecure';
export * from './additionalDataAirline';
export * from './additionalDataCarRental';
export * from './additionalDataCommon';
export * from './additionalDataLevel23';
export * from './additionalDataLodging';
export * from './additionalDataModifications';
export * from './additionalDataOpenInvoice';
export * from './additionalDataRatepay';
export * from './additionalDataRetry';
export * from './additionalDataRisk';
export * from './additionalDataRiskStandalone';
export * from './additionalDataTemporaryServices';
export * from './additionalDataWallets';
export * from './address';
export * from './amount';
export * from './applicationInfo';
export * from './bankAccount';
export * from './browserInfo';
export * from './card';
export * from './commonField';
export * from './deviceRenderOptions';
export * from './externalPlatform';
export * from './forexQuote';
export * from './fraudCheckResult';
export * from './fraudResult';
export * from './fundSource';
export * from './installments';
export * from './merchantDevice';
export * from './merchantRiskIndicator';
export * from './modifyRequest';
export * from './modifyResponse';
export * from './name';
export * from './payoutRequest';
export * from './payoutResponse';
export * from './recurring';
export * from './sDKEphemPubKey';
export * from './shopperInteractionDevice';
export * from './split';
export * from './splitAmount';
export * from './storeDetailAndSubmitRequest';
export * from './storeDetailAndSubmitResponse';
export * from './storeDetailRequest';
export * from './storeDetailResponse';
export * from './submitRequest';
export * from './submitResponse';
export * from './threeDS2RequestData';
export * from './threeDSecureData';

import localVarRequest = require('request');

 import { AccountInfo } from './accountInfo.ts';
 import { AdditionalData3DSecure } from './additionalData3DSecure.ts';
 import { AdditionalDataAirline } from './additionalDataAirline.ts';
 import { AdditionalDataCarRental } from './additionalDataCarRental.ts';
 import { AdditionalDataCommon } from './additionalDataCommon.ts';
 import { AdditionalDataLevel23 } from './additionalDataLevel23.ts';
 import { AdditionalDataLodging } from './additionalDataLodging.ts';
 import { AdditionalDataModifications } from './additionalDataModifications.ts';
 import { AdditionalDataOpenInvoice } from './additionalDataOpenInvoice.ts';
 import { AdditionalDataRatepay } from './additionalDataRatepay.ts';
 import { AdditionalDataRetry } from './additionalDataRetry.ts';
 import { AdditionalDataRisk } from './additionalDataRisk.ts';
 import { AdditionalDataRiskStandalone } from './additionalDataRiskStandalone.ts';
 import { AdditionalDataTemporaryServices } from './additionalDataTemporaryServices.ts';
  import { AdditionalDataWallets } from './additionalDataWall.ts';
 import { Address } from './address.ts';
 import { Amount } from './amount.ts';
 import { ApplicationInfo } from './applicationInfo.ts';
 import { BankAccount } from './bankAccount.ts';
 import { BrowserInfo } from './browserInfo.ts';
 import { Card } from './card.ts';
 import { CommonField } from './commonField.ts';
 import { DeviceRenderOptions } from './deviceRenderOptions.ts';
 import { ExternalPlatform } from './externalPlatform.ts';
 import { ForexQuote } from './forexQuote.ts';
 import { FraudCheckResult } from './fraudCheckResult.ts';
 import { FraudResult } from './fraudResult.ts';
 import { FundSource } from './fundSource.ts';
  import { Installments } from './installments.ts';
 import { MerchantDevice } from './merchantDevice.ts';
 import { MerchantRiskIndicator } from './merchantRiskIndicator.ts';
 import { ModifyRequest } from './modifyRequest.ts';
 import { ModifyResponse } from './modifyResponse.ts';
 import { Name } from './name.ts';
 import { PayoutRequest } from './payoutRequest.ts';
 import { PayoutResponse } from './payoutResponse.ts';
 import { Recurring } from './recurring.ts';
 import { SDKEphemPubKey } from './sDKEphemPubKey.ts';
 import { ShopperInteractionDevice } from './shopperInteractionDevice.ts';
 import { Split } from './split.ts';
 import { SplitAmount } from './splitAmount.ts';
 import { StoreDetailAndSubmitRequest } from './storeDetailAndSubmitRequest.ts';
 import { StoreDetailAndSubmitResponse } from './storeDetailAndSubmitResponse.ts';
 import { StoreDetailRequest } from './storeDetailRequest.ts';
 import { StoreDetailResponse } from './storeDetailResponse.ts';
 import { SubmitRequest } from './submitRequest.ts';
 import { SubmitResponse } from './submitResponse.ts';
 import { ThreeDS2RequestData } from './threeDS2RequestData.ts';
 import { ThreeDSecureData } from './threeDSecureData.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountInfo.AccountAgeIndicatorEnum": AccountInfo.AccountAgeIndicatorEnum,
        "AccountInfo.AccountChangeIndicatorEnum": AccountInfo.AccountChangeIndicatorEnum,
        "AccountInfo.AccountTypeEnum": AccountInfo.AccountTypeEnum,
        "AccountInfo.DeliveryAddressUsageIndicatorEnum": AccountInfo.DeliveryAddressUsageIndicatorEnum,
        "AccountInfo.PasswordChangeIndicatorEnum": AccountInfo.PasswordChangeIndicatorEnum,
        "AccountInfo.PaymentAccountIndicatorEnum": AccountInfo.PaymentAccountIndicatorEnum,
        "DeviceRenderOptions.SdkInterfaceEnum": DeviceRenderOptions.SdkInterfaceEnum,
        "DeviceRenderOptions.SdkUiTypeEnum": DeviceRenderOptions.SdkUiTypeEnum,
        "MerchantRiskIndicator.DeliveryAddressIndicatorEnum": MerchantRiskIndicator.DeliveryAddressIndicatorEnum,
        "MerchantRiskIndicator.DeliveryTimeframeEnum": MerchantRiskIndicator.DeliveryTimeframeEnum,
        "Name.GenderEnum": Name.GenderEnum,
        "PayoutRequest.EntityTypeEnum": PayoutRequest.EntityTypeEnum,
        "PayoutRequest.FundingSourceEnum": PayoutRequest.FundingSourceEnum,
        "PayoutRequest.RecurringProcessingModelEnum": PayoutRequest.RecurringProcessingModelEnum,
        "PayoutRequest.ShopperInteractionEnum": PayoutRequest.ShopperInteractionEnum,
        "PayoutResponse.ResultCodeEnum": PayoutResponse.ResultCodeEnum,
        "Recurring.ContractEnum": Recurring.ContractEnum,
        "Recurring.TokenServiceEnum": Recurring.TokenServiceEnum,
        "Split.TypeEnum": Split.TypeEnum,
        "StoreDetailAndSubmitRequest.EntityTypeEnum": StoreDetailAndSubmitRequest.EntityTypeEnum,
        "StoreDetailRequest.EntityTypeEnum": StoreDetailRequest.EntityTypeEnum,
        "SubmitRequest.EntityTypeEnum": SubmitRequest.EntityTypeEnum,
        "ThreeDS2RequestData.ChallengeIndicatorEnum": ThreeDS2RequestData.ChallengeIndicatorEnum,
        "ThreeDS2RequestData.TransactionTypeEnum": ThreeDS2RequestData.TransactionTypeEnum,
        "ThreeDSecureData.AuthenticationResponseEnum": ThreeDSecureData.AuthenticationResponseEnum,
        "ThreeDSecureData.DirectoryResponseEnum": ThreeDSecureData.DirectoryResponseEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountInfo": AccountInfo,
    "AdditionalData3DSecure": AdditionalData3DSecure,
    "AdditionalDataAirline": AdditionalDataAirline,
    "AdditionalDataCarRental": AdditionalDataCarRental,
    "AdditionalDataCommon": AdditionalDataCommon,
    "AdditionalDataLevel23": AdditionalDataLevel23,
    "AdditionalDataLodging": AdditionalDataLodging,
    "AdditionalDataModifications": AdditionalDataModifications,
    "AdditionalDataOpenInvoice": AdditionalDataOpenInvoice,
    "AdditionalDataRatepay": AdditionalDataRatepay,
    "AdditionalDataRetry": AdditionalDataRetry,
    "AdditionalDataRisk": AdditionalDataRisk,
    "AdditionalDataRiskStandalone": AdditionalDataRiskStandalone,
    "AdditionalDataTemporaryServices": AdditionalDataTemporaryServices,
    "AdditionalDataWallets": AdditionalDataWallets,
    "Address": Address,
    "Amount": Amount,
    "ApplicationInfo": ApplicationInfo,
    "BankAccount": BankAccount,
    "BrowserInfo": BrowserInfo,
    "Card": Card,
    "CommonField": CommonField,
    "DeviceRenderOptions": DeviceRenderOptions,
    "ExternalPlatform": ExternalPlatform,
    "ForexQuote": ForexQuote,
    "FraudCheckResult": FraudCheckResult,
    "FraudResult": FraudResult,
    "FundSource": FundSource,
    "Installments": Installments,
    "MerchantDevice": MerchantDevice,
    "MerchantRiskIndicator": MerchantRiskIndicator,
    "ModifyRequest": ModifyRequest,
    "ModifyResponse": ModifyResponse,
    "Name": Name,
    "PayoutRequest": PayoutRequest,
    "PayoutResponse": PayoutResponse,
    "Recurring": Recurring,
    "SDKEphemPubKey": SDKEphemPubKey,
    "ShopperInteractionDevice": ShopperInteractionDevice,
    "Split": Split,
    "SplitAmount": SplitAmount,
    "StoreDetailAndSubmitRequest": StoreDetailAndSubmitRequest,
    "StoreDetailAndSubmitResponse": StoreDetailAndSubmitResponse,
    "StoreDetailRequest": StoreDetailRequest,
    "StoreDetailResponse": StoreDetailResponse,
    "SubmitRequest": SubmitRequest,
    "SubmitResponse": SubmitResponse,
    "ThreeDS2RequestData": ThreeDS2RequestData,
    "ThreeDSecureData": ThreeDSecureData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
