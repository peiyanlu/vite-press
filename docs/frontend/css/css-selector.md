<script setup>
import NthChild from './components/NthChild.vue'
</script>

# CSS 选择器

## :nth-child 选择器

1、选择列表中的偶数标签

```css
:nth-child(2n)
```
<NthChild class='aa'></NthChild>

2、选择列表中的奇数标签

```css
:nth-child(2n-1)
```

<NthChild class='bb'></NthChild>

3、选择从第6个开始的，直到最后

```css
:nth-child(n+6)
```

<NthChild class='cc'></NthChild>

4、选择第1个到第6个

```css
:nth-child(-n+6)
```

<NthChild class='dd'></NthChild>

5、选择第6个到第9个

```css
:nth-child(n+6):nth-child(-n+9)
```

<NthChild class='ee'></NthChild>
