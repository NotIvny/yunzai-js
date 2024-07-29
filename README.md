# yunzai-js
个人js仓库，合并了原来的单js仓库
***
### hideowner.js
隐藏主人，避免自动更新/欢迎语骚扰
***
### paneldata.js
将个人面板数据导入到另一个Bot上，省去了换Bot后在游戏内换展柜的麻烦，js分离自[ark-plugin](https://github.com/NotIvny/ark-plugin)
<details>
  <summary>用法</summary>
  
命令：
  
#导出面板数据 / *导出面板数据 将原神/星铁面板数据导出至云端

#导入面板数据 / *导入面板数据 将原神/星铁面板数据导入至本地

导入/导出需要有主人权限或该uid的ck，且导入/导出前需要切换到当前uid

仅适合导出个人面板，批量导出请勿使用本插件

API-rate-limit：

面板数据最大支持2MB，面板数据在云端保存10分钟，最多同时保存10条数据

其他：

插件为用户提供了导出/导出面板数据功能，但不对用户上传的面板负责，不保证用户面板真伪
</details>

***
### catchinlinecmd.js
检测并提醒群友发的inlinecmd，防止上当（该bug已修）

***
### operateredis.js
为Yunzai-Bot提供一个便捷的redis编辑插件
<details>
  <summary>用法</summary>

#查询redis数据

> 请输入key

miao:rank:*********:dmg:1305

> [{"value":"*********","score":34230.65366933681}]

#设置redis数据

> 请输入key

miao:rank:*********:dmg:1305

> 请输入数据

[{"value":"\*\*\*\*\*\*\*\*\*","score":34230.65366933681},{"value":"\*\*\*\*\*\*\*\*\*","score":34231}]


> miao:rank:*********:dmg:1305 设置成功！数据类型为zset，如设置有误可输入 #删除redis数据miao:rank:\*\*\*\*\*\*\*\*\*:dmg:1305

#删除redis数据

> 请输入key

miao:rank:*********:dmg:1305

> 删除成功

目前支持的数据类型：string和zset
</details>

***
### copyfiles.js
文件替换插件，不建议使用
