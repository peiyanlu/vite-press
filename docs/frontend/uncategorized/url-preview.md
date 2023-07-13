---
title: OG 协议
description: 实现分享的链接可以预览图片、标题、描述
category: uncategorized
tags:
  - uncategorized
  - url
  - OG
---

# {{ $frontmatter.title }}

`Open Graph Protocol`（[开放图谱协议](https://ogp.me/)），简称 `OG` 协议。它是 `Facebook`
公布的一种网页元信息（`Meta Information`）标记协议，属于 `Meta Tag`
（`Meta` 标签）的范畴，是一种为社交分享而生的 `Meta` 标签，用于标准化网页中元数据的使用，使得社交媒体得以以丰富的“图形”对象来表示共享的页面内容

## 基本元数据

如果要将网页转换为图形对象，需要向网页的 `＜head＞` 中放置额外的基本元数据（`＜meta＞` 标签）。每个页面所需的四个属性是：

- `og:title`：对象的标题，因为它应该出现在图形中，例如 `The Rock`。

- `og:type`：对象的类型，例如 `video.moview` 。根据指定的类型，可能还需要其他属性。

- `og:image`：一个图像 `URL`，它应该表示图形中的对象。

- `og:url`：对象的规范 `URL`，将在图中用作其永久 `ID`，例如 `https://www.imdb.com/title/tt0117500/`.

```html
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
```

## 可选元数据

- `og:audio`：此对象附带的音频文件的 `URL`。

- `og:description`：对你的对象用一到两句话描述。

- `og:determiner`：出现在句子中宾语标题之前的单词。（`a`, `an`, `the`, `''`, `auto`）的枚举。如果选择了 `auto`
  ，则数据的使用者应在 `a` 或 `an` 之间进行选择。默认值为 `''`（空白）。

- `og:locale`：这些标记标记的语言环境。格式为 `language_TERRITORY`。默认值为 `en_US`。

- `og:locale:alternate`：此页面所在的其他区域设置的数组。

- `og:site_name`：如果您的对象是较大网站的一部分，则应显示整个网站的名称。例如 `IMDb`。

- `og:video`：此对象附带的视频文件的 `URL`。

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

## 结构化属性

某些属性可以附加额外的元数据。这些元数据的指定方式与其他具有属性和内容的元数据相同，但该属性将具有额外的：。

og:image属性具有一些可选的结构化属性：

og:image:url-与og:image相同。
og:image:secure_url-如果网页需要HTTPS，则使用备用url。
og:image:type-此图像的MIME类型。
og:image:width-宽的像素数。
og:image:height-高像素数。
og:image:alt-对图像中内容的描述（不是标题）。如果页面指定了og:image，则应该指定og:image:alt。

完整图像示例：

```html
<meta property="og:image" content="https://example.com/ogp.jpg" />
<meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="300" />
<meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
```

og:video标签具有与og:image相同的标签。以下是一个示例：

```html
<meta property="og:video" content="https://example.com/movie.swf" />
<meta property="og:video:secure_url" content="https://secure.example.com/movie.swf" />
<meta property="og:video:type" content="application/x-shockwave-flash" />
<meta property="og:video:width" content="400" />
<meta property="og:video:height" content="300" />
```

og:audio标签只有前3个可用属性（因为大小对声音没有意义）：

```html
<meta property="og:audio" content="https://example.com/sound.mp3" />
<meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3" />
<meta property="og:audio:type" content="audio/mpeg" />
```


## 数组

如果一个标记可以有多个值，只需将同一 <meta> 标记的多个版本放在页面上即可。第一个标记（从上到下）在冲突期间被赋予优先权。

```html
<meta property="og:image" content="https://example.com/rock.jpg" />
<meta property="og:image" content="https://example.com/rock2.jpg" />
```

在声明结构化属性的根标记后放置它们。每当解析另一个根元素时，就会认为该结构化属性已完成，并启动另一个。例如：

```html
<meta property="og:image" content="https://example.com/rock.jpg" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" />
<meta property="og:image" content="https://example.com/rock2.jpg" />
<meta property="og:image" content="https://example.com/rock3.jpg" />
<meta property="og:image:height" content="1000" />
```

表示此页面上有3张图片，第一张图片为300x300，中间一张图片尺寸未指定，最后一张图片高1000px。


## 对象类型

为了在图形中表示对象，您需要指定其类型。这是使用og:type属性完成的：

```html
<meta property="og:type" content="website" />
```

当社区就某个类型的模式达成一致时，它就会被添加到全局类型列表中。类型系统中的所有其他对象都是CURIE形式

```html
<head prefix="my_namespace: https://example.com/ns#">
<meta property="og:type" content="my_namespace:my_type" />
```

全局类型分为垂直类型。每个竖排都有自己的名称空间。命名空间的og:type值总是以命名空间为前缀，然后是句点。这是为了减少与用户定义的名称空间类型的混淆，这些类型中总是有冒号。

Music
Namespace URI: https://ogp.me/ns/music#

og:type values:

music.song

music:duration - integer >=1 - 歌曲的长度（以秒为单位）。
music:album - music.album array - The album this song is from.
music:album:disc - integer >=1 - Which disc of the album this song is on.
music:album:track - integer >=1 - Which track this song is.
music:musician - profile array - The musician that made this song.

music.album

music:song - music.song - The song on this album.
music:song:disc - integer >=1 - The same as music:album:disc but in reverse.
music:song:track - integer >=1 - The same as music:album:track but in reverse.
music:musician - profile - The musician that made this song.
music:release_date - datetime - The date the album was released.

music.playlist

music:song - Identical to the ones on music.album
music:song:disc
music:song:track
music:creator - profile - The creator of this playlist.

music.radio_station

music:creator - profile - The creator of this station.

Video
Namespace URI: https://ogp.me/ns/video#
og:type values:

video.movie

video:actor - profile array - Actors in the movie.
video:actor:role - string - The role they played.
video:director - profile array - Directors of the movie.
video:writer - profile array - Writers of the movie.
video:duration - integer >=1 - The movie's length in seconds.
video:release_date - datetime - The date the movie was released.
video:tag - string array - Tag words associated with this movie.
video.episode

video:actor - Identical to video.movie
video:actor:role
video:director
video:writer
video:duration
video:release_date
video:tag
video:series - video.tv_show - Which series this episode belongs to.
video.tv_show

A multi-episode TV show. The metadata is identical to video.movie.

video.other

A video that doesn't belong in any other category. The metadata is identical to video.movie.

No Vertical
These are globally defined objects that just don't fit into a vertical but yet are broadly used and agreed upon.

og:type values:

article - Namespace URI: https://ogp.me/ns/article#

article:published_time - datetime - When the article was first published.
article:modified_time - datetime - When the article was last changed.
article:expiration_time - datetime - When the article is out of date after.
article:author - profile array - Writers of the article.
article:section - string - A high-level section name. E.g. Technology
article:tag - string array - Tag words associated with this article.

book - Namespace URI: https://ogp.me/ns/book#

book:author - profile array - Who wrote this book.
book:isbn - string - The ISBN
book:release_date - datetime - The date the book was released.
book:tag - string array - Tag words associated with this book.

profile - Namespace URI: https://ogp.me/ns/profile#

profile:first_name - string - A name normally given to an individual by a parent or self-chosen.
profile:last_name - string - A name inherited from a family or marriage and by which the individual is commonly known.
profile:username - string - A short unique string to identify them.
profile:gender - enum(male, female) - Their gender.

website - Namespace URI: https://ogp.me/ns/website#

No additional properties other than the basic ones. Any non-marked up webpage should be treated as og:type website.

Types
The following types are used when defining attributes in Open Graph protocol.

| 类型       | 描述                                       | 字面量                                             |
|----------|------------------------------------------|-------------------------------------------------|
| Boolean  | 布尔值表示真值或假值                               | 	true, false, 1, 0                              |
| DateTime | DateTime表示由日期（年、月、日）和可选时间组件（小时、分钟）组成的时间值 | ISO 8601                                        |
| Enum     | 由一组有界的常量字符串值（枚举成员）组成的类型。                 | 作为枚举成员的字符串值                                     |
| Float    | 64位带符号浮点数                                | 符合以下格式的所有文字：1.234/ -1.234/ 1.2e3/ -1.2e3/ 7E-10 |
| Integer  | 一个32位有符号整数。                              | 符合以下格式的所有文字：1234/ -123                          |
| String   | Unicode字符序列                              | 由不带转义符的Unicode字符组成的所有文字                         |
| URL      | 标识Internet资源的Unicode字符序列。                | 所有使用https://或https://协议的有效URL                   |
