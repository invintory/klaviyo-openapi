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
 * @interface OnsiteProfileMetaIdentifiers
 */
export interface OnsiteProfileMetaIdentifiers {
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    anonymousId?: string;
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileMetaIdentifiers
     */
    kx?: string;
}

/**
 * Check if a given object implements the OnsiteProfileMetaIdentifiers interface.
 */
export function instanceOfOnsiteProfileMetaIdentifiers(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OnsiteProfileMetaIdentifiersFromJSON(json: any): OnsiteProfileMetaIdentifiers {
    return OnsiteProfileMetaIdentifiersFromJSONTyped(json, false);
}

export function OnsiteProfileMetaIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnsiteProfileMetaIdentifiers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'anonymousId': !exists(json, 'anonymous_id') ? undefined : json['anonymous_id'],
        'kx': !exists(json, '_kx') ? undefined : json['_kx'],
    };
}

export function OnsiteProfileMetaIdentifiersToJSON(value?: OnsiteProfileMetaIdentifiers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'external_id': value.externalId,
        'email': value.email,
        'phone_number': value.phoneNumber,
        'anonymous_id': value.anonymousId,
        '_kx': value.kx,
    };
}

