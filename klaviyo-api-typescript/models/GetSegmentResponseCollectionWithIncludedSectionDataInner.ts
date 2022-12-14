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
import type { GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks } from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import {
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSONTyped,
    GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON,
} from './GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks';
import type { GetListResponseCollectionWithIncludedSectionDataInnerAttributes } from './GetListResponseCollectionWithIncludedSectionDataInnerAttributes';
import {
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON,
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped,
    GetListResponseCollectionWithIncludedSectionDataInnerAttributesToJSON,
} from './GetListResponseCollectionWithIncludedSectionDataInnerAttributes';
import type { GetListResponseCollectionWithIncludedSectionDataInnerRelationships } from './GetListResponseCollectionWithIncludedSectionDataInnerRelationships';
import {
    GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON,
    GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSONTyped,
    GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON,
} from './GetListResponseCollectionWithIncludedSectionDataInnerRelationships';
import type { IncludedTags } from './IncludedTags';
import {
    IncludedTagsFromJSON,
    IncludedTagsFromJSONTyped,
    IncludedTagsToJSON,
} from './IncludedTags';

/**
 * 
 * @export
 * @interface GetSegmentResponseCollectionWithIncludedSectionDataInner
 */
export interface GetSegmentResponseCollectionWithIncludedSectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    type: GetSegmentResponseCollectionWithIncludedSectionDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    id: string;
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    attributes: GetListResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInnerRelationships}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    relationships?: GetListResponseCollectionWithIncludedSectionDataInnerRelationships;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
    /**
     * 
     * @type {Array<IncludedTags>}
     * @memberof GetSegmentResponseCollectionWithIncludedSectionDataInner
     */
    included?: Array<IncludedTags>;
}


/**
 * @export
 */
export const GetSegmentResponseCollectionWithIncludedSectionDataInnerTypeEnum = {
    Segment: 'segment'
} as const;
export type GetSegmentResponseCollectionWithIncludedSectionDataInnerTypeEnum = typeof GetSegmentResponseCollectionWithIncludedSectionDataInnerTypeEnum[keyof typeof GetSegmentResponseCollectionWithIncludedSectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetSegmentResponseCollectionWithIncludedSectionDataInner interface.
 */
export function instanceOfGetSegmentResponseCollectionWithIncludedSectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetSegmentResponseCollectionWithIncludedSectionDataInnerFromJSON(json: any): GetSegmentResponseCollectionWithIncludedSectionDataInner {
    return GetSegmentResponseCollectionWithIncludedSectionDataInnerFromJSONTyped(json, false);
}

export function GetSegmentResponseCollectionWithIncludedSectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSegmentResponseCollectionWithIncludedSectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsFromJSON(json['relationships']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(IncludedTagsFromJSON)),
    };
}

export function GetSegmentResponseCollectionWithIncludedSectionDataInnerToJSON(value?: GetSegmentResponseCollectionWithIncludedSectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetListResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value.attributes),
        'relationships': GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsToJSON(value.relationships),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(IncludedTagsToJSON)),
    };
}

