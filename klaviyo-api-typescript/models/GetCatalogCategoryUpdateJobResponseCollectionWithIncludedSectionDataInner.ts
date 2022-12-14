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
import type { GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships } from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships';
import {
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSONTyped,
    GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON,
} from './GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships';
import type { GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes } from './GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes';
import {
    GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON,
    GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped,
    GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesToJSON,
} from './GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes';
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';

/**
 * 
 * @export
 * @interface GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner
 */
export interface GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    type: GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    attributes: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    relationships?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum = {
    CatalogCategoryBulkUpdateJob: 'catalog-category-bulk-update-job'
} as const;
export type GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum = typeof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum[keyof typeof GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner interface.
 */
export function instanceOfGetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSON(json: any): GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner {
    return GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped(json, false);
}

export function GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON(json['relationships']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInnerToJSON(value?: GetCatalogCategoryUpdateJobResponseCollectionWithIncludedSectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value.attributes),
        'relationships': GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON(value.relationships),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

