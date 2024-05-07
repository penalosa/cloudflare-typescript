// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as ApplicationsAPI from 'cloudflare/resources/zero-trust/access/applications/applications';
import * as CAsAPI from 'cloudflare/resources/zero-trust/access/applications/cas';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/access/applications/policies';
import * as UserPolicyChecksAPI from 'cloudflare/resources/zero-trust/access/applications/user-policy-checks';
import { SinglePage } from 'cloudflare/pagination';

export class Applications extends APIResource {
  cas: CAsAPI.CAs = new CAsAPI.CAs(this._client);
  userPolicyChecks: UserPolicyChecksAPI.UserPolicyChecks = new UserPolicyChecksAPI.UserPolicyChecks(
    this._client,
  );
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Adds a new application to Access.
   */
  create(params: ApplicationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Application> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/apps`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Application }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an Access application.
   */
  update(
    appId: AppIDParam,
    params: ApplicationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Application> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Application }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Access applications in an account or zone.
   */
  list(
    params?: ApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationsSinglePage, Application>;
  list(options?: Core.RequestOptions): Core.PagePromise<ApplicationsSinglePage, Application>;
  list(
    params: ApplicationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationsSinglePage, Application> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/access/apps`,
      ApplicationsSinglePage,
      options,
    );
  }

  /**
   * Deletes an application from Access.
   */
  delete(
    appId: AppIDParam,
    params?: ApplicationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse>;
  delete(appId: AppIDParam, options?: Core.RequestOptions): Core.APIPromise<ApplicationDeleteResponse>;
  delete(
    appId: AppIDParam,
    params: ApplicationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`,
        options,
      ) as Core.APIPromise<{ result: ApplicationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches information about an Access application.
   */
  get(
    appId: AppIDParam,
    params?: ApplicationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Application>;
  get(appId: AppIDParam, options?: Core.RequestOptions): Core.APIPromise<Application>;
  get(
    appId: AppIDParam,
    params: ApplicationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Application> {
    if (isRequestOptions(params)) {
      return this.get(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}`,
        options,
      ) as Core.APIPromise<{ result: Application }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes all tokens issued for an application.
   */
  revokeTokens(
    appId: AppIDParam,
    params?: ApplicationRevokeTokensParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: AppIDParam,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null>;
  revokeTokens(
    appId: AppIDParam,
    params: ApplicationRevokeTokensParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationRevokeTokensResponse | null> {
    if (isRequestOptions(params)) {
      return this.revokeTokens(appId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(
        `/${accountOrZone}/${accountOrZoneId}/access/apps/${appId}/revoke_tokens`,
        options,
      ) as Core.APIPromise<{ result: ApplicationRevokeTokensResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ApplicationsSinglePage extends SinglePage<Application> {}

export type AllowedHeaders = string;

export type AllowedHeadersParam = string;

/**
 * The identity providers selected for application.
 */
export type AllowedIdPs = string;

/**
 * The identity providers selected for application.
 */
export type AllowedIdPsParam = string;

/**
 * Allowed HTTP request methods.
 */
export type AllowedMethods = Array<
  'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
>;

/**
 * Allowed HTTP request methods.
 */
export type AllowedMethodsParam = Array<
  'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
>;

export type AllowedOrigins = string;

export type AllowedOriginsParam = string;

/**
 * Identifier
 */
export type AppID = string | string;

/**
 * Identifier
 */
export type AppIDParam = string | string;

export type Application =
  | Application.SelfHostedApplication
  | Application.SaaSApplication
  | Application.BrowserSSHApplication
  | Application.BrowserVncApplication
  | Application.AppLauncherApplication
  | Application.DeviceEnrollmentPermissionsApplication
  | Application.BrowserIsolationPermissionsApplication
  | Application.BookmarkApplication;

export namespace Application {
  export interface SelfHostedApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationsAPI.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export interface SaaSApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    saas_app?: ApplicationsAPI.SAMLSaaSApp | SaaSApplication.AccessOIDCSaaSApp;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;

    updated_at?: string;
  }

  export namespace SaaSApplication {
    export interface AccessOIDCSaaSApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      created_at?: string;

      custom_claims?: AccessOIDCSaaSApp.CustomClaims;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;

      updated_at?: string;
    }

    export namespace AccessOIDCSaaSApp {
      export interface CustomClaims {
        /**
         * The name of the claim.
         */
        name?: string;

        /**
         * A mapping from IdP ID to claim name.
         */
        name_by_idp?: Record<string, string>;

        /**
         * If the claim is required when building an OIDC token.
         */
        required?: boolean;

        /**
         * The scope of the claim.
         */
        scope?: 'groups' | 'profile' | 'email' | 'openid';

        source?: CustomClaims.Source;
      }

      export namespace CustomClaims {
        export interface Source {
          /**
           * The name of the IdP claim.
           */
          name?: string;
        }
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationsAPI.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export interface BrowserVncApplication {
    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain: string;

    /**
     * The application type.
     */
    type: string;

    /**
     * UUID
     */
    id?: string;

    /**
     * When set to true, users can authenticate to this application using their WARP
     * session. When set to false this application will always require direct IdP
     * authentication. This setting always overrides the organization setting for WARP
     * authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    cors_headers?: ApplicationsAPI.CORSHeaders;

    created_at?: string;

    /**
     * The custom error message shown to a user when they are denied access to the
     * application.
     */
    custom_deny_message?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * The custom URL a user is redirected to when they are denied access to the
     * application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * The custom pages that will be displayed when applicable for this application
     */
    custom_pages?: Array<string>;

    /**
     * Enables the binding cookie, which increases security against compromised
     * authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Enables the HttpOnly cookie attribute, which increases security against XSS
     * attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * Allows options preflight requests to bypass Access authentication and go
     * directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Enables cookie paths to scope an application's JWT to the application path. If
     * disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Sets the SameSite cookie setting, which provides increased security against CSRF
     * attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * List of domains that Access will secure.
     */
    self_hosted_domains?: Array<ApplicationsAPI.SelfHostedDomains>;

    /**
     * Returns a 401 status code when the request is blocked by a Service Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    /**
     * Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    updated_at?: string;
  }

  export interface AppLauncherApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * The application type.
     */
    type: ApplicationsAPI.ApplicationType;

    /**
     * UUID
     */
    id?: string;

    /**
     * The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<ApplicationsAPI.AllowedIdPs>;

    /**
     * Audience tag.
     */
    aud?: string;

    /**
     * When set to `true`, users skip the identity provider selection step during
     * login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    created_at?: string;

    /**
     * The primary hostname and path that Access will secure. If the app is visible in
     * the App Launcher dashboard, this is the domain that will be displayed.
     */
    domain?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The amount of time that tokens issued for this application will be valid. Must
     * be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms,
     * s, m, h.
     */
    session_duration?: string;

    updated_at?: string;
  }

  export interface BookmarkApplication {
    /**
     * UUID
     */
    id?: string;

    /**
     * Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Audience tag.
     */
    aud?: string;

    created_at?: string;

    /**
     * The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * The name of the application.
     */
    name?: string;

    /**
     * The tags you want assigned to an application. Tags are used to filter
     * applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * The application type.
     */
    type?: string;

    updated_at?: string;
  }
}

/**
 * The application type.
 */
export type ApplicationType =
  | 'self_hosted'
  | 'saas'
  | 'ssh'
  | 'vnc'
  | 'app_launcher'
  | 'warp'
  | 'biso'
  | 'bookmark'
  | 'dash_sso';

/**
 * The application type.
 */
export type ApplicationTypeParam =
  | 'self_hosted'
  | 'saas'
  | 'ssh'
  | 'vnc'
  | 'app_launcher'
  | 'warp'
  | 'biso'
  | 'bookmark'
  | 'dash_sso';

export interface CORSHeaders {
  /**
   * Allows all HTTP request headers.
   */
  allow_all_headers?: boolean;

  /**
   * Allows all HTTP request methods.
   */
  allow_all_methods?: boolean;

  /**
   * Allows all origins.
   */
  allow_all_origins?: boolean;

  /**
   * When set to `true`, includes credentials (cookies, authorization headers, or TLS
   * client certificates) with requests.
   */
  allow_credentials?: boolean;

  /**
   * Allowed HTTP request headers.
   */
  allowed_headers?: Array<AllowedHeaders>;

  /**
   * Allowed HTTP request methods.
   */
  allowed_methods?: AllowedMethods;

  /**
   * Allowed origins.
   */
  allowed_origins?: Array<AllowedOrigins>;

  /**
   * The maximum number of seconds the results of a preflight request can be cached.
   */
  max_age?: number;
}

export interface CORSHeadersParam {
  /**
   * Allows all HTTP request headers.
   */
  allow_all_headers?: boolean;

  /**
   * Allows all HTTP request methods.
   */
  allow_all_methods?: boolean;

  /**
   * Allows all origins.
   */
  allow_all_origins?: boolean;

  /**
   * When set to `true`, includes credentials (cookies, authorization headers, or TLS
   * client certificates) with requests.
   */
  allow_credentials?: boolean;

  /**
   * Allowed HTTP request headers.
   */
  allowed_headers?: Array<AllowedHeadersParam>;

  /**
   * Allowed HTTP request methods.
   */
  allowed_methods?: AllowedMethodsParam;

  /**
   * Allowed origins.
   */
  allowed_origins?: Array<AllowedOriginsParam>;

  /**
   * The maximum number of seconds the results of a preflight request can be cached.
   */
  max_age?: number;
}

/**
 * A globally unique name for an identity or service provider.
 */
export type SaaSAppNameFormat =
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified'
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic'
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';

/**
 * A globally unique name for an identity or service provider.
 */
export type SaaSAppNameFormatParam =
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified'
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:basic'
  | 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri';

/**
 * The format of the name identifier sent to the SaaS application.
 */
export type SaaSAppNameIDFormat = 'id' | 'email';

/**
 * The format of the name identifier sent to the SaaS application.
 */
export type SaaSAppNameIDFormatParam = 'id' | 'email';

export interface SaaSAppSource {
  /**
   * The name of the IdP attribute.
   */
  name?: string;

  /**
   * A mapping from IdP ID to attribute name.
   */
  name_by_idp?: Record<string, string>;
}

export interface SaaSAppSourceParam {
  /**
   * The name of the IdP attribute.
   */
  name?: string;

  /**
   * A mapping from IdP ID to attribute name.
   */
  name_by_idp?: Record<string, string>;
}

export interface SAMLSaaSApp {
  /**
   * Optional identifier indicating the authentication protocol used for the saas
   * app. Required for OIDC. Default if unset is "saml"
   */
  auth_type?: 'saml' | 'oidc';

  /**
   * The service provider's endpoint that is responsible for receiving and parsing a
   * SAML assertion.
   */
  consumer_service_url?: string;

  created_at?: string;

  custom_attributes?: SAMLSaaSApp.CustomAttributes;

  /**
   * The URL that the user will be redirected to after a successful login for IDP
   * initiated logins.
   */
  default_relay_state?: string;

  /**
   * The unique identifier for your SaaS application.
   */
  idp_entity_id?: string;

  /**
   * The format of the name identifier sent to the SaaS application.
   */
  name_id_format?: SaaSAppNameIDFormat;

  /**
   * A [JSONata](https://jsonata.org/) expression that transforms an application's
   * user identities into a NameID value for its SAML assertion. This expression
   * should evaluate to a singular string. The output of this expression can override
   * the `name_id_format` setting.
   */
  name_id_transform_jsonata?: string;

  /**
   * The Access public certificate that will be used to verify your identity.
   */
  public_key?: string;

  /**
   * A [JSONata] (https://jsonata.org/) expression that transforms an application's
   * user identities into attribute assertions in the SAML response. The expression
   * can transform id, email, name, and groups values. It can also transform fields
   * listed in the saml_attributes or oidc_fields of the identity provider used to
   * authenticate. The output of this expression must be a JSON object.
   */
  saml_attribute_transform_jsonata?: string;

  /**
   * A globally unique name for an identity or service provider.
   */
  sp_entity_id?: string;

  /**
   * The endpoint where your SaaS application will send login requests.
   */
  sso_endpoint?: string;

  updated_at?: string;
}

export namespace SAMLSaaSApp {
  export interface CustomAttributes {
    /**
     * The SAML FriendlyName of the attribute.
     */
    friendly_name?: string;

    /**
     * The name of the attribute.
     */
    name?: string;

    /**
     * A globally unique name for an identity or service provider.
     */
    name_format?: ApplicationsAPI.SaaSAppNameFormat;

    /**
     * If the attribute is required when building a SAML assertion.
     */
    required?: boolean;

    source?: ApplicationsAPI.SaaSAppSource;
  }
}

export interface SAMLSaaSAppParam {
  /**
   * Optional identifier indicating the authentication protocol used for the saas
   * app. Required for OIDC. Default if unset is "saml"
   */
  auth_type?: 'saml' | 'oidc';

  /**
   * The service provider's endpoint that is responsible for receiving and parsing a
   * SAML assertion.
   */
  consumer_service_url?: string;

  custom_attributes?: SAMLSaaSAppParam.CustomAttributes;

  /**
   * The URL that the user will be redirected to after a successful login for IDP
   * initiated logins.
   */
  default_relay_state?: string;

  /**
   * The unique identifier for your SaaS application.
   */
  idp_entity_id?: string;

  /**
   * The format of the name identifier sent to the SaaS application.
   */
  name_id_format?: SaaSAppNameIDFormatParam;

  /**
   * A [JSONata](https://jsonata.org/) expression that transforms an application's
   * user identities into a NameID value for its SAML assertion. This expression
   * should evaluate to a singular string. The output of this expression can override
   * the `name_id_format` setting.
   */
  name_id_transform_jsonata?: string;

  /**
   * The Access public certificate that will be used to verify your identity.
   */
  public_key?: string;

  /**
   * A [JSONata] (https://jsonata.org/) expression that transforms an application's
   * user identities into attribute assertions in the SAML response. The expression
   * can transform id, email, name, and groups values. It can also transform fields
   * listed in the saml_attributes or oidc_fields of the identity provider used to
   * authenticate. The output of this expression must be a JSON object.
   */
  saml_attribute_transform_jsonata?: string;

  /**
   * A globally unique name for an identity or service provider.
   */
  sp_entity_id?: string;

  /**
   * The endpoint where your SaaS application will send login requests.
   */
  sso_endpoint?: string;
}

export namespace SAMLSaaSAppParam {
  export interface CustomAttributes {
    /**
     * The SAML FriendlyName of the attribute.
     */
    friendly_name?: string;

    /**
     * The name of the attribute.
     */
    name?: string;

    /**
     * A globally unique name for an identity or service provider.
     */
    name_format?: ApplicationsAPI.SaaSAppNameFormatParam;

    /**
     * If the attribute is required when building a SAML assertion.
     */
    required?: boolean;

    source?: ApplicationsAPI.SaaSAppSourceParam;
  }
}

/**
 * A domain that Access will secure.
 */
export type SelfHostedDomains = string;

/**
 * A domain that Access will secure.
 */
export type SelfHostedDomainsParam = string;

export interface ApplicationDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export type ApplicationRevokeTokensResponse = unknown;

export type ApplicationCreateParams =
  | ApplicationCreateParams.SelfHostedApplication
  | ApplicationCreateParams.SaaSApplication
  | ApplicationCreateParams.BrowserSSHApplication
  | ApplicationCreateParams.BrowserVncApplication
  | ApplicationCreateParams.AppLauncherApplication
  | ApplicationCreateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationCreateParams.BrowserIsolationPermissionsApplication
  | ApplicationCreateParams.BookmarkApplication;

export namespace ApplicationCreateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface SaaSApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param:
     */
    saas_app?: SAMLSaaSAppParam | ApplicationCreateParams.SaaSApplication.AccessOIDCSaaSApp;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }

  export namespace SaaSApplication {
    export interface AccessOIDCSaaSApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      custom_claims?: AccessOIDCSaaSApp.CustomClaims;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;
    }

    export namespace AccessOIDCSaaSApp {
      export interface CustomClaims {
        /**
         * The name of the claim.
         */
        name?: string;

        /**
         * A mapping from IdP ID to claim name.
         */
        name_by_idp?: Record<string, string>;

        /**
         * If the claim is required when building an OIDC token.
         */
        required?: boolean;

        /**
         * The scope of the claim.
         */
        scope?: 'groups' | 'profile' | 'email' | 'openid';

        source?: CustomClaims.Source;
      }

      export namespace CustomClaims {
        export interface Source {
          /**
           * The name of the IdP claim.
           */
          name?: string;
        }
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface BrowserVncApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BookmarkApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }
}

export type ApplicationUpdateParams =
  | ApplicationUpdateParams.SelfHostedApplication
  | ApplicationUpdateParams.SaaSApplication
  | ApplicationUpdateParams.BrowserSSHApplication
  | ApplicationUpdateParams.BrowserVncApplication
  | ApplicationUpdateParams.AppLauncherApplication
  | ApplicationUpdateParams.DeviceEnrollmentPermissionsApplication
  | ApplicationUpdateParams.BrowserIsolationPermissionsApplication
  | ApplicationUpdateParams.BookmarkApplication;

export namespace ApplicationUpdateParams {
  export interface SelfHostedApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface SaaSApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param:
     */
    saas_app?: SAMLSaaSAppParam | ApplicationUpdateParams.SaaSApplication.AccessOIDCSaaSApp;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }

  export namespace SaaSApplication {
    export interface AccessOIDCSaaSApp {
      /**
       * The URL where this applications tile redirects users
       */
      app_launcher_url?: string;

      /**
       * Identifier of the authentication protocol used for the saas app. Required for
       * OIDC.
       */
      auth_type?: 'saml' | 'oidc';

      /**
       * The application client id
       */
      client_id?: string;

      /**
       * The application client secret, only returned on POST request.
       */
      client_secret?: string;

      custom_claims?: AccessOIDCSaaSApp.CustomClaims;

      /**
       * The OIDC flows supported by this application
       */
      grant_types?: Array<'authorization_code' | 'authorization_code_with_pkce'>;

      /**
       * A regex to filter Cloudflare groups returned in ID token and userinfo endpoint
       */
      group_filter_regex?: string;

      /**
       * The Access public certificate that will be used to verify your identity.
       */
      public_key?: string;

      /**
       * The permitted URL's for Cloudflare to return Authorization codes and Access/ID
       * tokens
       */
      redirect_uris?: Array<string>;

      /**
       * Define the user information shared with access
       */
      scopes?: Array<'openid' | 'groups' | 'email' | 'profile'>;
    }

    export namespace AccessOIDCSaaSApp {
      export interface CustomClaims {
        /**
         * The name of the claim.
         */
        name?: string;

        /**
         * A mapping from IdP ID to claim name.
         */
        name_by_idp?: Record<string, string>;

        /**
         * If the claim is required when building an OIDC token.
         */
        required?: boolean;

        /**
         * The scope of the claim.
         */
        scope?: 'groups' | 'profile' | 'email' | 'openid';

        source?: CustomClaims.Source;
      }

      export namespace CustomClaims {
        export interface Source {
          /**
           * The name of the IdP claim.
           */
          name?: string;
        }
      }
    }
  }

  export interface BrowserSSHApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface BrowserVncApplication {
    /**
     * Body param: The primary hostname and path that Access will secure. If the app is
     * visible in the App Launcher dashboard, this is the domain that will be
     * displayed.
     */
    domain: string;

    /**
     * Body param: The application type.
     */
    type: string;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: When set to true, users can authenticate to this application using
     * their WARP session. When set to false this application will always require
     * direct IdP authentication. This setting always overrides the organization
     * setting for WARP authentication.
     */
    allow_authenticate_via_warp?: boolean;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param:
     */
    cors_headers?: CORSHeadersParam;

    /**
     * Body param: The custom error message shown to a user when they are denied access
     * to the application.
     */
    custom_deny_message?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing identity-based rules.
     */
    custom_deny_url?: string;

    /**
     * Body param: The custom URL a user is redirected to when they are denied access
     * to the application when failing non-identity rules.
     */
    custom_non_identity_deny_url?: string;

    /**
     * Body param: The custom pages that will be displayed when applicable for this
     * application
     */
    custom_pages?: Array<string>;

    /**
     * Body param: Enables the binding cookie, which increases security against
     * compromised authorization tokens and CSRF attacks.
     */
    enable_binding_cookie?: boolean;

    /**
     * Body param: Enables the HttpOnly cookie attribute, which increases security
     * against XSS attacks.
     */
    http_only_cookie_attribute?: boolean;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: Allows options preflight requests to bypass Access authentication
     * and go directly to the origin. Cannot turn on if cors_headers is set.
     */
    options_preflight_bypass?: boolean;

    /**
     * Body param: Enables cookie paths to scope an application's JWT to the
     * application path. If disabled, the JWT will scope to the hostname by default
     */
    path_cookie_attribute?: boolean;

    /**
     * Body param: Sets the SameSite cookie setting, which provides increased security
     * against CSRF attacks.
     */
    same_site_cookie_attribute?: string;

    /**
     * Body param: List of domains that Access will secure.
     */
    self_hosted_domains?: Array<SelfHostedDomainsParam>;

    /**
     * Body param: Returns a 401 status code when the request is blocked by a Service
     * Auth policy.
     */
    service_auth_401_redirect?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;

    /**
     * Body param: Enables automatic authentication through cloudflared.
     */
    skip_interstitial?: boolean;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;
  }

  export interface AppLauncherApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface DeviceEnrollmentPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BrowserIsolationPermissionsApplication {
    /**
     * Body param: The application type.
     */
    type: ApplicationTypeParam;

    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The identity providers your users can select when connecting to this
     * application. Defaults to all IdPs configured in your account.
     */
    allowed_idps?: Array<AllowedIdPsParam>;

    /**
     * Body param: When set to `true`, users skip the identity provider selection step
     * during login. You must specify only one identity provider in allowed_idps.
     */
    auto_redirect_to_identity?: boolean;

    /**
     * Body param: The amount of time that tokens issued for this application will be
     * valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us
     * (or µs), ms, s, m, h.
     */
    session_duration?: string;
  }

  export interface BookmarkApplication {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: Displays the application in the App Launcher.
     */
    app_launcher_visible?: boolean;

    /**
     * Body param: The URL or domain of the bookmark.
     */
    domain?: string;

    /**
     * Body param: The image URL for the logo shown in the App Launcher dashboard.
     */
    logo_url?: string;

    /**
     * Body param: The name of the application.
     */
    name?: string;

    /**
     * Body param: The tags you want assigned to an application. Tags are used to
     * filter applications in the App Launcher dashboard.
     */
    tags?: Array<string>;

    /**
     * Body param: The application type.
     */
    type?: string;
  }
}

export interface ApplicationListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface ApplicationRevokeTokensParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Applications {
  export import AllowedHeaders = ApplicationsAPI.AllowedHeaders;
  export import AllowedIdPs = ApplicationsAPI.AllowedIdPs;
  export import AllowedMethods = ApplicationsAPI.AllowedMethods;
  export import AllowedOrigins = ApplicationsAPI.AllowedOrigins;
  export import AppID = ApplicationsAPI.AppID;
  export import Application = ApplicationsAPI.Application;
  export import ApplicationType = ApplicationsAPI.ApplicationType;
  export import CORSHeaders = ApplicationsAPI.CORSHeaders;
  export import SaaSAppNameFormat = ApplicationsAPI.SaaSAppNameFormat;
  export import SaaSAppNameIDFormat = ApplicationsAPI.SaaSAppNameIDFormat;
  export import SaaSAppSource = ApplicationsAPI.SaaSAppSource;
  export import SAMLSaaSApp = ApplicationsAPI.SAMLSaaSApp;
  export import SelfHostedDomains = ApplicationsAPI.SelfHostedDomains;
  export import ApplicationDeleteResponse = ApplicationsAPI.ApplicationDeleteResponse;
  export import ApplicationRevokeTokensResponse = ApplicationsAPI.ApplicationRevokeTokensResponse;
  export import ApplicationsSinglePage = ApplicationsAPI.ApplicationsSinglePage;
  export import ApplicationCreateParams = ApplicationsAPI.ApplicationCreateParams;
  export import ApplicationUpdateParams = ApplicationsAPI.ApplicationUpdateParams;
  export import ApplicationListParams = ApplicationsAPI.ApplicationListParams;
  export import ApplicationDeleteParams = ApplicationsAPI.ApplicationDeleteParams;
  export import ApplicationGetParams = ApplicationsAPI.ApplicationGetParams;
  export import ApplicationRevokeTokensParams = ApplicationsAPI.ApplicationRevokeTokensParams;
  export import CAs = CAsAPI.CAs;
  export import CA = CAsAPI.CA;
  export import CACreateResponse = CAsAPI.CACreateResponse;
  export import CADeleteResponse = CAsAPI.CADeleteResponse;
  export import CAGetResponse = CAsAPI.CAGetResponse;
  export import CAsSinglePage = CAsAPI.CAsSinglePage;
  export import CACreateParams = CAsAPI.CACreateParams;
  export import CAListParams = CAsAPI.CAListParams;
  export import CADeleteParams = CAsAPI.CADeleteParams;
  export import CAGetParams = CAsAPI.CAGetParams;
  export import UserPolicyChecks = UserPolicyChecksAPI.UserPolicyChecks;
  export import UserPolicyCheckGeo = UserPolicyChecksAPI.UserPolicyCheckGeo;
  export import UserPolicyCheckListResponse = UserPolicyChecksAPI.UserPolicyCheckListResponse;
  export import UserPolicyCheckListParams = UserPolicyChecksAPI.UserPolicyCheckListParams;
  export import Policies = PoliciesAPI.Policies;
  export import ApprovalGroup = PoliciesAPI.ApprovalGroup;
  export import Policy = PoliciesAPI.Policy;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PoliciesSinglePage = PoliciesAPI.PoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
