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
import type { TagGroupCreateQueryAsSubResourceAttributes } from './TagGroupCreateQueryAsSubResourceAttributes';
import {
    TagGroupCreateQueryAsSubResourceAttributesFromJSON,
    TagGroupCreateQueryAsSubResourceAttributesFromJSONTyped,
    TagGroupCreateQueryAsSubResourceAttributesToJSON,
} from './TagGroupCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface TagGroupCreateQueryAsSubResource
 */
export interface TagGroupCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof TagGroupCreateQueryAsSubResource
     */
    type: TagGroupCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {TagGroupCreateQueryAsSubResourceAttributes}
     * @memberof TagGroupCreateQueryAsSubResource
     */
    attributes: TagGroupCreateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const TagGroupCreateQueryAsSubResourceTypeEnum = {
    TagGroup: 'tag-group'
} as const;
export type TagGroupCreateQueryAsSubResourceTypeEnum = typeof TagGroupCreateQueryAsSubResourceTypeEnum[keyof typeof TagGroupCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the TagGroupCreateQueryAsSubResource interface.
 */
export function instanceOfTagGroupCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function TagGroupCreateQueryAsSubResourceFromJSON(json: any): TagGroupCreateQueryAsSubResource {
    return TagGroupCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function TagGroupCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagGroupCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': TagGroupCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function TagGroupCreateQueryAsSubResourceToJSON(value?: TagGroupCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': TagGroupCreateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}
