import { ServerConfig } from './interface';
export default class Server {
    private distPath;
    constructor(distPath: string);
    uploadHtml(serverConfig: ServerConfig): Promise<void>;
    private uploadFile;
}
