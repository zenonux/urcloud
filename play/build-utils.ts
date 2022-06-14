import { resolve } from 'path'
import type { ProjectManifest } from '@pnpm/types'

export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const epRoot = resolve(pkgRoot, 'urcloud')
export const epPackage = resolve(epRoot, 'package.json')


  
export const getPackageManifest = (pkgPath: string) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(pkgPath) as ProjectManifest
  }


export const getPackageDependencies = (
    pkgPath: string
  ): Record<'dependencies' | 'peerDependencies', string[]> => {
    const manifest = getPackageManifest(pkgPath)
    const { dependencies = {}, peerDependencies = {} } = manifest
  
    return {
      dependencies: Object.keys(dependencies),
      peerDependencies: Object.keys(peerDependencies),
    }
  }
  