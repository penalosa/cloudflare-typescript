// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BrowserFamilyAPI from 'cloudflare/resources/radar/http/locations/browser-family';

export class BrowserFamily extends APIResource {
  /**
   * Get the top locations, by HTTP traffic, of the requested browser family. Values
   * are a percentage out of the total traffic.
   */
  get(
    browserFamily: 'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI',
    query?: BrowserFamilyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserFamilyGetResponse>;
  get(
    browserFamily: 'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI',
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserFamilyGetResponse>;
  get(
    browserFamily: 'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI',
    query: BrowserFamilyGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserFamilyGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(browserFamily, {}, query);
    }
    return (
      this._client.get(`/radar/http/top/locations/browser_family/${browserFamily}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: BrowserFamilyGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BrowserFamilyGetResponse {
  meta: BrowserFamilyGetResponse.Meta;

  top_0: Array<BrowserFamilyGetResponse.Top0>;
}

export namespace BrowserFamilyGetResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface BrowserFamilyGetParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export namespace BrowserFamily {
  export import BrowserFamilyGetResponse = BrowserFamilyAPI.BrowserFamilyGetResponse;
  export import BrowserFamilyGetParams = BrowserFamilyAPI.BrowserFamilyGetParams;
}
