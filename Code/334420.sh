#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#fonts color
Font_color_suffix(){
    echo -e "\033[33m\033[01m$1\033[0m"
}
Green_font_prefix(){
    echo -e "\033[32m\033[01m$1\033[0m"
}
red(){
    echo -e "\033[31m\033[01m$1\033[0m"
}

#=================================================
#	System Required: CentOS/Debian/Ubuntu
#	Description: iptables Port forwarding
#	Version: 1.1.1
#	Author: Toyo
#	Blog: https://doub.io/wlzy-20/
#=================================================
sh_ver="1.1.1"

# 科学上网
Scientific_Internet(){
	echo && echo -e "  你要做什么？
	
  ${Green_font_prefix}1.${Font_color_suffix} 安装442
  ${Green_font_prefix}2.${Font_color_suffix} 安装v2
  ——说明：SSR默认只输出错误日志，此项可切换为输出详细的访问日志" && echo
	read -e -p "(默认: 取消):" other_num
	[[ -z "${other_num}" ]] && echo "已取消..." && exit 1
	if [[ ${other_num} == "1" ]]; then
		install_shadowsocks
	elif [[ ${other_num} == "2" ]]; then
		install_V2ray
	elif [[ ${other_num} == "3" ]]; then
		Configure_LotServer
	elif [[ ${other_num} == "4" ]]; then
		BanBTPTSPAM
	elif [[ ${other_num} == "5" ]]; then
		UnBanBTPTSPAM
	elif [[ ${other_num} == "6" ]]; then
		Set_config_connect_verbose_info
	else
		echo -e "${Error} 请输入正确的数字 [1-6]" && exit 1
	fi
}
# 安装shadowsocks
install_shadowsocks(){
	wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh && chmod +x shadowsocks-all.sh && bash shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
}
# 安装V2RAY
install_V2ray(){
	bash <(curl -s -L https://git.io/v2ray.sh)
}

# VPS优化
optimization(){
	echo && echo -e "  你要做什么？
	
  ${Green_font_prefix}1.${Font_color_suffix} 安装BBR PLUS+
  ${Green_font_prefix}2.${Font_color_suffix} 安装v2
  ————————————
  SSR+V2RAY" && echo
	read -e -p "(默认: 取消):" other_num
	[[ -z "${other_num}" ]] && echo "已取消..." && exit 1
	if [[ ${other_num} == "1" ]]; then
		install_BBR_PLUS
	elif [[ ${other_num} == "2" ]]; then
		install_V2ray
	elif [[ ${other_num} == "3" ]]; then
		Configure_LotServer
	elif [[ ${other_num} == "4" ]]; then
		BanBTPTSPAM
	elif [[ ${other_num} == "5" ]]; then
		UnBanBTPTSPAM
	elif [[ ${other_num} == "6" ]]; then
		Set_config_connect_verbose_info
	else
		echo -e "${Error} 请输入正确的数字 [1-6]" && exit 1
	fi
}
# 安装BBR PLUS+
install_BBR_PLUS(){
	bash <(curl -L -s -k "https://github.com/chiakge/Linux-NetSpeed/raw/master/tcp.sh")
}

# 工具箱
Toolbox(){
	echo && echo -e "  你要做什么？
	
  ${Green_font_prefix}1.${Font_color_suffix} 流量中转socat
  ${Green_font_prefix}2.${Font_color_suffix} 隧道中转socat
  ${Green_font_prefix}3.${Font_color_suffix} cloudflare-ddns
  ${Green_font_prefix}4.${Font_color_suffix} 阿里DDNS
  ${Green_font_prefix}5.${Font_color_suffix} 网速测试
  ————————————
  —— AliDDNS 2.0：安装必需组件
      For CentOS：yum install -y wget curl cronie
      For Debian 8+：apt install -y wget curl cron
      For Ubuntu/Debian 7：apt-get install -y wget curl cron" && echo
	read -e -p "(默认: 取消):" other_num
	[[ -z "${other_num}" ]] && echo "已取消..." && exit 1
	if [[ ${other_num} == "1" ]]; then
		install_socat
	elif [[ ${other_num} == "2" ]]; then
		VNET­Tunnel+Websocket
	elif [[ ${other_num} == "3" ]]; then
		install_cloudflare-ddns
	elif [[ ${other_num} == "4" ]]; then
		install_AliDDNS2.0
	elif [[ ${other_num} == "5" ]]; then
		Speestest
	elif [[ ${other_num} == "6" ]]; then
		UnBanBTPTSPAM
	elif [[ ${other_num} == "7" ]]; then
		Set_config_connect_verbose_info
	else
		echo -e "${Error} 请输入正确的数字 [1-6]" && exit 1
	fi
}
# 流量中转
install_socat(){
	wget https://www.moerats.com/usr/shell/socat.sh && bash socat.sh
}
# cloudflare-ddns
install_cloudflare-ddns(){
	wget https://www.moerats.com/usr/shell/socat.sh && bash socat.sh
}
# AliDDNS2.0
install_AliDDNS2.0(){
	wget -O /usr/sbin/AliDDNS-v2.0.sh https://ilemonrain.com/download/shell/AliDDNSv2.sh
	chmod +x /usr/sbin/AliDDNS-v2.0.sh
	/usr/sbin/AliDDNS-v2.0.sh
}
# Speestest
Speestest(){
	wget https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
     chmod +x /root/speedtest.py
     ./speedtest.py
}

# 隧道
VNET­Tunnel+Websocket(){
	echo && echo -e "  你要做什么？
	
 ${Green_font_prefix}1.${Font_color_suffix} 下载VNET­Tunnel
 ————————————
 ${Green_font_prefix}2.${Font_color_suffix} 启动 服务端
 ${Green_font_prefix}3.${Font_color_suffix} 启动 转发端
 ————————————
  —— 详细使用教程请访问：http://334420.club/VNet-Tunnel.html" && echo
	read -e -p "(默认: 取消):" other_num
	[[ -z "${other_num}" ]] && echo "已取消..." && exit 1
	if [[ ${other_num} == "1" ]]; then
		VNET­Tunnel
	elif [[ ${other_num} == "2" ]]; then
		Start_server
	elif [[ ${other_num} == "3" ]]; then
		Stop_client
	else
		echo -e "${Error} 请输入正确的数字 [1-6]" && exit 1
	fi
}
# 下载VNET­Tunnel
VNET­Tunnel(){
	mkdir VNet
     cd VNet
	wget https://cdn.jsdelivr.net/gh/MaleiSiyin/SakuraTv-CDN/Code/VNet/VNet-Tunnel.zip
	unzip VNet-Tunnel.zip
     chmod -R +x ./*
}
Start_server(){
	nohup ./server >> /dev/null 2>&1 &
}
Stop_client(){
	nohup ./client >> /dev/null 2>&1 &
}

# 脚本升级
Update_Shell(){
	sh_new_ver=$(wget https://cdn.jsdelivr.net/gh/MaleiSiyin/SakuraTv-CDN/334420.sh|grep 'sh_ver="'|awk -F "=" '{print $NF}'|sed 's/\"//g'|head -1)
	[[ -z ${sh_new_ver} ]] && echo -e "${Error} 无法链接到 Github !" && exit 0
	wget https://cdn.jsdelivr.net/gh/MaleiSiyin/SakuraTv-CDN/334420.sh && chmod +x 334420.sh
	echo -e "脚本已更新为最新版本[ ${sh_new_ver} ] !(注意：因为更新方式为直接覆盖当前运行的脚本，所以可能下面会提示一些报错，无视即可)" && exit 0
}
echo && echo -e " 科学常用一键脚本 ${Red_font_prefix}[v${sh_ver}]${Font_color_suffix}
  -- 时间旅行者 | https://www.334420.club --
  
 ${Green_font_prefix}1.${Font_color_suffix} 科学上网
 ${Green_font_prefix}2.${Font_color_suffix} VPS优化
 ${Green_font_prefix}6.${Font_color_suffix} 工具箱
 ${Green_font_prefix}7.${Font_color_suffix} 升级脚本
 ————————————
 琪花瑶草" && echo
read -e -p " 请输入数字 [1-4]:" num
case "$num" in
	1)
	Scientific_Internet
	;;
     2)
	optimization
	;;
     6)
	Toolbox
	;;
	7)
	Update_Shell
	;;
	*)
	echo "请输入正确数字 [0-5]"
	;;
esac
