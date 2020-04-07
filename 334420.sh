#!/bin/bash

#fonts color
yellow(){
    echo -e "\033[33m\033[01m$1\033[0m"
}
green(){
    echo -e "\033[32m\033[01m$1\033[0m"
}
red(){
    echo -e "\033[31m\033[01m$1\033[0m"
}

#copy from 秋水逸冰 ss scripts

function install_shadowsocks.sh(){
    wget --no-check-certificate -O shadowsocks-all.sh https://cdn.jsdelivr.net/gh/teddysun/shadowsocks_install/shadowsocks-all.sh && chmod +x shadowsocks-all.sh && bash shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
}

function install_V2ray.sh(){
    bash <(curl -s -L https://git.io/v2ray.sh)
}

function install_socat.sh(){
    wget https://www.moerats.com/usr/shell/socat.sh && bash socat.sh
}

function remove_442(){
    bash shadowsocks-all.sh uninstall
}

function bbr_boost_sh(){
    bash <(curl -L -s -k "https://github.com/chiakge/Linux-NetSpeed/raw/master/tcp.sh")
}

function speedtest.py(){
    wget https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
    chmod +x /root/speedtest.py
    ./speedtest.py
}

start_menu(){
    clear
    green " ===================================="
    green " 上网常用一键脚本      "
    green " 系统：centos7+/debian9+/ubuntu16.04+"
    green " 网站：https://www.334420.club"
    green " 时间旅行者                "
    green " ===================================="
    echo
    red " ===================================="
    yellow " 1. 安装442"
    red " ===================================="
    yellow " 2. 安装v2"
    red " ===================================="
    yellow " 3. socat中转"
    red " ===================================="
    yellow " 4. 安装BBRPLUS"
    red " ===================================="
    yellow " 5. 服务器测速"
    red " ===================================="
    yellow " 0. 退出脚本"
    red " ===================================="
    echo
    read -p "请输入数字:" num
    case "$num" in
    1)
    install_shadowsocks.sh
    ;;
    2)
    install_V2ray.sh
    ;;
    3)
    install_socat.sh
    ;;
    4)
    bbr_boost_sh 
    ;;
    5)
    speedtest.py
    ;;
    0)
    exit 1
    ;;
    *)
    clear
    red "请输入正确数字"
    sleep 1s
    start_menu
    ;;
    esac
}

start_menu
