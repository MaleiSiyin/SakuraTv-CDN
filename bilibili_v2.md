<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<title>哔哩哔哩_v2（Bilibili_v2）</title>
		<link rel="shortcut icon" href="./bilibili/favicon.png">
		<link rel="stylesheet" href="./css/github-markdown.css">
		<style>
			body {
				box-sizing: border-box;
				min-width: 200px;
				max-width: 980px;
				margin: 0 auto;
				padding: 15px;
			}
			.markdown-body > ul{
                list-style: none;
                display: block;
                position: fixed;
                right: 20px;
                top: 20px;
                font-size: 12px;
                background-color: #fcfcfc;
                border-radius: 2px;
                border-style: solid;
                border-width: 1px;
                border-color: #d5d5d5;
                padding: 15px 20px;
            }
            @media screen and (max-width: 768px){
                .markdown-body > ul{
                    display: none;
                }
            }
		</style>
	</head>
	<body class="markdown-body">
	    <!--favicon:./bilibili/favicon.png-->
<p><a href="https://api.imjad.cn">返回首页</a> <a href="https://api.imjad.cn/bilibili.md">哔哩哔哩_v1（Bilibili_v1）</a></p>
<h1 id=哔哩哔哩v2bilibiliv2>哔哩哔哩_v2（Bilibili_v2）</h1>
<style>
    a{
        color:#333;
        text-decoration: none;
    }
    .copyright{
        font-size: 0.8em;
    }
    a img{
        width: 17px;
        height: 17px;
    }
    input[type="text"],select {
        height: 22px;
    }
    ::selection {
        color: #414141;
        background-color: rgba(0,0,0,0.2);
    }
