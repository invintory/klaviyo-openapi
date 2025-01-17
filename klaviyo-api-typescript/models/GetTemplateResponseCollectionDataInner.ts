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
import type { GetTemplateResponseCollectionDataInnerAttributes } from './GetTemplateResponseCollectionDataInnerAttributes';
import {
    GetTemplateResponseCollectionDataInnerAttributesFromJSON,
    GetTemplateResponseCollectionDataInnerAttributesFromJSONTyped,
    GetTemplateResponseCollectionDataInnerAttributesToJSON,
} from './GetTemplateResponseCollectionDataInnerAttributes';

/**
 * 
 * @export
 * @interface GetTemplateResponseCollectionDataInner
 */
export interface GetTemplateResponseCollectionDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetTemplateResponseCollectionDataInner
     */
    type: GetTemplateResponseCollectionDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetTemplateResponseCollectionDataInner
     */
    id: string;
    /**
     * 
     * @type {GetTemplateResponseCollectionDataInnerAttributes}
     * @memberof GetTemplateResponseCollectionDataInner
     */
    attributes: GetTemplateResponseCollectionDataInnerAttributes;
    /**
     * 
     * @type {GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks}
     * @memberof GetTemplateResponseCollectionDataInner
     */
    links: GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinks;
}


/**
 * @export
 */
export const GetTemplateResponseCollectionDataInnerTypeEnum = {
    Template: 'template'
} as const;
export type GetTemplateResponseCollectionDataInnerTypeEnum = typeof GetTemplateResponseCollectionDataInnerTypeEnum[keyof typeof GetTemplateResponseCollectionDataInnerTypeEnum];


/**
 * Check if a given object implements the GetTemplateResponseCollectionDataInner interface.
 */
export function instanceOfGetTemplateResponseCollectionDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GetTemplateResponseCollectionDataInnerFromJSON(json: any): GetTemplateResponseCollectionDataInner {
    return GetTemplateResponseCollectionDataInnerFromJSONTyped(json, false);
}

export function GetTemplateResponseCollectionDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTemplateResponseCollectionDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': GetTemplateResponseCollectionDataInnerAttributesFromJSON(json['attributes']),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksFromJSON(json['links']),
    };
}

export function GetTemplateResponseCollectionDataInnerToJSON(value?: GetTemplateResponseCollectionDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': GetTemplateResponseCollectionDataInnerAttributesToJSON(value.attributes),
        'links': GetCatalogItemResponseCollectionWithIncludedSectionDataInnerLinksToJSON(value.links),
    };
}

