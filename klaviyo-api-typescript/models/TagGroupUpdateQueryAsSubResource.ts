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
import type { TagGroupUpdateQueryAsSubResourceAttributes } from './TagGroupUpdateQueryAsSubResourceAttributes';
import {
    TagGroupUpdateQueryAsSubResourceAttributesFromJSON,
    TagGroupUpdateQueryAsSubResourceAttributesFromJSONTyped,
    TagGroupUpdateQueryAsSubResourceAttributesToJSON,
} from './TagGroupUpdateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface TagGroupUpdateQueryAsSubResource
 */
export interface TagGroupUpdateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof TagGroupUpdateQueryAsSubResource
     */
    type: TagGroupUpdateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TagGroupUpdateQueryAsSubResource
     */
    id: string;
    /**
     * 
     * @type {TagGroupUpdateQueryAsSubResourceAttributes}
     * @memberof TagGroupUpdateQueryAsSubResource
     */
    attributes: TagGroupUpdateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const TagGroupUpdateQueryAsSubResourceTypeEnum = {
    TagGroup: 'tag-group'
} as const;
export type TagGroupUpdateQueryAsSubResourceTypeEnum = typeof TagGroupUpdateQueryAsSubResourceTypeEnum[keyof typeof TagGroupUpdateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the TagGroupUpdateQueryAsSubResource interface.
 */
export function instanceOfTagGroupUpdateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function TagGroupUpdateQueryAsSubResourceFromJSON(json: any): TagGroupUpdateQueryAsSubResource {
    return TagGroupUpdateQueryAsSubResourceFromJSONTyped(json, false);
}

export function TagGroupUpdateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagGroupUpdateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': TagGroupUpdateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function TagGroupUpdateQueryAsSubResourceToJSON(value?: TagGroupUpdateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': TagGroupUpdateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

