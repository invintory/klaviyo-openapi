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
 * @interface TemplateCreateQueryAsSubResourceAttributes
 */
export interface TemplateCreateQueryAsSubResourceAttributes {
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateQueryAsSubResourceAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateQueryAsSubResourceAttributes
     */
    editorType: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateQueryAsSubResourceAttributes
     */
    html?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateQueryAsSubResourceAttributes
     */
    text?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TemplateCreateQueryAsSubResourceAttributes
     */
    returnFields?: Array<string>;
}

/**
 * Check if a given object implements the TemplateCreateQueryAsSubResourceAttributes interface.
 */
export function instanceOfTemplateCreateQueryAsSubResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "editorType" in value;

    return isInstance;
}

export function TemplateCreateQueryAsSubResourceAttributesFromJSON(json: any): TemplateCreateQueryAsSubResourceAttributes {
    return TemplateCreateQueryAsSubResourceAttributesFromJSONTyped(json, false);
}

export function TemplateCreateQueryAsSubResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCreateQueryAsSubResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'editorType': json['editor_type'],
        'html': !exists(json, 'html') ? undefined : json['html'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'returnFields': !exists(json, 'return_fields') ? undefined : json['return_fields'],
    };
}

export function TemplateCreateQueryAsSubResourceAttributesToJSON(value?: TemplateCreateQueryAsSubResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'editor_type': value.editorType,
        'html': value.html,
        'text': value.text,
        'return_fields': value.returnFields,
    };
}

