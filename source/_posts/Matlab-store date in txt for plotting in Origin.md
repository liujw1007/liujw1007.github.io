---

title: Matlab-store date in txt for plotting in Origin
date: 2018-10-26
tags:

- Matlab
---

>**利用Matlab保存数据为TXT文件**
<!--more-->
When we wrote code in Matlab, we perferred to plot figures directly. However, the figures produced by such way are disposable and  unable to correct. So I`d like to store the data in txt and then handle them by Origin (a kind of powerful draw tool). What matters is that the data storage format is different in Origin, where we should ensure that the position of each point $(x,y)$ has been contained in txt. Use the code below:
```bash
function liujw_save_txt( x,y,z, strname )
    xmax=size(x);
    ymax=size(y);
    m=1;
    for i=1:1:xmax(2)
        for j=1:1:ymax(2)
            ztemp(m)=z(i,j);
            xtemp(m)=x(i);
            ytemp(m)=y(j);
            m=m+1;
        end
    end
    data=[xtemp' ytemp' ztemp'];
    mkdir('txt_res/');
    save(['txt_res/',strname,'.txt'], 'data','-ascii')
end
```
The above code will creat a new folder containing the txt file we need under the current folder directly。