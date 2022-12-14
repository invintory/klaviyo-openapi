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
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships';
import type { IncludedVariants } from './IncludedVariants';
import {
    IncludedVariantsFromJSON,
    IncludedVariantsFromJSONTyped,
    IncludedVariantsToJSON,
} from './IncludedVariants';

/**
 * 
 * @export
 * @interface GetCatalogVariantUpdateJobResponseWithIncludedSectionData
 */
export interface GetCatalogVariantUpdateJobResponseWithIncludedSectionData {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    type: GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum;
    /**
     * 
     * @type {GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    attributes: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    relationships?: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedVariants>}
     * @memberof GetCatalogVariantUpdateJobResponseWithIncludedSectionData
     */
    included?: Array<IncludedVariants>;
}


/**
 * @export
 */
export const GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum = {
    CatalogVariantBulkUpdateJob: 'catalog-variant-bulk-update-job'
} as const;
export type GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum = typeof GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum[keyof typeof GetCatalogVariantUpdateJobResponseWithIncludedSectionDataTypeEnum];


/**
 * Check if a given object implements the GetCatalogVariantUpdateJobResponseWithIncludedSectionData interface.
 */
export function instanceOfGetCatalogVariantUpdateJobResponseWithIncludedSectionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetCatalogVariantUpdateJobResponseWithIncludedSectionDataFromJSON(json: any): GetCatalogVariantUpdateJobResponseWithIncludedSectionData {
    return GetCatalogVariantUpdateJobResponseWithIncludedSectionDataFromJSONTyped(json, false);
}

export function GetCatalogVariantUpdateJobResponseWithIncludedSectionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogVariantUpdateJobResponseWithIncludedSectionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON(json['relationships']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(IncludedVariantsFromJSON)),
    };
}

export function GetCatalogVariantUpdateJobResponseWithIncludedSectionDataToJSON(value?: GetCatalogVariantUpdateJobResponseWithIncludedSectionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value.attributes),
        'relationships': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON(value.relationships),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(IncludedVariantsToJSON)),
    };
}
