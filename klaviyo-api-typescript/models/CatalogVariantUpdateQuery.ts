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
import type { CatalogVariantUpdateQueryAsSubResource } from './CatalogVariantUpdateQueryAsSubResource';
import {
    CatalogVariantUpdateQueryAsSubResourceFromJSON,
    CatalogVariantUpdateQueryAsSubResourceFromJSONTyped,
    CatalogVariantUpdateQueryAsSubResourceToJSON,
} from './CatalogVariantUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogVariantUpdateQuery
 */
export interface CatalogVariantUpdateQuery {
    /**
     * 
     * @type {CatalogVariantUpdateQueryAsSubResource}
     * @memberof CatalogVariantUpdateQuery
     */
    data: CatalogVariantUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogVariantUpdateQuery interface.
 */
export function instanceOfCatalogVariantUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogVariantUpdateQueryFromJSON(json: any): CatalogVariantUpdateQuery {
    return CatalogVariantUpdateQueryFromJSONTyped(json, false);
}

export function CatalogVariantUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogVariantUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogVariantUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogVariantUpdateQueryToJSON(value?: CatalogVariantUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogVariantUpdateQueryAsSubResourceToJSON(value.data),
    };
}

