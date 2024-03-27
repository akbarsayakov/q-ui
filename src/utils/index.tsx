import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cv = (...classes: ClassValue[]) => twMerge(clsx(classes))
