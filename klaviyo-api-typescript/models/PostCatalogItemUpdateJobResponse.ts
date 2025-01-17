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
import type { GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner } from './GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner';
import {
    GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface PostCatalogItemUpdateJobResponse
 */
export interface PostCatalogItemUpdateJobResponse {
    /**
     * 
     * @type {GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner}
     * @memberof PostCatalogItemUpdateJobResponse
     */
    data: GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInner;
}

/**
 * Check if a given object implements the PostCatalogItemUpdateJobResponse interface.
 */
export function instanceOfPostCatalogItemUpdateJobResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostCatalogItemUpdateJobResponseFromJSON(json: any): PostCatalogItemUpdateJobResponse {
    return PostCatalogItemUpdateJobResponseFromJSONTyped(json, false);
}

export function PostCatalogItemUpdateJobResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCatalogItemUpdateJobResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSON(json['data']),
    };
}

export function PostCatalogItemUpdateJobResponseToJSON(value?: PostCatalogItemUpdateJobResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogItemUpdateJobResponseCollectionWithIncludedSectionDataInnerToJSON(value.data),
    };
}

