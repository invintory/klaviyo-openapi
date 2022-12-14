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
import type { GetProfileResponseCollectionDataInner } from './GetProfileResponseCollectionDataInner';
import {
    GetProfileResponseCollectionDataInnerFromJSON,
    GetProfileResponseCollectionDataInnerFromJSONTyped,
    GetProfileResponseCollectionDataInnerToJSON,
} from './GetProfileResponseCollectionDataInner';

/**
 * 
 * @export
 * @interface PostProfileResponse
 */
export interface PostProfileResponse {
    /**
     * 
     * @type {GetProfileResponseCollectionDataInner}
     * @memberof PostProfileResponse
     */
    data: GetProfileResponseCollectionDataInner;
}

/**
 * Check if a given object implements the PostProfileResponse interface.
 */
export function instanceOfPostProfileResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostProfileResponseFromJSON(json: any): PostProfileResponse {
    return PostProfileResponseFromJSONTyped(json, false);
}

export function PostProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetProfileResponseCollectionDataInnerFromJSON(json['data']),
    };
}

export function PostProfileResponseToJSON(value?: PostProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetProfileResponseCollectionDataInnerToJSON(value.data),
    };
}

