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
/**
 * 
 * @export
 * @interface CatalogCategoryDeleteQueryAsSubResource
 */
export interface CatalogCategoryDeleteQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryDeleteQueryAsSubResource
     */
    type: CatalogCategoryDeleteQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CatalogCategoryDeleteQueryAsSubResource
     */
    id: string;
}


/**
 * @export
 */
export const CatalogCategoryDeleteQueryAsSubResourceTypeEnum = {
    CatalogCategory: 'catalog-category'
} as const;
export type CatalogCategoryDeleteQueryAsSubResourceTypeEnum = typeof CatalogCategoryDeleteQueryAsSubResourceTypeEnum[keyof typeof CatalogCategoryDeleteQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CatalogCategoryDeleteQueryAsSubResource interface.
 */
export function instanceOfCatalogCategoryDeleteQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CatalogCategoryDeleteQueryAsSubResourceFromJSON(json: any): CatalogCategoryDeleteQueryAsSubResource {
    return CatalogCategoryDeleteQueryAsSubResourceFromJSONTyped(json, false);
}

export function CatalogCategoryDeleteQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogCategoryDeleteQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CatalogCategoryDeleteQueryAsSubResourceToJSON(value?: CatalogCategoryDeleteQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}
