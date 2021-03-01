(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,a){t.exports=a(19)},16:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var i,n=a(0),d=a.n(n),r=a(9),o=a.n(r),u=(a(16),a(10)),s=(a(17),a(4)),c=a(1),l=a(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(i||(i={}));var m=function(t){var e=t.startOrder,a=t.onToggle,r=t.children,o=Object(n.useState)(e||i.descending),u=Object(l.a)(o,2),s=u[0],c=u[1];return d.a.createElement("span",{className:"table-header-filter",onClick:function(){a&&a(s);var t=s===i.ascending?i.descending:i.ascending;c(t)}},r," \u25be")},_=a(2),h=a.n(_),p=(a(8),function(t){var e=t.athletes;function a(t){return 0!==t?"".concat(t/1e3):""}return d.a.createElement(d.a.Fragment,null,e.map((function(t,e){return d.a.createElement("tr",{key:t.id},d.a.createElement("td",null,t.name),d.a.createElement("td",null,function(t){var e=t.split(":")[0],a=t.split(":")[1],i=t.split(":")[2];return h.a.duration({seconds:parseInt(i),minutes:parseInt(a),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),d.a.createElement("td",null,a(t.distance_this_week.run)),d.a.createElement("td",null,a(t.distance_this_week.bike)),d.a.createElement("td",null,a(t.distance_this_week.others)),d.a.createElement("td",null,t.can_participate?d.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,a=Object(n.useState)(e),r=Object(l.a)(a,2),o=r[0],u=r[1],s=Object(n.useCallback)((function(t){var a=e.sort((function(e,a){var n=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),d=a.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(c.a)(a))}),[e]);return Object(n.useEffect)((function(){s(i.ascending)}),[s]),d.a.createElement(d.a.Fragment,null,d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,d.a.createElement(m,{onToggle:s},"Name")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.total_time,d=a.distance_this_week.total_time,r=n.split(":")[0],o=n.split(":")[1],u=n.split(":")[2],s=d.split(":")[0],c=d.split(":")[1],l=d.split(":")[2],m=h.a.duration({seconds:parseInt(u),minutes:parseInt(o),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(l),minutes:parseInt(c),hours:parseInt(s)});if(t===i.ascending){if(m>_)return 1;if(m<_)return-1}if(t===i.descending){if(m<_)return 1;if(m>_)return-1}return 0}));u(Object(c.a)(a))}},"Total time")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.run,d=a.distance_this_week.run;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(c.a)(a))}},"Run distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.bike,d=a.distance_this_week.bike;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(c.a)(a))}},"Bike distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{onToggle:function(t){var a=e.sort((function(e,a){var n=e.distance_this_week.others,d=a.distance_this_week.others;if(t===i.ascending){if(n>d)return 1;if(n<d)return-1}if(t===i.descending){if(n<d)return 1;if(n>d)return-1}return 0}));u(Object(c.a)(a))}},"Other distance (km)")),d.a.createElement("th",null,d.a.createElement(m,{startOrder:i.ascending,onToggle:function(t){var a=e.sort((function(e,a){if(t===i.ascending){if(e.can_participate)return-1;if(a.can_participate)return 1}if(t===i.descending){if(e.can_participate)return 1;if(a.can_participate)return-1}return 0}));u(Object(c.a)(a))}},"Is eligible?")))),d.a.createElement("tbody",null,d.a.createElement(p,{athletes:o}))))}var k=function(){var t=s.athletes,e=s.date_from,a=s.date_to,i=s.last_updated;return d.a.createElement("div",{className:"app container"},d.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",i&&d.a.createElement(u.a,{datetime:i,locale:"fr_CA"})),d.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),d.a.createElement("blockquote",null,d.a.createElement("p",null,d.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),d.a.createElement("p",{style:{marginBottom:"1rem"}},d.a.createElement("b",null,e)," to ",d.a.createElement("b",null,a)),d.a.createElement("div",{className:"table"},d.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"71857741","name":"Gabrielle Garand","activities":[{"id":"4872745428","athlete_id":"71857741","datetime":"2021-03-01 17:30:00","distance":0,"duration":"0:20:00","type":"unknown"},{"id":"4860894644","athlete_id":"71857741","datetime":"2021-02-27 15:15:51","distance":6350,"duration":"2:10:00","type":"walk"},{"id":"4859165023","athlete_id":"71857741","datetime":"2021-02-26 13:30:00","distance":0,"duration":"1:20:00","type":"run"},{"id":"4826331764","athlete_id":"71857741","datetime":"2021-02-21 15:52:37","distance":5560,"duration":"1:26:00","type":"walk"},{"id":"4820070665","athlete_id":"71857741","datetime":"2021-02-20 18:30:33","distance":4040,"duration":"1:23:00","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":6350,"total_time":"3:30:00"},"can_participate":true},{"id":"53857703","name":"Yves Prince","activities":[{"id":"4872108147","athlete_id":"53857703","datetime":"2021-03-01 15:08:20","distance":2560,"duration":"0:25:54","type":"run"},{"id":"4867824170","athlete_id":"53857703","datetime":"2021-02-28 17:45:12","distance":2090,"duration":"0:21:25","type":"run"},{"id":"4862160356","athlete_id":"53857703","datetime":"2021-02-27 23:58:00","distance":1110,"duration":"0:11:12","type":"run"},{"id":"4855941640","athlete_id":"53857703","datetime":"2021-02-27 00:47:12","distance":1770,"duration":"0:17:53","type":"run"},{"id":"4850560530","athlete_id":"53857703","datetime":"2021-02-25 23:26:03","distance":2510,"duration":"0:23:49","type":"run"},{"id":"4844972611","athlete_id":"53857703","datetime":"2021-02-25 00:08:51","distance":1830,"duration":"0:18:39","type":"run"},{"id":"4838760830","athlete_id":"53857703","datetime":"2021-02-23 23:22:05","distance":1960,"duration":"0:20:48","type":"run"},{"id":"4832827375","athlete_id":"53857703","datetime":"2021-02-22 23:29:25","distance":2530,"duration":"0:26:14","type":"run"},{"id":"4827816230","athlete_id":"53857703","datetime":"2021-02-22 00:03:33","distance":1630,"duration":"0:17:52","type":"run"},{"id":"4826255451","athlete_id":"53857703","datetime":"2021-02-21 16:26:45","distance":2390,"duration":"0:24:51","type":"run"},{"id":"4820780359","athlete_id":"53857703","datetime":"2021-02-20 23:57:28","distance":1120,"duration":"0:10:43","type":"run"},{"id":"4819191511","athlete_id":"53857703","datetime":"2021-02-20 16:54:07","distance":2370,"duration":"0:22:57","type":"run"},{"id":"4814601760","athlete_id":"53857703","datetime":"2021-02-19 23:58:27","distance":2330,"duration":"0:24:12","type":"run"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":15430,"bike":0,"others":0,"total_time":"2:37:52"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"4872462475","athlete_id":"55385678","datetime":"2021-02-28 22:47:29","distance":0,"duration":"0:36:00","type":"walk"},{"id":"4862712155","athlete_id":"55385678","datetime":"2021-02-27 17:42:20","distance":0,"duration":"0:38:00","type":"walk"},{"id":"4855608091","athlete_id":"55385678","datetime":"2021-02-26 21:40:12","distance":0,"duration":"1:39:00","type":"workout"},{"id":"4862539551","athlete_id":"55385678","datetime":"2021-02-26 22:50:31","distance":0,"duration":"0:17:00","type":"walk"},{"id":"4855624759","athlete_id":"55385678","datetime":"2021-02-26 00:48:01","distance":0,"duration":"0:11:00","type":"walk"},{"id":"4855623060","athlete_id":"55385678","datetime":"2021-02-24 21:10:22","distance":0,"duration":"0:26:00","type":"walk"},{"id":"4855621053","athlete_id":"55385678","datetime":"2021-02-23 14:42:43","distance":0,"duration":"0:13:00","type":"walk"},{"id":"4855619257","athlete_id":"55385678","datetime":"2021-02-22 23:26:40","distance":0,"duration":"0:20:00","type":"walk"},{"id":"4827506428","athlete_id":"55385678","datetime":"2021-02-21 19:59:51","distance":6850,"duration":"1:18:00","type":"walk"},{"id":"4820535546","athlete_id":"55385678","datetime":"2021-02-20 21:40:25","distance":0,"duration":"1:26:00","type":"workout"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":0,"total_time":"4:20:00"},"can_participate":true},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"4868876985","athlete_id":"57677238","datetime":"2021-02-28 21:50:20","distance":3110,"duration":"0:39:11","type":"walk"},{"id":"4855736635","athlete_id":"57677238","datetime":"2021-02-26 21:13:09","distance":8250,"duration":"1:49:00","type":"walk"},{"id":"4844802341","athlete_id":"57677238","datetime":"2021-02-24 21:48:37","distance":7190,"duration":"1:30:00","type":"walk"},{"id":"4827057002","athlete_id":"57677238","datetime":"2021-02-21 18:45:32","distance":6680,"duration":"1:28:00","type":"walk"},{"id":"4820326119","athlete_id":"57677238","datetime":"2021-02-20 21:06:44","distance":3240,"duration":"0:42:54","type":"walk"},{"id":"4818691713","athlete_id":"57677238","datetime":"2021-02-20 14:43:12","distance":1600,"duration":"0:23:18","type":"walk"},{"id":"4827547320","athlete_id":"57677238","datetime":"2021-02-19 22:00:00","distance":3210,"duration":"0:40:00","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":18550,"total_time":"3:58:11"},"can_participate":true},{"id":"40623138","name":"Daniel Causer","activities":[{"id":"4868554723","athlete_id":"40623138","datetime":"2021-02-28 20:47:01","distance":3310,"duration":"0:22:52","type":"unknown"},{"id":"4860695710","athlete_id":"40623138","datetime":"2021-02-27 17:17:10","distance":5080,"duration":"0:28:53","type":"unknown"},{"id":"4855468142","athlete_id":"40623138","datetime":"2021-02-26 22:09:43","distance":3680,"duration":"0:19:58","type":"unknown"},{"id":"4840840052","athlete_id":"40623138","datetime":"2021-02-24 11:47:00","distance":3220,"duration":"0:19:13","type":"unknown"},{"id":"4826964301","athlete_id":"40623138","datetime":"2021-02-21 18:13:03","distance":10210,"duration":"1:11:00","type":"unknown"},{"id":"4819681874","athlete_id":"40623138","datetime":"2021-02-20 18:19:01","distance":8040,"duration":"0:45:57","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":15290,"total_time":"1:30:56"},"can_participate":false},{"id":"75727770","name":"Samia bensouici","activities":[{"id":"4868513602","athlete_id":"75727770","datetime":"2021-02-28 19:22:29","distance":0,"duration":"1:40:00","type":"unknown"},{"id":"4868511519","athlete_id":"75727770","datetime":"2021-02-27 18:31:00","distance":0,"duration":"2:30:00","type":"walk"},{"id":"4821099101","athlete_id":"75727770","datetime":"2021-02-21 01:02:43","distance":7000,"duration":"2:00:00","type":"walk"},{"id":"4821097366","athlete_id":"75727770","datetime":"2021-02-21 02:02:02","distance":0,"duration":"1:00:00","type":"unknown"},{"id":"4814609294","athlete_id":"75727770","datetime":"2021-02-19 23:52:50","distance":0,"duration":"1:00:00","type":"workout"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":0,"total_time":"4:10:00"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"4868464309","athlete_id":"30050927","datetime":"2021-02-28 19:23:45","distance":5410,"duration":"1:07:00","type":"walk"},{"id":"4861512162","athlete_id":"30050927","datetime":"2021-02-27 20:28:19","distance":2370,"duration":"0:30:13","type":"walk"},{"id":"4861510948","athlete_id":"30050927","datetime":"2021-02-27 19:36:18","distance":2720,"duration":"0:31:30","type":"walk"},{"id":"4859783028","athlete_id":"30050927","datetime":"2021-02-27 15:12:21","distance":0,"duration":"0:38:15","type":"workout"},{"id":"4850802251","athlete_id":"30050927","datetime":"2021-02-26 00:11:13","distance":3290,"duration":"0:36:53","type":"walk"},{"id":"4850567916","athlete_id":"30050927","datetime":"2021-02-25 22:51:20","distance":5360,"duration":"1:10:00","type":"walk"},{"id":"4849160465","athlete_id":"30050927","datetime":"2021-02-25 17:59:27","distance":0,"duration":"0:33:57","type":"workout"},{"id":"4839362229","athlete_id":"30050927","datetime":"2021-02-23 18:15:42","distance":0,"duration":"0:41:23","type":"workout"},{"id":"4833332112","athlete_id":"30050927","datetime":"2021-02-22 19:07:07","distance":1900,"duration":"0:22:42","type":"walk"},{"id":"4831506622","athlete_id":"30050927","datetime":"2021-02-22 18:23:44","distance":2000,"duration":"0:19:32","type":"walk"},{"id":"4827419935","athlete_id":"30050927","datetime":"2021-02-21 20:20:34","distance":8120,"duration":"1:35:00","type":"walk"},{"id":"4818444507","athlete_id":"30050927","datetime":"2021-02-20 15:12:22","distance":0,"duration":"0:42:04","type":"workout"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":23050,"total_time":"6:31:25"},"can_participate":true},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"4868461598","athlete_id":"14753279","datetime":"2021-02-28 19:15:37","distance":4850,"duration":"1:16:00","type":"unknown"},{"id":"4854576570","athlete_id":"14753279","datetime":"2021-02-26 17:38:04","distance":3580,"duration":"0:47:50","type":"unknown"},{"id":"4848916274","athlete_id":"14753279","datetime":"2021-02-25 17:26:44","distance":2410,"duration":"0:33:26","type":"unknown"},{"id":"4837178554","athlete_id":"14753279","datetime":"2021-02-23 17:46:50","distance":2470,"duration":"0:34:13","type":"unknown"},{"id":"4831354880","athlete_id":"14753279","datetime":"2021-02-22 17:45:35","distance":2380,"duration":"0:33:26","type":"unknown"},{"id":"4826694866","athlete_id":"14753279","datetime":"2021-02-21 18:08:47","distance":3010,"duration":"0:43:02","type":"unknown"},{"id":"4819544008","athlete_id":"14753279","datetime":"2021-02-20 17:03:10","distance":5260,"duration":"1:26:00","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":15690,"total_time":"3:44:55"},"can_participate":true},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"4868427828","athlete_id":"62602861","datetime":"2021-02-28 17:32:44","distance":10310,"duration":"2:14:00","type":"walk"},{"id":"4855477473","athlete_id":"62602861","datetime":"2021-02-26 21:25:25","distance":4500,"duration":"0:57:23","type":"walk"},{"id":"4836837783","athlete_id":"62602861","datetime":"2021-02-23 17:07:25","distance":1410,"duration":"0:17:07","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":16220,"total_time":"3:28:30"},"can_participate":false},{"id":"53867747","name":"-Caroline Sigouin","activities":[{"id":"4868283268","athlete_id":"53867747","datetime":"2021-02-28 19:44:09","distance":1590,"duration":"0:20:46","type":"walk"},{"id":"4856031471","athlete_id":"53867747","datetime":"2021-02-27 01:15:00","distance":0,"duration":"0:32:00","type":"unknown"},{"id":"4855153681","athlete_id":"53867747","datetime":"2021-02-26 20:35:35","distance":1750,"duration":"0:24:23","type":"walk"},{"id":"4850643569","athlete_id":"53867747","datetime":"2021-02-26 00:19:44","distance":1220,"duration":"0:14:56","type":"walk"},{"id":"4847536338","athlete_id":"53867747","datetime":"2021-02-25 12:40:00","distance":0,"duration":"0:30:00","type":"walk"},{"id":"4841258166","athlete_id":"53867747","datetime":"2021-02-24 13:05:10","distance":1390,"duration":"0:16:35","type":"walk"},{"id":"4838820846","athlete_id":"53867747","datetime":"2021-02-23 23:56:10","distance":1230,"duration":"0:14:56","type":"walk"},{"id":"4820187998","athlete_id":"53867747","datetime":"2021-02-20 19:30:00","distance":0,"duration":"0:30:00","type":"unknown"},{"id":"4817409876","athlete_id":"53867747","datetime":"2021-02-20 12:50:00","distance":0,"duration":"0:41:00","type":"unknown"},{"id":"4814626486","athlete_id":"53867747","datetime":"2021-02-20 00:30:00","distance":0,"duration":"0:20:00","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":7180,"total_time":"2:33:36"},"can_participate":false},{"id":"16164937","name":"Florent Cima","activities":[{"id":"4868258258","athlete_id":"16164937","datetime":"2021-02-28 19:48:18","distance":0,"duration":"0:10:32","type":"workout"},{"id":"4868258259","athlete_id":"16164937","datetime":"2021-02-28 19:17:20","distance":0,"duration":"0:30:34","type":"workout"},{"id":"4855748509","athlete_id":"16164937","datetime":"2021-02-26 23:55:31","distance":0,"duration":"0:10:40","type":"workout"},{"id":"4855748490","athlete_id":"16164937","datetime":"2021-02-26 23:44:47","distance":0,"duration":"0:10:09","type":"workout"},{"id":"4855748563","athlete_id":"16164937","datetime":"2021-02-26 17:11:00","distance":1970,"duration":"0:26:57","type":"walk"},{"id":"4851164303","athlete_id":"16164937","datetime":"2021-02-25 23:16:23","distance":0,"duration":"0:20:52","type":"workout"},{"id":"4851164328","athlete_id":"16164937","datetime":"2021-02-25 17:13:41","distance":2910,"duration":"0:32:52","type":"walk"},{"id":"4848521423","athlete_id":"16164937","datetime":"2021-02-24 23:27:44","distance":0,"duration":"0:20:20","type":"unknown"},{"id":"4848520821","athlete_id":"16164937","datetime":"2021-02-24 17:13:11","distance":2660,"duration":"0:34:28","type":"walk"},{"id":"4838927446","athlete_id":"16164937","datetime":"2021-02-24 00:33:17","distance":0,"duration":"0:05:46","type":"workout"},{"id":"4838927400","athlete_id":"16164937","datetime":"2021-02-24 00:11:43","distance":0,"duration":"0:21:03","type":"workout"},{"id":"4838927448","athlete_id":"16164937","datetime":"2021-02-23 17:43:09","distance":2370,"duration":"0:30:25","type":"walk"},{"id":"4833088495","athlete_id":"16164937","datetime":"2021-02-23 01:21:49","distance":0,"duration":"0:10:52","type":"workout"},{"id":"4831433959","athlete_id":"16164937","datetime":"2021-02-22 17:32:40","distance":1710,"duration":"0:20:42","type":"walk"},{"id":"4830166170","athlete_id":"16164937","datetime":"2021-02-21 18:01:00","distance":0,"duration":"0:05:42","type":"workout"},{"id":"4830166183","athlete_id":"16164937","datetime":"2021-02-21 17:40:01","distance":0,"duration":"0:20:33","type":"workout"},{"id":"4830166315","athlete_id":"16164937","datetime":"2021-02-20 20:37:17","distance":0,"duration":"0:10:00","type":"workout"},{"id":"4830166309","athlete_id":"16164937","datetime":"2021-02-19 23:21:48","distance":0,"duration":"0:10:14","type":"workout"},{"id":"4830166343","athlete_id":"16164937","datetime":"2021-02-19 23:09:07","distance":0,"duration":"0:10:55","type":"workout"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":11620,"total_time":"4:46:12"},"can_participate":true},{"id":"73512333","name":"Marc-Antoine Therrien","activities":[{"id":"4868075371","athlete_id":"73512333","datetime":"2021-02-28 16:56:16","distance":8800,"duration":"1:35:00","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":8800,"total_time":"1:35:00"},"can_participate":false},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"4868011799","athlete_id":"70596342","datetime":"2021-02-28 18:23:42","distance":3220,"duration":"0:40:13","type":"unknown"},{"id":"4859978155","athlete_id":"70596342","datetime":"2021-02-27 14:35:40","distance":7510,"duration":"1:01:00","type":"unknown"},{"id":"4854432956","athlete_id":"70596342","datetime":"2021-02-26 17:35:41","distance":3980,"duration":"0:21:36","type":"unknown"},{"id":"4848975416","athlete_id":"70596342","datetime":"2021-02-25 17:42:24","distance":1800,"duration":"0:19:36","type":"unknown"},{"id":"4838667882","athlete_id":"70596342","datetime":"2021-02-23 23:18:10","distance":0,"duration":"0:15:00","type":"unknown"},{"id":"4838346171","athlete_id":"70596342","datetime":"2021-02-23 21:45:34","distance":1500,"duration":"0:26:50","type":"unknown"},{"id":"4838666599","athlete_id":"70596342","datetime":"2021-02-22 23:32:42","distance":0,"duration":"0:15:00","type":"unknown"},{"id":"4831064579","athlete_id":"70596342","datetime":"2021-02-22 17:09:39","distance":1720,"duration":"0:24:15","type":"unknown"},{"id":"4827368179","athlete_id":"70596342","datetime":"2021-02-21 21:11:53","distance":2060,"duration":"0:33:54","type":"unknown"},{"id":"4830286969","athlete_id":"70596342","datetime":"2021-02-21 15:26:30","distance":0,"duration":"0:15:00","type":"unknown"},{"id":"4821129052","athlete_id":"70596342","datetime":"2021-02-21 03:01:04","distance":0,"duration":"0:20:00","type":"unknown"},{"id":"4819452243","athlete_id":"70596342","datetime":"2021-02-20 17:57:00","distance":1050,"duration":"0:16:43","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":19730,"total_time":"3:43:30"},"can_participate":true},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"4867915228","athlete_id":"53650739","datetime":"2021-02-28 17:32:38","distance":13560,"duration":"1:08:00","type":"unknown"},{"id":"4820291706","athlete_id":"53650739","datetime":"2021-02-20 17:39:05","distance":15340,"duration":"1:25:00","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":13560,"total_time":"1:08:00"},"can_participate":false},{"id":"66096596","name":"Alexandra-Maude Grenier","activities":[{"id":"4867874543","athlete_id":"66096596","datetime":"2021-02-28 16:45:49","distance":15540,"duration":"1:34:00","type":"unknown"},{"id":"4848949059","athlete_id":"66096596","datetime":"2021-02-25 17:38:57","distance":4330,"duration":"0:24:17","type":"unknown"},{"id":"4826896767","athlete_id":"66096596","datetime":"2021-02-21 18:19:50","distance":15460,"duration":"1:20:00","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":19870,"total_time":"1:58:17"},"can_participate":false},{"id":"6063898","name":"Max Cantin","activities":[{"id":"4867857677","athlete_id":"6063898","datetime":"2021-02-28 18:05:34","distance":5110,"duration":"0:23:07","type":"run"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":5110,"bike":0,"others":0,"total_time":"0:23:07"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"4866959670","athlete_id":"5493967","datetime":"2021-02-28 15:56:25","distance":4700,"duration":"0:27:23","type":"run"},{"id":"4860958962","athlete_id":"5493967","datetime":"2021-02-27 17:48:14","distance":3150,"duration":"0:45:01","type":"walk"},{"id":"4850208008","athlete_id":"5493967","datetime":"2021-02-25 21:30:34","distance":8840,"duration":"0:52:53","type":"run"},{"id":"4838425698","athlete_id":"5493967","datetime":"2021-02-23 21:47:58","distance":7450,"duration":"0:45:47","type":"run"},{"id":"4830098435","athlete_id":"5493967","datetime":"2021-02-22 14:30:17","distance":2840,"duration":"0:15:14","type":"run"},{"id":"4825951538","athlete_id":"5493967","datetime":"2021-02-21 16:11:20","distance":6840,"duration":"0:46:32","type":"run"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":23830,"bike":0,"others":3150,"total_time":"3:06:18"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"4861608534","athlete_id":"33346446","datetime":"2021-02-27 20:26:27","distance":35440,"duration":"1:01:00","type":"unknown"},{"id":"4844535249","athlete_id":"33346446","datetime":"2021-02-24 21:56:37","distance":25550,"duration":"0:50:06","type":"unknown"},{"id":"4832449470","athlete_id":"33346446","datetime":"2021-02-22 21:38:53","distance":27780,"duration":"0:45:03","type":"unknown"},{"id":"4820399213","athlete_id":"33346446","datetime":"2021-02-20 21:32:26","distance":24210,"duration":"0:53:19","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":88770,"total_time":"2:36:09"},"can_participate":false},{"id":"63991138","name":"Janet Fan","activities":[{"id":"4866599344","athlete_id":"63991138","datetime":"2021-02-27 19:00:00","distance":0,"duration":"1:10:00","type":"walk"},{"id":"4855427417","athlete_id":"63991138","datetime":"2021-02-26 19:22:07","distance":0,"duration":"3:00:00","type":"walk"},{"id":"4855425744","athlete_id":"63991138","datetime":"2021-02-24 23:45:00","distance":0,"duration":"0:35:00","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":0,"total_time":"4:45:00"},"can_participate":true},{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"4861131494","athlete_id":"68910626","datetime":"2021-02-27 18:52:35","distance":5500,"duration":"0:25:00","type":"run"},{"id":"4845342106","athlete_id":"68910626","datetime":"2021-02-25 02:56:47","distance":0,"duration":"0:45:00","type":"unknown"},{"id":"4839314359","athlete_id":"68910626","datetime":"2021-02-24 02:38:29","distance":0,"duration":"0:35:00","type":"unknown"},{"id":"4826601852","athlete_id":"68910626","datetime":"2021-02-21 17:59:20","distance":5840,"duration":"0:26:22","type":"run"},{"id":"4819251165","athlete_id":"68910626","datetime":"2021-02-20 16:56:00","distance":0,"duration":"0:40:00","type":"unknown"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":5500,"bike":0,"others":0,"total_time":"1:45:00"},"can_participate":false},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"4855697958","athlete_id":"53741353","datetime":"2021-02-26 21:27:24","distance":9500,"duration":"1:54:00","type":"walk"},{"id":"4850565089","athlete_id":"53741353","datetime":"2021-02-25 21:13:46","distance":9680,"duration":"2:14:00","type":"walk"},{"id":"4844620491","athlete_id":"53741353","datetime":"2021-02-24 22:37:00","distance":2030,"duration":"0:26:22","type":"walk"},{"id":"4838976007","athlete_id":"53741353","datetime":"2021-02-23 22:19:33","distance":10030,"duration":"1:48:00","type":"walk"},{"id":"4838975895","athlete_id":"53741353","datetime":"2021-02-20 15:59:17","distance":4110,"duration":"1:05:00","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":31240,"total_time":"6:22:22"},"can_participate":true},{"id":"53751402","name":"Julie Rose","activities":[{"id":"4820089412","athlete_id":"53751402","datetime":"2021-02-20 20:25:13","distance":2130,"duration":"0:32:37","type":"walk"}],"distance_this_week":{"monday":"2021-02-22","sunday":"2021-02-28","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2021-03-01 13:36:02.653296","date_from":"2021-02-22","date_to":"2021-02-28"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.6f7fe8b6.chunk.js.map