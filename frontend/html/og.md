---
url: /vite-press/frontend/html/og.md
description: 实现分享的链接可以预览图片、标题、描述
---

# {{ $frontmatter.title }}

`Open Graph Protocol`（[开放图谱协议](https://ogp.me/)），简称 `OG` 协议。它是 `Facebook`
公布的一种网页元信息（`Meta Information`）标记协议，属于 `Meta Tag`
（`Meta` 标签）的范畴，是一种为社交分享而生的 `Meta` 标签，用于标准化网页中元数据的使用，使得社交媒体得以以丰富的“图形”对象来表示共享的页面内容

## 基本元数据

如果要将网页转换为图形对象，需要向网页的 `＜head＞` 中放置额外的基本元数据（`＜meta＞` 标签）。每个页面所需的四个属性是：

* `og:title`：对象的标题，因为它应该出现在图形中，例如 `The Rock`。

* `og:type`：对象的类型，例如 `video.moview` 。根据指定的类型，可能还需要其他属性。

* `og:image`：一个图像 `URL`，它应该表示图形中的对象。

* `og:url`：对象的规范 `URL`，将在图中用作其永久 `ID`，例如 `https://www.imdb.com/title/tt0117500/`.

```html

<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
```

## 可选元数据

* `og:audio`：此对象附带的音频文件的 `URL`。

* `og:description`：对你的对象用一到两句话描述。

* `og:determiner`：出现在句子中宾语标题之前的单词。（`a`, `an`, `the`, `''`, `auto`）的枚举。如果选择了 `auto`
  ，则数据的使用者应在 `a` 或 `an` 之间进行选择。默认值为 `''`（空白）。

* `og:locale`：这些标记标记的语言环境。格式为 `language_TERRITORY`。默认值为 `en_US`。

* `og:locale:alternate`：此页面所在的其他区域设置的数组。

* `og:site_name`：如果您的对象是较大网站的一部分，则应显示整个网站的名称。例如 `IMDb`。

* `og:video`：此对象附带的视频文件的 `URL`。

```html

<meta property="og:audio" content="https://example.com/bond/theme.mp3" />
<meta property="og:description" content="description." />
<meta property="og:determiner" content="the" />
<meta property="og:locale" content="en_GB" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:site_name" content="IMDb" />
<meta property="og:video" content="https://example.com/bond/trailer.swf" />
```
