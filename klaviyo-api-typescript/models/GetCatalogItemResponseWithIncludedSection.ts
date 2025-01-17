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
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInner } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInner';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface GetCatalogItemResponseWithIncludedSection
 */
export interface GetCatalogItemResponseWithIncludedSection {
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInner}
     * @memberof GetCatalogItemResponseWithIncludedSection
     */
    data: GetCatalogItemResponseCollectionWithIncludedSectionDataInner;
}

/**
 * Check if a given object implements the GetCatalogItemResponseWithIncludedSection interface.
 */
export function instanceOfGetCatalogItemResponseWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetCatalogItemResponseWithIncludedSectionFromJSON(json: any): GetCatalogItemResponseWithIncludedSection {
    return GetCatalogItemResponseWithIncludedSectionFromJSONTyped(json, false);
}

export function GetCatalogItemResponseWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogItemResponseWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerFromJSON(json['data']),
    };
}

export function GetCatalogItemResponseWithIncludedSectionToJSON(value?: GetCatalogItemResponseWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerToJSON(value.data),
    };
}

