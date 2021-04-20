(this["webpackJsonpstrava-club-challenge"]=this["webpackJsonpstrava-club-challenge"]||[]).push([[0],{11:function(t,e,i){t.exports=i(19)},16:function(t,e,i){},17:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var a,d=i(0),n=i.n(d),r=i(9),l=i.n(r),s=(i(16),i(10)),c=(i(17),i(4)),o=i(1),u=i(6);!function(t){t[t.ascending=0]="ascending",t[t.descending=1]="descending"}(a||(a={}));var m=function(t){var e=t.startOrder,i=t.onToggle,r=t.children,l=Object(d.useState)(e||a.descending),s=Object(u.a)(l,2),c=s[0],o=s[1];return n.a.createElement("span",{className:"table-header-filter",onClick:function(){i&&i(c);var t=c===a.ascending?a.descending:a.ascending;o(t)}},r," \u25be")},_=i(2),h=i.n(_),p=(i(8),function(t){var e=t.athletes;function i(t){return 0!==t?"".concat(t/1e3):""}return n.a.createElement(n.a.Fragment,null,e.map((function(t,e){return n.a.createElement("tr",{key:t.id},n.a.createElement("td",null,t.name),n.a.createElement("td",null,function(t){var e=t.split(":")[0],i=t.split(":")[1],a=t.split(":")[2];return h.a.duration({seconds:parseInt(a),minutes:parseInt(i),hours:parseInt(e)}).format("h[h] m[m] s[s]")}(t.distance_this_week.total_time)),n.a.createElement("td",null,i(t.distance_this_week.run)),n.a.createElement("td",null,i(t.distance_this_week.bike)),n.a.createElement("td",null,i(t.distance_this_week.others)),n.a.createElement("td",null,t.can_participate?n.a.createElement("span",{style:{color:"green"}},"\u2713"):"Not yet"))})))});function y(t){var e=t.athletes,i=Object(d.useState)(e),r=Object(u.a)(i,2),l=r[0],s=r[1],c=Object(d.useCallback)((function(t){var i=e.sort((function(e,i){var d=e.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase(),n=i.name[0].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));s(Object(o.a)(i))}),[e]);return Object(d.useEffect)((function(){c(a.ascending)}),[c]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(m,{onToggle:c},"Name")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.total_time,n=i.distance_this_week.total_time,r=d.split(":")[0],l=d.split(":")[1],s=d.split(":")[2],c=n.split(":")[0],o=n.split(":")[1],u=n.split(":")[2],m=h.a.duration({seconds:parseInt(s),minutes:parseInt(l),hours:parseInt(r)}),_=h.a.duration({seconds:parseInt(u),minutes:parseInt(o),hours:parseInt(c)});if(t===a.ascending){if(m>_)return 1;if(m<_)return-1}if(t===a.descending){if(m<_)return 1;if(m>_)return-1}return 0}));s(Object(o.a)(i))}},"Total time")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.run,n=i.distance_this_week.run;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));s(Object(o.a)(i))}},"Run distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.bike,n=i.distance_this_week.bike;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));s(Object(o.a)(i))}},"Bike distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{onToggle:function(t){var i=e.sort((function(e,i){var d=e.distance_this_week.others,n=i.distance_this_week.others;if(t===a.ascending){if(d>n)return 1;if(d<n)return-1}if(t===a.descending){if(d<n)return 1;if(d>n)return-1}return 0}));s(Object(o.a)(i))}},"Other distance (km)")),n.a.createElement("th",null,n.a.createElement(m,{startOrder:a.ascending,onToggle:function(t){var i=e.sort((function(e,i){if(t===a.ascending){if(e.can_participate)return-1;if(i.can_participate)return 1}if(t===a.descending){if(e.can_participate)return 1;if(i.can_participate)return-1}return 0}));s(Object(o.a)(i))}},"Is eligible?")))),n.a.createElement("tbody",null,n.a.createElement(p,{athletes:l}))))}var k=function(){var t=c.athletes,e=c.date_from,i=c.date_to,a=c.last_updated;return n.a.createElement("div",{className:"app container"},n.a.createElement("h5",{className:"header-last_updated"},"Last updated: ",a&&n.a.createElement(s.a,{datetime:a,locale:"fr_CA"})),n.a.createElement("h1",{className:"header-title"},"nventive Strava Challenge"),n.a.createElement("blockquote",null,n.a.createElement("p",null,n.a.createElement("em",null,"To be eligible for the weekly draw, a participant must, at least, do 3 hours and 30 min of physical activity."))),n.a.createElement("p",{style:{marginBottom:"1rem"}},n.a.createElement("b",null,e)," to ",n.a.createElement("b",null,i)),n.a.createElement("div",{className:"table"},n.a.createElement(y,{athletes:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},4:function(t){t.exports=JSON.parse('{"athletes":[{"id":"68910626","name":"Sasa Krsmanovic","activities":[{"id":"5157967437","athlete_id":"68910626","datetime":"2021-04-20 01:41:27","distance":0,"duration":"0:45:00","type":"unknown"},{"id":"5156403240","athlete_id":"68910626","datetime":"2021-04-19 18:27:59","distance":1340,"duration":"0:18:27","type":"walk"},{"id":"5152533863","athlete_id":"68910626","datetime":"2021-04-19 01:48:06","distance":0,"duration":"0:40:00","type":"unknown"},{"id":"5149793801","athlete_id":"68910626","datetime":"2021-04-18 14:14:06","distance":810,"duration":"0:00:33","type":"walk"},{"id":"5144850939","athlete_id":"68910626","datetime":"2021-04-17 19:45:51","distance":630,"duration":"0:04:24","type":"walk"},{"id":"5144292414","athlete_id":"68910626","datetime":"2021-04-17 17:47:33","distance":0,"duration":"0:48:13","type":"bike"},{"id":"5126843636","athlete_id":"68910626","datetime":"2021-04-14 16:44:46","distance":0,"duration":"0:54:21","type":"bike"},{"id":"5121892982","athlete_id":"68910626","datetime":"2021-04-13 19:07:54","distance":2220,"duration":"0:03:26","type":"walk"},{"id":"5109838459","athlete_id":"68910626","datetime":"2021-04-10 20:20:55","distance":0,"duration":"20:00:00","type":"workout"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":3660,"total_time":"1:50:57"},"can_participate":false},{"id":"53857703","name":"Yves Prince","activities":[{"id":"5157671072","athlete_id":"53857703","datetime":"2021-04-19 23:04:53","distance":3460,"duration":"0:36:13","type":"run"},{"id":"5152353528","athlete_id":"53857703","datetime":"2021-04-18 23:35:25","distance":2210,"duration":"0:23:16","type":"run"},{"id":"5148781831","athlete_id":"53857703","datetime":"2021-04-18 12:34:36","distance":2070,"duration":"0:12:27","type":"run"},{"id":"5145177369","athlete_id":"53857703","datetime":"2021-04-17 22:07:13","distance":1850,"duration":"0:19:17","type":"run"},{"id":"5143578396","athlete_id":"53857703","datetime":"2021-04-17 13:37:11","distance":3940,"duration":"0:42:14","type":"run"},{"id":"5128703227","athlete_id":"53857703","datetime":"2021-04-14 22:39:48","distance":2920,"duration":"0:30:02","type":"run"},{"id":"5122662694","athlete_id":"53857703","datetime":"2021-04-13 23:09:34","distance":2070,"duration":"0:21:14","type":"run"},{"id":"5116742192","athlete_id":"53857703","datetime":"2021-04-12 23:25:55","distance":2370,"duration":"0:22:25","type":"run"},{"id":"5111515523","athlete_id":"53857703","datetime":"2021-04-11 22:11:25","distance":2460,"duration":"0:24:11","type":"run"},{"id":"5108670669","athlete_id":"53857703","datetime":"2021-04-11 13:27:40","distance":2110,"duration":"0:21:09","type":"run"},{"id":"5104992203","athlete_id":"53857703","datetime":"2021-04-10 23:16:33","distance":2130,"duration":"0:22:08","type":"run"},{"id":"5102065368","athlete_id":"53857703","datetime":"2021-04-10 13:09:21","distance":2420,"duration":"0:24:17","type":"run"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":17430,"bike":0,"others":0,"total_time":"2:50:55"},"can_participate":false},{"id":"57677238","name":"Adam Hammes","activities":[{"id":"5157601985","athlete_id":"57677238","datetime":"2021-04-19 22:40:05","distance":0,"duration":"1:20:00","type":"walk"},{"id":"5157597751","athlete_id":"57677238","datetime":"2021-04-19 20:32:10","distance":3890,"duration":"0:39:21","type":"walk"},{"id":"5151459208","athlete_id":"57677238","datetime":"2021-04-18 16:39:50","distance":10700,"duration":"2:10:00","type":"walk"},{"id":"5144071302","athlete_id":"57677238","datetime":"2021-04-17 14:50:50","distance":2780,"duration":"0:30:35","type":"walk"},{"id":"5128197020","athlete_id":"57677238","datetime":"2021-04-14 19:12:15","distance":6580,"duration":"1:22:00","type":"walk"},{"id":"5122782744","athlete_id":"57677238","datetime":"2021-04-13 21:48:44","distance":2900,"duration":"0:39:00","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":22960,"total_time":"4:41:35"},"can_participate":true},{"id":"53741353","name":"Virginie jacques nadeau","activities":[{"id":"5157404947","athlete_id":"53741353","datetime":"2021-04-19 20:42:25","distance":5800,"duration":"1:21:00","type":"walk"},{"id":"5151724159","athlete_id":"53741353","datetime":"2021-04-18 16:12:00","distance":15270,"duration":"3:44:00","type":"walk"},{"id":"5145636974","athlete_id":"53741353","datetime":"2021-04-17 21:06:13","distance":0,"duration":"5:00:00","type":"walk"},{"id":"5138666025","athlete_id":"53741353","datetime":"2021-04-16 20:52:41","distance":1910,"duration":"0:16:45","type":"walk"},{"id":"5128452631","athlete_id":"53741353","datetime":"2021-04-14 21:11:55","distance":7770,"duration":"1:42:00","type":"walk"},{"id":"5122507829","athlete_id":"53741353","datetime":"2021-04-13 21:38:46","distance":4090,"duration":"0:53:48","type":"walk"},{"id":"5116585663","athlete_id":"53741353","datetime":"2021-04-12 20:30:30","distance":7340,"duration":"1:54:00","type":"walk"},{"id":"5111818949","athlete_id":"53741353","datetime":"2021-04-11 17:44:53","distance":12050,"duration":"2:37:00","type":"walk"},{"id":"5111818945","athlete_id":"53741353","datetime":"2021-04-10 16:23:56","distance":4260,"duration":"1:02:00","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":36380,"total_time":"13:30:33"},"can_participate":true},{"id":"53744985","name":"Guillaume Fortin","activities":[{"id":"5157388795","athlete_id":"53744985","datetime":"2021-04-19 21:52:17","distance":28200,"duration":"1:06:00","type":"bike"},{"id":"5151056113","athlete_id":"53744985","datetime":"2021-04-18 17:33:59","distance":16530,"duration":"0:42:45","type":"bike"},{"id":"5111667063","athlete_id":"53744985","datetime":"2021-04-11 22:23:57","distance":12220,"duration":"0:48:59","type":"bike"},{"id":"5110641341","athlete_id":"53744985","datetime":"2021-04-11 17:56:33","distance":13120,"duration":"0:37:08","type":"bike"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":16530,"others":0,"total_time":"0:42:45"},"can_participate":false},{"id":"14753279","name":"Bernard Chhun","activities":[{"id":"5157322104","athlete_id":"14753279","datetime":"2021-04-19 22:11:39","distance":2010,"duration":"0:27:03","type":"unknown"},{"id":"5151729505","athlete_id":"14753279","datetime":"2021-04-18 20:17:59","distance":2200,"duration":"0:30:30","type":"unknown"},{"id":"5145118106","athlete_id":"14753279","datetime":"2021-04-17 21:56:32","distance":1850,"duration":"0:24:44","type":"unknown"},{"id":"5139091908","athlete_id":"14753279","datetime":"2021-04-16 23:02:35","distance":2780,"duration":"0:37:06","type":"unknown"},{"id":"5133890425","athlete_id":"14753279","datetime":"2021-04-15 22:28:10","distance":1540,"duration":"0:22:49","type":"unknown"},{"id":"5128438836","athlete_id":"14753279","datetime":"2021-04-14 22:31:14","distance":2090,"duration":"0:34:24","type":"unknown"},{"id":"5126573153","athlete_id":"14753279","datetime":"2021-04-14 16:29:50","distance":2830,"duration":"0:34:29","type":"unknown"},{"id":"5122603375","athlete_id":"14753279","datetime":"2021-04-13 22:51:59","distance":2940,"duration":"0:16:19","type":"unknown"},{"id":"5122462982","athlete_id":"14753279","datetime":"2021-04-13 22:19:56","distance":1680,"duration":"0:24:53","type":"unknown"},{"id":"5116499077","athlete_id":"14753279","datetime":"2021-04-12 22:10:00","distance":1930,"duration":"0:30:45","type":"unknown"},{"id":"5108547780","athlete_id":"14753279","datetime":"2021-04-11 13:12:18","distance":2380,"duration":"0:26:43","type":"unknown"},{"id":"5104836062","athlete_id":"14753279","datetime":"2021-04-10 22:16:03","distance":2170,"duration":"0:32:42","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":19840,"total_time":"4:15:59"},"can_participate":true},{"id":"62602861","name":"Patrice Patenaude","activities":[{"id":"5157285056","athlete_id":"62602861","datetime":"2021-04-19 20:09:32","distance":1610,"duration":"0:20:21","type":"walk"},{"id":"5151508434","athlete_id":"62602861","datetime":"2021-04-18 19:23:33","distance":1350,"duration":"0:17:33","type":"walk"},{"id":"5144801683","athlete_id":"62602861","datetime":"2021-04-17 20:31:58","distance":580,"duration":"0:07:55","type":"walk"},{"id":"5134093880","athlete_id":"62602861","datetime":"2021-04-15 23:17:58","distance":2410,"duration":"0:29:14","type":"walk"},{"id":"5110981327","athlete_id":"62602861","datetime":"2021-04-11 18:39:34","distance":5000,"duration":"1:04:00","type":"walk"},{"id":"5109072610","athlete_id":"62602861","datetime":"2021-04-10 18:00:13","distance":0,"duration":"2:35:00","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":4340,"total_time":"0:54:42"},"can_participate":false},{"id":"75744959","name":"Marilyne Eloi","activities":[{"id":"5156677836","athlete_id":"75744959","datetime":"2021-04-19 19:02:05","distance":3130,"duration":"0:41:58","type":"walk"},{"id":"5151833871","athlete_id":"75744959","datetime":"2021-04-18 19:55:02","distance":3560,"duration":"0:57:34","type":"walk"},{"id":"5145130603","athlete_id":"75744959","datetime":"2021-04-17 21:42:14","distance":0,"duration":"0:45:42","type":"unknown"},{"id":"5138671679","athlete_id":"75744959","datetime":"2021-04-16 20:33:33","distance":0,"duration":"0:48:27","type":"unknown"},{"id":"5133428861","athlete_id":"75744959","datetime":"2021-04-15 19:57:06","distance":0,"duration":"0:44:09","type":"unknown"},{"id":"5128066378","athlete_id":"75744959","datetime":"2021-04-14 20:30:36","distance":3430,"duration":"0:48:59","type":"walk"},{"id":"5122175151","athlete_id":"75744959","datetime":"2021-04-13 20:40:09","distance":3250,"duration":"0:46:47","type":"walk"},{"id":"5116334965","athlete_id":"75744959","datetime":"2021-04-12 21:05:49","distance":3520,"duration":"0:48:03","type":"walk"},{"id":"5109071249","athlete_id":"75744959","datetime":"2021-04-11 12:54:50","distance":3480,"duration":"1:11:00","type":"walk"},{"id":"5104881936","athlete_id":"75744959","datetime":"2021-04-10 22:20:09","distance":1870,"duration":"0:30:32","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":13760,"total_time":"5:39:41"},"can_participate":true},{"id":"66096596","name":"Alexandra-Maude Grenier","activities":[{"id":"5155511202","athlete_id":"66096596","datetime":"2021-04-19 16:17:27","distance":5680,"duration":"0:34:21","type":"run"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"53867747","name":"-Caroline Sigouin","activities":[{"id":"5155499512","athlete_id":"53867747","datetime":"2021-04-19 16:39:32","distance":1040,"duration":"0:12:30","type":"walk"},{"id":"5154062076","athlete_id":"53867747","datetime":"2021-04-19 11:32:32","distance":2770,"duration":"0:33:52","type":"walk"},{"id":"5149603800","athlete_id":"53867747","datetime":"2021-04-18 14:25:34","distance":2700,"duration":"0:32:32","type":"walk"},{"id":"5145381758","athlete_id":"53867747","datetime":"2021-04-17 23:44:51","distance":1540,"duration":"0:18:51","type":"walk"},{"id":"5142752020","athlete_id":"53867747","datetime":"2021-04-17 14:18:44","distance":2600,"duration":"0:29:54","type":"walk"},{"id":"5137782395","athlete_id":"53867747","datetime":"2021-04-16 17:14:01","distance":1110,"duration":"0:13:28","type":"walk"},{"id":"5136153311","athlete_id":"53867747","datetime":"2021-04-16 11:42:35","distance":2920,"duration":"0:34:24","type":"walk"},{"id":"5130703167","athlete_id":"53867747","datetime":"2021-04-15 11:45:02","distance":2450,"duration":"0:29:26","type":"walk"},{"id":"5128431628","athlete_id":"53867747","datetime":"2021-04-14 22:49:00","distance":1180,"duration":"0:15:23","type":"walk"},{"id":"5124886803","athlete_id":"53867747","datetime":"2021-04-14 11:33:29","distance":2410,"duration":"0:30:20","type":"walk"},{"id":"5122885525","athlete_id":"53867747","datetime":"2021-04-13 23:47:30","distance":3700,"duration":"0:46:41","type":"walk"},{"id":"5118902220","athlete_id":"53867747","datetime":"2021-04-13 11:32:30","distance":2900,"duration":"0:36:43","type":"walk"},{"id":"5116583926","athlete_id":"53867747","datetime":"2021-04-12 22:54:38","distance":1370,"duration":"0:18:20","type":"walk"},{"id":"5113440246","athlete_id":"53867747","datetime":"2021-04-12 11:42:38","distance":2440,"duration":"0:29:07","type":"walk"},{"id":"5102806234","athlete_id":"53867747","datetime":"2021-04-10 15:06:29","distance":1360,"duration":"0:18:44","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":27320,"total_time":"5:35:09"},"can_participate":true},{"id":"16164937","name":"Florent Cima","activities":[{"id":"5152631991","athlete_id":"16164937","datetime":"2021-04-19 00:06:15","distance":0,"duration":"0:18:29","type":"workout"},{"id":"5152632005","athlete_id":"16164937","datetime":"2021-04-17 00:07:37","distance":0,"duration":"0:11:00","type":"workout"},{"id":"5152632028","athlete_id":"16164937","datetime":"2021-04-16 23:56:03","distance":0,"duration":"0:11:03","type":"workout"},{"id":"5152632050","athlete_id":"16164937","datetime":"2021-04-15 23:39:13","distance":0,"duration":"0:03:25","type":"workout"},{"id":"5152632100","athlete_id":"16164937","datetime":"2021-04-14 22:10:10","distance":0,"duration":"0:12:37","type":"workout"},{"id":"5152632137","athlete_id":"16164937","datetime":"2021-04-14 16:04:09","distance":2000,"duration":"0:30:15","type":"walk"},{"id":"5152632109","athlete_id":"16164937","datetime":"2021-04-14 00:18:53","distance":0,"duration":"0:05:19","type":"workout"},{"id":"5152632146","athlete_id":"16164937","datetime":"2021-04-13 23:57:52","distance":0,"duration":"0:20:21","type":"workout"},{"id":"5152632248","athlete_id":"16164937","datetime":"2021-04-13 21:47:41","distance":3180,"duration":"0:45:17","type":"walk"},{"id":"5152632268","athlete_id":"16164937","datetime":"2021-04-12 21:14:23","distance":3590,"duration":"0:45:14","type":"walk"},{"id":"5152632216","athlete_id":"16164937","datetime":"2021-04-11 23:24:51","distance":0,"duration":"0:09:29","type":"workout"},{"id":"5152632262","athlete_id":"16164937","datetime":"2021-04-10 18:02:34","distance":0,"duration":"1:22:00","type":"workout"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":8770,"total_time":"3:04:31"},"can_participate":false},{"id":"5493967","name":"Rene Charbonneau","activities":[{"id":"5152219458","athlete_id":"5493967","datetime":"2021-04-18 22:48:18","distance":7500,"duration":"0:40:25","type":"run"},{"id":"5144640418","athlete_id":"5493967","datetime":"2021-04-17 19:42:54","distance":1690,"duration":"0:18:28","type":"walk"},{"id":"5144548879","athlete_id":"5493967","datetime":"2021-04-17 18:54:02","distance":5130,"duration":"0:40:20","type":"run"},{"id":"5138367617","athlete_id":"5493967","datetime":"2021-04-16 19:31:22","distance":1290,"duration":"0:07:24","type":"run"},{"id":"5138341575","athlete_id":"5493967","datetime":"2021-04-16 19:03:48","distance":5110,"duration":"0:26:36","type":"run"},{"id":"5122425361","athlete_id":"5493967","datetime":"2021-04-13 22:20:06","distance":1390,"duration":"0:17:21","type":"walk"},{"id":"5122332781","athlete_id":"5493967","datetime":"2021-04-13 21:49:02","distance":5100,"duration":"0:29:55","type":"run"},{"id":"5110729397","athlete_id":"5493967","datetime":"2021-04-11 17:48:04","distance":9010,"duration":"0:53:29","type":"run"},{"id":"5102604809","athlete_id":"5493967","datetime":"2021-04-10 14:46:15","distance":890,"duration":"0:11:25","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":24130,"bike":0,"others":3080,"total_time":"3:00:29"},"can_participate":false},{"id":"55385678","name":"Quentin Auvray","activities":[{"id":"5151863098","athlete_id":"55385678","datetime":"2021-04-18 21:03:45","distance":440,"duration":"0:06:13","type":"walk"},{"id":"5145042155","athlete_id":"55385678","datetime":"2021-04-17 17:26:09","distance":14950,"duration":"3:19:00","type":"walk"},{"id":"5136739620","athlete_id":"55385678","datetime":"2021-04-16 12:53:50","distance":1480,"duration":"0:19:23","type":"walk"},{"id":"5133546059","athlete_id":"55385678","datetime":"2021-04-15 20:18:24","distance":2140,"duration":"0:25:23","type":"walk"},{"id":"5128455574","athlete_id":"55385678","datetime":"2021-04-14 22:28:29","distance":2150,"duration":"0:28:29","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":21160,"total_time":"4:38:28"},"can_participate":true},{"id":"30050927","name":"David .","activities":[{"id":"5151854985","athlete_id":"30050927","datetime":"2021-04-18 20:34:12","distance":21480,"duration":"0:43:50","type":"bike"},{"id":"5148419653","athlete_id":"30050927","datetime":"2021-04-17 14:09:56","distance":0,"duration":"0:34:48","type":"workout"},{"id":"5132614325","athlete_id":"30050927","datetime":"2021-04-15 17:13:44","distance":0,"duration":"0:44:39","type":"workout"},{"id":"5128618789","athlete_id":"30050927","datetime":"2021-04-14 23:17:44","distance":3000,"duration":"0:35:20","type":"walk"},{"id":"5126360055","athlete_id":"30050927","datetime":"2021-04-14 15:43:01","distance":25830,"duration":"0:48:41","type":"bike"},{"id":"5122780196","athlete_id":"30050927","datetime":"2021-04-13 23:10:10","distance":1970,"duration":"0:21:14","type":"walk"},{"id":"5122555515","athlete_id":"30050927","datetime":"2021-04-13 22:14:49","distance":4300,"duration":"0:51:38","type":"walk"},{"id":"5122552406","athlete_id":"30050927","datetime":"2021-04-13 17:27:27","distance":0,"duration":"0:34:41","type":"workout"},{"id":"5115831195","athlete_id":"30050927","datetime":"2021-04-12 18:27:49","distance":5920,"duration":"1:04:00","type":"walk"},{"id":"5111109603","athlete_id":"30050927","datetime":"2021-04-11 15:39:24","distance":92520,"duration":"3:38:00","type":"bike"},{"id":"5109056921","athlete_id":"30050927","datetime":"2021-04-11 13:52:52","distance":19900,"duration":"0:41:37","type":"bike"},{"id":"5105349378","athlete_id":"30050927","datetime":"2021-04-10 14:17:11","distance":0,"duration":"0:34:17","type":"workout"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":47310,"others":15190,"total_time":"6:18:51"},"can_participate":true},{"id":"59758738","name":"Carl de Billy","activities":[{"id":"5151898459","athlete_id":"59758738","datetime":"2021-04-18 18:36:34","distance":5850,"duration":"1:23:00","type":"walk"},{"id":"5144101788","athlete_id":"59758738","datetime":"2021-04-17 16:54:45","distance":2520,"duration":"0:33:42","type":"walk"},{"id":"5132027496","athlete_id":"59758738","datetime":"2021-04-15 16:35:39","distance":0,"duration":"0:00:06","type":"walk"},{"id":"5127890772","athlete_id":"59758738","datetime":"2021-04-14 19:43:00","distance":12600,"duration":"0:53:27","type":"bike"},{"id":"5121933561","athlete_id":"59758738","datetime":"2021-04-13 19:38:47","distance":12700,"duration":"0:56:07","type":"bike"},{"id":"5116584936","athlete_id":"59758738","datetime":"2021-04-12 22:14:59","distance":2590,"duration":"0:40:30","type":"walk"},{"id":"5111679378","athlete_id":"59758738","datetime":"2021-04-11 23:14:53","distance":2330,"duration":"0:32:34","type":"walk"},{"id":"5111136844","athlete_id":"59758738","datetime":"2021-04-11 19:14:48","distance":1110,"duration":"0:17:28","type":"walk"},{"id":"5103705827","athlete_id":"59758738","datetime":"2021-04-10 15:35:09","distance":3230,"duration":"0:54:36","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":25300,"others":10960,"total_time":"4:26:52"},"can_participate":true},{"id":"63991138","name":"Janet Fan","activities":[{"id":"5151689862","athlete_id":"63991138","datetime":"2021-04-18 19:19:02","distance":0,"duration":"1:20:00","type":"walk"},{"id":"5150510127","athlete_id":"63991138","datetime":"2021-04-14 20:00:00","distance":0,"duration":"1:00:00","type":"walk"},{"id":"5127412475","athlete_id":"63991138","datetime":"2021-04-14 17:28:36","distance":0,"duration":"1:10:00","type":"walk"},{"id":"5126821316","athlete_id":"63991138","datetime":"2021-04-14 16:00:00","distance":0,"duration":"0:40:00","type":"walk"},{"id":"5117361074","athlete_id":"63991138","datetime":"2021-04-13 04:30:09","distance":0,"duration":"0:30:00","type":"walk"},{"id":"5099234659","athlete_id":"63991138","datetime":"2021-04-09 23:01:29","distance":0,"duration":"3:00:00","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"4:40:00"},"can_participate":true},{"id":"73512333","name":"Marc-Antoine Therrien","activities":[{"id":"5151197857","athlete_id":"73512333","datetime":"2021-04-18 16:36:55","distance":8870,"duration":"1:40:00","type":"unknown"},{"id":"5103495033","athlete_id":"73512333","datetime":"2021-04-10 14:30:42","distance":6410,"duration":"1:55:00","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":8870,"total_time":"1:40:00"},"can_participate":false},{"id":"71857741","name":"Gabrielle Garand","activities":[{"id":"5151478901","athlete_id":"71857741","datetime":"2021-04-18 17:00:00","distance":0,"duration":"1:00:00","type":"walk"},{"id":"5151475370","athlete_id":"71857741","datetime":"2021-04-17 20:00:18","distance":0,"duration":"0:30:00","type":"walk"},{"id":"5128509342","athlete_id":"71857741","datetime":"2021-04-14 22:33:45","distance":2160,"duration":"0:41:48","type":"walk"},{"id":"5115958555","athlete_id":"71857741","datetime":"2021-04-12 19:10:59","distance":4570,"duration":"0:59:26","type":"walk"},{"id":"5110791358","athlete_id":"71857741","datetime":"2021-04-11 17:21:06","distance":5940,"duration":"1:28:00","type":"walk"},{"id":"5104248733","athlete_id":"71857741","datetime":"2021-04-10 18:32:49","distance":3510,"duration":"0:55:21","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":6730,"total_time":"3:11:14"},"can_participate":false},{"id":"53650739","name":"Benjamin Cartier","activities":[{"id":"5150494291","athlete_id":"53650739","datetime":"2021-04-18 15:48:26","distance":13370,"duration":"1:02:00","type":"unknown"},{"id":"5121278608","athlete_id":"53650739","datetime":"2021-04-13 16:58:15","distance":15370,"duration":"1:31:00","type":"unknown"},{"id":"5104669633","athlete_id":"53650739","datetime":"2021-04-10 20:08:16","distance":13530,"duration":"1:24:00","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":28740,"total_time":"2:33:00"},"can_participate":false},{"id":"33346446","name":"Laura C\xf4t\xe9","activities":[{"id":"5150335597","athlete_id":"33346446","datetime":"2021-04-18 16:02:48","distance":16200,"duration":"0:27:14","type":"unknown"},{"id":"5137612278","athlete_id":"33346446","datetime":"2021-04-16 16:17:25","distance":24120,"duration":"0:41:37","type":"unknown"},{"id":"5126365386","athlete_id":"33346446","datetime":"2021-04-14 16:02:02","distance":7170,"duration":"0:35:29","type":"run"},{"id":"5114806991","athlete_id":"33346446","datetime":"2021-04-12 16:16:52","distance":19800,"duration":"0:38:02","type":"unknown"},{"id":"5104300324","athlete_id":"33346446","datetime":"2021-04-10 19:16:38","distance":26120,"duration":"0:46:22","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":7170,"bike":0,"others":60120,"total_time":"2:22:22"},"can_participate":false},{"id":"40623138","name":"Daniel Causer","activities":[{"id":"5149427913","athlete_id":"40623138","datetime":"2021-04-18 12:22:48","distance":21040,"duration":"2:09:00","type":"unknown"},{"id":"5143035136","athlete_id":"40623138","datetime":"2021-04-17 14:56:57","distance":5060,"duration":"0:25:33","type":"unknown"},{"id":"5143035214","athlete_id":"40623138","datetime":"2021-04-14 21:22:17","distance":5010,"duration":"0:26:23","type":"unknown"},{"id":"5110672876","athlete_id":"40623138","datetime":"2021-04-11 18:05:01","distance":5040,"duration":"0:28:15","type":"unknown"},{"id":"5104632057","athlete_id":"40623138","datetime":"2021-04-10 20:48:33","distance":7340,"duration":"0:31:11","type":"unknown"},{"id":"5104077607","athlete_id":"40623138","datetime":"2021-04-10 17:31:45","distance":12220,"duration":"1:14:00","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":31110,"total_time":"3:00:56"},"can_participate":false},{"id":"70596342","name":"F\xe9lix-Olivier Beauchamp","activities":[{"id":"5149304610","athlete_id":"70596342","datetime":"2021-04-18 14:06:31","distance":1280,"duration":"0:16:22","type":"unknown"},{"id":"5144835198","athlete_id":"70596342","datetime":"2021-04-17 20:09:32","distance":3570,"duration":"0:44:56","type":"unknown"},{"id":"5149632749","athlete_id":"70596342","datetime":"2021-04-17 15:00:15","distance":0,"duration":"0:50:00","type":"unknown"},{"id":"5137461756","athlete_id":"70596342","datetime":"2021-04-16 16:00:10","distance":2750,"duration":"0:32:29","type":"unknown"},{"id":"5126398979","athlete_id":"70596342","datetime":"2021-04-14 16:18:23","distance":1890,"duration":"0:23:20","type":"unknown"},{"id":"5120661598","athlete_id":"70596342","datetime":"2021-04-13 16:48:56","distance":2250,"duration":"0:26:36","type":"unknown"},{"id":"5116189673","athlete_id":"70596342","datetime":"2021-04-12 21:07:31","distance":1970,"duration":"0:24:22","type":"unknown"},{"id":"5114690594","athlete_id":"70596342","datetime":"2021-04-12 16:15:27","distance":1880,"duration":"0:23:49","type":"unknown"},{"id":"5110851457","athlete_id":"70596342","datetime":"2021-04-11 18:55:43","distance":2120,"duration":"0:26:04","type":"unknown"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":15590,"total_time":"4:01:54"},"can_participate":true},{"id":"53751402","name":"Julie Rose","activities":[{"id":"5144533301","athlete_id":"53751402","datetime":"2021-04-17 17:33:48","distance":6740,"duration":"1:51:00","type":"walk"},{"id":"5122534730","athlete_id":"53751402","datetime":"2021-04-13 22:48:46","distance":1350,"duration":"0:16:40","type":"walk"},{"id":"5110870479","athlete_id":"53751402","datetime":"2021-04-11 18:37:35","distance":4090,"duration":"0:49:56","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":8090,"total_time":"2:07:40"},"can_participate":false},{"id":"75727770","name":"Samia bensouici","activities":[{"id":"5154257647","athlete_id":"75727770","datetime":"2021-04-17 09:19:00","distance":0,"duration":"3:30:00","type":"walk"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"3:30:00"},"can_participate":true},{"id":"42892218","name":"Aur\xe9lie Sa\xeez","activities":[{"id":"5112620700","athlete_id":"42892218","datetime":"2021-04-12 07:38:24","distance":7120,"duration":"0:38:52","type":"run"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":7120,"bike":0,"others":0,"total_time":"0:38:52"},"can_participate":false},{"id":"43834742","name":"Jeff Fogel","activities":[{"id":"5113822306","athlete_id":"43834742","datetime":"2021-04-11 05:00:29","distance":0,"duration":"2:00:00","type":"run"},{"id":"5104978750","athlete_id":"43834742","datetime":"2021-04-10 20:02:39","distance":7150,"duration":"1:10:00","type":"run"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"81176825","name":"Jos\xe9e La Rochelle","activities":[{"id":"5104414130","athlete_id":"81176825","datetime":"2021-04-10 20:11:17","distance":2100,"duration":"0:27:30","type":"walk"},{"id":"5102855856","athlete_id":"81176825","datetime":"2021-04-10 14:40:47","distance":0,"duration":"0:51:00","type":"workout"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false},{"id":"2127037","name":"David Hamel","activities":[{"id":"5102633209","athlete_id":"2127037","datetime":"2021-04-10 12:27:22","distance":46180,"duration":"2:01:00","type":"bike"}],"distance_this_week":{"monday":"2021-04-12","sunday":"2021-04-18","run":0,"bike":0,"others":0,"total_time":"0:00:00"},"can_participate":false}],"last_updated":"2021-04-20 08:45:11.627073","date_from":"2021-04-12","date_to":"2021-04-18"}')}},[[11,1,2]]]);
//# sourceMappingURL=main.c8151c54.chunk.js.map