/**
 * 目的の値にたどるために必要な経路を配列で出力する関数
 * 目的の値がない場合はnullを返す
 */
export function getPath(
  obj: any,
  targetValue: string | number,
  path: (string | number)[] = []
): (string | number)[] | null {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const newPath = [...path, i]; // 配列のインデックスを数値として保存します。
      const result = getPath(obj[i] as any, targetValue, newPath);
      // パスが見つかった場合、そのパスを返し、探索を終了します。
      if (result) {
        return result;
      }
    }
  } else {
    for (const key in obj) {
      const newPath = [...path, isNaN(parseInt(key)) ? key : parseInt(key)]; // キーが数値であればparseInt()で変換し、そうでなければそのまま保存します。
      if (typeof obj[key] === "string" && obj[key] === targetValue) {
        return newPath;
      }
      if (typeof obj[key] === "number" && obj[key] === targetValue) {
        return newPath;
      }
      if (typeof obj[key] === "object") {
        const result = getPath(obj[key] as any, targetValue, newPath);
        // パスが見つかった場合、そのパスを返し、探索を終了
        if (result) {
          return result;
        }
      }
    }
  }
  return null;
}

// 使用例
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
