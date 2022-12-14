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
import type { GetCatalogItems4XXResponseErrorsInner } from './GetCatalogItems4XXResponseErrorsInner';
import {
    GetCatalogItems4XXResponseErrorsInnerFromJSON,
    GetCatalogItems4XXResponseErrorsInnerFromJSONTyped,
    GetCatalogItems4XXResponseErrorsInnerToJSON,
} from './GetCatalogItems4XXResponseErrorsInner';

/**
 * 
 * @export
 * @interface GetCatalogItems4XXResponse
 */
export interface GetCatalogItems4XXResponse {
    /**
     * 
     * @type {Array<GetCatalogItems4XXResponseErrorsInner>}
     * @memberof GetCatalogItems4XXResponse
     */
    errors: Array<GetCatalogItems4XXResponseErrorsInner>;
}

/**
 * Check if a given object implements the GetCatalogItems4XXResponse interface.
 */
export function instanceOfGetCatalogItems4XXResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function GetCatalogItems4XXResponseFromJSON(json: any): GetCatalogItems4XXResponse {
    return GetCatalogItems4XXResponseFromJSONTyped(json, false);
}

export function GetCatalogItems4XXResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogItems4XXResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(GetCatalogItems4XXResponseErrorsInnerFromJSON)),
    };
}

export function GetCatalogItems4XXResponseToJSON(value?: GetCatalogItems4XXResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(GetCatalogItems4XXResponseErrorsInnerToJSON)),
    };
}
