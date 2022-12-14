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

import {
    IncludedMetrics,
    instanceOfIncludedMetrics,
    IncludedMetricsFromJSON,
    IncludedMetricsFromJSONTyped,
    IncludedMetricsToJSON,
} from './IncludedMetrics';
import {
    IncludedProfiles,
    instanceOfIncludedProfiles,
    IncludedProfilesFromJSON,
    IncludedProfilesFromJSONTyped,
    IncludedProfilesToJSON,
} from './IncludedProfiles';

/**
 * @type GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInner
 * 
 * @export
 */
export type GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInner = IncludedMetrics | IncludedProfiles;

export function GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInnerFromJSON(json: any): GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInner {
    return GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInnerFromJSONTyped(json, false);
}

export function GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...IncludedMetricsFromJSONTyped(json, true), ...IncludedProfilesFromJSONTyped(json, true) };
}

export function GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInnerToJSON(value?: GetEventResponseCollectionWithIncludedSectionDataInnerIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfIncludedMetrics(value)) {
        return IncludedMetricsToJSON(value as IncludedMetrics);
    }
    if (instanceOfIncludedProfiles(value)) {
        return IncludedProfilesToJSON(value as IncludedProfiles);
    }

    return {};
}

