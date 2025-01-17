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
import type { CatalogCategoryUpdateQueryAsSubResource } from './CatalogCategoryUpdateQueryAsSubResource';
import {
    CatalogCategoryUpdateQueryAsSubResourceFromJSON,
    CatalogCategoryUpdateQueryAsSubResourceFromJSONTyped,
    CatalogCategoryUpdateQueryAsSubResourceToJSON,
} from './CatalogCategoryUpdateQueryAsSubResource';

/**
 * 
 * @export
 * @interface CatalogCategoryUpdateQuery
 */
export interface CatalogCategoryUpdateQuery {
    /**
     * 
     * @type {CatalogCategoryUpdateQueryAsSubResource}
     * @memberof CatalogCategoryUpdateQuery
     */
    data: CatalogCategoryUpdateQueryAsSubResource;
}

/**
 * Check if a given object implements the CatalogCategoryUpdateQuery interface.
 */
export function instanceOfCatalogCategoryUpdateQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function CatalogCategoryUpdateQueryFromJSON(json: any): CatalogCategoryUpdateQuery {
    return CatalogCategoryUpdateQueryFromJSONTyped(json, false);
}

export function CatalogCategoryUpdateQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogCategoryUpdateQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CatalogCategoryUpdateQueryAsSubResourceFromJSON(json['data']),
    };
}

export function CatalogCategoryUpdateQueryToJSON(value?: CatalogCategoryUpdateQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CatalogCategoryUpdateQueryAsSubResourceToJSON(value.data),
    };
}

