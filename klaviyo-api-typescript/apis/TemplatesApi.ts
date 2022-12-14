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


import * as runtime from '../runtime';
import type {
  DeleteTemplateResponse,
  GetCatalogItems4XXResponse,
  GetTemplateResponse,
  GetTemplateResponseCollection,
  PatchTemplateResponse,
  PostTemplateResponse,
  TemplateCloneQuery,
  TemplateCreateQuery,
  TemplateUpdateQuery,
  V2TemplateRenderQuery,
} from '../models';
import {
    DeleteTemplateResponseFromJSON,
    DeleteTemplateResponseToJSON,
    GetCatalogItems4XXResponseFromJSON,
    GetCatalogItems4XXResponseToJSON,
    GetTemplateResponseFromJSON,
    GetTemplateResponseToJSON,
    GetTemplateResponseCollectionFromJSON,
    GetTemplateResponseCollectionToJSON,
    PatchTemplateResponseFromJSON,
    PatchTemplateResponseToJSON,
    PostTemplateResponseFromJSON,
    PostTemplateResponseToJSON,
    TemplateCloneQueryFromJSON,
    TemplateCloneQueryToJSON,
    TemplateCreateQueryFromJSON,
    TemplateCreateQueryToJSON,
    TemplateUpdateQueryFromJSON,
    TemplateUpdateQueryToJSON,
    V2TemplateRenderQueryFromJSON,
    V2TemplateRenderQueryToJSON,
} from '../models';

export interface CreateTemplateRequest {
    revision: string;
    templateCreateQuery: TemplateCreateQuery;
}

export interface CreateTemplateCloneRequest {
    id: string;
    revision: string;
    templateCloneQuery: TemplateCloneQuery;
}

export interface CreateTemplateRenderRequest {
    id: string;
    revision: string;
    v2TemplateRenderQuery: V2TemplateRenderQuery;
}

export interface DeleteTemplateRequest {
    id: string;
    revision: string;
}

export interface GetTemplateRequest {
    id: string;
    revision: string;
    fieldsTemplate?: Array<GetTemplateFieldsTemplateEnum>;
}

export interface GetTemplatesRequest {
    revision: string;
    fieldsTemplate?: Array<GetTemplatesFieldsTemplateEnum>;
    filter?: string;
    pageCursor?: string;
    sort?: GetTemplatesSortEnum;
}

export interface UpdateTemplateRequest {
    id: string;
    revision: string;
    templateUpdateQuery: TemplateUpdateQuery;
}

/**
 * 
 */
export class TemplatesApi extends runtime.BaseAPI {

