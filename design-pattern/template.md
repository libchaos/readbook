# 模板

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/c23d1bbb0d6db974fa68fa0a64ea68c9.png)

父类中templateMethod未实现，子类必须实现它

```javascript
"use strict";

const fs = require('fs');
const objectPath = require('object-path');

class ConfigTemplate {
  read(file) {
    console.log(`Deserializing from ${file}`);
    this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
  }

  save(file) {
    console.log(`Serializing to ${file}`);
    fs.writeFileSync(file, this._serialize(this.data));
  }

  get(path) {
    return objectPath.get(this.data, path);
  }

  set(path, value) {
    return objectPath.set(this.data, path, value);
  }

  _serialize() {
    throw new Error('_serialize() must be implemented');
  }

  _deserialize() {
    throw new Error('_deserialize() must be implemented');
  }
}

module.exports = ConfigTemplate;

```

```javascript
"use strict";

const util = require('util');
const ConfigTemplate = require('./configTemplate');

class JsonConfig extends ConfigTemplate {

  _deserialize(data) {
    return JSON.parse(data);
  };

  _serialize(data) {
    return JSON.stringify(data, null, '  ');
  }
}

module.exports = JsonConfig;


"use strict";

const JsonConfig = require('./jsonConfig');

const jsonConfig = new JsonConfig();
jsonConfig.read('samples/conf.json');
jsonConfig.set('nodejs', 'design patterns');
jsonConfig.save('samples/conf_mod.json');
Ωd
```

