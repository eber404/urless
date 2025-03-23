import { z } from 'zod'

export const UrlInfoSchema = z.object({
  url: z.string().url(),
  scheme: z.string(),
  authority: z.string(),
  fragment: z.string(),
  query: z.string(),
  host: z.string(),
  path: z.string(),
  queryParameters: z.record(z.string()),
})

export type UrlInfoIn = z.input<typeof UrlInfoSchema>
export type UrlInfoOut = z.output<typeof UrlInfoSchema>

export class UrlInfo {
  private _url: URL

  private constructor(url: URL) {
    this._url = url
  }

  static from(url: string) {
    const result = z.string().url().parse(url)
    return new UrlInfo(new URL(result))
  }

  get url() {
    return this._url.toString()
  }

  get queryParameters() {
    return Object.fromEntries(this._url.searchParams.entries())
  }

  get scheme() {
    return this._url.protocol.replace(':', '')
  }

  get authority() {
    return this._url.host
  }

  get fragment() {
    return this._url.hash
  }

  get query() {
    return this._url.search
  }

  get host() {
    return this._url.hostname
  }

  get path() {
    return this._url.pathname
  }

  toJSON() {
    return JSON.stringify(
      {
        url: this.url,
        scheme: this.scheme,
        authority: this.authority,
        fragment: this.fragment,
        query: this.query,
        host: this.host,
        path: this.path,
        queryParameters: this.queryParameters,
      },
      null,
      2
    )
  }
}
