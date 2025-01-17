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
import type { CatalogVariantDeleteJobCreateQueryAsSubResource } from './CatalogVariantDeleteJobCreateQueryAsSubResource';
import {
    CatalogVariantDeleteJobCreateQueryAsSubResourceFromJSON,
    CatalogVariantDeleteJobCreateQueryAsSubResourceFromJSONTyped,
    CatalogVariantDeleteJobCreateQueryAsSubResourceToJSON,
} from './CatalogVariantDeleteJobCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogVariantDeleteJobCreateQuery
 */
export interface CatalogVariantDeleteJobCreateQuery {
    /**
     * 
     * @type {CatalogVariantDeleteJobCreateQueryAsSubResource}
     * @memberof CatalogVariantDeleteJobCreateQuery
     */
    data: CatalogVariantDeleteJobCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogVariantDeleteJobCreateQuery interface.
 */
export function instanceOfCatalogVariantDeleteJobCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogVariantDeleteJobCreateQueryFromJSON(json: any): CatalogVariantDeleteJobCreateQuery {
    return CatalogVariantDeleteJobCreateQueryFromJSONTyped(json, false);
}

export function CatalogVariantDeleteJobCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogVariantDeleteJobCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogVariantDeleteJobCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogVariantDeleteJobCreateQueryToJSON(value?: CatalogVariantDeleteJobCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogVariantDeleteJobCreateQueryAsSubResourceToJSON(value.data),
    };
}

