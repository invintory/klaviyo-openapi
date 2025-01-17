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
import type { CampaignPartialUpdateQueryAsSubResourceAttributes } from './CampaignPartialUpdateQueryAsSubResourceAttributes';
import {
    CampaignPartialUpdateQueryAsSubResourceAttributesFromJSON,
    CampaignPartialUpdateQueryAsSubResourceAttributesFromJSONTyped,
    CampaignPartialUpdateQueryAsSubResourceAttributesToJSON,
} from './CampaignPartialUpdateQueryAsSubResourceAttributes';

/**
 * 
 * @export
 * @interface CampaignPartialUpdateQueryAsSubResource
 */
export interface CampaignPartialUpdateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CampaignPartialUpdateQueryAsSubResource
     */
    type: CampaignPartialUpdateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CampaignPartialUpdateQueryAsSubResource
     */
    id: string;
    /**
     * 
     * @type {CampaignPartialUpdateQueryAsSubResourceAttributes}
     * @memberof CampaignPartialUpdateQueryAsSubResource
     */
    attributes: CampaignPartialUpdateQueryAsSubResourceAttributes;
}


/**
 * @export
 */
export const CampaignPartialUpdateQueryAsSubResourceTypeEnum = {
    Campaign: 'campaign'
} as const;
export type CampaignPartialUpdateQueryAsSubResourceTypeEnum = typeof CampaignPartialUpdateQueryAsSubResourceTypeEnum[keyof typeof CampaignPartialUpdateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CampaignPartialUpdateQueryAsSubResource interface.
 */
export function instanceOfCampaignPartialUpdateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CampaignPartialUpdateQueryAsSubResourceFromJSON(json: any): CampaignPartialUpdateQueryAsSubResource {
    return CampaignPartialUpdateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CampaignPartialUpdateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignPartialUpdateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CampaignPartialUpdateQueryAsSubResourceAttributesFromJSON(json['attributes']),
    };
}

export function CampaignPartialUpdateQueryAsSubResourceToJSON(value?: CampaignPartialUpdateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CampaignPartialUpdateQueryAsSubResourceAttributesToJSON(value.attributes),
    };
}

