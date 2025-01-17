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
import type { PostMetricAggregateResponseData } from './PostMetricAggregateResponseData';
import {
    PostMetricAggregateResponseDataFromJSON,
    PostMetricAggregateResponseDataFromJSONTyped,
    PostMetricAggregateResponseDataToJSON,
} from './PostMetricAggregateResponseData';

/**
 * 
 * @export
 * @interface PostMetricAggregateResponse
 */
export interface PostMetricAggregateResponse {
    /**
     * 
     * @type {PostMetricAggregateResponseData}
     * @memberof PostMetricAggregateResponse
     */
    data: PostMetricAggregateResponseData;
}

/**
 * Check if a given object implements the PostMetricAggregateResponse interface.
 */
export function instanceOfPostMetricAggregateResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function PostMetricAggregateResponseFromJSON(json: any): PostMetricAggregateResponse {
    return PostMetricAggregateResponseFromJSONTyped(json, false);
}

export function PostMetricAggregateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMetricAggregateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PostMetricAggregateResponseDataFromJSON(json['data']),
    };
}

export function PostMetricAggregateResponseToJSON(value?: PostMetricAggregateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PostMetricAggregateResponseDataToJSON(value.data),
    };
}

