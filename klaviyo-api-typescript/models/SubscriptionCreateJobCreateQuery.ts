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
import type { SubscriptionCreateJobCreateQueryAsSubResource } from './SubscriptionCreateJobCreateQueryAsSubResource';
import {
    SubscriptionCreateJobCreateQueryAsSubResourceFromJSON,
    SubscriptionCreateJobCreateQueryAsSubResourceFromJSONTyped,
    SubscriptionCreateJobCreateQueryAsSubResourceToJSON,
} from './SubscriptionCreateJobCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface SubscriptionCreateJobCreateQuery
 */
export interface SubscriptionCreateJobCreateQuery {
    /**
     * 
     * @type {SubscriptionCreateJobCreateQueryAsSubResource}
     * @memberof SubscriptionCreateJobCreateQuery
     */
    data: SubscriptionCreateJobCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the SubscriptionCreateJobCreateQuery interface.
 */
export function instanceOfSubscriptionCreateJobCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionCreateJobCreateQueryFromJSON(json: any): SubscriptionCreateJobCreateQuery {
    return SubscriptionCreateJobCreateQueryFromJSONTyped(json, false);
}

export function SubscriptionCreateJobCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreateJobCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionCreateJobCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function SubscriptionCreateJobCreateQueryToJSON(value?: SubscriptionCreateJobCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionCreateJobCreateQueryAsSubResourceToJSON(value.data),
    };
}

