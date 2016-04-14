(function(){
    //定义类
    this.define = this._define = function (s) {
        return (typeof  s != 'undefined' && typeof  this[s] == 'undefined') ? this[s] = {} : (this[s] || {});
    };
    this.base_environment=(function(){
        var href=location.host.toLowerCase();
        if(href.indexOf('angelcrunch') != -1){
            return 'online'
        }
        else if(href.indexOf('ac-test') != -1){
            return 'test'
        }
        else{
            return 'development'
        }
    })();
    this.base_mobile='http://mobile.angelcrunch.com/';

    if(base_environment!='online'){
        //this.base_mobile='http://mobile.ac-test.com/';
    }


    this.base_protocol='http://';
    this.base_host='angelcrunch.com/';
    this.base_home=this.base_protocol+this.base_host;
    this.base_ua=navigator.userAgent.toLowerCase();
    this.api={
        login:this.base_mobile+'v2/home/login',
        log:'http://api.angelcrunch.com/v1/log/m',
        user_info: this.base_mobile + 'v4/home/profile',
        host_id:this.base_mobile+'v3/host_id',
        com_details:this.base_mobile+'v2/startup/m_detail',
        com_finace_info:this.base_mobile+'v2/startup/m_finance',
        com_basic_info:this.base_mobile+'v2/startup/base_info',
        com_bp:this.base_mobile+'v2/startup/pb',
        com_follow:this.base_mobile+'v2/follow',
        com_unfollow:this.base_mobile+'v2/unfollow',
        com_vc_standard:this.base_mobile+'v3/startup/vc',
        com_vc_info:this.base_mobile+'v3/startup/vc_info',
        com_vc_query:this.base_mobile+'v3/startup/vc_query',
        industry_list:this.base_mobile+'v4/settings/business_list'
    };

    this.base_config={
        //缓存时间
        cachetime:7*24*60*60*1000,
        //账户信息保存字段名
        account_save_key:'account_info',
        last_log_time_key:'last_log_time',
        search_com_history_key:'com_search_history',
        client_version_key:'client_version'
    };
    this.base_status={
        support_touch:typeof document.ontouchstart!='undefined',
        //微信嵌入
        iswechat: base_ua.indexOf("micromessenger") != -1,
        //Android
        isandroid:base_ua.indexOf("android") != -1,
        //Apple
        isios: !!base_ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
        //APP嵌入
        isapp:/angelcrunch/.test(navigator.userAgent.toLowerCase())
        /*isandorid: !!base_ua.indexOf("android") != -1 ? 1 : 0,

        isiphone: !!base_ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1,
        isipad: !!base_ua.indexOf('ipad') > -1,
        */
    };
    this.base_regex = function(){
        return {
                phone: /^\d{11}$/,
                strict_validation_phone: /^(1(([35][0-9])|(47)|[8][0126789]))\d{8}$/,
                mail: /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/,
                qq: /^\d{5,10}$/,
                chinese_Unicode: /^[\u2E80-\u9FFF]+$/,
                chinese_Name: /^[\u2E80-\u9FFF]{2,5}$/
        };
    };

    //localStorage存储管理
    this.base_local_data={

        savedata:function(key,data){

            var d=data;

            if(typeof  data == 'object'){
                d=JSON.stringify(data);
            }

            try{
                localStorage.setItem(key,d);
            }
            catch(e){

            }

        },

        getdata:function(key){
            var ret=null;
            if(localStorage.hasOwnProperty(key)){
                var data=localStorage[key];
                try{
                    ret=JSON.parse(data);
                }
                catch(e){
                    ret = null;
                }

            }
            return ret;
        },

        deldata:function(key){
            if(localStorage.hasOwnProperty(key)){
                try{
                    localStorage.removeItem(key);
                }
                catch(e){

                }
            }
        },

        cleardata:function(){
            localStorage.clear();
        }
    };
    //跨域获取数据方法
    this.base_remote_data={
        ajaxjsonp:function(url,call,data,error){
            $.ajax({
                url:url,
                type:'get',
                cache:false,
                data:data,
                dataType:'jsonp',
                jsonp:'callback',
                success:function(ret) {
                    var json={};
                    if(typeof ret=='string'){
                        try{
                            json=JSON.parse(ret);
                        }
                        catch(e){

                        }
                    }
                    if(typeof ret=='object'){
                        json=ret;
                    }
                    call(json);
                },
                error:function(e){
                    if(typeof  error == 'function'){
                        error(e);
                    }
                }
            });
        }
    };
    //单页面列表，锚点数据
    this.base_hash={

        getdata:function(key){

            var hash=location.hash,
                array=hash.split('#'),
                l=array.length,
                main,
                ml;

            if(l>0 && l==2){
                main=array[1].split('-');
                ml=main.length;
                for(var i=0;i<ml;i++){
                    var d=main[i].split(':');
                    if(d.length==2 && d[0]==key){
                        return d[1];
                    }
                }
            }
            return false;
        },
        putdata:function(data){
            var ret='#';
            if(typeof data =='object'){
                for(var i in data){
                    if(typeof data[i] !== 'object' && typeof data[i] !== 'function'){
                        ret+=i+':'+data[i]+'-';
                    }
                }
            }
            return ret.replace(/\-$/g,'');
        }
    };
}).call(this);

