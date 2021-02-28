#！/bin/sh
#安装依赖软件
apt update
apt install curl
yum makecache
yum install curl

#下载配置文件
mkdir /usr/local/etc/v2ray
wget -O /usr/local/etc/v2ray https://cdn.jsdelivr.net/gh/MaleiSiyin/SakuraTv-CDN/Code/config.json

下载v2脚本并安装
curl -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
bash install-release.sh
systemctl start v2ray
systemctl enable v2ray