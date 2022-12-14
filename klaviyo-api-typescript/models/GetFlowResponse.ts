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
import type { GetFlowResponseData } from './GetFlowResponseData';
import {
    GetFlowResponseDataFromJSON,
    GetFlowResponseDataFromJSONTyped,
    GetFlowResponseDataToJSON,
} from './GetFlowResponseData';

/**
 * 
 * @export
 * @interface GetFlowResponse
 */
export interface GetFlowResponse {
    /**
     * 
     * @type {GetFlowResponseData}
     * @memberof GetFlowResponse
     */
    data: GetFlowResponseData;
}

/**
 * Check if a given object implements the GetFlowResponse interface.
 */
export function instanceOfGetFlowResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetFlowResponseFromJSON(json: any): GetFlowResponse {
    return GetFlowResponseFromJSONTyped(json, false);
}

export function GetFlowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFlowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetFlowResponseDataFromJSON(json['data']),
    };
}

export function GetFlowResponseToJSON(value?: GetFlowResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetFlowResponseDataToJSON(value.data),
    };
}