//获取URL传参
(function(){
    this.$_GET={};

    var url=window.location.href.split('?'),rl = url.length, a, h, l, e, f={};

    if(rl>1){
        for(var m = 1 ; m < rl;m++){
            h= url[m].split('#');
            a=h[0].split('&');
            l= a.length;
            for(var i=0;i<l;i++){
                e=a[i].split('=');
                f[e[0]]= e.length>1?e[1]:'';
            }
        }
        this.$_GET=f;
    }
    //生成url字符串参数对
    this.base_create_param=function(data){
        var s='',c='?';
        if(typeof data == 'object'){
            for(var i in data){
                s+=c+i+'='+encodeURIComponent(data[i]);
                if(c='?')c='&';
            }
            return s;
        }
    }
}).call(this);

//Cookie方法
(function(){
    var domain='.angelcrunch.com';

    if(/dubaoxing/g.test(location.href.toLocaleLowerCase())){
        domain='.dubaoxing.com';
    }
    if(/ac-test/g.test(location.href.toLocaleLowerCase())){
        domain='.ac-test.com';
    }
    this.cookie_setting={ expires: 7, path: "/", secure: false,domain:domain};

    this.get_cookie=function(key){
        return !!key? $.cookie(key): $.cookie();
    };
    this.save_cookie=function(data,val){
        if(typeof data == 'object'){
            for(var i in data){
                $.cookie(i,data[i],cookie_setting);
            }
        }
        if(typeof data == 'string' && typeof val != 'undefined'){
            $.cookie(data,val,cookie_setting);
        }
    };
    this.del_cookie=function(key){
        if(typeof key == 'object'){
            for(var i in key){
                $.removeCookie(key[i],cookie_setting);
            }
        }
        if(typeof key == 'string'){
            $.removeCookie(key,cookie_setting);
        }
    }

}).call(this);

//Hybrid 基础方法 待完善
(function(){
    var self = this,
        queue = [];

    (function(callback){
        if (window.WebViewJavascriptBridge) {
            self.support = true;
            callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function() {
                self.support = true;
                self.rsyn_task();
                callback(WebViewJavascriptBridge);
            }, false)
        }
    })(function(bridge){
        bridge.init(function(message, responseCallback) {
            if (responseCallback) {
                responseCallback('success');
            }
        });
    });

    this.support = false;

    this.rsyn_task = function(){
        var fun;
        if(queue.length > 0){
            fun = queue.pop();
            typeof fun == 'function' && fun();
            self.rsyn_task();
        }
        return true;
    };

    this.ready = function(fun){
        return queue.unshift(fun);
    };

    this.call = function(handler,data,response){
        var callback = function(ret){
            var data = {};
            try{data = JSON.parse(ret);} catch(e){}
            return typeof response == 'function' && response(data);
        };
        if(!window.WebViewJavascriptBridge){
            return self.ready(function(){
                window.WebViewJavascriptBridge.callHandler(handler,data, callback);
            });
        }
        return window.WebViewJavascriptBridge.callHandler(handler,data, callback);
    };

    this.getData = function(type,param,response){
        return self.call('getData',{
            type : type,
            param : param
        },response);
    };

    this.putData = function(type,param,response){
        return self.call('putData',{
            type : type,
            param : param
        },response);
    };

    this.gotoNative = function(type,param,response){
        return self.call('gotoNative',{
            type : type,
            param : param
        },response);
    };

    this.gotoWebview = function(url,param,response){
        var fun = typeof param == 'function' ? param : (typeof response ==  'function' ? response : function(){}),
            data = typeof  param == 'object' ? {param : param}: {param : {}};
        data.param.url = url;
        return self.call('gotoWebview',data,response);
    };

    this.doAction = function(type,param,response){
        return self.call('doAction',{
            type : type,
            param : param
        },response);
    };

}).call(define('app'));

