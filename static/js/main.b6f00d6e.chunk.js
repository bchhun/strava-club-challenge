(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,i){t.exports=i(19)},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var a,d=i(0),n=i.n(d),r=i(9),s=i.n(r),l=(i(16),i(10)),c=(i(17),i(4)),o=i(1),u=i(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(a||(a={}));var m=function(t){var e=t.startOrder,i=t.onToggle,r=t.children,s=Object(d.useState)(e||a.descending),l=Object(u.a)(s,2),c=l[0],o=l[1];return n.a.createElement("span",{className:"table-header-filter",onClick:function(){i&&i(c);var t=c===a.ascending?a.descending:a.ascending;o(t)}},r," \u25be")},_=i(2),h=i.n(_),p=(i(8),function(t){var e=t.athletes;function i(t){return 0!==t?"".concat(t/1e3):""}return n.a.createElement(n.a.Fragment,null,e.map((function(t,e){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.name),n.a.createElement("td",null,function(t){var e=t.split(":")[0],i=t.split(":")[1],a=t.split(":")[2];return h.a.duration({seconds:parseInt(a),minutes:parseInt(i),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),n.a.createElement("td",null,i(t.distance_this_week.run)),n.a.createElement("td",null,i(t.distance_this_week.bike)),n.a.createElement("td",null,i(t.distance_this_week.others)),n.a.createElement("td",null,t.can_participate?n.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,i=Object(d.useState)(e),r=Object(u.a)(i,2),s=r[0],l=r[1],c=Object(d.useCallback)((function(t){var i=e.sort((function(e,i){var d=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),n=i.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(o.a)(i))}),[e]);return Object(d.useEffect)((function(){c(a.ascending)}),[c]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(m,{onToggle:c},"Name")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.total_time,n=i.distance_this_week.total_time,r=d.split(":")[0],s=d.split(":")[1],l=d.split(":")[2],c=n.split(":")[0],o=n.split(":")[1],u=n.split(":")[2],m=h.a.duration({seconds:parseInt(l),minutes:parseInt(s),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(u),minutes:parseInt(o),hours:parseInt(c)});if(t===a.ascending){if(m>_)return 1;if(m<_)return-1}if(t===a.descending){if(m<_)return 1;if(m>_)return-1}return 0}));l(Object(o.a)(i))}},"Total time")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.run,n=i.distance_this_week.run;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(o.a)(i))}},"Run distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.bike,n=i.distance_this_week.bike;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(o.a)(i))}},"Bike distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.others,n=i.distance_this_week.others;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));l(Object(o.a)(i))}},"Other distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{startOrder:a.ascending,onToggle:function(t){var i=e.sort((function(e,i){if(t===a.ascending){if(e.can_participate)return-1;if(i.can_participate)return 1}if(t===a.descending){if(e.can_participate)return 1;if(i.can_participate)return-1}return 0}));l(Object(o.a)(i))}},"Is eligible?")))),n.a.createElement("tbody",null,n.a.createElement(p,{athletes:s}))))}var k=function(){var t=c.athletes,e=c.date_from,i=c.date_to,a=c.last_updated;return n.a.createElement("div",{className:"app container"},n.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",a&&n.a.createElement(l.a,{datetime:a,locale:"fr_CA"})),n.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),n.a.createElement("blockquote",null,n.a.createElement("p",null,n.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),n.a.createElement("p",{style:{marginBottom:"1rem"}},n.a.createElement("b",null,e)," to ",n.a.createElement("b",null,i)),n.a.createElement("div",{className:"table"},n.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"84717686","name":"Gabriel Letourneau 2","activities":[{"id":"5428773567","athlete_id":"84717686","datetime":"2021-06-07 11:52:21","distance":0,"duration":"0:14:39","type":"workout"},{"id":"5400093687","athlete_id":"84717686","datetime":"2021-06-02 11:53:23","distance":0,"duration":"0:17:53","type":"workout"},{"id":"5397246820","athlete_id":"84717686","datetime":"2021-06-01 20:45:17","distance":0,"duration":"1:08:00","type":"workout"},{"id":"5388253926","athlete_id":"84717686","datetime":"2021-05-31 11:49:52","distance":0,"duration":"0:18:41","type":"workout"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":0,"total_time":"1:44:34"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"5428663930","athlete_id":"5493967","datetime":"2021-06-07 10:52:48","distance":5670,"duration":"0:47:04","type":"run"},{"id":"5418669907","athlete_id":"5493967","datetime":"2021-06-05 15:46:39","distance":7180,"duration":"0:38:51","type":"run"},{"id":"5403434905","athlete_id":"5493967","datetime":"2021-06-02 21:44:07","distance":10560,"duration":"0:59:38","type":"run"},{"id":"5397749201","athlete_id":"5493967","datetime":"2021-06-01 23:52:45","distance":2430,"duration":"0:14:46","type":"run"},{"id":"5397690750","athlete_id":"5493967","datetime":"2021-06-01 23:25:49","distance":5010,"duration":"0:24:48","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":25180,"bike":0,"others":0,"total_time":"2:18:03"},"can_participate":false},{"id":"71857741","name":"Gabrielle Garand","activities":[{"id":"5427042452","athlete_id":"71857741","datetime":"2021-06-07 00:26:56","distance":2560,"duration":"0:33:14","type":"walk"},{"id":"5427222825","athlete_id":"71857741","datetime":"2021-06-03 12:00:00","distance":0,"duration":"1:20:00","type":"walk"},{"id":"5403500474","athlete_id":"71857741","datetime":"2021-06-02 20:30:00","distance":0,"duration":"1:45:00","type":"walk"},{"id":"5403495271","athlete_id":"71857741","datetime":"2021-06-02 16:30:00","distance":0,"duration":"0:23:00","type":"walk"},{"id":"5397973552","athlete_id":"71857741","datetime":"2021-06-02 00:50:27","distance":2270,"duration":"0:22:55","type":"walk"},{"id":"5403497516","athlete_id":"71857741","datetime":"2021-05-31 16:01:54","distance":0,"duration":"0:25:00","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":2270,"total_time":"4:15:55"},"can_participate":true},{"id":"16164937","name":"Florent Cima","activities":[{"id":"5427040768","athlete_id":"16164937","datetime":"2021-06-07 00:49:11","distance":0,"duration":"0:07:08","type":"workout"},{"id":"5427040677","athlete_id":"16164937","datetime":"2021-06-06 14:21:25","distance":5250,"duration":"1:13:00","type":"walk"},{"id":"5427040244","athlete_id":"16164937","datetime":"2021-06-03 21:30:04","distance":0,"duration":"0:21:03","type":"workout"},{"id":"5403633921","athlete_id":"16164937","datetime":"2021-06-02 23:18:04","distance":0,"duration":"0:21:43","type":"workout"},{"id":"5403633901","athlete_id":"16164937","datetime":"2021-06-02 16:18:20","distance":2360,"duration":"0:32:24","type":"walk"},{"id":"5403633803","athlete_id":"16164937","datetime":"2021-06-01 22:57:29","distance":0,"duration":"0:07:22","type":"workout"},{"id":"5403646635","athlete_id":"16164937","datetime":"2021-06-01 22:02:26","distance":2830,"duration":"0:15:04","type":"run"},{"id":"5403633837","athlete_id":"16164937","datetime":"2021-05-31 22:09:52","distance":420,"duration":"0:05:23","type":"walk"},{"id":"5403638928","athlete_id":"16164937","datetime":"2021-05-31 21:43:21","distance":4030,"duration":"0:24:39","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":6860,"bike":0,"others":8030,"total_time":"3:20:38"},"can_participate":false},{"id":"53867747","name":"-Caroline Sigouin","activities":[{"id":"5426921180","athlete_id":"53867747","datetime":"2021-06-06 23:52:03","distance":910,"duration":"0:10:28","type":"walk"},{"id":"5424381764","athlete_id":"53867747","datetime":"2021-06-06 14:27:23","distance":1740,"duration":"0:20:39","type":"walk"},{"id":"5411507522","athlete_id":"53867747","datetime":"2021-06-04 11:30:39","distance":3080,"duration":"0:36:44","type":"walk"},{"id":"5405962763","athlete_id":"53867747","datetime":"2021-06-03 11:49:02","distance":2470,"duration":"0:28:57","type":"walk"},{"id":"5403602746","athlete_id":"53867747","datetime":"2021-06-02 23:15:41","distance":1360,"duration":"0:16:07","type":"walk"},{"id":"5400097752","athlete_id":"53867747","datetime":"2021-06-02 11:31:55","distance":3040,"duration":"0:37:30","type":"walk"},{"id":"5397683502","athlete_id":"53867747","datetime":"2021-06-01 23:36:39","distance":1110,"duration":"0:14:13","type":"walk"},{"id":"5395391204","athlete_id":"53867747","datetime":"2021-06-01 16:35:30","distance":1150,"duration":"0:14:18","type":"walk"},{"id":"5394041923","athlete_id":"53867747","datetime":"2021-06-01 11:31:43","distance":3680,"duration":"0:45:53","type":"walk"},{"id":"5388293085","athlete_id":"53867747","datetime":"2021-05-31 11:47:31","distance":2600,"duration":"0:30:02","type":"walk"},{"id":"5386413631","athlete_id":"53867747","datetime":"2021-05-30 23:26:35","distance":1210,"duration":"0:14:54","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":21140,"total_time":"4:14:51"},"can_participate":true},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"5426869481","athlete_id":"14753279","datetime":"2021-06-06 22:41:05","distance":1950,"duration":"0:29:17","type":"unknown"},{"id":"5420256936","athlete_id":"14753279","datetime":"2021-06-05 22:24:33","distance":1970,"duration":"0:26:26","type":"unknown"},{"id":"5419702998","athlete_id":"14753279","datetime":"2021-06-05 19:00:42","distance":2040,"duration":"0:28:09","type":"unknown"},{"id":"5418155053","athlete_id":"14753279","datetime":"2021-06-05 14:12:19","distance":7290,"duration":"0:57:47","type":"unknown"},{"id":"5414277271","athlete_id":"14753279","datetime":"2021-06-04 22:04:28","distance":2030,"duration":"0:29:19","type":"unknown"},{"id":"5413062963","athlete_id":"14753279","datetime":"2021-06-04 16:42:21","distance":2690,"duration":"0:36:58","type":"unknown"},{"id":"5409402392","athlete_id":"14753279","datetime":"2021-06-03 22:56:24","distance":4500,"duration":"0:30:13","type":"unknown"},{"id":"5403746178","athlete_id":"14753279","datetime":"2021-06-02 22:02:58","distance":2950,"duration":"0:47:29","type":"unknown"},{"id":"5401862734","athlete_id":"14753279","datetime":"2021-06-02 16:56:50","distance":2390,"duration":"0:30:50","type":"unknown"},{"id":"5397497025","athlete_id":"14753279","datetime":"2021-06-01 22:36:13","distance":1950,"duration":"0:25:10","type":"unknown"},{"id":"5395440578","athlete_id":"14753279","datetime":"2021-06-01 16:15:11","distance":2670,"duration":"0:34:59","type":"unknown"},{"id":"5391556733","athlete_id":"14753279","datetime":"2021-05-31 21:56:32","distance":2000,"duration":"0:26:26","type":"unknown"},{"id":"5386290978","athlete_id":"14753279","datetime":"2021-05-30 22:17:56","distance":0,"duration":"0:25:13","type":"unknown"},{"id":"5385855640","athlete_id":"14753279","datetime":"2021-05-30 19:23:47","distance":2670,"duration":"0:35:50","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":34430,"total_time":"6:43:03"},"can_participate":true},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"5428556200","athlete_id":"53741353","datetime":"2021-06-06 15:57:32","distance":11380,"duration":"2:41:00","type":"walk"},{"id":"5424687668","athlete_id":"53741353","datetime":"2021-06-06 13:36:45","distance":4550,"duration":"1:14:00","type":"walk"},{"id":"5420742298","athlete_id":"53741353","datetime":"2021-06-06 00:44:11","distance":4470,"duration":"1:13:00","type":"walk"},{"id":"5420148280","athlete_id":"53741353","datetime":"2021-06-05 19:46:26","distance":7770,"duration":"1:43:00","type":"walk"},{"id":"5419385803","athlete_id":"53741353","datetime":"2021-06-05 15:36:18","distance":0,"duration":"3:00:00","type":"walk"},{"id":"5409667263","athlete_id":"53741353","datetime":"2021-06-03 20:14:42","distance":5440,"duration":"1:16:00","type":"walk"},{"id":"5403842914","athlete_id":"53741353","datetime":"2021-06-02 20:58:56","distance":9210,"duration":"2:01:00","type":"walk"},{"id":"5397943699","athlete_id":"53741353","datetime":"2021-06-01 22:14:37","distance":7510,"duration":"1:41:00","type":"walk"},{"id":"5392118802","athlete_id":"53741353","datetime":"2021-05-31 23:12:01","distance":3970,"duration":"0:55:05","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":54300,"total_time":"15:44:05"},"can_participate":true},{"id":"40623138","name":"Daniel Causer","activities":[{"id":"5426600338","athlete_id":"40623138","datetime":"2021-06-06 20:57:02","distance":7140,"duration":"0:41:51","type":"unknown"},{"id":"5426392572","athlete_id":"40623138","datetime":"2021-06-06 16:21:08","distance":2980,"duration":"0:46:51","type":"unknown"},{"id":"5419688790","athlete_id":"40623138","datetime":"2021-06-05 15:43:10","distance":2390,"duration":"0:24:30","type":"unknown"},{"id":"5419688718","athlete_id":"40623138","datetime":"2021-06-05 15:03:03","distance":4610,"duration":"0:31:28","type":"unknown"},{"id":"5414143224","athlete_id":"40623138","datetime":"2021-06-04 21:33:20","distance":6130,"duration":"0:36:46","type":"unknown"},{"id":"5403310768","athlete_id":"40623138","datetime":"2021-06-02 21:37:33","distance":5140,"duration":"0:28:59","type":"unknown"},{"id":"5397356530","athlete_id":"40623138","datetime":"2021-06-01 21:59:11","distance":4990,"duration":"0:25:34","type":"unknown"},{"id":"5391420155","athlete_id":"40623138","datetime":"2021-05-31 21:13:13","distance":4060,"duration":"0:26:23","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":37440,"total_time":"4:22:22"},"can_participate":true},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"5426591229","athlete_id":"57677238","datetime":"2021-06-06 17:57:44","distance":4900,"duration":"1:04:00","type":"walk"},{"id":"5420444411","athlete_id":"57677238","datetime":"2021-06-05 15:42:08","distance":12190,"duration":"2:26:00","type":"walk"},{"id":"5414866323","athlete_id":"57677238","datetime":"2021-06-04 20:40:13","distance":4370,"duration":"0:57:24","type":"walk"},{"id":"5404106838","athlete_id":"57677238","datetime":"2021-06-02 21:18:43","distance":2880,"duration":"0:33:26","type":"walk"},{"id":"5391351194","athlete_id":"57677238","datetime":"2021-05-31 20:26:50","distance":2770,"duration":"0:30:27","type":"walk"},{"id":"5385289960","athlete_id":"57677238","datetime":"2021-05-30 13:26:05","distance":37220,"duration":"3:19:00","type":"bike"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":27110,"total_time":"5:31:17"},"can_participate":true},{"id":"64307664","name":"Martin Gagnon","activities":[{"id":"5426499617","athlete_id":"64307664","datetime":"2021-06-06 20:41:59","distance":2300,"duration":"0:24:43","type":"run"},{"id":"5425367052","athlete_id":"64307664","datetime":"2021-06-06 16:33:24","distance":2400,"duration":"0:24:00","type":"run"},{"id":"5416936199","athlete_id":"64307664","datetime":"2021-06-05 10:09:23","distance":20560,"duration":"1:49:00","type":"run"},{"id":"5393671217","athlete_id":"64307664","datetime":"2021-06-01 10:15:28","distance":10230,"duration":"0:51:01","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":35490,"bike":0,"others":0,"total_time":"3:28:44"},"can_participate":false},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"5426723892","athlete_id":"62602861","datetime":"2021-06-06 17:30:42","distance":0,"duration":"2:40:00","type":"bike"},{"id":"5414024151","athlete_id":"62602861","datetime":"2021-06-04 21:22:27","distance":690,"duration":"0:07:21","type":"walk"},{"id":"5403818803","athlete_id":"62602861","datetime":"2021-06-02 23:00:01","distance":0,"duration":"1:15:00","type":"workout"},{"id":"5395398166","athlete_id":"62602861","datetime":"2021-06-01 16:24:43","distance":2050,"duration":"0:16:07","type":"walk"},{"id":"5391167893","athlete_id":"62602861","datetime":"2021-05-31 19:38:53","distance":450,"duration":"0:05:14","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":3190,"total_time":"4:23:42"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"5426363629","athlete_id":"30050927","datetime":"2021-06-06 16:48:46","distance":65200,"duration":"2:11:00","type":"bike"},{"id":"5424137841","athlete_id":"30050927","datetime":"2021-06-06 13:50:21","distance":2000,"duration":"0:23:31","type":"walk"},{"id":"5423634517","athlete_id":"30050927","datetime":"2021-06-06 12:36:21","distance":2140,"duration":"0:25:38","type":"walk"},{"id":"5419493451","athlete_id":"30050927","datetime":"2021-06-05 14:16:09","distance":0,"duration":"0:41:46","type":"workout"},{"id":"5415186152","athlete_id":"30050927","datetime":"2021-06-05 01:01:33","distance":4610,"duration":"0:57:08","type":"walk"},{"id":"5409160281","athlete_id":"30050927","datetime":"2021-06-03 17:21:44","distance":0,"duration":"0:41:45","type":"workout"},{"id":"5402576745","athlete_id":"30050927","datetime":"2021-06-02 18:19:25","distance":25790,"duration":"0:49:18","type":"bike"},{"id":"5399108008","athlete_id":"30050927","datetime":"2021-06-01 17:21:07","distance":0,"duration":"0:34:35","type":"workout"},{"id":"5392698320","athlete_id":"30050927","datetime":"2021-05-31 19:25:29","distance":5600,"duration":"0:58:14","type":"walk"},{"id":"5386099811","athlete_id":"30050927","datetime":"2021-05-30 20:49:02","distance":2300,"duration":"0:25:28","type":"walk"},{"id":"5385724614","athlete_id":"30050927","datetime":"2021-05-30 19:00:24","distance":21230,"duration":"0:39:59","type":"bike"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":90990,"others":14350,"total_time":"7:42:55"},"can_participate":true},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"5425981044","athlete_id":"53650739","datetime":"2021-06-06 18:16:07","distance":7460,"duration":"0:41:48","type":"unknown"},{"id":"5412985319","athlete_id":"53650739","datetime":"2021-06-04 15:45:32","distance":13400,"duration":"1:04:00","type":"unknown"},{"id":"5401882211","athlete_id":"53650739","datetime":"2021-06-02 15:35:38","distance":18600,"duration":"1:58:00","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":39460,"total_time":"3:43:48"},"can_participate":true},{"id":"63718742","name":"Denny Perez","activities":[{"id":"5425417922","athlete_id":"63718742","datetime":"2021-06-06 16:22:01","distance":4430,"duration":"0:52:37","type":"walk"},{"id":"5419050185","athlete_id":"63718742","datetime":"2021-06-04 23:51:28","distance":3700,"duration":"0:46:07","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":8130,"total_time":"1:38:44"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"5424750575","athlete_id":"55385678","datetime":"2021-06-06 15:22:56","distance":390,"duration":"0:06:11","type":"walk"},{"id":"5420080020","athlete_id":"55385678","datetime":"2021-06-05 20:35:40","distance":2550,"duration":"0:40:00","type":"walk"},{"id":"5414789496","athlete_id":"55385678","datetime":"2021-06-05 01:54:52","distance":830,"duration":"0:10:39","type":"walk"},{"id":"5414089511","athlete_id":"55385678","datetime":"2021-06-04 20:50:13","distance":3040,"duration":"0:35:46","type":"walk"},{"id":"5403593258","athlete_id":"55385678","datetime":"2021-06-02 21:42:05","distance":4120,"duration":"0:59:42","type":"walk"},{"id":"5395656593","athlete_id":"55385678","datetime":"2021-06-01 17:13:17","distance":370,"duration":"0:04:26","type":"walk"},{"id":"5394576124","athlete_id":"55385678","datetime":"2021-06-01 13:37:08","distance":1090,"duration":"0:11:43","type":"walk"},{"id":"5385806719","athlete_id":"55385678","datetime":"2021-05-30 18:35:05","distance":1760,"duration":"0:23:02","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":12390,"total_time":"2:48:27"},"can_participate":false},{"id":"6063898","name":"Max Cantin","activities":[{"id":"5425059995","athlete_id":"6063898","datetime":"2021-06-06 13:41:25","distance":32000,"duration":"0:59:33","type":"bike"},{"id":"5425059887","athlete_id":"6063898","datetime":"2021-06-02 12:28:36","distance":2930,"duration":"0:34:29","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":32000,"others":2930,"total_time":"1:34:02"},"can_participate":false},{"id":"18551446","name":"JM L","activities":[{"id":"5424180897","athlete_id":"18551446","datetime":"2021-06-06 12:28:42","distance":37800,"duration":"1:35:00","type":"unknown"},{"id":"5424180644","athlete_id":"18551446","datetime":"2021-06-05 21:47:30","distance":3760,"duration":"0:31:23","type":"unknown"},{"id":"5413470414","athlete_id":"18551446","datetime":"2021-06-04 17:06:37","distance":42320,"duration":"1:39:00","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":83880,"total_time":"3:45:23"},"can_participate":true},{"id":"43834742","name":"Jeff Fogel","activities":[{"id":"5429122815","athlete_id":"43834742","datetime":"2021-06-06 12:28:18","distance":0,"duration":"1:00:00","type":"bike"},{"id":"5429120165","athlete_id":"43834742","datetime":"2021-06-05 13:27:05","distance":0,"duration":"2:30:00","type":"walk"},{"id":"5390286198","athlete_id":"43834742","datetime":"2021-05-31 16:23:58","distance":5640,"duration":"1:04:00","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":5640,"bike":0,"others":0,"total_time":"4:34:00"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"5423749679","athlete_id":"53857703","datetime":"2021-06-06 12:18:26","distance":2530,"duration":"0:27:12","type":"run"},{"id":"5417508500","athlete_id":"53857703","datetime":"2021-06-05 12:28:55","distance":2520,"duration":"0:28:18","type":"run"},{"id":"5414470988","athlete_id":"53857703","datetime":"2021-06-04 22:50:01","distance":2730,"duration":"0:29:50","type":"run"},{"id":"5409473765","athlete_id":"53857703","datetime":"2021-06-03 23:09:49","distance":2200,"duration":"0:15:52","type":"run"},{"id":"5403834830","athlete_id":"53857703","datetime":"2021-06-02 23:43:51","distance":1960,"duration":"0:20:17","type":"run"},{"id":"5397749262","athlete_id":"53857703","datetime":"2021-06-01 23:30:22","distance":1190,"duration":"0:12:24","type":"run"},{"id":"5391805702","athlete_id":"53857703","datetime":"2021-05-31 23:07:48","distance":1790,"duration":"0:18:20","type":"run"},{"id":"5385213201","athlete_id":"53857703","datetime":"2021-05-30 16:42:29","distance":3400,"duration":"0:38:10","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":14920,"bike":0,"others":0,"total_time":"2:32:13"},"can_participate":false},{"id":"75744959","name":"Marilyne Eloi","activities":[{"id":"5423646625","athlete_id":"75744959","datetime":"2021-06-06 12:24:31","distance":0,"duration":"0:39:35","type":"unknown"},{"id":"5414267013","athlete_id":"75744959","datetime":"2021-06-04 21:49:36","distance":3420,"duration":"0:52:38","type":"walk"},{"id":"5408893475","athlete_id":"75744959","datetime":"2021-06-03 20:16:07","distance":0,"duration":"0:32:29","type":"unknown"},{"id":"5403044643","athlete_id":"75744959","datetime":"2021-06-02 20:21:00","distance":0,"duration":"0:32:34","type":"unknown"},{"id":"5397200978","athlete_id":"75744959","datetime":"2021-06-01 20:49:12","distance":3600,"duration":"0:49:46","type":"walk"},{"id":"5391472400","athlete_id":"75744959","datetime":"2021-05-31 20:58:01","distance":3490,"duration":"0:51:53","type":"walk"},{"id":"5386102353","athlete_id":"75744959","datetime":"2021-05-30 20:51:10","distance":0,"duration":"0:33:55","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":10510,"total_time":"4:18:55"},"can_participate":true},{"id":"63991138","name":"Janet Fan","activities":[{"id":"5420980530","athlete_id":"63991138","datetime":"2021-06-05 21:40:00","distance":0,"duration":"0:25:00","type":"walk"},{"id":"5420979657","athlete_id":"63991138","datetime":"2021-06-04 21:49:00","distance":0,"duration":"0:40:00","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":0,"total_time":"1:05:00"},"can_participate":false},{"id":"53862382","name":"Gabriel L\xe9tourneau","activities":[{"id":"5419252164","athlete_id":"53862382","datetime":"2021-06-05 12:17:45","distance":33350,"duration":"5:49:00","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":33350,"bike":0,"others":0,"total_time":"5:49:00"},"can_participate":true},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"5418599222","athlete_id":"33346446","datetime":"2021-06-05 15:53:14","distance":6340,"duration":"0:21:32","type":"unknown"},{"id":"5412386306","athlete_id":"33346446","datetime":"2021-06-04 14:43:15","distance":17330,"duration":"0:30:13","type":"unknown"},{"id":"5401752097","athlete_id":"33346446","datetime":"2021-06-02 15:00:37","distance":47420,"duration":"1:34:00","type":"bike"},{"id":"5389726716","athlete_id":"33346446","datetime":"2021-05-31 15:48:09","distance":30360,"duration":"0:58:45","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":47420,"others":54030,"total_time":"3:24:30"},"can_participate":false},{"id":"8796776","name":"Catherine Sauzede","activities":[{"id":"5411963187","athlete_id":"8796776","datetime":"2021-06-04 13:08:45","distance":1770,"duration":"0:27:59","type":"walk"},{"id":"5396039370","athlete_id":"8796776","datetime":"2021-06-01 16:41:47","distance":4520,"duration":"1:00:00","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":6290,"total_time":"1:27:59"},"can_participate":false},{"id":"81176825","name":"Jos\xe9e La Rochelle","activities":[{"id":"5411464707","athlete_id":"81176825","datetime":"2021-06-04 11:34:12","distance":2400,"duration":"0:26:24","type":"walk"},{"id":"5405895597","athlete_id":"81176825","datetime":"2021-06-03 11:40:02","distance":1800,"duration":"0:23:00","type":"walk"},{"id":"5400057586","athlete_id":"81176825","datetime":"2021-06-02 11:33:48","distance":2040,"duration":"0:28:24","type":"walk"},{"id":"5397248462","athlete_id":"81176825","datetime":"2021-06-01 21:30:56","distance":1800,"duration":"0:23:24","type":"walk"},{"id":"5391408735","athlete_id":"81176825","datetime":"2021-05-31 21:11:16","distance":1850,"duration":"0:26:13","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":9890,"total_time":"2:07:25"},"can_participate":false},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"5407378029","athlete_id":"70596342","datetime":"2021-06-03 16:10:32","distance":2020,"duration":"0:26:57","type":"unknown"},{"id":"5401622182","athlete_id":"70596342","datetime":"2021-06-02 16:34:52","distance":1990,"duration":"0:24:41","type":"unknown"},{"id":"5392393565","athlete_id":"70596342","datetime":"2021-06-01 03:42:57","distance":3610,"duration":"0:44:05","type":"unknown"},{"id":"5389676026","athlete_id":"70596342","datetime":"2021-05-31 16:06:19","distance":2060,"duration":"0:26:45","type":"unknown"},{"id":"5388204403","athlete_id":"70596342","datetime":"2021-05-31 11:42:55","distance":1080,"duration":"0:14:34","type":"unknown"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":10760,"total_time":"2:17:02"},"can_participate":false},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"5404813377","athlete_id":"42892218","datetime":"2021-06-03 06:55:28","distance":4990,"duration":"0:35:07","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":4990,"bike":0,"others":0,"total_time":"0:35:07"},"can_participate":false},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"5403826447","athlete_id":"59758738","datetime":"2021-06-02 23:26:25","distance":2710,"duration":"0:40:08","type":"walk"},{"id":"5401835363","athlete_id":"59758738","datetime":"2021-06-02 16:40:01","distance":3850,"duration":"0:46:10","type":"walk"},{"id":"5395634714","athlete_id":"59758738","datetime":"2021-06-01 16:05:12","distance":5200,"duration":"1:00:00","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":11760,"total_time":"2:26:18"},"can_participate":false},{"id":"84819358","name":"Felix Rioux Sabourin","activities":[{"id":"5403246467","athlete_id":"84819358","datetime":"2021-06-02 21:22:33","distance":4450,"duration":"0:26:28","type":"run"},{"id":"5391386484","athlete_id":"84819358","datetime":"2021-05-31 21:05:48","distance":4590,"duration":"0:29:07","type":"run"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":9040,"bike":0,"others":0,"total_time":"0:55:35"},"can_participate":false},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"5398172844","athlete_id":"68910626","datetime":"2021-06-02 02:01:31","distance":5860,"duration":"0:27:45","type":"run"},{"id":"5414454204","athlete_id":"68910626","datetime":"2021-05-31 23:30:46","distance":0,"duration":"0:30:00","type":"workout"},{"id":"5386137190","athlete_id":"68910626","datetime":"2021-05-30 19:39:46","distance":8590,"duration":"1:02:00","type":"bike"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":5860,"bike":0,"others":0,"total_time":"0:57:45"},"can_participate":false},{"id":"62603443","name":"Agn\xe8s Zitte","activities":[{"id":"5397830724","athlete_id":"62603443","datetime":"2021-06-02 00:07:44","distance":1520,"duration":"0:21:26","type":"walk"},{"id":"5397460182","athlete_id":"62603443","datetime":"2021-06-01 22:27:18","distance":1180,"duration":"0:19:09","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":2700,"total_time":"0:40:35"},"can_participate":false},{"id":"72821883","name":"Julie Lalonde","activities":[{"id":"5395563294","athlete_id":"72821883","datetime":"2021-06-01 16:53:42","distance":1580,"duration":"0:18:10","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":1580,"total_time":"0:18:10"},"can_participate":false},{"id":"72330479","name":"Martin Jutras","activities":[{"id":"5397915423","athlete_id":"72330479","datetime":"2021-06-01 00:30:59","distance":0,"duration":"0:35:00","type":"walk"}],"distance_this_week":{"monday":"2021-05-31","sunday":"2021-06-06","run":0,"bike":0,"others":0,"total_time":"0:35:00"},"can_participate":false}],"last_updated":"2021-06-07 09:35:38.339982","date_from":"2021-05-31","date_to":"2021-06-06"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.b6f00d6e.chunk.js.map