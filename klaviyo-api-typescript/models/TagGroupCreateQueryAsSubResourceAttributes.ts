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
 * @interface TagGroupCreateQueryAsSubResourceAttributes
 */
export interface TagGroupCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof TagGroupCreateQueryAsSubResourceAttributes
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof TagGroupCreateQueryAsSubResourceAttributes
     */
    exclusive?: boolean;
}

/**
 * Check if a given object implements the TagGroupCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfTagGroupCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TagGroupCreateQueryAsSubResourceAttributesFromJSON(json: any): TagGroupCreateQueryAsSubResourceAttributes {
    return TagGroupCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function TagGroupCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagGroupCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'exclusive': !exists(json, 'exclusive') ? undefined : json['exclusive'],
    };
}

export function TagGroupCreateQueryAsSubResourceAttributesToJSON(value?: TagGroupCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'exclusive': value.exclusive,
    };
}

