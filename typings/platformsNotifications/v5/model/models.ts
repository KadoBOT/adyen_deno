export * from './accountCloseNotification';
export * from './accountCreateNotification';
export * from './accountEvent';
export * from './accountHolderCreateNotification';
export * from './accountHolderDetails';
export * from './accountHolderPayoutNotification';
export * from './accountHolderPayoutNotificationContent';
export * from './accountHolderStatus';
export * from './accountHolderStatusChangeNotification';
export * from './accountHolderStatusChangeNotificationContent';
export * from './accountHolderStoreStatusChangeNotification';
export * from './accountHolderStoreStatusChangeNotificationContent';
export * from './accountHolderUpcomingDeadlineNotification';
export * from './accountHolderUpcomingDeadlineNotificationContent';
export * from './accountHolderUpdateNotification';
export * from './accountHolderVerificationNotification';
export * from './accountHolderVerificationNotificationContent';
export * from './accountPayoutState';
export * from './accountProcessingState';
export * from './accountUpdateNotification';
export * from './amount';
export * from './bankAccountDetail';
export * from './beneficiarySetupNotification';
export * from './beneficiarySetupNotificationContent';
export * from './businessDetails';
export * from './closeAccountResponse';
export * from './compensateNegativeBalanceNotification';
export * from './compensateNegativeBalanceNotificationContent';
export * from './compensateNegativeBalanceNotificationRecord';
export * from './createAccountHolderResponse';
export * from './createAccountResponse';
export * from './directDebitInitiatedNotification';
export * from './directDebitInitiatedNotificationContent';
export * from './errorFieldType';
export * from './fieldType';
export * from './individualDetails';
export * from './kYCBankAccountCheckResult';
export * from './kYCCheckResult';
export * from './kYCCheckStatusData';
export * from './kYCCheckSummary';
export * from './kYCShareholderCheckResult';
export * from './kYCVerificationResult';
export * from './localDate';
export * from './message';
export * from './notificationErrorContainer';
export * from './notificationResponse';
export * from './operationStatus';
export * from './paymentFailureNotification';
export * from './paymentFailureNotificationContent';
export * from './payoutMethod';
export * from './payoutScheduleResponse';
export * from './personalDocumentData';
export * from './refundFundsTransferNotification';
export * from './refundFundsTransferNotificationContent';
export * from './refundResult';
export * from './reportAvailableNotification';
export * from './reportAvailableNotificationContent';
export * from './scheduledRefundsNotification';
export * from './scheduledRefundsNotificationContent';
export * from './shareholderContact';
export * from './transaction';
export * from './transferFundsNotification';
export * from './transferFundsNotificationContent';
export * from './updateAccountHolderResponse';
export * from './updateAccountResponse';
export * from './viasAddress';
export * from './viasName';
export * from './viasPersonalData';
export * from './viasPhoneNumber';

