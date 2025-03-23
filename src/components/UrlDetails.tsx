import React from 'react'

import { UrlInfo } from '@/entities/url-info'

type Props = {
  urlInfo: UrlInfo
}

export function UrlDetails(props: Props) {
  return (
    <div className="dark:bg-zinc-800 flex flex-col items-center justify-center rounded-md">
      <pre className="whitespace-pre-wrap break-words p-4 overflow-auto">
        {props.urlInfo.toJSON()}
      </pre>
    </div>
  )
}
