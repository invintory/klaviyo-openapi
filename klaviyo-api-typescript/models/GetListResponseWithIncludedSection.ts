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
import type { GetListResponseCollectionWithIncludedSectionDataInner } from './GetListResponseCollectionWithIncludedSectionDataInner';
import {
    GetListResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetListResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetListResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetListResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface GetListResponseWithIncludedSection
 */
export interface GetListResponseWithIncludedSection {
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInner}
     * @memberof GetListResponseWithIncludedSection
     */
    data: GetListResponseCollectionWithIncludedSectionDataInner;
}

/**
 * Check if a given object implements the GetListResponseWithIncludedSection interface.
 */
export function instanceOfGetListResponseWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetListResponseWithIncludedSectionFromJSON(json: any): GetListResponseWithIncludedSection {
    return GetListResponseWithIncludedSectionFromJSONTyped(json, false);
}

export function GetListResponseWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetListResponseWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetListResponseCollectionWithIncludedSectionDataInnerFromJSON(json['data']),
    };
}

export function GetListResponseWithIncludedSectionToJSON(value?: GetListResponseWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetListResponseCollectionWithIncludedSectionDataInnerToJSON(value.data),
    };
}