import localVarRequest = require('request');

 import { AccountCloseNotification } from './accountCloseNotification.ts';
 import { AccountCreateNotification } from './accountCreateNotification.ts';
 import { AccountEvent } from './accountEvent.ts';
 import { AccountHolderCreateNotification } from './accountHolderCreateNotification.ts';
 import { AccountHolderDetails } from './accountHolderDetails.ts';
 import { AccountHolderPayoutNotification } from './accountHolderPayoutNotification.ts';
 import { AccountHolderPayoutNotificationContent } from './accountHolderPayoutNotificationContent.ts';
 import { AccountHolderStatus } from './accountHolderStatus.ts';
 import { AccountHolderStatusChangeNotification } from './accountHolderStatusChangeNotification.ts';
 import { AccountHolderStatusChangeNotificationContent } from './accountHolderStatusChangeNotificationContent.ts';
 import { AccountHolderStoreStatusChangeNotification } from './accountHolderStoreStatusChangeNotification.ts';
 import { AccountHolderStoreStatusChangeNotificationContent } from './accountHolderStoreStatusChangeNotificationContent.ts';
 import { AccountHolderUpcomingDeadlineNotification } from './accountHolderUpcomingDeadlineNotification.ts';
 import { AccountHolderUpcomingDeadlineNotificationContent } from './accountHolderUpcomingDeadlineNotificationContent.ts';
 import { AccountHolderUpdateNotification } from './accountHolderUpdateNotification.ts';
 import { AccountHolderVerificationNotification } from './accountHolderVerificationNotification.ts';
 import { AccountHolderVerificationNotificationContent } from './accountHolderVerificationNotificationContent.ts';
 import { AccountPayoutState } from './accountPayoutState.ts';
 import { AccountProcessingState } from './accountProcessingState.ts';
 import { AccountUpdateNotification } from './accountUpdateNotification.ts';
 import { Amount } from './amount.ts';
 import { BankAccountDetail } from './bankAccountDetail.ts';
 import { BeneficiarySetupNotification } from './beneficiarySetupNotification.ts';
 import { BeneficiarySetupNotificationContent } from './beneficiarySetupNotificationContent.ts';
 import { BusinessDetails } from './businessDetails.ts';
 import { CloseAccountResponse } from './closeAccountResponse.ts';
 import { CompensateNegativeBalanceNotification } from './compensateNegativeBalanceNotification.ts';
 import { CompensateNegativeBalanceNotificationContent } from './compensateNegativeBalanceNotificationContent.ts';
 import { CompensateNegativeBalanceNotificationRecord } from './compensateNegativeBalanceNotificationRecord.ts';
 import { CreateAccountHolderResponse } from './createAccountHolderResponse.ts';
 import { CreateAccountResponse } from './createAccountResponse.ts';
 import { DirectDebitInitiatedNotification } from './directDebitInitiatedNotification.ts';
 import { DirectDebitInitiatedNotificationContent } from './directDebitInitiatedNotificationContent.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { FieldType } from './fieldType.ts';
 import { IndividualDetails } from './individualDetails.ts';
 import { KYCBankAccountCheckResult } from './kYCBankAccountCheckResult.ts';
 import { KYCCheckResult } from './kYCCheckResult.ts';
 import { KYCCheckStatusData } from './kYCCheckStatusData.ts';
 import { KYCCheckSummary } from './kYCCheckSummary.ts';
 import { KYCShareholderCheckResult } from './kYCShareholderCheckResult.ts';
 import { KYCVerificationResult } from './kYCVerificationResult.ts';
 import { LocalDate } from './localDate.ts';
 import { Message } from './message.ts';
 import { NotificationErrorContainer } from './notificationErrorContainer.ts';
 import { NotificationResponse } from './notificationResponse.ts';
 import { OperationStatus } from './operationStatus.ts';
 import { PaymentFailureNotification } from './paymentFailureNotification.ts';
 import { PaymentFailureNotificationContent } from './paymentFailureNotificationContent.ts';
 import { PayoutMethod } from './payoutMethod.ts';
 import { PayoutScheduleResponse } from './payoutScheduleResponse.ts';
 import { PersonalDocumentData } from './personalDocumentData.ts';
 import { RefundFundsTransferNotification } from './refundFundsTransferNotification.ts';
 import { RefundFundsTransferNotificationContent } from './refundFundsTransferNotificationContent.ts';
 import { RefundResult } from './refundResult.ts';
 import { ReportAvailableNotification } from './reportAvailableNotification.ts';
 import { ReportAvailableNotificationContent } from './reportAvailableNotificationContent.ts';
 import { ScheduledRefundsNotification } from './scheduledRefundsNotification.ts';
 import { ScheduledRefundsNotificationContent } from './scheduledRefundsNotificationContent.ts';
 import { ShareholderContact } from './shareholderContact.ts';
 import { Transaction } from './transaction.ts';
 import { TransferFundsNotification } from './transferFundsNotification.ts';
 import { TransferFundsNotificationContent } from './transferFundsNotificationContent.ts';
 import { UpdateAccountHolderResponse } from './updateAccountHolderResponse.ts';
 import { UpdateAccountResponse } from './updateAccountResponse.ts';
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
        "AccountHolderStoreStatusChangeNotificationContent.NewStatusEnum": AccountHolderStoreStatusChangeNotificationContent.NewStatusEnum,
        "AccountHolderStoreStatusChangeNotificationContent.OldStatusEnum": AccountHolderStoreStatusChangeNotificationContent.OldStatusEnum,
        "AccountHolderUpcomingDeadlineNotificationContent.EventEnum": AccountHolderUpcomingDeadlineNotificationContent.EventEnum,
        "CloseAccountResponse.StatusEnum": CloseAccountResponse.StatusEnum,
        "CreateAccountHolderResponse.LegalEntityEnum": CreateAccountHolderResponse.LegalEntityEnum,
        "CreateAccountResponse.StatusEnum": CreateAccountResponse.StatusEnum,
        "FieldType.FieldNameEnum": FieldType.FieldNameEnum,
        "KYCCheckStatusData.StatusEnum": KYCCheckStatusData.StatusEnum,
        "KYCCheckStatusData.TypeEnum": KYCCheckStatusData.TypeEnum,
        "PayoutMethod.PayoutMethodTypeEnum": PayoutMethod.PayoutMethodTypeEnum,
        "PayoutScheduleResponse.ScheduleEnum": PayoutScheduleResponse.ScheduleEnum,
        "PersonalDocumentData.TypeEnum": PersonalDocumentData.TypeEnum,
        "Transaction.TransactionStatusEnum": Transaction.TransactionStatusEnum,
        "UpdateAccountHolderResponse.LegalEntityEnum": UpdateAccountHolderResponse.LegalEntityEnum,
        "ViasName.GenderEnum": ViasName.GenderEnum,
        "ViasPhoneNumber.PhoneTypeEnum": ViasPhoneNumber.PhoneTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountCloseNotification": AccountCloseNotification,
    "AccountCreateNotification": AccountCreateNotification,
    "AccountEvent": AccountEvent,
    "AccountHolderCreateNotification": AccountHolderCreateNotification,
    "AccountHolderDetails": AccountHolderDetails,
    "AccountHolderPayoutNotification": AccountHolderPayoutNotification,
    "AccountHolderPayoutNotificationContent": AccountHolderPayoutNotificationContent,
    "AccountHolderStatus": AccountHolderStatus,
    "AccountHolderStatusChangeNotification": AccountHolderStatusChangeNotification,
    "AccountHolderStatusChangeNotificationContent": AccountHolderStatusChangeNotificationContent,
    "AccountHolderStoreStatusChangeNotification": AccountHolderStoreStatusChangeNotification,
    "AccountHolderStoreStatusChangeNotificationContent": AccountHolderStoreStatusChangeNotificationContent,
    "AccountHolderUpcomingDeadlineNotification": AccountHolderUpcomingDeadlineNotification,
    "AccountHolderUpcomingDeadlineNotificationContent": AccountHolderUpcomingDeadlineNotificationContent,
    "AccountHolderUpdateNotification": AccountHolderUpdateNotification,
    "AccountHolderVerificationNotification": AccountHolderVerificationNotification,
    "AccountHolderVerificationNotificationContent": AccountHolderVerificationNotificationContent,
    "AccountPayoutState": AccountPayoutState,
    "AccountProcessingState": AccountProcessingState,
    "AccountUpdateNotification": AccountUpdateNotification,
    "Amount": Amount,
    "BankAccountDetail": BankAccountDetail,
    "BeneficiarySetupNotification": BeneficiarySetupNotification,
    "BeneficiarySetupNotificationContent": BeneficiarySetupNotificationContent,
    "BusinessDetails": BusinessDetails,
    "CloseAccountResponse": CloseAccountResponse,
    "CompensateNegativeBalanceNotification": CompensateNegativeBalanceNotification,
    "CompensateNegativeBalanceNotificationContent": CompensateNegativeBalanceNotificationContent,
    "CompensateNegativeBalanceNotificationRecord": CompensateNegativeBalanceNotificationRecord,
    "CreateAccountHolderResponse": CreateAccountHolderResponse,
    "CreateAccountResponse": CreateAccountResponse,
    "DirectDebitInitiatedNotification": DirectDebitInitiatedNotification,
    "DirectDebitInitiatedNotificationContent": DirectDebitInitiatedNotificationContent,
    "ErrorFieldType": ErrorFieldType,
    "FieldType": FieldType,
    "IndividualDetails": IndividualDetails,
    "KYCBankAccountCheckResult": KYCBankAccountCheckResult,
    "KYCCheckResult": KYCCheckResult,
    "KYCCheckStatusData": KYCCheckStatusData,
    "KYCCheckSummary": KYCCheckSummary,
    "KYCShareholderCheckResult": KYCShareholderCheckResult,
    "KYCVerificationResult": KYCVerificationResult,
    "LocalDate": LocalDate,
    "Message": Message,
    "NotificationErrorContainer": NotificationErrorContainer,
    "NotificationResponse": NotificationResponse,
    "OperationStatus": OperationStatus,
    "PaymentFailureNotification": PaymentFailureNotification,
    "PaymentFailureNotificationContent": PaymentFailureNotificationContent,
    "PayoutMethod": PayoutMethod,
    "PayoutScheduleResponse": PayoutScheduleResponse,
    "PersonalDocumentData": PersonalDocumentData,
    "RefundFundsTransferNotification": RefundFundsTransferNotification,
    "RefundFundsTransferNotificationContent": RefundFundsTransferNotificationContent,
    "RefundResult": RefundResult,
    "ReportAvailableNotification": ReportAvailableNotification,
    "ReportAvailableNotificationContent": ReportAvailableNotificationContent,
    "ScheduledRefundsNotification": ScheduledRefundsNotification,
    "ScheduledRefundsNotificationContent": ScheduledRefundsNotificationContent,
    "ShareholderContact": ShareholderContact,
    "Transaction": Transaction,
    "TransferFundsNotification": TransferFundsNotification,
    "TransferFundsNotificationContent": TransferFundsNotificationContent,
    "UpdateAccountHolderResponse": UpdateAccountHolderResponse,
    "UpdateAccountResponse": UpdateAccountResponse,
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
