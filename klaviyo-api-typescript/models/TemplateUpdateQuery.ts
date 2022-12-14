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
import type { TemplateUpdateQueryAsSubResource } from './TemplateUpdateQueryAsSubResource';
import {
    TemplateUpdateQueryAsSubResourceFromJSON,
    TemplateUpdateQueryAsSubResourceFromJSONTyped,
    TemplateUpdateQueryAsSubResourceToJSON,
} from './TemplateUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface TemplateUpdateQuery
 */
export interface TemplateUpdateQuery {
    /**
     * 
     * @type {TemplateUpdateQueryAsSubResource}
     * @memberof TemplateUpdateQuery
     */
    data: TemplateUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the TemplateUpdateQuery interface.
 */
export function instanceOfTemplateUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TemplateUpdateQueryFromJSON(json: any): TemplateUpdateQuery {
    return TemplateUpdateQueryFromJSONTyped(json, false);
}

export function TemplateUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TemplateUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function TemplateUpdateQueryToJSON(value?: TemplateUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TemplateUpdateQueryAsSubResourceToJSON(value.data),
    };
}

