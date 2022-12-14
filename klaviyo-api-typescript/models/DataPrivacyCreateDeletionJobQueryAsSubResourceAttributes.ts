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
 * @interface DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
 */
export interface DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
     */
    profileId?: string;
    /**
     * 
     * @type {string}
     * @memberof DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes
     */
    phoneNumber?: string;
}

/**
 * Check if a given object implements the DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes interface.
 */
export function instanceOfDataPrivacyCreateDeletionJobQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataPrivacyCreateDeletionJobQueryAsSubResourceAttributesFromJSON(json: any): DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes {
    return DataPrivacyCreateDeletionJobQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function DataPrivacyCreateDeletionJobQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileId': !exists(json, 'profile_id') ? undefined : json['profile_id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
    };
}

export function DataPrivacyCreateDeletionJobQueryAsSubResourceAttributesToJSON(value?: DataPrivacyCreateDeletionJobQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile_id': value.profileId,
        'email': value.email,
        'phone_number': value.phoneNumber,
    };
}
