export const BASE_URL = '/vite-press/' as const;

export const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')

export const withBase = (path: string): string => joinPath(BASE_URL, path)
