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
import type { CampaignMessagePartialUpdateQueryAsSubResourceAttributes } from './CampaignMessagePartialUpdateQueryAsSubResourceAttributes';
import {
    CampaignMessagePartialUpdateQueryAsSubResourceAttributesFromJSON,
    CampaignMessagePartialUpdateQueryAsSubResourceAttributesFromJSONTyped,
    CampaignMessagePartialUpdateQueryAsSubResourceAttributesToJSON,
} from './CampaignMessagePartialUpdateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface CampaignMessagePartialUpdateQueryAsSubResource
 */
export interface CampaignMessagePartialUpdateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CampaignMessagePartialUpdateQueryAsSubResource
     */
    type: CampaignMessagePartialUpdateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CampaignMessagePartialUpdateQueryAsSubResource
     */
    id: string;
    /**
     * 
     * @type {CampaignMessagePartialUpdateQueryAsSubResourceAttributes}
     * @memberof CampaignMessagePartialUpdateQueryAsSubResource
     */
    attributes: CampaignMessagePartialUpdateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const CampaignMessagePartialUpdateQueryAsSubResourceTypeEnum = {
    CampaignMessage: 'campaign-message'
} as const;
export type CampaignMessagePartialUpdateQueryAsSubResourceTypeEnum = typeof CampaignMessagePartialUpdateQueryAsSubResourceTypeEnum[keyof typeof CampaignMessagePartialUpdateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CampaignMessagePartialUpdateQueryAsSubResource interface.
 */
export function instanceOfCampaignMessagePartialUpdateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CampaignMessagePartialUpdateQueryAsSubResourceFromJSON(json: any): CampaignMessagePartialUpdateQueryAsSubResource {
    return CampaignMessagePartialUpdateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CampaignMessagePartialUpdateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignMessagePartialUpdateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CampaignMessagePartialUpdateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function CampaignMessagePartialUpdateQueryAsSubResourceToJSON(value?: CampaignMessagePartialUpdateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CampaignMessagePartialUpdateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

