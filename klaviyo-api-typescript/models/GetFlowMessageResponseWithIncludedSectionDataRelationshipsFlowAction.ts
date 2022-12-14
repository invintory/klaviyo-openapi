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
import type { GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInner } from './GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInner';
import {
    GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInnerFromJSON,
    GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInnerFromJSONTyped,
    GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInnerToJSON,
} from './GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInner';

/**
 * 
 * @export
 * @interface GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction
 */
export interface GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction {
    /**
     * 
     * @type {GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInner}
     * @memberof GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction
     */
    data: GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInner;
}

/**
 * Check if a given object implements the GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction interface.
 */
export function instanceOfGetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowActionFromJSON(json: any): GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction {
    return GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowActionFromJSONTyped(json, false);
}

export function GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInnerFromJSON(json['data']),
    };
}

export function GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowActionToJSON(value?: GetFlowMessageResponseWithIncludedSectionDataRelationshipsFlowAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetFlowResponseCollectionWithIncludedSectionDataInnerRelationshipsFlowActionsDataInnerToJSON(value.data),
    };
}
