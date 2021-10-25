

import fs from 'fs';
export const isFileExisted=async (filePath:string):Promise<boolean>=>{
   const has=await fs.promises.access(filePath, fs.constants.F_OK | fs.constants.R_OK).then(() => true)
   .catch(() => false)
   return has
  }