    /**
     * Create a new custom HTML template. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Create Template
     */
    async createTemplateRaw(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTemplateResponse>> {
        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling createTemplate.');
        }

        if (requestParameters.templateCreateQuery === null || requestParameters.templateCreateQuery === undefined) {
            throw new runtime.RequiredError('templateCreateQuery','Required parameter requestParameters.templateCreateQuery was null or undefined when calling createTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateCreateQueryToJSON(requestParameters.templateCreateQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Create a new custom HTML template. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Create Template
     */
    async createTemplate(requestParameters: CreateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTemplateResponse> {
        const response = await this.createTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a clone of a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Create Template Clone
     */
    async createTemplateCloneRaw(requestParameters: CreateTemplateCloneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createTemplateClone.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling createTemplateClone.');
        }

        if (requestParameters.templateCloneQuery === null || requestParameters.templateCloneQuery === undefined) {
            throw new runtime.RequiredError('templateCloneQuery','Required parameter requestParameters.templateCloneQuery was null or undefined when calling createTemplateClone.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/{id}/clone/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateCloneQueryToJSON(requestParameters.templateCloneQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Create a clone of a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Create Template Clone
     */
    async createTemplateClone(requestParameters: CreateTemplateCloneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTemplateResponse> {
        const response = await this.createTemplateCloneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render a template with the given template ID and context attribute. Returns the HTML and plain text versions of the email template.  **Request body parameters** (nested under `attributes`):  * `return_fields`: Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). * `context`: This is the context your email template will be rendered with. You must pass in a `context` object as a JSON object.  Email templates are rendered with contexts in a similar manner to Django templates. Nested template variables can be referenced via dot notation. Template variables without corresponding `context` values are treated as `FALSE` and output nothing.  Ex. `{ \"name\" : \"George Washington\", \"state\" : \"VA\" }`<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Templates Read`
     * Create Template Render
     */
    async createTemplateRenderRaw(requestParameters: CreateTemplateRenderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostTemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createTemplateRender.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling createTemplateRender.');
        }

        if (requestParameters.v2TemplateRenderQuery === null || requestParameters.v2TemplateRenderQuery === undefined) {
            throw new runtime.RequiredError('v2TemplateRenderQuery','Required parameter requestParameters.v2TemplateRenderQuery was null or undefined when calling createTemplateRender.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/{id}/render/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V2TemplateRenderQueryToJSON(requestParameters.v2TemplateRenderQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Render a template with the given template ID and context attribute. Returns the HTML and plain text versions of the email template.  **Request body parameters** (nested under `attributes`):  * `return_fields`: Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). * `context`: This is the context your email template will be rendered with. You must pass in a `context` object as a JSON object.  Email templates are rendered with contexts in a similar manner to Django templates. Nested template variables can be referenced via dot notation. Template variables without corresponding `context` values are treated as `FALSE` and output nothing.  Ex. `{ \"name\" : \"George Washington\", \"state\" : \"VA\" }`<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `Templates Read`
     * Create Template Render
     */
    async createTemplateRender(requestParameters: CreateTemplateRenderRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostTemplateResponse> {
        const response = await this.createTemplateRenderRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a template with the given template ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Delete Template
     */
    async deleteTemplateRaw(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeleteTemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTemplate.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling deleteTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeleteTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Delete a template with the given template ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Delete Template
     */
    async deleteTemplate(requestParameters: DeleteTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeleteTemplateResponse> {
        const response = await this.deleteTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Read`
     * Get Template
     */
    async getTemplateRaw(requestParameters: GetTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTemplate.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getTemplate.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTemplate) {
            queryParameters['fields[template]'] = requestParameters.fieldsTemplate.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Get a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Read`
     * Get Template
     */
    async getTemplate(requestParameters: GetTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTemplateResponse> {
        const response = await this.getTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all templates in an account. Filter to request a subset of all templates. Templates can be sorted by the following fields, in ascending and descending order: `id`, `name`, `created`, `updated` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 20 results per page. Results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Read`
     * Get Templates
     */
    async getTemplatesRaw(requestParameters: GetTemplatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTemplateResponseCollection>> {
        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling getTemplates.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTemplate) {
            queryParameters['fields[template]'] = requestParameters.fieldsTemplate.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.pageCursor !== undefined) {
            queryParameters['page[cursor]'] = requestParameters.pageCursor;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTemplateResponseCollectionFromJSON(jsonValue));
    }

    /**
     * Get all templates in an account. Filter to request a subset of all templates. Templates can be sorted by the following fields, in ascending and descending order: `id`, `name`, `created`, `updated` Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets). Returns a maximum of 20 results per page. Results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Read`
     * Get Templates
     */
    async getTemplates(requestParameters: GetTemplatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTemplateResponseCollection> {
        const response = await this.getTemplatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Update Template
     */
    async updateTemplateRaw(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchTemplateResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateTemplate.');
        }

        if (requestParameters.revision === null || requestParameters.revision === undefined) {
            throw new runtime.RequiredError('revision','Required parameter requestParameters.revision was null or undefined when calling updateTemplate.');
        }

        if (requestParameters.templateUpdateQuery === null || requestParameters.templateUpdateQuery === undefined) {
            throw new runtime.RequiredError('templateUpdateQuery','Required parameter requestParameters.templateUpdateQuery was null or undefined when calling updateTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.revision !== undefined && requestParameters.revision !== null) {
            headerParameters['revision'] = String(requestParameters.revision);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Klaviyo-API-Key authentication
        }

        const response = await this.request({
            path: `/api/templates/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateUpdateQueryToJSON(requestParameters.templateUpdateQuery),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchTemplateResponseFromJSON(jsonValue));
    }

    /**
     * Update a template with the given template ID. Request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#sparse-fieldsets).<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `Templates Write`
     * Update Template
     */
    async updateTemplate(requestParameters: UpdateTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchTemplateResponse> {
        const response = await this.updateTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetTemplateFieldsTemplateEnum = {
    CompanyId: 'company_id',
    Name: 'name',
    EditorType: 'editor_type',
    Html: 'html',
    Text: 'text',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetTemplateFieldsTemplateEnum = typeof GetTemplateFieldsTemplateEnum[keyof typeof GetTemplateFieldsTemplateEnum];
/**
 * @export
 */
export const GetTemplatesFieldsTemplateEnum = {
    CompanyId: 'company_id',
    Name: 'name',
    EditorType: 'editor_type',
    Html: 'html',
    Text: 'text',
    Created: 'created',
    Updated: 'updated'
} as const;
export type GetTemplatesFieldsTemplateEnum = typeof GetTemplatesFieldsTemplateEnum[keyof typeof GetTemplatesFieldsTemplateEnum];
/**
 * @export
 */
export const GetTemplatesSortEnum = {
    Created: 'created',
    Created: '-created',
    Id: 'id',
    Id: '-id',
    Name: 'name',
    Name: '-name',
    Updated: 'updated',
    Updated: '-updated'
} as const;
export type GetTemplatesSortEnum = typeof GetTemplatesSortEnum[keyof typeof GetTemplatesSortEnum];
