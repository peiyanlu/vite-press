---
title: SQLite 递归查询
description: 递归查询
category: sqlite
tags:
  - sqlite
---


# {{ $frontmatter.title }}


`SQLite` 的 `with` 从句提供了一种递归语法，可以有效地对树和图等结构进行查询

| id | name | father | emperor_no |
|----|------|--------|------------|
| 1  | 曹操   |        |            |
| 2  | 曹植   | 1      |            |
| 3  | 曹丕   | 1      | 1          |
| 4  | 曹彰   | 1      |            |
| 5  | 曹冲   | 1      |            |
| 6  | 曹宇   | 1      |            |
| 7  | 曹楷   | 4      |            |
| 8  | 曹芳   | 7      | 3          |
| 9  | 曹睿   | 3      | 2          |
| 10 | 曹霖   | 3      |            |
| 11 | 曹髦   | 10     | 4          |
| 12 | 曹奂   | 6      | 5          |

如果我们要求获取曹操所有的后代里，当过皇帝的人，并且按照代际顺序输出（子代->孙代->曾孙代）。这便是一个典型的广度优先搜索（Breadth First Search），该功能可用以下 `SQL` 语句进行查询：

```shell
with recursive
    cao as (
        select * from family where name = '曹操'
        union all
        select family.* from cao join family on cao.id = family.father
    )
select * from cao where emperor_no is not null
```

`SQLite` 递归建表的核心是一条以 `union(all)` 连接的复合查询语句，其中 `union` 前面的语句构成递归搜索的起始数据，`union` 后的语句构成递归查询的生成语句（取出当前节点的所有子节点）。

如果写过基于队列来对树形结构进行广度优先搜索，那么会对 SQLite 这一语法很容易理解：

1. 在队列里产生初始数据
2. 取出队列中的元素，输出该元素
3. 将2步取出的元素，获取它的所有子节点，放入队列
4. 继续进行第2步，直到队列为空
---

```shell
select * from family where name = '曹操'
```
取出根节点，也就是曹操

```shell
select family.* from cao join family on cao.id = family.father
```
取出当前遍历节点的所有子节点

:::warning
虽然最终所有的输出结果都会到表cao里，但在生成语句里，cao指代的只是当前的遍历节点，它在生成语句里，只有一行数据
:::

```shell
select * from cao where emperor_no is not null
```
结果如下：

| id | name | father | emperor_no |
|----|------|--------|------------|
| 3  | 曹丕   | 1      | 1          |
| 9  | 曹睿   | 3      | 2          |
| 12 | 曹奂   | 6      | 5          |
| 11 | 曹髦   | 10     | 4          |
| 8  | 曹芳   | 7      | 3          |
