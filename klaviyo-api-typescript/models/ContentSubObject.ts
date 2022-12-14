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
 * @interface ContentSubObject
 */
export interface ContentSubObject {
    /**
     * 
     * @type {string}
     * @memberof ContentSubObject
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentSubObject
     */
    previewText?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentSubObject
     */
    fromEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentSubObject
     */
    fromLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentSubObject
     */
    templateId?: string;
}

/**
 * Check if a given object implements the ContentSubObject interface.
 */
export function instanceOfContentSubObject(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentSubObjectFromJSON(json: any): ContentSubObject {
    return ContentSubObjectFromJSONTyped(json, false);
}

export function ContentSubObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentSubObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'previewText': !exists(json, 'preview_text') ? undefined : json['preview_text'],
        'fromEmail': !exists(json, 'from_email') ? undefined : json['from_email'],
        'fromLabel': !exists(json, 'from_label') ? undefined : json['from_label'],
        'templateId': !exists(json, 'template_id') ? undefined : json['template_id'],
    };
}

export function ContentSubObjectToJSON(value?: ContentSubObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subject': value.subject,
        'preview_text': value.previewText,
        'from_email': value.fromEmail,
        'from_label': value.fromLabel,
        'template_id': value.templateId,
    };
}
