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
import type { OnsiteProfileCreateQueryAsSubResource } from './OnsiteProfileCreateQueryAsSubResource';
import {
    OnsiteProfileCreateQueryAsSubResourceFromJSON,
    OnsiteProfileCreateQueryAsSubResourceFromJSONTyped,
    OnsiteProfileCreateQueryAsSubResourceToJSON,
} from './OnsiteProfileCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface OnsiteProfileCreateQuery
 */
export interface OnsiteProfileCreateQuery {
    /**
     * 
     * @type {OnsiteProfileCreateQueryAsSubResource}
     * @memberof OnsiteProfileCreateQuery
     */
    data: OnsiteProfileCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the OnsiteProfileCreateQuery interface.
 */
export function instanceOfOnsiteProfileCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function OnsiteProfileCreateQueryFromJSON(json: any): OnsiteProfileCreateQuery {
    return OnsiteProfileCreateQueryFromJSONTyped(json, false);
}

export function OnsiteProfileCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnsiteProfileCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': OnsiteProfileCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function OnsiteProfileCreateQueryToJSON(value?: OnsiteProfileCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': OnsiteProfileCreateQueryAsSubResourceToJSON(value.data),
    };
}

