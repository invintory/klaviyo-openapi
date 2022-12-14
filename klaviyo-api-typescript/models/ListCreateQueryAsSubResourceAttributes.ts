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
 * @interface ListCreateQueryAsSubResourceAttributes
 */
export interface ListCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof ListCreateQueryAsSubResourceAttributes
     */
    name: string;
}

/**
 * Check if a given object implements the ListCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfListCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ListCreateQueryAsSubResourceAttributesFromJSON(json: any): ListCreateQueryAsSubResourceAttributes {
    return ListCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function ListCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ListCreateQueryAsSubResourceAttributesToJSON(value?: ListCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
