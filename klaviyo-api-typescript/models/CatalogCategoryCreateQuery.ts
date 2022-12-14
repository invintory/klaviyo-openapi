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
import type { CatalogCategoryCreateQueryAsSubResource } from './CatalogCategoryCreateQueryAsSubResource';
import {
    CatalogCategoryCreateQueryAsSubResourceFromJSON,
    CatalogCategoryCreateQueryAsSubResourceFromJSONTyped,
    CatalogCategoryCreateQueryAsSubResourceToJSON,
} from './CatalogCategoryCreateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogCategoryCreateQuery
 */
export interface CatalogCategoryCreateQuery {
    /**
     * 
     * @type {CatalogCategoryCreateQueryAsSubResource}
     * @memberof CatalogCategoryCreateQuery
     */
    data: CatalogCategoryCreateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogCategoryCreateQuery interface.
 */
export function instanceOfCatalogCategoryCreateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogCategoryCreateQueryFromJSON(json: any): CatalogCategoryCreateQuery {
    return CatalogCategoryCreateQueryFromJSONTyped(json, false);
}

export function CatalogCategoryCreateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogCategoryCreateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogCategoryCreateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogCategoryCreateQueryToJSON(value?: CatalogCategoryCreateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogCategoryCreateQueryAsSubResourceToJSON(value.data),
    };
}
