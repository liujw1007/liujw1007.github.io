---
title: Python编程问题整理
date: 2019-06-11 14:07:05
tags:
- Python
visible: true
---
>**整理在学习Python中遇到的问题**
<!--more-->
# 使用Python进行公式编程时遇到的一个问题

**调用`sympy`库中的`legendre`函数时出错**

在最近的学习中需要用到角函数$\tau\_{mn}$以及$\pi\_{mn}$，其中，在根据递推公式计算$\tau\_{mn}(m=0)$时就要用到`legendre`函数<sup>[1,2]</sup>，在网上找了一些资料发现`sympy`库可以实现这个要求。但是在实际计算过程中并不完美，在$n$很大时会出现偏差，因此重新编写了`legendre`函数如下：

```python
#该函数计算n阶勒让德多项式的值
def liujw_legendre(n,x):
    if n == 0:
        ans = 1
    elif n == 1:
        ans = x
    else:
        ans_temp1 = 1
        ans_temp2 = x
        for ii in range(2,n+1):
            ans = ((2*ii-1)*x*ans_temp2-(ii-1)*ans_temp1)/ii
            ans_temp1 = ans_temp2
            ans_temp2 = ans
    return ans
```
对应的，角函数$\tau\_{mn}$和$\pi\_{mn}$的Python代码为：
```python
from math import *
import numpy as np
def PI_mn( m,n,x ):
    if abs(m)>n:
        pi_fun = 0
    else:
        if m == 0:
            pi_fun = 0
        else:
            if m>0:
                PI_m = np.zeros(n-1+3)#3的作用是使得数组的维度大于要求的维度,防止数组维度报错
                PI_m[0] = 0
                temp = 1
                for a in range(1,2*m,2):
                    temp = temp*a
                PI_m[1] = temp*(sin(x))**(m-1)
                i = 1
                for nn in range(m,n+1):
                    PI_m[i+1] = (2*nn+1)/(nn+1-m)*cos(x)*PI_m[i]-(nn+m)/(nn+1-m)*PI_m[i-1]
                    i += 1
                pi_fun = m*PI_m[i-1]
            else:
                m = -m
                PI_m = np.zeros(n-1+3)
                PI_m[0] = 0
                temp = 1
                for a in range(1,2*m,2):
                    temp = temp*a
                PI_m[1] = temp*(sin(x))**(m-1)
                i = 1
                for nn in range(m,n+1):
                    PI_m[i+1] = (2*nn+1)/(nn+1-m)*cos(x)*PI_m[i]-(nn+m)/(nn+1-m)*PI_m[i-1]
                    i += 1
                pi_fun = -m*(-1)**m*factorial(n-m)/factorial(n+m)*PI_m[i-1]
    return pi_fun

def Tou_mn( m,n,x ):
    if m == 0:
        dp = np.zeros(n-1+3)
        dp[0] = 0
        i = 1
        for nn in range(1,n+1,1):
            temp = liujw_legendre(nn-1,cos(x))
            dp[i] = nn*temp+cos(x)*dp[i-1]
            i += 1
        tou_fun = -sin(x)*dp[i-1]
    else:
        tou_fun=n*cos(x)*PI_mn(m,n,x)/m-(n+m)*PI_mn(m,n-1,x)/m
    return tou_fun
```
------------
**参考：**
>[1] [Lock JA. Improved Gaussian beam-scattering algorithm. Applied optics. 1995 Jan 20;34(3):559-70.](https://www.osapublishing.org/abstract.cfm?uri=ao-34-3-559)
[2] [Lock JA. Contribution of high-order rainbows to the scattering of a Gaussian laser beam by a spherical particle. JOSA A. 1993 Apr 1;10(4):693-706.](https://www.osapublishing.org/abstract.cfm?uri=josaa-10-4-693)

