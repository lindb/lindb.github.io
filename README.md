# 开发指南

## 目录结构

    .
    ├── docs                        # 文档源文件
    │   │
    │   ├── assets                  # 静态资源
    │   │   └── images
    │   │       └── xxx.jpg
    │   │
    │   ├── README.md               # 英文文档首页
    │   ├── docs                    # 英文文档
    │   │   ├── quick-start.md
    │   │   └── ...                 # 其他英文文档
    │   │
    │   └── zh
    │       ├── README.md           # 中文首页
    │       └── docs                # 所有中文文档
    │           ├── quick-start.md
    │           └── ...             # 其他中文文档
    │
    └── package.json

## 开始编写

1. 拉取最新内容；

    ```bash
    git clone https://github.com/lindb/lindb.github.io.git
    ```

2. 进入文件夹并执行 `npm i`；

3. 安装依赖后，运行 `npm run dev` 开始编写，保存即可看到最新结果。

## 编写内容

英文内容在 `./docs/docs/` 文件夹下，中文内容在 `./docs/zh/docs/` 文件夹下。

每一篇文章对应一个 `.md` 文件，编译后会生产对应的 `.html` 文件，`README.md` 对应文件所在根目录，具体路由如下：

| 文件的相对路径 | 页面路由地址 |
|---|---|
| `/README.md` | `/` |
| `/guide/README.md` | `/guide/` |
| `/config.md` | `/config.html` |

新建文件后，并不能立马显示，还需要在 `./docs/.vuepress/config.js` 中添加该页面的配置：

```js
// ...
function getGuide() {
  return [
    'quick-start',
    '这里加上你刚刚新建的文件名，不需要后缀',
  ]
}
```

❗️建议

不论中文、英文内容，两个文件名字保持一致，使用英文命名，单词之间用 `-` 连接。

## 发布

发布到 `dev` 分支即可，[Travis CI](https://travis-ci.org/lindb/lindb.github.io) 将会自动部署到 `master` 分支，访问 [lindb.io](https://lindb.io/) 即可。

## 图标

图标使用 [iconfont](https://www.iconfont.cn) 进行在线图标字体管理。

更新图标链接后，在 `./docs/.vuepress/config.js` 文件里，找到 `head` 字段，有如下内容：

```js
['link', { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_1331329_0jabn5zzncio.css' }]
```

只需要将 `href` 字段中的内容替换即可。

## 图片引入

图片文件统一放在 `./docs/assets/images` 文件夹下，使用「**相对路径**」进行引入，如：

```md
![图片引入](../../assets/images/test.jpg)
```

## 跳转

1. 页面跳转

    如果在某一个页面需要跳到另一个页面，通过 Markdown 语法的链接即可，如：

    ```md
    [另一个页面](./another-page.md)
    ```

    建议使用相对路径，且**最好添加 `.md` 扩展名**，编译后会改为 `.html` 扩展名。

2. anchor 跳转

    锚链接跳转只需在对应 Header 前加上 `#` 号即可，如：

    ```md
    [另一个页面](#header-1)
    ```

    如遇到中文标题，不太清楚 **`#`** 号后应该填什么，可以先加上对应 Header，然后在预览页面中，点击**对应标题前的 # 号**按钮（需要 Hover 对应 Header 才会显示），然后才看浏览器地址栏尾部 **`#`** 号及之后的内容，复制即可。

## 自定义容器

可以使用「自定义容器」来提示重要内容，非常好用，支持**自定义标题**。

**代码：**

```md
::: tip Custom Header
This is a tip
:::

::: warning Custom Header
This is a warning
:::

::: danger Custom Header
This is a dangerous warning
:::
```

## 代码

代码块需要加上指定语言，以便语法高亮提高用户体验。

````md
```javascript
// ...code
```
````

需要的话也可以高亮某一行：

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

## 建议

为了**文档统一美观**，有几点以下建议：

1. 中、英文、数字之间保留**一个空格**，括号两边不需要；

    **如**：文档使用的是 Markdown 语法（今天是 8.5）；

2. 善用 *斜体* 和**粗体**，来提示重要内容，斜体两边**需留空格**；

    **如**：文档使用的是 Markdown 语法，这是一个 *主流* 的方式。

3. 中文双引号 **`“”`**，一律使用 **`「」`** 直角符号代替；

    **如**：LinDB 中的「Lin」取自上海话的「灵」，表示「聪明」。

4. 中文文档中的括号使用**中文括号**，英文文档中使用**英文括号**（其他符号同理，包括逗号）

    **如**：LinDB（一款床新的时序数据库）。

5. `.md` 文件中，每行段落之间需要空一行，包括 Header；

    **如**：

    ```md
    <!-- Bad -->
    ## Header
    I'm a paragraph
    [i'm a picture](../images/xxx.jpg)

    <!-- Good -->
    ## Header

    I'm a paragraph
    
    [i'm a picture](../images/xxx.jpg)
    ```

6. Markdown 语法中的 List，每行需空一格；

    **如**：

    ```md
    <!-- Bad -->
    1. 这是第一条
    2. 这是第二条
    3. ...

    <!-- Good -->
    1. 这是第一条
   
    2. 这是第二条
   
    3. ...
    ```