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
import type { UnsubscriptionCreateJobCreateQueryAsSubResource } from './UnsubscriptionCreateJobCreateQueryAsSubResource';
import {
    UnsubscriptionCreateJobCreateQueryAsSubResourceFromJSON,
    UnsubscriptionCreateJobCreateQueryAsSubResourceFromJSONTyped,
    UnsubscriptionCreateJobCreateQueryAsSubResourceToJSON,
} from './UnsubscriptionCreateJobCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface UnsubscriptionCreateJobCreateQuery
 */
export interface UnsubscriptionCreateJobCreateQuery {
    /**
     * 
     * @type {UnsubscriptionCreateJobCreateQueryAsSubResource}
     * @memberof UnsubscriptionCreateJobCreateQuery
     */
    data: UnsubscriptionCreateJobCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the UnsubscriptionCreateJobCreateQuery interface.
 */
export function instanceOfUnsubscriptionCreateJobCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function UnsubscriptionCreateJobCreateQueryFromJSON(json: any): UnsubscriptionCreateJobCreateQuery {
    return UnsubscriptionCreateJobCreateQueryFromJSONTyped(json, false);
}

export function UnsubscriptionCreateJobCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnsubscriptionCreateJobCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': UnsubscriptionCreateJobCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function UnsubscriptionCreateJobCreateQueryToJSON(value?: UnsubscriptionCreateJobCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UnsubscriptionCreateJobCreateQueryAsSubResourceToJSON(value.data),
    };
}
