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
import type { TagUpdateQueryAsSubResource } from './TagUpdateQueryAsSubResource';
import {
    TagUpdateQueryAsSubResourceFromJSON,
    TagUpdateQueryAsSubResourceFromJSONTyped,
    TagUpdateQueryAsSubResourceToJSON,
} from './TagUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface TagUpdateQuery
 */
export interface TagUpdateQuery {
    /**
     * 
     * @type {TagUpdateQueryAsSubResource}
     * @memberof TagUpdateQuery
     */
    data: TagUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the TagUpdateQuery interface.
 */
export function instanceOfTagUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TagUpdateQueryFromJSON(json: any): TagUpdateQuery {
    return TagUpdateQueryFromJSONTyped(json, false);
}

export function TagUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TagUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function TagUpdateQueryToJSON(value?: TagUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TagUpdateQueryAsSubResourceToJSON(value.data),
    };
}

