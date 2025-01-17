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
import type { DataPrivacyCreateDeletionJobQueryAsSubResource } from './DataPrivacyCreateDeletionJobQueryAsSubResource';
import {
    DataPrivacyCreateDeletionJobQueryAsSubResourceFromJSON,
    DataPrivacyCreateDeletionJobQueryAsSubResourceFromJSONTyped,
    DataPrivacyCreateDeletionJobQueryAsSubResourceToJSON,
} from './DataPrivacyCreateDeletionJobQueryAsSubResource';

/**
 * 
 * @export
 * @interface DataPrivacyCreateDeletionJobQuery
 */
export interface DataPrivacyCreateDeletionJobQuery {
    /**
     * 
     * @type {DataPrivacyCreateDeletionJobQueryAsSubResource}
     * @memberof DataPrivacyCreateDeletionJobQuery
     */
    data: DataPrivacyCreateDeletionJobQueryAsSubResource;
}

/**
 * Check if a given object implements the DataPrivacyCreateDeletionJobQuery interface.
 */
export function instanceOfDataPrivacyCreateDeletionJobQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function DataPrivacyCreateDeletionJobQueryFromJSON(json: any): DataPrivacyCreateDeletionJobQuery {
    return DataPrivacyCreateDeletionJobQueryFromJSONTyped(json, false);
}

export function DataPrivacyCreateDeletionJobQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataPrivacyCreateDeletionJobQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': DataPrivacyCreateDeletionJobQueryAsSubResourceFromJSON(json['data']),
    };
}

export function DataPrivacyCreateDeletionJobQueryToJSON(value?: DataPrivacyCreateDeletionJobQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DataPrivacyCreateDeletionJobQueryAsSubResourceToJSON(value.data),
    };
}

