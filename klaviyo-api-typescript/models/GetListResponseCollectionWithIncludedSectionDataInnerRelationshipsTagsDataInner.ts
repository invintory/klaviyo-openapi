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
 * @interface GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner
 */
export interface GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner
     */
    type: GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerTypeEnum = {
    Tag: 'tag'
} as const;
export type GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerTypeEnum = typeof GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerTypeEnum[keyof typeof GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerTypeEnum];


/**
 * Check if a given object implements the GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner interface.
 */
export function instanceOfGetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerFromJSON(json: any): GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner {
    return GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerFromJSONTyped(json, false);
}

export function GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInnerToJSON(value?: GetListResponseCollectionWithIncludedSectionDataInnerRelationshipsTagsDataInner | null): any {
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
