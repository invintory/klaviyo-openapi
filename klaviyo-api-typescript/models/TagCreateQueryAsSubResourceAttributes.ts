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
 * @interface TagCreateQueryAsSubResourceAttributes
 */
export interface TagCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof TagCreateQueryAsSubResourceAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TagCreateQueryAsSubResourceAttributes
     */
    tagGroupId?: string;
}

/**
 * Check if a given object implements the TagCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfTagCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TagCreateQueryAsSubResourceAttributesFromJSON(json: any): TagCreateQueryAsSubResourceAttributes {
    return TagCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function TagCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'tagGroupId': !exists(json, 'tag_group_id') ? undefined : json['tag_group_id'],
    };
}

export function TagCreateQueryAsSubResourceAttributesToJSON(value?: TagCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'tag_group_id': value.tagGroupId,
    };
}