</style>
<blockquote class="update">
本页面更新：<span id="index">读取中…</span><br>
api更新：<span id="api">读取中…</span><br>
</blockquote>
<p>问题/反馈：ad # imjad.cn<br>
调用超过 <b><span id="hit"> -- </span></b> 次<br>
过去的 5 分钟内每分钟调用大约 <b><span id="speed"> -- </span></b> 次</p>
<ul>
<li><a href="#哔哩哔哩v2bilibiliv2">哔哩哔哩_v2（Bilibili_v2）</a>
<ul>
<li><a href="#调用方法">调用方法</a></li>
<li><a href="#参数说明">参数说明</a>
<ul>
<li><a href="#视频番剧">视频/番剧</a></li>
<li><a href="#番剧源信息">番剧源信息</a></li>
<li><a href="#番剧推荐">番剧推荐</a></li>
<li><a href="#排行榜">排行榜</a>
<ul>
<li><a href="#排行榜类型">排行榜类型</a></li>
<li><a href="#排行榜内容">排行榜内容</a></li>
<li><a href="#日期限制">日期限制</a></li>
</ul></li>
<li><a href="#搜索">搜索</a>
<ul>
<li><a href="#搜索类型">搜索类型</a></li>
</ul></li>
<li><a href="#评论">评论</a></li>
<li><a href="#空间信息">空间信息</a></li>
<li><a href="#投稿信息">投稿信息</a></li>
<li><a href="#收藏列表">收藏列表</a></li>
</ul></li>
<li><a href="#测试">测试</a></li>
</ul></li>
</ul>
<h3 id=调用方法>调用方法</h3>
<p><code>GET https://api.imjad.cn/bilibili/v2/</code></p>
<h3 id=参数说明>参数说明</h3>
<p>get 指定请求类型，对应关系如下，默认为 playurl</p>
<table>
<thead>
<tr>
<th>get</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>playurl</td>
<td>视频或番剧</td>
</tr>
<tr>
<td>seasoninfo</td>
<td>番剧详情</td>
</tr>
<tr>
<td>source</td>
<td>番剧源信息</td>
</tr>
<tr>
<td>seasonrecommend</td>
<td>番剧推荐</td>
</tr>
<tr>
<td>comments</td>
<td>评论</td>
</tr>
<tr>
<td>search</td>
<td>搜索</td>
</tr>
<tr>
<td>rank</td>
<td>排行榜</td>
</tr>
<tr>
<td>typedynamic</td>
<td>分区动态</td>
</tr>
<tr>
<td>timeline</td>
<td>新番时间线</td>
</tr>
<tr>
<td>recommend</td>
<td>特别推荐</td>
</tr>
<tr>
<td>space</td>
<td>空间信息</td>
</tr>
<tr>
<td>archive</td>
<td>投稿信息</td>
</tr>
<tr>
<td>favlist</td>
<td>收藏列表</td>
</tr>
</tbody>
</table>
<h4 id=视频番剧>视频/番剧</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>aid</td>
<td><code>int</code> 视频 <code>aid</code>，即 av 号</td>
<td>无</td>
</tr>
<tr>
<td>season_id</td>
<td><code>int</code>番剧 <code>season id</code></td>
<td>无</td>
</tr>
<tr>
<td>page</td>
<td><code>int</code> 视频分页，为空时返回 view 列表</td>
<td>1</td>
</tr>
<tr>
<td>index</td>
<td><code>int</code> 番剧分集</td>
<td>1</td>
</tr>
<tr>
<td>quality</td>
<td><code>int</code> 清晰度，可用值为 1~3 不等，可在 view 列表查询到</td>
<td>2</td>
</tr>
<tr>
<td>type</td>
<td><code>string</code> 视频格式，可用值为 <code>mp4|hdmp4|flv</code> 不等，可在 view 列表查询到</td>
<td>hdmp4</td>
</tr>
<tr>
<td>raw</td>
<td><code>bool</code> 当类型为视频或番剧时，指定是否直接 302 到视频直链</td>
<td>false</td>
</tr>
<tr>
<td>action</td>
<td><code>string</code> 值为 <code>update</code> 时刷新缓存</td>
<td>无</td>
</tr>
</tbody>
</table>
<h4 id=番剧源信息>番剧源信息</h4>
<p>episode_id 番剧 <code>episode id</code>，可通过请求 seasoninfo 获取到</p>
<h4 id=番剧推荐>番剧推荐</h4>
<p>season_id 番剧 <code>season id</code></p>
<h4 id=排行榜>排行榜</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td><code>string</code> 排行榜类型</td>
<td>all</td>
</tr>
<tr>
<td>content</td>
<td><code>mix</code> 排行榜内容</td>
<td>0</td>
</tr>
<tr>
<td>duration</td>
<td><code>int</code> 日期限制</td>
<td>3</td>
</tr>
<tr>
<td>new</td>
<td><code>bool</code> 是否为近期投稿</td>
<td>true</td>
</tr>
</tbody>
</table>
<h5 id=排行榜类型>排行榜类型</h5>
<table>
<thead>
<tr>
<th>type</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>all</td>
<td>全站榜</td>
</tr>
<tr>
<td>orign</td>
<td>原创榜</td>
</tr>
<tr>
<td>rookie</td>
<td>新人榜</td>
</tr>
<tr>
<td>bangumi</td>
<td>新番榜</td>
</tr>
</tbody>
</table>
<h5 id=排行榜内容>排行榜内容</h5>
<table>
<thead>
<tr>
<th>content</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>global</td>
<td>番剧</td>
</tr>
<tr>
<td>cn</td>
<td>国产动画</td>
</tr>
<tr>
<td>0</td>
<td>全站</td>
</tr>
<tr>
<td>1</td>
<td>动画</td>
</tr>
<tr>
<td>168</td>
<td>国创相关</td>
</tr>
<tr>
<td>3</td>
<td>音乐</td>
</tr>
<tr>
<td>129</td>
<td>舞蹈</td>
</tr>
<tr>
<td>4</td>
<td>游戏</td>
</tr>
<tr>
<td>36</td>
<td>科技</td>
</tr>
<tr>
<td>160</td>
<td>生活</td>
</tr>
<tr>
<td>119</td>
<td>鬼畜</td>
</tr>
<tr>
<td>155</td>
<td>时尚</td>
</tr>
<tr>
<td>165</td>
<td>广告</td>
</tr>
<tr>
<td>5</td>
<td>娱乐</td>
</tr>
<tr>
<td>23</td>
<td>电影</td>
</tr>
<tr>
<td>11</td>
<td>电视剧</td>
</tr>
</tbody>
</table>
<h5 id=日期限制>日期限制</h5>
<table>
<thead>
<tr>
<th>duration</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>日排行</td>
</tr>
<tr>
<td>3</td>
<td>三日排行</td>
</tr>
<tr>
<td>7</td>
<td>周排行</td>
</tr>
<tr>
<td>30</td>
<td>月排行</td>
</tr>
</tbody>
</table>
<p><em>*番剧和国创仅支持 3 或 7</em></p>
<h4 id=搜索>搜索</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyword</td>
<td><code>string</code> 关键字</td>
<td>无</td>
</tr>
<tr>
<td>type</td>
<td><code>string</code> 搜索类型</td>
<td>search</td>
</tr>
<tr>
<td>page</td>
<td><code>int</code> 返回页数</td>
<td>1</td>
</tr>
<tr>
<td>pagesize</td>
<td><code>int</code> 每页数量</td>
<td>20</td>
</tr>
<tr>
<td>limit</td>
<td><code>int</code> <code>type=hot</code> 时返回数量</td>
<td>50</td>
</tr>
</tbody>
</table>
<h5 id=搜索类型>搜索类型</h5>
<table>
<thead>
<tr>
<th>type</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>search</td>
<td>搜索指定关键字</td>
</tr>
<tr>
<td>suggest</td>
<td>结果推荐</td>
</tr>
<tr>
<td>hot</td>
<td>热门搜索 <em>不需要关键字</em></td>
</tr>
</tbody>
</table>
<h4 id=评论>评论</h4>
<p>sort 指定结果排序方式，对应关系如下，默认为 0</p>
<table>
<thead>
<tr>
<th>sort</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>按发送时间倒序</td>
</tr>
<tr>
<td>1</td>
<td>按热门排序</td>
</tr>
<tr>
<td>2</td>
<td>按点赞数排序</td>
</tr>
</tbody>
</table>
<h4 id=空间信息>空间信息</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>vmid</td>
<td><code>int</code> 用户 mid</td>
<td>1</td>
</tr>
<tr>
<td>pagesize</td>
<td><code>int</code> <em>作用尚不明确</em></td>
<td>10</td>
</tr>
</tbody>
</table>
<h4 id=投稿信息>投稿信息</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>vmid</td>
<td><code>int</code> 用户 mid</td>
<td>1</td>
</tr>
<tr>
<td>page</td>
<td><code>int</code> 返回页数</td>
<td>1</td>
</tr>
<tr>
<td>pagesize</td>
<td><code>int</code> 每页数量</td>
<td>10</td>
</tr>
</tbody>
</table>
<h4 id=收藏列表>收藏列表</h4>
<table>
<thead>
<tr>
<th>参数</th>
<th>含义</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>fid</td>
<td><code>int</code> 收藏夹 fid，可在<code>空间信息</code>中查询到</td>
<td>1</td>
</tr>
<tr>
<td>vmid</td>
<td><code>int</code> 用户 mid</td>
<td>1</td>
</tr>
<tr>
<td>page</td>
<td><code>int</code> 返回页数</td>
<td>1</td>
</tr>
<tr>
<td>pagesize</td>
<td><code>int</code> 每页数量</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id=测试>测试</h3>
<div>
    <div>
        <form>
            aid:
            <input type="text" maxlength="8" name="aid" value="170001" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" style="width:125px">&nbsp;
            page:
            <input type="text" maxlength="3" name="page" value="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" style="width:32px">&nbsp;
            quality:
            <select name="quality">
                <option value="1">1</option>
                <option value="2" selected="selected">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <input type="button" value="确定" onclick="get()">
        </form>
    </div>
    <div>
        <p>
            <input type="text" name="code" style="width:90%;max-width:800px;">
        </p>
    </div>
