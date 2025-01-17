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
import type { GetTemplateResponseCollectionDataInner } from './GetTemplateResponseCollectionDataInner';
import {
    GetTemplateResponseCollectionDataInnerFromJSON,
    GetTemplateResponseCollectionDataInnerFromJSONTyped,
    GetTemplateResponseCollectionDataInnerToJSON,
} from './GetTemplateResponseCollectionDataInner';

/**
 * 
 * @export
 * @interface GetTemplateResponse
 */
export interface GetTemplateResponse {
    /**
     * 
     * @type {GetTemplateResponseCollectionDataInner}
     * @memberof GetTemplateResponse
     */
    data: GetTemplateResponseCollectionDataInner;
}

/**
 * Check if a given object implements the GetTemplateResponse interface.
 */
export function instanceOfGetTemplateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetTemplateResponseFromJSON(json: any): GetTemplateResponse {
    return GetTemplateResponseFromJSONTyped(json, false);
}

export function GetTemplateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTemplateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetTemplateResponseCollectionDataInnerFromJSON(json['data']),
    };
}

export function GetTemplateResponseToJSON(value?: GetTemplateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetTemplateResponseCollectionDataInnerToJSON(value.data),
    };
}

