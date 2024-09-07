'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/home': '/',
  '/bios': '/bios',
  '/mentoring': '/mentoring',
  '/journalclub': '/journalclub',
  '/medium': '/medium',
  '/about': '/about',
  '/contact': '/contact',
  '/mentoring/archive': '/mentoring/archive',
  '/mentoring/search': '/mentoring/search',
  '/mentoring/dashboard/mentee': '/mentoring/dashboard/mentee',
  '/mentoring/dashboard/mentor': '/mentoring/dashboard/mentor',
  '/mentoring/mentor/mentor_A': '/mentoring/mentor/mentor_A'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
