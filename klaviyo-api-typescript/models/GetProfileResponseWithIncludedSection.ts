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
import type { GetProfileResponseWithIncludedSectionData } from './GetProfileResponseWithIncludedSectionData';
import {
    GetProfileResponseWithIncludedSectionDataFromJSON,
    GetProfileResponseWithIncludedSectionDataFromJSONTyped,
    GetProfileResponseWithIncludedSectionDataToJSON,
} from './GetProfileResponseWithIncludedSectionData';

/**
 * 
 * @export
 * @interface GetProfileResponseWithIncludedSection
 */
export interface GetProfileResponseWithIncludedSection {
    /**
     * 
     * @type {GetProfileResponseWithIncludedSectionData}
     * @memberof GetProfileResponseWithIncludedSection
     */
    data: GetProfileResponseWithIncludedSectionData;
}

/**
 * Check if a given object implements the GetProfileResponseWithIncludedSection interface.
 */
export function instanceOfGetProfileResponseWithIncludedSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetProfileResponseWithIncludedSectionFromJSON(json: any): GetProfileResponseWithIncludedSection {
    return GetProfileResponseWithIncludedSectionFromJSONTyped(json, false);
}

export function GetProfileResponseWithIncludedSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileResponseWithIncludedSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetProfileResponseWithIncludedSectionDataFromJSON(json['data']),
    };
}

export function GetProfileResponseWithIncludedSectionToJSON(value?: GetProfileResponseWithIncludedSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetProfileResponseWithIncludedSectionDataToJSON(value.data),
    };
}

