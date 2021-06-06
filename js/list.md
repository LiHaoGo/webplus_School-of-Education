<!-- 多图交替9 图片 标题 切换 -->
<div style="position:relative;overflow:hidden;width:$_width_$;height:$_height_$;">
    <div class="dtjt9_div_img">
        <img id="$_sys_window_id_$imgShow" name="$_sys_window_id_$imgShow" onclick="$_sys_window_id_$openWindow();" style="FILTER: revealTrans(duration=2,transition=20); border: 0; cursor: pointer;" src="/../$_sys_context_$/_css/tpl/default/images/loading.gif" width="$_width_$" height="$_height_$" vspace="0">
        <div id='$_sys_window_id_$imgNumber' class="number"></div>
    </div>
    <div class="dtjt9_div_text">
        <div id='$_sys_window_id_$imgTitle' class="dtjt9_div_text_title"><a href="javascript:void(0)"> </a></div>									
    </div>
</div>
<div language="JavaScript" ifrag="块" outsysclass="false" blockname="b1" inner="true" outer="true" blockheadtag="script" blockfoottag="</script>" rowheadtag="div" rowfoottag="</div>" columnheadtag="" columnfoottag="" rowsclasses="" colsclasses="" outputregular="{b:{r:0,c:0,t:0},s:{t:'i',v:'0,1'},c:6}">
    var $_sys_window_id_$imgJsons = [
    <div ifrag="行" cyclebegin="true" cycleend="true" inner="true" outer="false" cyclecount="6" headfragmentneedoutput="true">
        <div ifrag="条目" inner="true" outer="false">
            {
            "src" : "<div ifrag='字段' type='原图' inner='true' outer='false' show='true' showtype='url'><span ifrag='字段内容'></span></div>",
            "title" : "<div ifrag='字段' type='标题' inner='true' outer='false' show='true'><span ifrag='字段内容'></span></div>",
            "url" : "<div ifrag='链接' type='文章链接' inner='true' outer='false' show='true' showtype='url'><span ifrag='字段内容'></span></div>"
            },
        </div>
    </div>
    <div ifrag="行" cyclebegin="true" at="end,end" cycleend="false" inner="true" outer="false" cyclecount="1">
        <div ifrag="条目" inner="true" outer="false">
            {
            "src" : "<div ifrag='字段' type='原图' inner='true' outer='false' show='true' showtype='url'><span ifrag='字段内容'></span></div>",
            "title" : "<div ifrag='字段' type='标题' inner='true' outer='false' show='true'><span ifrag='字段内容'></span></div>",
            "url" : "<div ifrag='链接' type='文章链接' inner='true' outer='false' show='true' showtype='url'><span ifrag='字段内容'></span></div>"
            }];
        </div>
    </div>
</div>
<script language="JavaScript">
            var $_sys_window_id_$imgUrl = new Array();
            var $_sys_window_id_$imgLink = new Array();
            var $_sys_window_id_$imgTitle = new Array();
            var $_sys_window_id_$count = 0;
            var $_sys_window_id_$running = false;
            var $_sys_window_id_$index = 0;
            var $_sys_window_id_$nextAdTimer;
            var $_sys_window_id_$k = 0;
            function $_sys_window_id_$nextAd(num) {
                if (num >= 0 && num <= $_sys_window_id_$count - 1) {
                    $_sys_window_id_$index = num;
                    clearTimeout($_sys_window_id_$nextAdTimer);
                } else {
                    num = $_sys_window_id_$index;
                }
                if ($_sys_window_id_$index > $_sys_window_id_$count - 1) {
                    $_sys_window_id_$index = 0;
                }
                if (!$_sys_window_id_$running) {
                    $_sys_window_id_$running = true;

                } else if (document.all) {
                    $_sys_window_id_$imgShow.filters.revealTrans.Transition = 50;
                    $_sys_window_id_$imgShow.filters.revealTrans.apply();
                    $_sys_window_id_$imgShow.filters.revealTrans.play();
                }
                document.getElementById('$_sys_window_id_$imgShow').src = $_sys_window_id_$imgUrl[$_sys_window_id_$index];
                if ($_sys_window_id_$imgTitle[$_sys_window_id_$index] != '') {
                    document.getElementById('$_sys_window_id_$imgTitle').innerHTML = '<a href="javascript:$_sys_window_id_$openWindow();" title="' + $_sys_window_id_$imgTitle[$_sys_window_id_$index] + '">' + $_sys_window_id_$imgTitle[$_sys_window_id_$index] + '</a>';

                }
                document.getElementById('$_sys_window_id_$imgNumber').innerHTML = "";
                document.getElementById('mlListUl').innerHTML = "";
                $_sys_window_id_$k = 0;
                for (var i = 0; i < $_sys_window_id_$count; i++) {
                    $_sys_window_id_$k++;
                  
                    if (i != $_sys_window_id_$index) {
                        document.getElementById('$_sys_window_id_$imgNumber').innerHTML += '<a href="javascript:$_sys_window_id_$nextAd(' + i + ')" class="nomal">' + $_sys_window_id_$imgTitle[i] + '</a>';
                         if(document.getElementsByClassName('titleLi').length < $_sys_window_id_$count){
document.getElementById('mlListUl').innerHTML += '<li class="titleLi"><a href="javascript:$_sys_window_id_$nextAd(' + i + ')" class="nomal">' + $_sys_window_id_$imgTitle[i] + '</a></li>';
                         }
 
                    } else {
                        document.getElementById('$_sys_window_id_$imgNumber').innerHTML += '<a href="javascript:$_sys_window_id_$nextAd(' + i + ')" class="current">' + $_sys_window_id_$imgTitle[i] + '</a>';
                        if(document.getElementsByClassName('titleLi').length < $_sys_window_id_$count){
                          document.getElementById('mlListUl').innerHTML += '<li class="titleLi"><a href="javascript:$_sys_window_id_$nextAd(' + i + ')" class="current">' + $_sys_window_id_$imgTitle[i] + '</a></li>';  
                        }

                    }
                }

                $_sys_window_id_$index++;
                if ($_sys_window_id_$count > 1) {
                    $_sys_window_id_$nextAdTimer = setTimeout("$_sys_window_id_$nextAd(-1)", 4000);
                }
            }

            function $_sys_window_id_$openWindow() {
                var jumpUrl = $_sys_window_id_$imgLink[$_sys_window_id_$index - 1];
                if (jumpUrl && jumpUrl != '') {
                    window.open(jumpUrl);
                }
            }

            $().ready(function() {
                try {
                    var objs = $_sys_window_id_$imgJsons;
                    $_sys_window_id_$count = objs.length;
                    if ($_sys_window_id_$count == 0) {
                        document.getElementById('$_sys_window_id_$imgShow').style.display = "none";
                        document.getElementById('$_sys_window_id_$imgNumber').style.display = "none";
                        document.getElementById('$_sys_window_id_$imgTitle').style.display = "none";
                        return;
                    }
                    for (var i = 0; i < objs.length; i++) {
                        $_sys_window_id_$imgUrl[i] = objs[i].src;
                        $_sys_window_id_$imgLink[i] = objs[i].url;
                        $_sys_window_id_$imgTitle[i] = objs[i].title;
                    }
                    $_sys_window_id_$nextAd(-1);
                } catch (e) {

                }
            });
</script>

            
            
            
            
            
            
            
            