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
import type { OnsiteProfileMeta } from './OnsiteProfileMeta';
import {
    OnsiteProfileMetaFromJSON,
    OnsiteProfileMetaFromJSONTyped,
    OnsiteProfileMetaToJSON,
} from './OnsiteProfileMeta';
import type { ProfileCreateQueryAsSubResourceAttributes } from './ProfileCreateQueryAsSubResourceAttributes';
import {
    ProfileCreateQueryAsSubResourceAttributesFromJSON,
    ProfileCreateQueryAsSubResourceAttributesFromJSONTyped,
    ProfileCreateQueryAsSubResourceAttributesToJSON,
} from './ProfileCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface OnsiteProfileCreateQueryAsSubResource
 */
export interface OnsiteProfileCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    type: OnsiteProfileCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {ProfileCreateQueryAsSubResourceAttributes}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    attributes: ProfileCreateQueryAsSubResourceAttributes;
    /**
     * 
     * @type {OnsiteProfileMeta}
     * @memberof OnsiteProfileCreateQueryAsSubResource
     */
    meta?: OnsiteProfileMeta;
}


/**
 * @export
 */
export const OnsiteProfileCreateQueryAsSubResourceTypeEnum = {
    Profile: 'profile'
} as const;
export type OnsiteProfileCreateQueryAsSubResourceTypeEnum = typeof OnsiteProfileCreateQueryAsSubResourceTypeEnum[keyof typeof OnsiteProfileCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the OnsiteProfileCreateQueryAsSubResource interface.
 */
export function instanceOfOnsiteProfileCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function OnsiteProfileCreateQueryAsSubResourceFromJSON(json: any): OnsiteProfileCreateQueryAsSubResource {
    return OnsiteProfileCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function OnsiteProfileCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnsiteProfileCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': ProfileCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
        'meta': !exists(json, 'meta') ? undefined : OnsiteProfileMetaFromJSON(json['meta']),
    };
}

export function OnsiteProfileCreateQueryAsSubResourceToJSON(value?: OnsiteProfileCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': ProfileCreateQueryAsSubResourceAttributesToJSON(value.attributes),
        'meta': OnsiteProfileMetaToJSON(value.meta),
    };
}

