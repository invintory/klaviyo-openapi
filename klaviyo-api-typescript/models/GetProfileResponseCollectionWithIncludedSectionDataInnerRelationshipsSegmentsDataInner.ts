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
 * @interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner
 */
export interface GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner
     */
    type: GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerTypeEnum = {
    Segment: 'segment'
} as const;
export type GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerTypeEnum = typeof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerTypeEnum[keyof typeof GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerTypeEnum];


/**
 * Check if a given object implements the GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner interface.
 */
export function instanceOfGetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerFromJSON(json: any): GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner {
    return GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerFromJSONTyped(json, false);
}

export function GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInnerToJSON(value?: GetProfileResponseCollectionWithIncludedSectionDataInnerRelationshipsSegmentsDataInner | null): any {
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
