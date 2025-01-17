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
import type { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner } from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner';
import {
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSON,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerToJSON,
} from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner';

/**
 * 
 * @export
 * @interface PostCatalogCategoryCreateJobResponse
 */
export interface PostCatalogCategoryCreateJobResponse {
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner}
     * @memberof PostCatalogCategoryCreateJobResponse
     */
    data: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInner;
}

/**
 * Check if a given object implements the PostCatalogCategoryCreateJobResponse interface.
 */
export function instanceOfPostCatalogCategoryCreateJobResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostCatalogCategoryCreateJobResponseFromJSON(json: any): PostCatalogCategoryCreateJobResponse {
    return PostCatalogCategoryCreateJobResponseFromJSONTyped(json, false);
}

export function PostCatalogCategoryCreateJobResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCatalogCategoryCreateJobResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerFromJSON(json['data']),
    };
}

export function PostCatalogCategoryCreateJobResponseToJSON(value?: PostCatalogCategoryCreateJobResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerToJSON(value.data),
    };
}

