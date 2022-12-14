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
import type { CatalogVariantUpdateJobCreateQueryAsSubResource } from './CatalogVariantUpdateJobCreateQueryAsSubResource';
import {
    CatalogVariantUpdateJobCreateQueryAsSubResourceFromJSON,
    CatalogVariantUpdateJobCreateQueryAsSubResourceFromJSONTyped,
    CatalogVariantUpdateJobCreateQueryAsSubResourceToJSON,
} from './CatalogVariantUpdateJobCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogVariantUpdateJobCreateQuery
 */
export interface CatalogVariantUpdateJobCreateQuery {
    /**
     * 
     * @type {CatalogVariantUpdateJobCreateQueryAsSubResource}
     * @memberof CatalogVariantUpdateJobCreateQuery
     */
    data: CatalogVariantUpdateJobCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogVariantUpdateJobCreateQuery interface.
 */
export function instanceOfCatalogVariantUpdateJobCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogVariantUpdateJobCreateQueryFromJSON(json: any): CatalogVariantUpdateJobCreateQuery {
    return CatalogVariantUpdateJobCreateQueryFromJSONTyped(json, false);
}

export function CatalogVariantUpdateJobCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogVariantUpdateJobCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogVariantUpdateJobCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogVariantUpdateJobCreateQueryToJSON(value?: CatalogVariantUpdateJobCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogVariantUpdateJobCreateQueryAsSubResourceToJSON(value.data),
    };
}