</div>
<video id="bilibili" src="" controls="controls" autoplay="autoplay" style="max-width:100%;"></video>
<script>
    if(localStorage.getItem('lolicon') == null){
        if(confirm('你是萝莉控嘛？')){
            document.getElementsByName('aid')[0].value = '170001';
            document.title = 'きもい';
            localStorage.setItem('lolicon', true);
        }else{
            document.getElementsByName('aid')[0].value = '2920239';
            localStorage.setItem('lolicon', false);
        }
    }else if(localStorage.getItem('lolicon') == 'true'){
            document.getElementsByName('aid')[0].value = '170001';
    }else{
            document.getElementsByName('aid')[0].value = '2920239';
    }
    var i = 0;
    function get(){
        var aid = document.getElementsByName('aid')[0].value;
        var page = document.getElementsByName('page')[0].value;
        var quality = document.getElementsByName('quality')[0].value;
        if (i == 1){
            console.log("请求：https://api.imjad.cn/bilibili/v2/\n" + "参数：aid=" + aid + " page=" + page + " quality=" + quality);
        }else{
            i = 1;
        }
        Ajax(  //Ajax(type, url, data, success, failed)
            'get',
            'https://api.imjad.cn/bilibili/v2/',
            'aid='+aid+'&page='+page+'&quality='+quality,
            function(data){
                data = JSON.parse(data);
                document.getElementsByName("code")[0].value = 'https://api.imjad.cn/bilibili/v2/?aid='+aid+'&page='+page+'&quality='+quality;
                document.getElementById("bilibili").src = 'https://api.imjad.cn/bilibili/v2/?raw=true&aid='+aid+'&page='+page+'&quality='+quality;
            },
            function(error){
                console.log("读取失败");
            }
        );
    }
