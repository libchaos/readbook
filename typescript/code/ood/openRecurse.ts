import * as fs from 'fs'

interface FileItem {
  path: string
  contents: string[]
}

class SyncFileReader {
  getFiles(path: string, depth: number = 0): any {
    const fileTree = []
    const files = fs.readdirSync(path)
    for (let file of files) {
      const stats = fs.statSync(file)
      let fileItem: FileItem
      if (stats.isDirectory) {
        fileItem = {
          path: file,
          contents: this.getFiles(path, (depth+1))
        }
        console.log('dir, ', fileItem);
      } else {
        fileItem = {
          path: file,
          contents: []
        }
        console.log('file ', fileItem);
      }
      fileTree.push(fileItem.contents)
    }
    return fileTree
  }
}


class LimitedFileReader extends SyncFileReader {
  constructor(public maxDepth: number) {
    super()
  }
  getFiles(path: string, depth=0) {
    if (depth > this.maxDepth) {
      return []
    }
    return super.getFiles(path, depth)
  }
}


const reader = new LimitedFileReader(1)

console.log(reader.getFiles('.'));


