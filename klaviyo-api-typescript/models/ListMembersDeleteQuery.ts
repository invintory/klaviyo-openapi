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
import type { GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInner } from './GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInner';
import {
    GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInnerFromJSON,
    GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInnerFromJSONTyped,
    GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInnerToJSON,
} from './GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInner';

/**
 * 
 * @export
 * @interface ListMembersDeleteQuery
 */
export interface ListMembersDeleteQuery {
    /**
     * 
     * @type {Array<GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInner>}
     * @memberof ListMembersDeleteQuery
     */
    data: Array<GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInner>;
}

/**
 * Check if a given object implements the ListMembersDeleteQuery interface.
 */
export function instanceOfListMembersDeleteQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ListMembersDeleteQueryFromJSON(json: any): ListMembersDeleteQuery {
    return ListMembersDeleteQueryFromJSONTyped(json, false);
}

export function ListMembersDeleteQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListMembersDeleteQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInnerFromJSON)),
    };
}

export function ListMembersDeleteQueryToJSON(value?: ListMembersDeleteQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GetEventResponseCollectionWithIncludedSectionDataInnerRelationshipsProfilesDataInnerToJSON)),
    };
}

