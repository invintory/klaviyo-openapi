/* tslint:disable */
/* eslint-disable */
/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * The version of the OpenAPI document: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner
 */
export interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner
     */
    type: GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerTypeEnum = {
    FlowMessage: 'flow-message'
} as const;
export type GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerTypeEnum = typeof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerTypeEnum[keyof typeof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerTypeEnum];


/**
 * Check if a given object implements the GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner interface.
 */
export function instanceOfGetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerFromJSON(json: any): GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner {
    return GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerFromJSONTyped(json, false);
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInnerToJSON(value?: GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowMessagesDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

