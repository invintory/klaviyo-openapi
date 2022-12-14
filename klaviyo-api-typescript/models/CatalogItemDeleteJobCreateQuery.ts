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
import type { CatalogItemDeleteJobCreateQueryAsSubResource } from './CatalogItemDeleteJobCreateQueryAsSubResource';
import {
    CatalogItemDeleteJobCreateQueryAsSubResourceFromJSON,
    CatalogItemDeleteJobCreateQueryAsSubResourceFromJSONTyped,
    CatalogItemDeleteJobCreateQueryAsSubResourceToJSON,
} from './CatalogItemDeleteJobCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogItemDeleteJobCreateQuery
 */
export interface CatalogItemDeleteJobCreateQuery {
    /**
     * 
     * @type {CatalogItemDeleteJobCreateQueryAsSubResource}
     * @memberof CatalogItemDeleteJobCreateQuery
     */
    data: CatalogItemDeleteJobCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogItemDeleteJobCreateQuery interface.
 */
export function instanceOfCatalogItemDeleteJobCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogItemDeleteJobCreateQueryFromJSON(json: any): CatalogItemDeleteJobCreateQuery {
    return CatalogItemDeleteJobCreateQueryFromJSONTyped(json, false);
}

export function CatalogItemDeleteJobCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogItemDeleteJobCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogItemDeleteJobCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogItemDeleteJobCreateQueryToJSON(value?: CatalogItemDeleteJobCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogItemDeleteJobCreateQueryAsSubResourceToJSON(value.data),
    };
}
