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
import type { GetCatalogVariantResponseCollectionDataInner } from './GetCatalogVariantResponseCollectionDataInner';
import {
    GetCatalogVariantResponseCollectionDataInnerFromJSON,
    GetCatalogVariantResponseCollectionDataInnerFromJSONTyped,
    GetCatalogVariantResponseCollectionDataInnerToJSON,
} from './GetCatalogVariantResponseCollectionDataInner';

/**
 * 
 * @export
 * @interface PostCatalogVariantResponse
 */
export interface PostCatalogVariantResponse {
    /**
     * 
     * @type {GetCatalogVariantResponseCollectionDataInner}
     * @memberof PostCatalogVariantResponse
     */
    data: GetCatalogVariantResponseCollectionDataInner;
}

/**
 * Check if a given object implements the PostCatalogVariantResponse interface.
 */
export function instanceOfPostCatalogVariantResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostCatalogVariantResponseFromJSON(json: any): PostCatalogVariantResponse {
    return PostCatalogVariantResponseFromJSONTyped(json, false);
}

export function PostCatalogVariantResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCatalogVariantResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetCatalogVariantResponseCollectionDataInnerFromJSON(json['data']),
    };
}

export function PostCatalogVariantResponseToJSON(value?: PostCatalogVariantResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetCatalogVariantResponseCollectionDataInnerToJSON(value.data),
    };
}

