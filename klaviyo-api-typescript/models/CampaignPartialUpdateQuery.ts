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
import type { CampaignPartialUpdateQueryAsSubResource } from './CampaignPartialUpdateQueryAsSubResource';
import {
    CampaignPartialUpdateQueryAsSubResourceFromJSON,
    CampaignPartialUpdateQueryAsSubResourceFromJSONTyped,
    CampaignPartialUpdateQueryAsSubResourceToJSON,
} from './CampaignPartialUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CampaignPartialUpdateQuery
 */
export interface CampaignPartialUpdateQuery {
    /**
     * 
     * @type {CampaignPartialUpdateQueryAsSubResource}
     * @memberof CampaignPartialUpdateQuery
     */
    data: CampaignPartialUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the CampaignPartialUpdateQuery interface.
 */
export function instanceOfCampaignPartialUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CampaignPartialUpdateQueryFromJSON(json: any): CampaignPartialUpdateQuery {
    return CampaignPartialUpdateQueryFromJSONTyped(json, false);
}

export function CampaignPartialUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignPartialUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CampaignPartialUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CampaignPartialUpdateQueryToJSON(value?: CampaignPartialUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CampaignPartialUpdateQueryAsSubResourceToJSON(value.data),
    };
}
