---
title: 圆柱矢量波函数的推导
date: 2020-05-28 14:07:05
tags:
- Mathematics
visible: true
---
>**点击查看**
<!--more-->

# 圆柱矢量波函数的推导

首先从矢量波函数说起，通过在空间构造一组三维相互正交矢量$\mathbf{l},\mathbf{m},\mathbf{n}$，可以用来表示空间中任意矢量，假设生成函数为$\psi$，领示矢量为$\vec a$，则它们满足如下关系：
$$
\mathbf{l}=\nabla\psi
\tag{1}
$$

$$
\mathbf{m}=\nabla\times(\vec a \psi)
\tag{2}
$$

$$
\mathbf{n}=\frac{1}{k}\nabla\times \mathbf{m}
\tag{3}
$$

圆柱矢量波函数通常表示为$\mathbf{l}_{m\lambda}^{(1)},\mathbf{m}_{m\lambda}^{(1)}, \mathbf{n}_{m\lambda}^{(1)}$。其中，上标$(1)$表示第一类贝塞尔函数$J_{m}(\lambda r)$，通常在介质内部需要用到第三类贝塞尔函数（由于内部场存在奇点）。对应的，球矢量波函数表示为$\mathbf{L}_{mn}^{(1)}, \mathbf{M}_{mn}^{(1)},\mathbf{N}_{mn}^{(1)}$。

通过在圆柱坐标系下求解标量波动方程$\nabla ^2 \psi + k^2 \psi = 0$，得到$\psi$的本征解为:
$$
\psi = J_{m}(\lambda r)\exp(im \phi)\exp(ihz)
\tag{4}
$$
其中，$\lambda = k\sin(\alpha_0),h= k\cos(\alpha_0)$。令领示矢量$\vec a = \hat{z}$，将公式$(4)$带入$(1),(2),(3)$可得：
$$
\begin{aligned}
\mathbf{l}&=\nabla\psi\\
&=[\frac{\partial}{\partial r}J_m(\lambda r)\hat{r}+imJ_m(\lambda r)\hat{\phi}+ihJ_m(\lambda r)\hat{z}]e^{im \phi}e^{ihz}
\end{aligned}
\tag{4.1}
$$
因此，有：

$$
\begin{aligned}
\mathbf{m}&=\nabla\times(\vec a \psi)\\
&=\frac{1}{r}
\left\vert
\begin{matrix}
\hat{r}&r\hat{\phi}&\hat{z}\\
\frac{\partial}{\partial r}&\frac{\partial}{\partial \phi}&\frac{\partial}{\partial z}\\
\psi_{r}&r\psi_{\phi}&\psi_{z}
\end{matrix}
\right\vert\\
&=\frac{1}{r}
\left\vert
\begin{matrix}
\hat{r}&r\hat{\phi}&\hat{z}\\
\frac{\partial}{\partial r}&\frac{\partial}{\partial \phi}&\frac{\partial}{\partial z}\\
0&0&J_{m}(\lambda r)e^{im \phi}e^{ihz}
\end{matrix}
\right\vert\\
&=[\frac{im}{r}J_m(\lambda r)\hat{r}-\frac{\partial}{\partial r}J_m(\lambda r)\hat{\phi}]e^{im \phi}e^{ihz}
\end{aligned}
\tag{5}
$$
进一步，有：


$$
\begin{aligned}
\mathbf{n}&=\frac{1}{k}\nabla\times\mathbf{m}\\
&=\frac{1}{k}\cdot\frac{1}{r}
\left\vert
\begin{matrix}
\hat{r}&r\hat{\phi}&\hat{z}\\
\frac{\partial}{\partial r}&\frac{\partial}{\partial \phi}&\frac{\partial}{\partial z}\\
\mathbf{m}_{r}&r\mathbf{m}_{\phi}&\mathbf{m}_{z}
\end{matrix}
\right\vert\\
&=\frac{1}{k}\cdot\frac{1}{r}
\left\vert
\begin{matrix}
\hat{r}&r\hat{\phi}&\hat{z}\\
\frac{\partial}{\partial r}&\frac{\partial}{\partial \phi}&\frac{\partial}{\partial z}\\
\frac{im}{r}J_m(\lambda r)e^{im \phi}e^{ihz}&-r\frac{\partial}{\partial r}J_m(\lambda r)e^{im \phi}e^{ihz}&0
\end{matrix}
\right\vert\\
&=[\frac{ih}{k}\frac{\partial}{\partial r}J_m(\lambda r)\hat{r}-\frac{hm}{kr}J_m(\lambda r)\hat{\phi}]e^{im \phi}e^{ihz}\\&\quad+\frac{1}{k}[\textcolor{red}{-\frac{1}{r}\frac{\partial}{\partial r}J_m(\lambda r)-\frac{\partial^2}{\partial r^2}J_m(\lambda r)+\frac{m^2}{r^2}J_m(\lambda r)}]e^{im \phi}e^{ihz}\hat{z}
\end{aligned}
\tag{6}
$$
根据贝塞尔方程的表达式：

