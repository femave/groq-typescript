// File generated from our OpenAPI spec by Stainless.

import type { Groq } from './index.ts';

export class APIResource {
  protected _client: Groq;

  constructor(client: Groq) {
    this._client = client;
  }
}
