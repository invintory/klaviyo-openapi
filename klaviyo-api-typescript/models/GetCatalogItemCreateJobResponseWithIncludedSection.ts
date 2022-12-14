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
import type { GetCatalogItemCreateJobResponseWithIncludedSectionData } from './GetCatalogItemCreateJobResponseWithIncludedSectionData';
import {
    GetCatalogItemCreateJobResponseWithIncludedSectionDataFromJSON,
    GetCatalogItemCreateJobResponseWithIncludedSectionDataFromJSONTyped,
    GetCatalogItemCreateJobResponseWithIncludedSectionDataToJSON,
} from './GetCatalogItemCreateJobResponseWithIncludedSectionData';

/**
 * 
 * @export
 * @interface GetCatalogItemCreateJobResponseWithIncludedSection
 */
export interface GetCatalogItemCreateJobResponseWithIncludedSection {
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseWithIncludedSectionData}
     * @memberof GetCatalogItemCreateJobResponseWithIncludedSection
     */
    data: GetCatalogItemCreateJobResponseWithIncludedSectionData;
}

/**
 * Check if a given object implements the GetCatalogItemCreateJobResponseWithIncludedSection interface.
 */
export function instanceOfGetCatalogItemCreateJobResponseWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetCatalogItemCreateJobResponseWithIncludedSectionFromJSON(json: any): GetCatalogItemCreateJobResponseWithIncludedSection {
    return GetCatalogItemCreateJobResponseWithIncludedSectionFromJSONTyped(json, false);
}

export function GetCatalogItemCreateJobResponseWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogItemCreateJobResponseWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogItemCreateJobResponseWithIncludedSectionDataFromJSON(json['data']),
    };
}

export function GetCatalogItemCreateJobResponseWithIncludedSectionToJSON(value?: GetCatalogItemCreateJobResponseWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogItemCreateJobResponseWithIncludedSectionDataToJSON(value.data),
    };
}
