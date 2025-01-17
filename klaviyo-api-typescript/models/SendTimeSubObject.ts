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
/**
 * 
 * @export
 * @interface SendTimeSubObject
 */
export interface SendTimeSubObject {
    /**
     * 
     * @type {Date}
     * @memberof SendTimeSubObject
     */
    datetime: Date;
    /**
     * 
     * @type {boolean}
     * @memberof SendTimeSubObject
     */
    isLocal: boolean;
}

/**
 * Check if a given object implements the SendTimeSubObject interface.
 */
export function instanceOfSendTimeSubObject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "datetime" in value;
    isInstance = isInstance && "isLocal" in value;

    return isInstance;
}

export function SendTimeSubObjectFromJSON(json: any): SendTimeSubObject {
    return SendTimeSubObjectFromJSONTyped(json, false);
}

export function SendTimeSubObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendTimeSubObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'datetime': (new Date(json['datetime'])),
        'isLocal': json['is_local'],
    };
}

export function SendTimeSubObjectToJSON(value?: SendTimeSubObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'datetime': (value.datetime.toISOString()),
        'is_local': value.isLocal,
    };
}

