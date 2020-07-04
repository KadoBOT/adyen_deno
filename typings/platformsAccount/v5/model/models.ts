export * from './account';
export * from './accountEvent';
export * from './accountHolderDetails';
export * from './accountHolderStatus';
export * from './accountPayoutState';
export * from './accountProcessingState';
export * from './amount';
export * from './bankAccountDetail';
export * from './businessDetails';
export * from './closeAccountHolderRequest';
export * from './closeAccountHolderResponse';
export * from './closeAccountRequest';
export * from './closeAccountResponse';
export * from './createAccountHolderRequest';
export * from './createAccountHolderResponse';
export * from './createAccountRequest';
export * from './createAccountResponse';
export * from './deleteBankAccountRequest';
export * from './deletePayoutMethodRequest';
export * from './deleteShareholderRequest';
export * from './documentDetail';
export * from './errorFieldType';
export * from './fieldType';
export * from './genericResponse';
export * from './getAccountHolderRequest';
export * from './getAccountHolderResponse';
export * from './getAccountHolderStatusResponse';
export * from './getUploadedDocumentsRequest';
export * from './getUploadedDocumentsResponse';
export * from './individualDetails';
export * from './kYCBankAccountCheckResult';
export * from './kYCCardCheckResult';
export * from './kYCCheckResult';
export * from './kYCCheckStatusData';
export * from './kYCCheckSummary';
export * from './kYCShareholderCheckResult';
export * from './kYCVerificationResult';
export * from './payoutMethod';
export * from './payoutScheduleResponse';
export * from './performVerificationRequest';
export * from './personalDocumentData';
export * from './shareholderContact';
export * from './suspendAccountHolderRequest';
export * from './suspendAccountHolderResponse';
export * from './unSuspendAccountHolderRequest';
export * from './unSuspendAccountHolderResponse';
export * from './updateAccountHolderRequest';
export * from './updateAccountHolderResponse';
export * from './updateAccountHolderStateRequest';
export * from './updateAccountRequest';
export * from './updateAccountResponse';
export * from './updatePayoutScheduleRequest';
export * from './uploadDocumentRequest';
export * from './viasAddress';
export * from './viasName';
export * from './viasPersonalData';
export * from './viasPhoneNumber';

