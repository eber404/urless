import React from 'react'
import { tv } from 'tailwind-variants'

type Props = {
  isValid?: boolean
  isTouched?: boolean
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea({ isTouched, isValid, ...props }: Props) {
  const textArea = tv({
    base: 'border-1 border-zinc-500 dark:bg-zinc-800 rounded-md p-4',
    variants: {
      border: {
        success: 'border-green-800',
        error: 'border-red-800',
        untouched: '',
      },
    },
    defaultVariants: { border: 'untouched' },
  })

  return (
    <textarea
      {...props}
      className={textArea({
        border: isTouched ? (isValid ? 'success' : 'error') : 'untouched',
      })}
      rows={6}
    ></textarea>
  )
}
