---

title: Matlab保存图片的方法

date: 2018-10-24 22:02:08

tags:

- Matlab
password: 
abstract: 这是一篇加密文档~
message: 输入密码查看
---

>**一种高效的图片保存方法**
<!--more-->
在用`Matlab`编程的时候，通常会存在保存图片不符合要求的情况。比如分辨率问题，所见不是所得。事实上，用代码完全可以代替`Matlab`自带的画图软件直接生成自己要的图片。利用下面的代码：
```bash
function liujw_save_figure( str_name )
  set(gcf,'PaperPositionMode','auto')
  mkdir(['fig_res/',str_name]);
  saveas(gcf,['fig_res/',str_name,'/',str_name,'.fig'],'fig');
  saveas(gcf,['fig_res/',str_name,'/',str_name,'.eps'],'epsc');
  print(['fig_res/',str_name,'/',str_name,'.tif'],'-dtiff','-r300')
end
```
上述代码会在工作目录下自动生成包含三个图片格式的图片并分别存放在各自子文件夹里。