//全局账户信息
(function(){
    //过期删除
    var now= $.now();
    this.account_key={
        id:'uid',
        token:'access_token',
        role:'defaultpart'
    };
    this.account_info={
        id:0,
        name:'',
        token:'',
        role:0,
        time:0,
        is_login:false,
        version:'1.2.1'
    };
    this.account_operate={
        logoff:function(){
            del_cookie(account_key);
            return location.reload();
        }
    };

    //登陆信息写入全局变量 放弃localstorage
    if(get_cookie(account_key.id)){
        account_info.id     = get_cookie(account_key.id) || account_info.id;
        account_info.token  = get_cookie(account_key.token) || account_info.token;
        account_info.role   = get_cookie(account_key.role) || account_info.role;
        account_info.time   = now;
    }

    //URL传参授权 针对APP内嵌
    if($_GET.hasOwnProperty('access_token') && $_GET.hasOwnProperty('uid') && $_GET.hasOwnProperty('role')){
        account_info.id     = $_GET.uid;
        account_info.token  = $_GET.access_token;
        account_info.role   = parseInt($_GET.role);
        account_info.time   = now;
        base_status.isapp=true;
        //保存用户信息
        save_cookie(account_key.id,account_info.id);
        save_cookie(account_key.token,account_info.token);
        save_cookie(account_key.role,account_info.role);
        save_cookie('isapp','yes');
    }
    //Hybrid 方式获取登录信息;
    app.getData('userInfo','',function(data){
        if(data.uid){
            account_info.id     = data.uid;
            account_info.token  = data.access_token;
            account_info.role   = data.role;
            account_info.time   = now;
        }
        //保存用户信息
        save_cookie(account_key.id,account_info.id);
        save_cookie(account_key.token,account_info.token);
        save_cookie(account_key.role,account_info.role);
        save_cookie('isapp','yes');
    });
    if(get_cookie('isapp') == 'yes'){
        base_status.isapp = true;
    }
    //登陆状态
    if(account_info.token.length>5){
        account_info.is_login=true;
    }
}).call(this);

//日志记录
(function(){
    if(base_environment != 'online')return;
    var self = this,
        start = new Date(),
        end,
        w = window,
        d = document,
        b = d.body,
        x = w.innerWidth || d.clientWidth || b.clientWidth,
        y = w.innerHeight|| d.clientHeight|| b.clientHeight,
        s = x+'*'+y;
    this.attach = {};
    this.type = 'noneset';
    this.record = function(){
        end = new Date();
        var len = (end.getTime() - start.getTime()) / 1000,
            img = new Image(),
            data = {
                uid:account_info.id,
                role:account_info.role,
                type:self.type,
                url:encodeURIComponent(location.href),
                attach:JSON.stringify(self.attach),
                dwell:0,
                load:len,
                screen:s
            };
        img.src = api.log+base_create_param(data);
    };
    w.onload = self.record;
}).call(define('log'));

//移动设备事件
(function(){
    $.fn.extend({
        touchtap:function(fn,delay){
            var x, y,s;
            if(base_status.support_touch){
                $(this).bind('touchstart',function(e){
                    x= e.originalEvent.touches[0].pageX;
                    y= e.originalEvent.touches[0].pageY;
                    s = new Date().getTime();
                });
                $(this).bind('touchend',function(e){
                    var event=e.originalEvent.changedTouches[0],move=Math.pow(event.pageX-x,2)+Math.pow(event.pageY-y,2),o = new Date().getTime(),self = $(this);
                    if(o-s<150 && move<81){
                        !delay?fn.call(self):setTimeout(function(){fn.call(self)},200);
                    }
                });
            }
            else{
                $(this).click(fn);
            }

        },
        pressenter:function(fn){
            $(this).bind('keypress',function(e){
                if(e.keyCode==13){
                    fn.call($(this));
                }
            })
        }
    });
}).call(this);

