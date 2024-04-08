// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VersionsAPI from 'cloudflare/resources/workers/scripts/versions/versions';
import * as SettingsAPI from 'cloudflare/resources/workers/scripts/versions/settings';
import { type Uploadable, multipartFormRequestOptions } from 'cloudflare/core';

export class Versions extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Upload a Worker Version without deploying to Cloudflare's network.
   */
  create(
    scriptName: string,
    params: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: VersionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List of Worker Versions. The first version in the list is the latest version.
   */
  list(
    scriptName: string,
    params: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions`,
        options,
      ) as Core.APIPromise<{ result: VersionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Version Detail
   */
  get(
    scriptName: string,
    versionId: string,
    params: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/versions/${versionId}`,
        options,
      ) as Core.APIPromise<{ result: VersionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VersionCreateResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionListResponse {
  items?: Array<VersionListResponse.Item>;
}

export namespace VersionListResponse {
  export interface Item {
    id?: string;

    metadata?: unknown;

    number?: number;
  }
}

export interface VersionGetResponse {
  resources: unknown;

  id?: string;

  metadata?: unknown;

  number?: number;
}

export interface VersionCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A module comprising a Worker script, often a javascript file.
   * Multiple modules may be provided as separate named parts, but at least one
   * module must be present and referenced in the metadata as `main_module`.
   */
  '<any part name>'?: Array<Uploadable>;

  /**
   * Body param: JSON encoded metadata about the uploaded parts and Worker
   * configuration.
   */
  metadata?: VersionCreateParams.Metadata;
}

export namespace VersionCreateParams {
  /**
   * JSON encoded metadata about the uploaded parts and Worker configuration.
   */
  export interface Metadata {
    annotations?: Metadata.Annotations;

    /**
     * List of bindings available to the worker.
     */
    bindings?: Array<unknown>;

    /**
     * Date indicating targeted support in the Workers runtime. Backwards incompatible
     * fixes to the runtime following this date will not affect this Worker.
     */
    compatibility_date?: string;

    /**
     * Flags that enable or disable certain features in the Workers runtime. Used to
     * enable upcoming features or opt in or out of specific changes not included in a
     * `compatibility_date`.
     */
    compatibility_flags?: Array<string>;

    /**
     * List of binding types to keep from previous_upload.
     */
    keep_bindings?: Array<string>;

    /**
     * Name of the part in the multipart request that contains the main module (e.g.
     * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
     */
    main_module?: string;

    /**
     * Usage model to apply to invocations.
     */
    usage_model?: 'standard';
  }

  export namespace Metadata {
    export interface Annotations {
      /**
       * Human-readable message about the version.
       */
      'workers/message'?: string;

      /**
       * User-provided identifier for the version.
       */
      'workers/tag'?: string;
    }
  }
}

export interface VersionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface VersionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Versions {
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionListResponse = VersionsAPI.VersionListResponse;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
  export import Settings = SettingsAPI.Settings;
  export import BindingItem = SettingsAPI.BindingItem;
  export import CompatibilityFlagsItem = SettingsAPI.CompatibilityFlagsItem;
  export import SettingsItem = SettingsAPI.SettingsItem;
  export import TagsItem = SettingsAPI.TagsItem;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
