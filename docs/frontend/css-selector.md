# CSS 选择器

## :nth-child 选择器

1、选择列表中的偶数标签
```css
:nth-child(2n)
```
![img.png](img/css/nth-child-img.png)

2、选择列表中的奇数标签 
```css
:nth-child(2n-1)
```
![img_1.png](img/css/nth-child-img_1.png)

3、选择从第6个开始的，直到最后
```css
:nth-child(n+6)
```
![img_2.png](img/css/nth-child-img_2.png)

4、选择第1个到第6个 
```css
:nth-child(-n+6)
```
![img_3.png](img/css/nth-child-img_3.png)

5、选择第6个到第9个
```css
:nth-child(n+6):nth-child(-n+9)
```
![img_4.png](img/css/nth-child-img_4.png)
