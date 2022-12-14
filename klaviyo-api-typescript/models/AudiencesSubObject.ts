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
 * @interface AudiencesSubObject
 */
export interface AudiencesSubObject {
    /**
     * 
     * @type {Array<string>}
     * @memberof AudiencesSubObject
     */
    included?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AudiencesSubObject
     */
    excluded?: Array<string>;
}

/**
 * Check if a given object implements the AudiencesSubObject interface.
 */
export function instanceOfAudiencesSubObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AudiencesSubObjectFromJSON(json: any): AudiencesSubObject {
    return AudiencesSubObjectFromJSONTyped(json, false);
}

export function AudiencesSubObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudiencesSubObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'included': !exists(json, 'included') ? undefined : json['included'],
        'excluded': !exists(json, 'excluded') ? undefined : json['excluded'],
    };
}

export function AudiencesSubObjectToJSON(value?: AudiencesSubObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'included': value.included,
        'excluded': value.excluded,
    };
}

