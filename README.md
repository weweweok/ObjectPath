# getObjectPath/get-object-path-from-value

This library is that you want to find Object value and get path until it by Array.

## install

### node.js

```
npm i get-object-path-from-value
```

or

```
yarn add get-object-path-from-value
```

### deno

Paste this snipet on you want to use this library.

```
import { getPath } from "https://deno.land/x/getobjectpath@0.3.0/getPath.ts";
```

## example

node.js

```
import { getPath } from "get-object-path-from-value";

const obj = [
  {
    level1: {
      key1: "value1",
      level2: {
        key2: "value2",
        level3: [
          "element1",
          "element2",
          {
            key3: "value3",
            level4: {
              key4: "value4",
              level5: [
                "element3",
                "element1",
                {
                  key5: "value5",
                },
              ],
            },
          },
        ],
      },
    },
  },
  { text: "value1next", value: 114514 },
];

console.log(getPath(obj, "value3")); // [ 0, 'level1', 'level2', 'level3', 2, 'key3' ]
```

## DOCUMENTATION

deno: https://deno.land/x/getobjectpath@0.3.0/getPath.ts?doc=&s=getPath
