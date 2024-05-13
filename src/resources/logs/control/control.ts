// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CmbAPI from './cmb/cmb';
import * as RetentionAPI from './retention/retention';

export class Control extends APIResource {
  retention: RetentionAPI.Retention = new RetentionAPI.Retention(this._client);
  cmb: CmbAPI.Cmb = new CmbAPI.Cmb(this._client);
}

export namespace Control {
  export import Retention = RetentionAPI.Retention;
  export import Cmb = CmbAPI.Cmb;
}
