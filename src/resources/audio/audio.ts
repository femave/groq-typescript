// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '../../resource.ts';
import * as AudioAPI from '../../resources/audio/audio.ts';
import * as TranscriptionsAPI from '../../resources/audio/transcriptions.ts';
import * as TranslationsAPI from '../../resources/audio/translations.ts';

export class Audio extends APIResource {
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
}

export interface Translation {
  text: string;
}

export namespace Audio {
  export import Translation = AudioAPI.Translation;
  export import Transcriptions = TranscriptionsAPI.Transcriptions;
  export import Transcription = TranscriptionsAPI.Transcription;
  export import TranscriptionCreateParams = TranscriptionsAPI.TranscriptionCreateParams;
  export import Translations = TranslationsAPI.Translations;
  export import TranslationCreateParams = TranslationsAPI.TranslationCreateParams;
}