$$
(\lambda r)^2\frac{\partial^2}{\partial (\lambda r)^2}J_m(\lambda r)+\lambda r\frac{\partial}{\partial (\lambda r)}J_m(\lambda r)+[(\lambda r)^2-m^2]J_{m}(\lambda r)=0
\tag{7}
$$
可得：

$$
\textcolor{blue}{-\frac{1}{r}\frac{\partial}{\partial r}J_m(\lambda r)-\frac{\partial^2}{\partial r^2}J_m(\lambda r)+\frac{m^2}{r^2}J_m(\lambda r)=\lambda^2J_m(\lambda r)
\tag{8}}
$$
因此，公式$(6)$可化简为：

$$
\mathbf{n}=[\frac{ih}{k}\frac{\partial}{\partial r}J_m(\lambda r)\hat{r}-\frac{hm}{kr}J_m(\lambda r)\hat{\phi}+\frac{\lambda^2}{k}J_m(\lambda r)\hat{z}]e^{im \phi}e^{ihz}
\tag{9}
$$
整理得：
$$
\mathbf{l}_{m\lambda}^{(1)}=[\frac{\partial}{\partial r}J_m(\lambda r)\hat{r}+imJ_m(\lambda r)\hat{\phi}+ihJ_m(\lambda r)\hat{z}]e^{im \phi}e^{ihz}\\
\mathbf{m}_{m\lambda}^{(1)}=[\frac{im}{r}J_m(\lambda r)\hat{r}-\frac{\partial}{\partial r}J_m(\lambda r)\hat{\phi}]e^{im \phi}e^{ihz}\\
\mathbf{n}_{m\lambda}^{(1)}=[\frac{ih}{k}\frac{\partial}{\partial r}J_m(\lambda r)\hat{r}-\frac{hm}{kr}J_m(\lambda r)\hat{\phi}+\frac{\lambda^2}{k}J_m(\lambda r)\hat{z}]e^{im \phi}e^{ihz}
$$

------

以下为新增内容：
$$
\mathbf{l}_{m \lambda} \cdot \mathbf{l}_{m \lambda}^{\ast} = [\frac{\partial}{\partial r}J_m(\lambda r)]^2-(m^2+h^2)J_m^2(\lambda r)
$$

$$
\mathbf{m}_{m \lambda} \cdot \mathbf{m}_{m \lambda}^{\ast} =-\frac{m^2}{r^2} J_m^2(\lambda r)+[\frac{\partial}{\partial r}J_m(\lambda r)]^2
$$

$$
\begin{aligned}
\mathbf{n}_{m \lambda} \cdot \mathbf{n}_{m \lambda}^{\ast} &= -\frac{h^2}{k^2}[\frac{\partial}{\partial r}J_m(\lambda r)]^2+\frac{h^2 m^2}{k^2 r^2} J_m^2(\lambda r )+\frac{\lambda^4}{k^2}J_m^2(\lambda r )\\
&=\frac{h^2}{k^2}\left\{-[\frac{\partial}{\partial r}J_m(\lambda r)]^2+\frac{m^2}{r^2} J_m^2(\lambda r )\right\}+\frac{\lambda^4}{k^2}J_m^2(\lambda r )
\end{aligned}
$$

根据贝塞尔函数的递推公式：
$$
\begin{aligned}
x\frac{\partial}{\partial x}J_m(x)+mJ_m(x)&=xJ_{m-1}(x)\\
x\frac{\partial}{\partial x}J_m(x)-mJ_m(x)&=-xJ_{m+1}(x)\\
x^2[\frac{\partial}{\partial x}J_m(x)]^2-m^2J_m^2(x)&=-x^2J_{m-1}(x)J_{m+1}(x)
\end{aligned}
$$
有：
$$
\mathbf{m}_{m \lambda} \cdot \mathbf{m}_{m \lambda}^{\ast} =-\lambda^2J_{m-1}(\lambda r)J_{m+1}(\lambda r)
$$

$$
\mathbf{n}_{m \lambda} \cdot \mathbf{n}_{m \lambda}^{\ast} = \frac{h^2}{k^2}\lambda^2J_{m-1}(\lambda r)J_{m+1}(\lambda r)\}+\frac{\lambda^4}{k^2}J_m^2(\lambda r )
$$









