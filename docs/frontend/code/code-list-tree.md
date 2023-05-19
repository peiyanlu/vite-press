---
title: 列表与树
tags:
  - list
  - tree
---

# 列表与树

```ts
interface TreeNode {
  id: string;
  parentId?: string;
  children?: TreeNode[];
  [key: string]: any;
}

interface FlatNode extends TreeNode {
  ancestors: TreeNode[];
}

// 压平树结构为一个列表
function flattenTree(tree: TreeNode[], ancestors: TreeNode[] = []): FlatNode[] {
  return tree.reduce((list: FlatNode[], node: TreeNode) => {
    const nodeWithAncestors = {
      ...node,
      ancestors: [...ancestors]
    };
    const children = node.children || [];
    return list.concat(nodeWithAncestors, flattenTree(children, [...ancestors, nodeWithAncestors]));
  }, []);
}

// 回显列表为树结构
function restoreTree(list: FlatNode[], rootId?: string): TreeNode[] {
  const map = new Map<string, TreeNode>();
  list.forEach(node => {
    node.children = [];
    map.set(node.id, node);
  });
  list.forEach(node => {
    const parent = map.get(node.parentId!);
    if (parent) {
      parent.children!.push(node);
    }
  });
  return list.filter(node => !node.parentId || node.parentId === rootId) as TreeNode[];
}
```
