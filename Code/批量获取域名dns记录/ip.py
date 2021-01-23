#!/usr/bin/env python 
# -*- coding:utf-8 -*-

from socket import gethostbyname
DOMAIN = "yuming.txt"

with open(DOMAIN,'r') as f:
     for line in f.readlines():
        try:
            host = gethostbyname(line.strip('\n'))  #域名反解析得到的IP
        except Exception as e:
            with open('error.txt','a+') as ERR:  #error.txt为没有IP绑定的域名
                ERR.write(line.strip()+ '\n')
        else:
            with open('result.xlsx','a+') as r: #  ****.txt 里面存储的是批量解析后的结果
                r.write(line.strip(' ') + '\n')   #显示有ip绑定的域名，用空格隔开
                print(line, host)
                r.write(host + ' ')
                if host != "192.168.3.2":   #筛选特定结果，具体代码实现如下
                    if host != "192.168.3.3":
                        with open('result.txt', 'a+') as f:
                        	   f.write(host + '\n') #存储筛选后的IP
                    else:
                        pass
                else:
                    pass