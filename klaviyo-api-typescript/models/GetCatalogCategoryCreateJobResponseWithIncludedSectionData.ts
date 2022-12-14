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
import type { IncludedCategories } from './IncludedCategories';
import {
    IncludedCategoriesFromJSON,
    IncludedCategoriesFromJSONTyped,
    IncludedCategoriesToJSON,
} from './IncludedCategories';

/**
 * 
 * @export
 * @interface GetCatalogCategoryCreateJobResponseWithIncludedSectionData
 */
export interface GetCatalogCategoryCreateJobResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogCategoryCreateJobResponseWithIncludedSectionData
     */
    type: GetCatalogCategoryCreateJobResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogCategoryCreateJobResponseWithIncludedSectionData
     */
    attributes: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogCategoryCreateJobResponseWithIncludedSectionData
     */
    relationships?: GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogCategoryCreateJobResponseWithIncludedSectionData
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedCategories>}
     * @memberof GetCatalogCategoryCreateJobResponseWithIncludedSectionData
     */
    included?: Array<IncludedCategories>;
}


/**
 * @export
 */
export const GetCatalogCategoryCreateJobResponseWithIncludedSectionDataTypeEnum = {
    CatalogCategoryBulkCreateJob: 'catalog-category-bulk-create-job'
} as const;
export type GetCatalogCategoryCreateJobResponseWithIncludedSectionDataTypeEnum = typeof GetCatalogCategoryCreateJobResponseWithIncludedSectionDataTypeEnum[keyof typeof GetCatalogCategoryCreateJobResponseWithIncludedSectionDataTypeEnum];


/**
 * Check if a given object implements the GetCatalogCategoryCreateJobResponseWithIncludedSectionData interface.
 */
export function instanceOfGetCatalogCategoryCreateJobResponseWithIncludedSectionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogCategoryCreateJobResponseWithIncludedSectionDataFromJSON(json: any): GetCatalogCategoryCreateJobResponseWithIncludedSectionData {
    return GetCatalogCategoryCreateJobResponseWithIncludedSectionDataFromJSONTyped(json, false);
}

export function GetCatalogCategoryCreateJobResponseWithIncludedSectionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogCategoryCreateJobResponseWithIncludedSectionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetCatalogCategoryCreateJobResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON(json['relationships']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(IncludedCategoriesFromJSON)),
    };
}

export function GetCatalogCategoryCreateJobResponseWithIncludedSectionDataToJSON(value?: GetCatalogCategoryCreateJobResponseWithIncludedSectionData | null): any {
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
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(IncludedCategoriesToJSON)),
    };
}