//绑定touch-link元素
(function(){
    var $ele;
    $(document).ready(function(){
        $ele=$('.touch-href');
        $ele.touchtap(function(){
            var href=$(this).data('href');
            if(href!='undefined'){
                location.href=href;
            }
        })
    });
}).call(this);

//头部选项
(function(){
    var $head=$('#header'),
        $headcontainer=$('#head-container'),
        $bk=$('.bk'),
        $option=$head.children('.options'),
        $account=$head.children('.account'),
        $container=$('.options').children('ul'),
        $current=$(),
        sta=false,
        headoption_display={
            show:function(){
                $current.children('ul').slideDown(200,function(){sta=true});
                $current.children('span').css('position','absoute');
                $bk.show(0,function(){$(this).css('opacity',0.7)});
            },
            hide:function(){
                $current.children('ul').slideUp(200,function(){sta=false});
                $bk.css('opacity',0);
                setTimeout(function(){$bk.hide();},400);
            }
        },
        display_controll=function(){
            $current=$option;
            if(!sta){
                headoption_display.show();
            }
            else{
                headoption_display.hide();
            }
        };
    this.account_center={
        default_item:{
            investor:[
                ['/account/profile','个人中心'],
                ['/startup/create','创建项目'],
                ['javascript:account_operate.logoff()','退出登录']
            ],
            entre:   [
                ['/account/profile','个人中心'],
                ['/startup/create','创建项目'],
                ['javascript:account_operate.logoff()','退出登录']
            ],
            notlogin:[
                ['/account/login?source='+encodeURIComponent(location.href),'登&nbsp;录'],
                ['/account/regist?source='+encodeURIComponent(location.href),'注&nbsp;册']
            ]
        },
        item:[],
        create_item:function(array){
            var cache='';
            for(var i in array){
                cache+="<li class=\"touch-href\" data-href=\""+array[i][0]+"\">"+array[i][1]+"</li>";
            }
            return cache;
        }
    };
    //登录后显示用户头像
    this.account_portrait={
        login:function(){
            base_remote_data.ajaxjsonp(api.user_info,function(data){
                if (data.hasOwnProperty('avatar_small')) {
                    $account.children('span').css('background', "url(" + data.avatar_small + ")");
                    base_user_info = data;
                }
            },{'uid':account_info.id,'access_token':account_info.token});
            $account.addClass('active');
        },
        notlogin:function(){
            //暂时木有不重刷 取消登录状态
        }
    };
    if(account_info.is_login){
        if(account_info.role>1){
           account_center.item=account_center.default_item.investor;
        }
        else{
           account_center.item=account_center.default_item.entre;
        }
        account_portrait.login();

    }
    else{
        account_center.item=account_center.default_item.notlogin;
        account_portrait.notlogin();
    }
    $container.append(account_center.create_item(account_center.item));
    //事件绑定
    $(document).ready(function(){
        $option.touchtap(display_controll);
        $account.touchtap(display_controll);
        $bk.touchtap(function(){if(sta)headoption_display.hide();});
    });
    //APP内嵌隐藏头部
    if(base_status.isapp){
        $head.hide();
        $headcontainer.hide();
    }
}).call(this);

//微信分享卡片
(function(){
    this.wechat_card={
        display:true,
        //异步添加
        deffer:false,
        img:'http://dn-acac.qbox.me/231937129837912.png',
        title:'',
        render:function(){
            //是否由微信打开
            if(wechat_card.title != '')document.title=wechat_card.title;
            $("body").prepend("<div class='default-hidden'><img width='310px' height='310px' src="+wechat_card.img+" /></div>");
        }
    };
    //事件
    $(document).ready(function(){if(wechat_card.display && !wechat_card.deffer && base_status.iswechat)wechat_card.render();});
}).call(this);