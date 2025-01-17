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
import type { CatalogItemUpdateQueryAsSubResourceAttributes } from './CatalogItemUpdateQueryAsSubResourceAttributes';
import {
    CatalogItemUpdateQueryAsSubResourceAttributesFromJSON,
    CatalogItemUpdateQueryAsSubResourceAttributesFromJSONTyped,
    CatalogItemUpdateQueryAsSubResourceAttributesToJSON,
} from './CatalogItemUpdateQueryAsSubResourceAttributes';
import type { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships } from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships';
import {
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSONTyped,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON,
} from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships';

/**
 * 
 * @export
 * @interface CatalogItemUpdateQueryAsSubResource
 */
export interface CatalogItemUpdateQueryAsSubResource {
    /**
     * 
     * @type {string}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    type: CatalogItemUpdateQueryAsSubResourceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    id: string;
    /**
     * 
     * @type {CatalogItemUpdateQueryAsSubResourceAttributes}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    attributes: CatalogItemUpdateQueryAsSubResourceAttributes;
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof CatalogItemUpdateQueryAsSubResource
     */
    relationships?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
}


/**
 * @export
 */
export const CatalogItemUpdateQueryAsSubResourceTypeEnum = {
    CatalogItem: 'catalog-item'
} as const;
export type CatalogItemUpdateQueryAsSubResourceTypeEnum = typeof CatalogItemUpdateQueryAsSubResourceTypeEnum[keyof typeof CatalogItemUpdateQueryAsSubResourceTypeEnum];


/**
 * Check if a given object implements the CatalogItemUpdateQueryAsSubResource interface.
 */
export function instanceOfCatalogItemUpdateQueryAsSubResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CatalogItemUpdateQueryAsSubResourceFromJSON(json: any): CatalogItemUpdateQueryAsSubResource {
    return CatalogItemUpdateQueryAsSubResourceFromJSONTyped(json, false);
}

export function CatalogItemUpdateQueryAsSubResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogItemUpdateQueryAsSubResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CatalogItemUpdateQueryAsSubResourceAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON(json['relationships']),
    };
}

export function CatalogItemUpdateQueryAsSubResourceToJSON(value?: CatalogItemUpdateQueryAsSubResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CatalogItemUpdateQueryAsSubResourceAttributesToJSON(value.attributes),
        'relationships': GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON(value.relationships),
    };
}