</script>
<!--<script type="text/javascript" src="flv.min.js"></script>-->
<script type="text/javascript" src="https://api.imjad.cn/hitokoto/?encode=js&charset=utf-8"></script>
<p id="hitokoto"><script>hitokoto()</script></p>
<p class="copyright">© <script>document.write(new Date().getFullYear())</script> journey.ad</p>
<script>
    function Ajax(type, url, data, success, failed){
        // 创建ajax对象
        var xhr = null;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }

        var type = type.toUpperCase();
        // 用于清除缓存
        var random = Math.random();

        if(typeof data == 'object'){
            var str = '';
            for(var key in data){
                str += key+'='+data[key]+'&';
            }
            data = str.replace(/&$/, '');
        }

        if(type == 'GET'){
            if(data){
                xhr.open('GET', url + '?' + data, true);
            } else {
                xhr.open('GET', url + '?t=' + random, true);
            }
            xhr.send();

        } else if(type == 'POST'){
            xhr.open('POST', url, true);
            // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);
        }

        // 处理返回数据
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    success(xhr.responseText);
                } else {
                    if(failed){
                        failed(xhr.status);
                    }
                }
            }
        }
    }

    Ajax(  //Ajax(type, url, data, success, failed)
        'get', 
        'https://api.imjad.cn/bilibili/v2/counter.php', 
        '', 
        function(data){
            data = JSON.parse(data);
            document.getElementById("index").innerHTML = data.index;
            document.getElementById("api").innerHTML = data.api;
            document.getElementById("hit").innerHTML = data.hit;
            document.getElementById("speed").innerHTML = data.speed;
        }, 
        function(error){
            var spans = document.getElementsByClassName("update")[0].getElementsByTagName("span");
            for (var i=0;i<spans.length;i++){
                spans[i].innerHTML = "读取失败";
            }
        });
</script>
	</body>
	<script src="./js/smoothscroll.js"></script>
	<script>
	    (function(){
    	    var forEach = function (array, callback, scope) {
                for (var i = 0; i < array.length; i++) {
                    callback.call(scope, i, array[i]);
                }
            };
            var anchorLinks = document.querySelectorAll("a[href^='#']");
            if (window.scrollTo) {
                forEach(anchorLinks, function(index, element) {
                    var target = document.getElementById(element.getAttribute("href").substring(1));
                    element.addEventListener("click", function(el) {
                        el.preventDefault();
                        scrollTo({"behavior": "smooth", "top": target.offsetTop}); 
                    })
                });
            }
	    })();
	</script>
</html>