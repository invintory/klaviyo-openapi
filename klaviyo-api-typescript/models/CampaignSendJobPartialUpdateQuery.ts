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
import type { CampaignSendJobPartialUpdateQueryAsSubResource } from './CampaignSendJobPartialUpdateQueryAsSubResource';
import {
    CampaignSendJobPartialUpdateQueryAsSubResourceFromJSON,
    CampaignSendJobPartialUpdateQueryAsSubResourceFromJSONTyped,
    CampaignSendJobPartialUpdateQueryAsSubResourceToJSON,
} from './CampaignSendJobPartialUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CampaignSendJobPartialUpdateQuery
 */
export interface CampaignSendJobPartialUpdateQuery {
    /**
     * 
     * @type {CampaignSendJobPartialUpdateQueryAsSubResource}
     * @memberof CampaignSendJobPartialUpdateQuery
     */
    data: CampaignSendJobPartialUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the CampaignSendJobPartialUpdateQuery interface.
 */
export function instanceOfCampaignSendJobPartialUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CampaignSendJobPartialUpdateQueryFromJSON(json: any): CampaignSendJobPartialUpdateQuery {
    return CampaignSendJobPartialUpdateQueryFromJSONTyped(json, false);
}

export function CampaignSendJobPartialUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignSendJobPartialUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CampaignSendJobPartialUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CampaignSendJobPartialUpdateQueryToJSON(value?: CampaignSendJobPartialUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CampaignSendJobPartialUpdateQueryAsSubResourceToJSON(value.data),
    };
}

