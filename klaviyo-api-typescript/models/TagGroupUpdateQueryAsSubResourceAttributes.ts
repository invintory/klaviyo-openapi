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
 * @interface TagGroupUpdateQueryAsSubResourceAttributes
 */
export interface TagGroupUpdateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof TagGroupUpdateQueryAsSubResourceAttributes
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TagGroupUpdateQueryAsSubResourceAttributes
     */
    returnFields?: Array<string>;
}

/**
 * Check if a given object implements the TagGroupUpdateQueryAsSubResourceAttributes interface.
 */
export function instanceOfTagGroupUpdateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TagGroupUpdateQueryAsSubResourceAttributesFromJSON(json: any): TagGroupUpdateQueryAsSubResourceAttributes {
    return TagGroupUpdateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function TagGroupUpdateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagGroupUpdateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'returnFields': !exists(json, 'return_fields') ? undefined : json['return_fields'],
    };
}

export function TagGroupUpdateQueryAsSubResourceAttributesToJSON(value?: TagGroupUpdateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'return_fields': value.returnFields,
    };
}

