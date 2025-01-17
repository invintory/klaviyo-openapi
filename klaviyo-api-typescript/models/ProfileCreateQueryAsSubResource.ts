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
import type { ProfileCreateQueryAsSubResourceAttributes } from './ProfileCreateQueryAsSubResourceAttributes';
import {
    ProfileCreateQueryAsSubResourceAttributesFromJSON,
    ProfileCreateQueryAsSubResourceAttributesFromJSONTyped,
    ProfileCreateQueryAsSubResourceAttributesToJSON,
} from './ProfileCreateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface ProfileCreateQueryAsSubResource
 */
export interface ProfileCreateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof ProfileCreateQueryAsSubResource
     */
    type: ProfileCreateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {ProfileCreateQueryAsSubResourceAttributes}
     * @memberof ProfileCreateQueryAsSubResource
     */
    attributes: ProfileCreateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const ProfileCreateQueryAsSubResourceTypeEnum = {
    Profile: 'profile'
} as const;
export type ProfileCreateQueryAsSubResourceTypeEnum = typeof ProfileCreateQueryAsSubResourceTypeEnum[keyof typeof ProfileCreateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the ProfileCreateQueryAsSubResource interface.
 */
export function instanceOfProfileCreateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function ProfileCreateQueryAsSubResourceFromJSON(json: any): ProfileCreateQueryAsSubResource {
    return ProfileCreateQueryAsSubResourceFromJSONTyped(json, false);
}

export function ProfileCreateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': ProfileCreateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function ProfileCreateQueryAsSubResourceToJSON(value?: ProfileCreateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': ProfileCreateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

