import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  isValid?: boolean
  isTouched?: boolean
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea({ isTouched, isValid, ...props }: Props) {
  const borderBase = 'border-1 border-zinc-500'
  const borderError = 'border-red-800'
  const borderSuccess = 'border-green-800'
  const borderStyle = twMerge(
    borderBase,
    isTouched && (isValid ? borderSuccess : borderError)
  )

  console.log({ borderStyle, isTouched, isValid })

  return (
    <textarea
      {...props}
      className={twMerge(
        'dark:bg-zinc-800 rounded-md p-4',
        props.className,
        borderStyle
      )}
      rows={6}
    ></textarea>
  )
}
