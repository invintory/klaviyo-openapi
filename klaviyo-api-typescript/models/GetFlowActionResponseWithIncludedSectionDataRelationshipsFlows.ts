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
import type { GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner } from './GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner';
import {
    GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerFromJSON,
    GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerFromJSONTyped,
    GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerToJSON,
} from './GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner';

/**
 * 
 * @export
 * @interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows
 */
export interface GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows {
    /**
     * 
     * @type {Array<GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner>}
     * @memberof GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows
     */
    data: Array<GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInner>;
}

/**
 * Check if a given object implements the GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows interface.
 */
export function instanceOfGetFlowActionResponseWithIncludedSectionDataRelationshipsFlows(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsFromJSON(json: any): GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows {
    return GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsFromJSONTyped(json, false);
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerFromJSON)),
    };
}

export function GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsToJSON(value?: GetFlowActionResponseWithIncludedSectionDataRelationshipsFlows | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetFlowActionResponseWithIncludedSectionDataRelationshipsFlowsDataInnerToJSON)),
    };
}
