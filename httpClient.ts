interface HttpRequest {
    endpoint: string,
    body: string,
    config: {[key: string]: any},
    requestOptions?: any
}

export class HttpClient {
  static async request<T>(props: HttpRequest): Promise<T> {
    const headers = new Headers()
    props.config.apiKey && headers.set('X-API-Key', props.config.apiKey)
    headers.set('Content-Type', 'application/json')
    headers.set('Cache-Control', 'no-cache')
    headers.set('Accept-Charset', 'utf-8')

    const res = await fetch(props.endpoint, {
      headers,
      method: 'POST',
      body: props.body
    })

    const jsonResponse = await res.json()
    return jsonResponse
  }
}