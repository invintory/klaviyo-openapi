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
import type { CatalogJobErrorPayload } from './CatalogJobErrorPayload';
import {
    CatalogJobErrorPayloadFromJSON,
    CatalogJobErrorPayloadFromJSONTyped,
    CatalogJobErrorPayloadToJSON,
} from './CatalogJobErrorPayload';

/**
 * 
 * @export
 * @interface GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
 */
export interface GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    jobId: string;
    /**
     * The valid top level statuses for an asynchronous query
     * @type {string}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    status: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    totalCount: number;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    completedCount: number;
    /**
     * 
     * @type {number}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    failedCount: number;
    /**
     * 
     * @type {Date}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    completedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    expiresAt?: Date;
    /**
     * 
     * @type {Array<CatalogJobErrorPayload>}
     * @memberof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes
     */
    errors?: Array<CatalogJobErrorPayload>;
}


/**
 * @export
 */
export const GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesStatusEnum = {
    Cancelled: 'cancelled',
    Complete: 'complete',
    Processing: 'processing',
    Queued: 'queued'
} as const;
export type GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesStatusEnum = typeof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesStatusEnum[keyof typeof GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesStatusEnum];


/**
 * Check if a given object implements the GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes interface.
 */
export function instanceOfGetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jobId" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "totalCount" in value;
    isInstance = isInstance && "completedCount" in value;
    isInstance = isInstance && "failedCount" in value;

    return isInstance;
}

export function GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSON(json: any): GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes {
    return GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped(json, false);
}

export function GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jobId': json['job_id'],
        'status': json['status'],
        'createdAt': (new Date(json['created_at'])),
        'totalCount': json['total_count'],
        'completedCount': json['completed_count'],
        'failedCount': json['failed_count'],
        'completedAt': !exists(json, 'completed_at') ? undefined : (new Date(json['completed_at'])),
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(CatalogJobErrorPayloadFromJSON)),
    };
}

export function GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributesToJSON(value?: GetCatalogItemCreateJobResponseCollectionWithIncludedSectionDataInnerAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'job_id': value.jobId,
        'status': value.status,
        'created_at': (value.createdAt.toISOString()),
        'total_count': value.totalCount,
        'completed_count': value.completedCount,
        'failed_count': value.failedCount,
        'completed_at': value.completedAt === undefined ? undefined : (value.completedAt.toISOString()),
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(CatalogJobErrorPayloadToJSON)),
    };
}

