import { AliOssConfig, VersionItem } from "./interface";
export default class AliOSS {
    private distPath;
    private client;
    constructor(distPath: string, config: AliOssConfig);
    uploadAssets(prefix: string): Promise<void>;
    handleDel(name: string): Promise<any>;
    deleteAssets(prefix: string): Promise<boolean>;
    clearAllUnNeedAssests(dirList: VersionItem[]): Promise<boolean>;
}