import localVarRequest = require('request');

 import { Account } from './account.ts';
 import { AccountEvent } from './accountEvent.ts';
 import { AccountHolderDetails } from './accountHolderDetails.ts';
 import { AccountHolderStatus } from './accountHolderStatus.ts';
 import { AccountPayoutState } from './accountPayoutState.ts';
 import { AccountProcessingState } from './accountProcessingState.ts';
 import { Amount } from './amount.ts';
 import { BankAccountDetail } from './bankAccountDetail.ts';
 import { BusinessDetails } from './businessDetails.ts';
 import { CloseAccountHolderRequest } from './closeAccountHolderRequest.ts';
 import { CloseAccountHolderResponse } from './closeAccountHolderResponse.ts';
 import { CloseAccountRequest } from './closeAccountRequest.ts';
 import { CloseAccountResponse } from './closeAccountResponse.ts';
 import { CreateAccountHolderRequest } from './createAccountHolderRequest.ts';
 import { CreateAccountHolderResponse } from './createAccountHolderResponse.ts';
 import { CreateAccountRequest } from './createAccountRequest.ts';
 import { CreateAccountResponse } from './createAccountResponse.ts';
 import { DeleteBankAccountRequest } from './deleteBankAccountRequest.ts';
 import { DeletePayoutMethodRequest } from './deletePayoutMethodRequest.ts';
 import { DeleteShareholderRequest } from './deleteShareholderRequest.ts';
 import { DocumentDetail } from './documentDetail.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { FieldType } from './fieldType.ts';
 import { GenericResponse } from './genericResponse.ts';
 import { GetAccountHolderRequest } from './getAccountHolderRequest.ts';
 import { GetAccountHolderResponse } from './getAccountHolderResponse.ts';
 import { GetAccountHolderStatusResponse } from './getAccountHolderStatusResponse.ts';
 import { GetUploadedDocumentsRequest } from './getUploadedDocumentsRequest.ts';
 import { GetUploadedDocumentsResponse } from './getUploadedDocumentsResponse.ts';
 import { IndividualDetails } from './individualDetails.ts';
 import { KYCBankAccountCheckResult } from './kYCBankAccountCheckResult.ts';
 import { KYCCardCheckResult } from './kYCCardCheckResult.ts';
 import { KYCCheckResult } from './kYCCheckResult.ts';
 import { KYCCheckStatusData } from './kYCCheckStatusData.ts';
 import { KYCCheckSummary } from './kYCCheckSummary.ts';
 import { KYCShareholderCheckResult } from './kYCShareholderCheckResult.ts';
 import { KYCVerificationResult } from './kYCVerificationResult.ts';
 import { PayoutMethod } from './payoutMethod.ts';
 import { PayoutScheduleResponse } from './payoutScheduleResponse.ts';
 import { PerformVerificationRequest } from './performVerificationRequest.ts';
 import { PersonalDocumentData } from './personalDocumentData.ts';
 import { ShareholderContact } from './shareholderContact.ts';
 import { SuspendAccountHolderRequest } from './suspendAccountHolderRequest.ts';
 import { SuspendAccountHolderResponse } from './suspendAccountHolderResponse.ts';
 import { UnSuspendAccountHolderRequest } from './unSuspendAccountHolderRequest.ts';
 import { UnSuspendAccountHolderResponse } from './unSuspendAccountHolderResponse.ts';
 import { UpdateAccountHolderRequest } from './updateAccountHolderRequest.ts';
 import { UpdateAccountHolderResponse } from './updateAccountHolderResponse.ts';
 import { UpdateAccountHolderStateRequest } from './updateAccountHolderStateRequest.ts';
 import { UpdateAccountRequest } from './updateAccountRequest.ts';
 import { UpdateAccountResponse } from './updateAccountResponse.ts';
 import { UpdatePayoutScheduleRequest } from './updatePayoutScheduleRequest.ts';
 import { UploadDocumentRequest } from './uploadDocumentRequest.ts';
 import { ViasAddress } from './viasAddress.ts';
 import { ViasName } from './viasName.ts';
 import { ViasPersonalData } from './viasPersonalData.ts';
 import { ViasPhoneNumber } from './viasPhoneNumber.ts';

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
        "AccountEvent.EventEnum": AccountEvent.EventEnum,
        "AccountHolderStatus.StatusEnum": AccountHolderStatus.StatusEnum,
        "CloseAccountResponse.StatusEnum": CloseAccountResponse.StatusEnum,
        "CreateAccountHolderRequest.LegalEntityEnum": CreateAccountHolderRequest.LegalEntityEnum,
        "CreateAccountHolderResponse.LegalEntityEnum": CreateAccountHolderResponse.LegalEntityEnum,
        "CreateAccountRequest.PayoutScheduleEnum": CreateAccountRequest.PayoutScheduleEnum,
        "CreateAccountResponse.StatusEnum": CreateAccountResponse.StatusEnum,
        "DocumentDetail.DocumentTypeEnum": DocumentDetail.DocumentTypeEnum,
        "FieldType.FieldNameEnum": FieldType.FieldNameEnum,
        "GetAccountHolderResponse.LegalEntityEnum": GetAccountHolderResponse.LegalEntityEnum,
        "KYCCheckStatusData.StatusEnum": KYCCheckStatusData.StatusEnum,
        "KYCCheckStatusData.TypeEnum": KYCCheckStatusData.TypeEnum,
        "PayoutMethod.PayoutMethodTypeEnum": PayoutMethod.PayoutMethodTypeEnum,
        "PayoutScheduleResponse.ScheduleEnum": PayoutScheduleResponse.ScheduleEnum,
        "PerformVerificationRequest.AccountStateTypeEnum": PerformVerificationRequest.AccountStateTypeEnum,
        "PersonalDocumentData.TypeEnum": PersonalDocumentData.TypeEnum,
        "UpdateAccountHolderRequest.LegalEntityEnum": UpdateAccountHolderRequest.LegalEntityEnum,
        "UpdateAccountHolderResponse.LegalEntityEnum": UpdateAccountHolderResponse.LegalEntityEnum,
        "UpdateAccountHolderStateRequest.StateTypeEnum": UpdateAccountHolderStateRequest.StateTypeEnum,
        "UpdatePayoutScheduleRequest.ActionEnum": UpdatePayoutScheduleRequest.ActionEnum,
        "UpdatePayoutScheduleRequest.ScheduleEnum": UpdatePayoutScheduleRequest.ScheduleEnum,
        "ViasName.GenderEnum": ViasName.GenderEnum,
        "ViasPhoneNumber.PhoneTypeEnum": ViasPhoneNumber.PhoneTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountEvent": AccountEvent,
    "AccountHolderDetails": AccountHolderDetails,
    "AccountHolderStatus": AccountHolderStatus,
    "AccountPayoutState": AccountPayoutState,
    "AccountProcessingState": AccountProcessingState,
    "Amount": Amount,
    "BankAccountDetail": BankAccountDetail,
    "BusinessDetails": BusinessDetails,
    "CloseAccountHolderRequest": CloseAccountHolderRequest,
    "CloseAccountHolderResponse": CloseAccountHolderResponse,
    "CloseAccountRequest": CloseAccountRequest,
    "CloseAccountResponse": CloseAccountResponse,
    "CreateAccountHolderRequest": CreateAccountHolderRequest,
    "CreateAccountHolderResponse": CreateAccountHolderResponse,
    "CreateAccountRequest": CreateAccountRequest,
    "CreateAccountResponse": CreateAccountResponse,
    "DeleteBankAccountRequest": DeleteBankAccountRequest,
    "DeletePayoutMethodRequest": DeletePayoutMethodRequest,
    "DeleteShareholderRequest": DeleteShareholderRequest,
    "DocumentDetail": DocumentDetail,
    "ErrorFieldType": ErrorFieldType,
    "FieldType": FieldType,
    "GenericResponse": GenericResponse,
    "GetAccountHolderRequest": GetAccountHolderRequest,
    "GetAccountHolderResponse": GetAccountHolderResponse,
    "GetAccountHolderStatusResponse": GetAccountHolderStatusResponse,
    "GetUploadedDocumentsRequest": GetUploadedDocumentsRequest,
    "GetUploadedDocumentsResponse": GetUploadedDocumentsResponse,
    "IndividualDetails": IndividualDetails,
    "KYCBankAccountCheckResult": KYCBankAccountCheckResult,
    "KYCCardCheckResult": KYCCardCheckResult,
    "KYCCheckResult": KYCCheckResult,
    "KYCCheckStatusData": KYCCheckStatusData,
    "KYCCheckSummary": KYCCheckSummary,
    "KYCShareholderCheckResult": KYCShareholderCheckResult,
    "KYCVerificationResult": KYCVerificationResult,
    "PayoutMethod": PayoutMethod,
    "PayoutScheduleResponse": PayoutScheduleResponse,
    "PerformVerificationRequest": PerformVerificationRequest,
    "PersonalDocumentData": PersonalDocumentData,
    "ShareholderContact": ShareholderContact,
    "SuspendAccountHolderRequest": SuspendAccountHolderRequest,
    "SuspendAccountHolderResponse": SuspendAccountHolderResponse,
    "UnSuspendAccountHolderRequest": UnSuspendAccountHolderRequest,
    "UnSuspendAccountHolderResponse": UnSuspendAccountHolderResponse,
    "UpdateAccountHolderRequest": UpdateAccountHolderRequest,
    "UpdateAccountHolderResponse": UpdateAccountHolderResponse,
    "UpdateAccountHolderStateRequest": UpdateAccountHolderStateRequest,
    "UpdateAccountRequest": UpdateAccountRequest,
    "UpdateAccountResponse": UpdateAccountResponse,
    "UpdatePayoutScheduleRequest": UpdatePayoutScheduleRequest,
    "UploadDocumentRequest": UploadDocumentRequest,
    "ViasAddress": ViasAddress,
    "ViasName": ViasName,
    "ViasPersonalData": ViasPersonalData,
    "ViasPhoneNumber": ViasPhoneNumber,
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
