"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class SyncFileReader {
    getFiles(path, depth = 0) {
        const fileTree = [];
        const files = fs.readdirSync(path);
        for (let file of files) {
            const stats = fs.statSync(file);
            let fileItem;
            if (stats.isDirectory) {
                fileItem = {
                    path: file,
                    contents: this.getFiles(path, (depth + 1))
                };
                console.log('dir, ', fileItem);
            }
            else {
                fileItem = {
                    path: file,
                    contents: []
                };
                console.log('file ', fileItem);
            }
            fileTree.push(fileItem.contents);
        }
        return fileTree;
    }
}
class LimitedFileReader extends SyncFileReader {
    constructor(maxDepth) {
        super();
        this.maxDepth = maxDepth;
    }
    getFiles(path, depth = 0) {
        if (depth > this.maxDepth) {
            return [];
        }
        return super.getFiles(path, depth);
    }
}
const reader = new LimitedFileReader(1);
console.log(reader.getFiles('.'));
//# sourceMappingURL=openRecurse.js.map