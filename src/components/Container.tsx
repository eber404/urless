import React, { useState } from 'react'

import { TextArea } from './TextArea'
import { UrlDetails } from './UrlDetails'
import { UrlInfo } from '@/entities/url-info'

export function Container() {
  const [text, setText] = useState('')
  const [urlInfo, setUrlInfo] = useState<UrlInfo>()
  const [isError, setIsError] = useState<boolean>(false)
  const [isTouched, setIsTouched] = useState<boolean>(false)

  const onChangeUrl = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const value = event.target.value
      setText(value)
      if (!value.length) {
        setIsTouched(false)
        setUrlInfo(undefined)
        return
      }
      setIsTouched(true)
      const url = UrlInfo.from(value)
      setUrlInfo(url)
      setIsError(false)
    } catch (error) {
      setIsError(true)
      setUrlInfo(undefined)
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <TextArea
        onChange={onChangeUrl}
        value={text}
        isTouched={isTouched}
        isValid={!isError}
      />
      {urlInfo && <UrlDetails urlInfo={urlInfo} />}
    </div>
  )
}
