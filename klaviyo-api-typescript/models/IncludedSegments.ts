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

/**
 * 
 * @export
 * @interface IncludedSegments
 */
export interface IncludedSegments {
    /**
     * 
     * @type {string}
     * @memberof IncludedSegments
     */
    type: IncludedSegmentsTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof IncludedSegments
     */
    id: string;
    /**
     * 
     * @type {GetListResponseCollectionWithIncludedSectionDataInnerAttributes}
     * @memberof IncludedSegments
     */
    attributes: GetListResponseCollectionWithIncludedSectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof IncludedSegments
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const IncludedSegmentsTypeEnum = {
    Segment: 'segment'
} as const;
export type IncludedSegmentsTypeEnum = typeof IncludedSegmentsTypeEnum[keyof typeof IncludedSegmentsTypeEnum];


/**
 * Check if a given object implements the IncludedSegments interface.
 */
export function instanceOfIncludedSegments(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function IncludedSegmentsFromJSON(json: any): IncludedSegments {
    return IncludedSegmentsFromJSONTyped(json, false);
}

export function IncludedSegmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludedSegments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetListResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function IncludedSegmentsToJSON(value?: IncludedSegments | null): any {
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
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}
