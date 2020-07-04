export * from './accountDetailBalance';
export * from './accountHolderBalanceRequest';
export * from './accountHolderBalanceResponse';
export * from './accountHolderTransactionListRequest';
export * from './accountHolderTransactionListResponse';
export * from './accountTransactionList';
export * from './amount';
export * from './bankAccountDetail';
export * from './detailBalance';
export * from './errorFieldType';
export * from './fieldType';
export * from './payoutAccountHolderRequest';
export * from './payoutAccountHolderResponse';
export * from './refundFundsTransferRequest';
export * from './refundFundsTransferResponse';
export * from './refundNotPaidOutTransfersRequest';
export * from './refundNotPaidOutTransfersResponse';
export * from './setupBeneficiaryRequest';
export * from './setupBeneficiaryResponse';
export * from './transaction';
export * from './transactionListForAccount';
export * from './transferFundsRequest';
export * from './transferFundsResponse';

import localVarRequest = require('request');

 import { AccountDetailBalance } from './accountDetailBalance.ts';
 import { AccountHolderBalanceRequest } from './accountHolderBalanceRequest.ts';
 import { AccountHolderBalanceResponse } from './accountHolderBalanceResponse.ts';
 import { AccountHolderTransactionListRequest } from './accountHolderTransactionListRequest.ts';
 import { AccountHolderTransactionListResponse } from './accountHolderTransactionListResponse.ts';
 import { AccountTransactionList } from './accountTransactionList.ts';
 import { Amount } from './amount.ts';
 import { BankAccountDetail } from './bankAccountDetail.ts';
 import { DetailBalance } from './detailBalance.ts';
 import { ErrorFieldType } from './errorFieldType.ts';
 import { FieldType } from './fieldType.ts';
 import { PayoutAccountHolderRequest } from './payoutAccountHolderRequest.ts';
 import { PayoutAccountHolderResponse } from './payoutAccountHolderResponse.ts';
 import { RefundFundsTransferRequest } from './refundFundsTransferRequest.ts';
 import { RefundFundsTransferResponse } from './refundFundsTransferResponse.ts';
 import { RefundNotPaidOutTransfersRequest } from './refundNotPaidOutTransfersRequest.ts';
 import { RefundNotPaidOutTransfersResponse } from './refundNotPaidOutTransfersResponse.ts';
 import { SetupBeneficiaryRequest } from './setupBeneficiaryRequest.ts';
 import { SetupBeneficiaryResponse } from './setupBeneficiaryResponse.ts';
 import { Transaction } from './transaction.ts';
 import { TransactionListForAccount } from './transactionListForAccount.ts';
 import { TransferFundsRequest } from './transferFundsRequest.ts';
 import { TransferFundsResponse } from './transferFundsResponse.ts';

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
        "AccountHolderTransactionListRequest.TransactionStatusesEnum": AccountHolderTransactionListRequest.TransactionStatusesEnum,
        "FieldType.FieldNameEnum": FieldType.FieldNameEnum,
        "Transaction.TransactionStatusEnum": Transaction.TransactionStatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AccountDetailBalance": AccountDetailBalance,
    "AccountHolderBalanceRequest": AccountHolderBalanceRequest,
    "AccountHolderBalanceResponse": AccountHolderBalanceResponse,
    "AccountHolderTransactionListRequest": AccountHolderTransactionListRequest,
    "AccountHolderTransactionListResponse": AccountHolderTransactionListResponse,
    "AccountTransactionList": AccountTransactionList,
    "Amount": Amount,
    "BankAccountDetail": BankAccountDetail,
    "DetailBalance": DetailBalance,
    "ErrorFieldType": ErrorFieldType,
    "FieldType": FieldType,
    "PayoutAccountHolderRequest": PayoutAccountHolderRequest,
    "PayoutAccountHolderResponse": PayoutAccountHolderResponse,
    "RefundFundsTransferRequest": RefundFundsTransferRequest,
    "RefundFundsTransferResponse": RefundFundsTransferResponse,
    "RefundNotPaidOutTransfersRequest": RefundNotPaidOutTransfersRequest,
    "RefundNotPaidOutTransfersResponse": RefundNotPaidOutTransfersResponse,
    "SetupBeneficiaryRequest": SetupBeneficiaryRequest,
    "SetupBeneficiaryResponse": SetupBeneficiaryResponse,
    "Transaction": Transaction,
    "TransactionListForAccount": TransactionListForAccount,
    "TransferFundsRequest": TransferFundsRequest,
    "TransferFundsResponse": TransferFundsResponse,
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
