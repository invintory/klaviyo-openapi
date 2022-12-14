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
import type { GetCatalogCategoryUpdateJobResponseWithIncludedSectionData } from './GetCatalogCategoryUpdateJobResponseWithIncludedSectionData';
import {
    GetCatalogCategoryUpdateJobResponseWithIncludedSectionDataFromJSON,
    GetCatalogCategoryUpdateJobResponseWithIncludedSectionDataFromJSONTyped,
    GetCatalogCategoryUpdateJobResponseWithIncludedSectionDataToJSON,
} from './GetCatalogCategoryUpdateJobResponseWithIncludedSectionData';

/**
 * 
 * @export
 * @interface GetCatalogCategoryUpdateJobResponseWithIncludedSection
 */
export interface GetCatalogCategoryUpdateJobResponseWithIncludedSection {
    /**
     * 
     * @type {GetCatalogCategoryUpdateJobResponseWithIncludedSectionData}
     * @memberof GetCatalogCategoryUpdateJobResponseWithIncludedSection
     */
    data: GetCatalogCategoryUpdateJobResponseWithIncludedSectionData;
}

/**
 * Check if a given object implements the GetCatalogCategoryUpdateJobResponseWithIncludedSection interface.
 */
export function instanceOfGetCatalogCategoryUpdateJobResponseWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetCatalogCategoryUpdateJobResponseWithIncludedSectionFromJSON(json: any): GetCatalogCategoryUpdateJobResponseWithIncludedSection {
    return GetCatalogCategoryUpdateJobResponseWithIncludedSectionFromJSONTyped(json, false);
}

export function GetCatalogCategoryUpdateJobResponseWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryUpdateJobResponseWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogCategoryUpdateJobResponseWithIncludedSectionDataFromJSON(json['data']),
    };
}

export function GetCatalogCategoryUpdateJobResponseWithIncludedSectionToJSON(value?: GetCatalogCategoryUpdateJobResponseWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogCategoryUpdateJobResponseWithIncludedSectionDataToJSON(value.data),
    };
}

