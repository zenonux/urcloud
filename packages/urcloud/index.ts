import installer from './defaults'
export * from '@urcloud/components'

export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
