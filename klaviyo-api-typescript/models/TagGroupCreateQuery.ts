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
import type { TagGroupCreateQueryAsSubResource } from './TagGroupCreateQueryAsSubResource';
import {
    TagGroupCreateQueryAsSubResourceFromJSON,
    TagGroupCreateQueryAsSubResourceFromJSONTyped,
    TagGroupCreateQueryAsSubResourceToJSON,
} from './TagGroupCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface TagGroupCreateQuery
 */
export interface TagGroupCreateQuery {
    /**
     * 
     * @type {TagGroupCreateQueryAsSubResource}
     * @memberof TagGroupCreateQuery
     */
    data: TagGroupCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the TagGroupCreateQuery interface.
 */
export function instanceOfTagGroupCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TagGroupCreateQueryFromJSON(json: any): TagGroupCreateQuery {
    return TagGroupCreateQueryFromJSONTyped(json, false);
}

export function TagGroupCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagGroupCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TagGroupCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function TagGroupCreateQueryToJSON(value?: TagGroupCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TagGroupCreateQueryAsSubResourceToJSON(value.data),
    };
}

