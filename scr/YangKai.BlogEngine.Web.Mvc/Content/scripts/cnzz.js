﻿function gv_cnzz(of){ var es = document.cookie.indexOf(";",of); if(es==-1) es=document.cookie.length; return unescape(document.cookie.substring(of,es)); } function gc_cnzz(n){ var arg=n+"="; var alen=arg.length; var clen=document.cookie.length; var i=0; while(i500*86400)&&(cnzz_lt>0)) cnzz_rt++; cnzz_data=cnzz_data+'&repeatip='+cnzz_a+'&rtime='+cnzz_rt+'&cnzz_eid='+escape(cnzz_eid)+'&showp='+escape(screen.width+'x'+screen.height)+'&st='+cnzz_st+'&sin='+escape(cnzz_sin.substr(0,512))+'&res=0'; document.write('站长统计'); document.write(''); var cnzz_et=(86400-cnzz_ed.getHours()*3600-cnzz_ed.getMinutes()*60-cnzz_ed.getSeconds()); cnzz_ed.setTime(cnzz_now+1000*(cnzz_et-cnzz_ed.getTimezoneOffset()*60)); document.cookie="cnzz_a1356515="+cnzz_a+";expires="+cnzz_ed.toGMTString()+ "; path=/"; document.cookie="sin1356515="+escape(cnzz_sin)+ ";expires="+cnzz_ed.toGMTString()+";path=/"; cnzz_ed.setTime(cnzz_now+1000*86400*182); document.cookie="rtime="+cnzz_rt+";expires="+cnzz_ed.toGMTString()+ ";path=/"; document.cookie="ltime="+cnzz_now+";expires=" + cnzz_ed.toGMTString()+ ";path=/"; document.cookie="cnzz_eid="+escape(cnzz_eid)+ ";expires="+cnzz_ed.toGMTString()+";path=/";