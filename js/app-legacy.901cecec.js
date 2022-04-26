(function(){"use strict";var t={4558:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Logo",contain:"",src:o(3056),transition:"scale-transition",width:"80"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"F3 Naperville",contain:"","min-width":"100",src:o(5768),width:"200"}})],1)]),n("v-main",[n("Main")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-1"},[o("p",{staticClass:"font-weight-bold mb-10 text-h4"},[t._v(" F3 Naperville Lincoln Games 2022 Points Calculator ")]),o("p",{staticClass:"font-weight-bold text-h5"},[t._v("Total Points: "+t._s(t.totalPoints))])])],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("p",{staticClass:"font-weight-bold text-h5 mb-3"},[t._v("Workouts")])])],1),o("v-text-field",{attrs:{type:"number",label:"How many workouts did you attend?",max:7},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You may score 5 pts for attending a workout from 5:15-6 (M-F). You may score an additional 5 pts if you double tap on a Saturday. During this week of Lincoln Games, we will NOT offer our Late Start or Black Diamond options for this week only to streamline the Daily 3 below and bring our region closer together for the week. ")])]},proxy:!0}]),model:{value:t.workoutCount,callback:function(e){t.workoutCount=e},expression:"workoutCount"}}),o("v-select",{attrs:{items:t.yesNoItems,label:"Did you Q this week?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You may score an additional 5 pts for Qing a workout (one time only). ")])]},proxy:!0}]),model:{value:t.q,callback:function(e){t.q=e},expression:"q"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("p",{staticClass:"font-weight-bold text-h5 mb-3"},[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" A PAX may score 14 pts daily for his team. (Saturday a PAX may score 19 pts) However, a PAX may score 19 pts one time during the week if he Q’s a WO in addition to the ruck/run/bike (Saturday 24 pts). The Daily 3 and Power events must be done in one attempt, one shot. In other words, there is NO SPLITTING UP distance. I.E. If you’re planning to bike 15 miles, you can NOT do 10 miles in the morning, 5 in the afternoon. It must be done in one attempt, one shot. ")]),t._v(" Daily 3 ")],1)])],1),o("v-text-field",{attrs:{type:"number",label:"How many days you ran 5 miles?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You may score 3 pts for Running 5 miles (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). ")])]},proxy:!0}]),model:{value:t.dailyRunCount,callback:function(e){t.dailyRunCount=e},expression:"dailyRunCount"}}),o("v-text-field",{attrs:{type:"number",label:"How many days you rucked 3 miles?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You may score 3 pts for Rucking 3 miles (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). ")])]},proxy:!0}]),model:{value:t.dailyRuckCount,callback:function(e){t.dailyRuckCount=e},expression:"dailyRuckCount"}}),o("v-text-field",{attrs:{type:"number",label:"How many days you biked 15 miles?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You may score 3 pts for Biking 15 miles (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). ")])]},proxy:!0}]),model:{value:t.dailyBikeCount,callback:function(e){t.dailyBikeCount=e},expression:"dailyBikeCount"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("p",{staticClass:"font-weight-bold text-h5 mb-3"},[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" You have three opportunities to earn EC points. You may complete each event one time throughout the week for points. ")]),t._v(" EC Events ")],1)])],1),o("v-select",{attrs:{items:t.yesNoItems,label:"Did you donate $25 to your favorite charity?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" 10 pt bonus Per PAX for donating a minimum of $25 to your favorite charity, suggested donation to: F3’s Naperville Foundation, West Suburban Pantry, Loaves and Fishes, Love by Design, Hesed House, People’s Resource Center (receipt proof needed). ")])]},proxy:!0}]),model:{value:t.charity,callback:function(e){t.charity=e},expression:"charity"}}),o("v-select",{attrs:{items:t.yesNoItems,label:"Did you have a team dinner (counts only onece per team)?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" 25 pt team bonus for 50% attendance for a team dinner at a non chain restaurant or at a fellow teammate's residence (team picture as proof). ")])]},proxy:!0}]),model:{value:t.teamDinner,callback:function(e){t.teamDinner=e},expression:"teamDinner"}}),o("v-select",{attrs:{items:t.yesNoItems,label:"Did you volunteer at Feed My Starving Children?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" 10 pt bonus per PAX for signing up and attending a Feed My Starving Children (FMSC) volunteer opportunity. *Toady has reserved June 7th as a mass block of time for FMSC shall this work best for you or pick a different date. (proof of registration required) ")])]},proxy:!0}]),model:{value:t.volunteer,callback:function(e){t.volunteer=e},expression:"volunteer"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("p",{staticClass:"font-weight-bold text-h5 mb-3"},[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" The Daily 3 and Power events must be done in one attempt, one shot. In other words, there is NO SPLITTING UP distance. I.E. If you’re planning to bike 15 miles, you can NOT do 10 miles in the morning, 5 in the afternoon. It must be done in one attempt, one shot. ")]),t._v(" Power Bonus Point Opportunities ")],1)])],1),o("v-select",{attrs:{items:t.numberItems,label:"Power Run - How many miles did you run at your power run?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" Power Run-10 pts awarded once per PAX if they complete a 10 mile run, or up to 20 points if you complete a 20 mile run. For every mile you run between 10-20 miles you earn an extra point, again, a maximum of 20 points. (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). required) ")])]},proxy:!0}]),model:{value:t.powerRun,callback:function(e){t.powerRun=e},expression:"powerRun"}}),o("v-select",{attrs:{items:t.numberItems,label:"Power Ruck - How many miles did you ruck at your power ruck?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" Power Ruck-(30# minimum) 10 pts awarded once per PAX if they complete a 10 mile ruck, or up to 20 points if you complete a 20 mile ruck. For every mile you ruck between 10-20 miles you earn an extra point. (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). ")])]},proxy:!0}]),model:{value:t.powerRuck,callback:function(e){t.powerRuck=e},expression:"powerRuck"}}),o("v-select",{attrs:{items:t.bikeNumerItems,label:"Power Bike - How many miles did you bike at your power bike?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" Power Bike - 10 pts awarded once per PAX if they complete a 30 mile ride or 20 points if you complete a 50 mile ride. There are no inbetween points on the Power Bike. (You must have a picture of the distance you traveled via the exercise tracker of your choice [strava,map my run, etc]). ")])]},proxy:!0}]),model:{value:t.powerBike,callback:function(e){t.powerBike=e},expression:"powerBike"}}),o("v-text-field",{attrs:{type:"number",label:"Around the World - How many AO's did you hit this week?",max:"8"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" NEW! Around the World - 10 Bonus Points to any PAX that hits more than 5 different AO’s this week. (You must have picture proof and confirm this to your captain once complete.) ")])]},proxy:!0}]),model:{value:t.AOCount,callback:function(e){t.AOCount=e},expression:"AOCount"}}),o("v-select",{attrs:{items:t.yesNoItems,label:"Iron Horse - Did you have a six pack this week?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" NEW! Iron Horse - 10 Bonus points to any PAX that completes a 6-Pack this week. (You must have picture proof and confirm this to your captain once complete.) ")])]},proxy:!0}]),model:{value:t.sixPack,callback:function(e){t.sixPack=e},expression:"sixPack"}}),o("v-select",{attrs:{items:t.yesNoItems,label:"Get Swole! - Did you complete 5 or more workouts with a BigBoy Coupon?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" NEW! Get Swole! - 10 Bonus Points to any PAX that completes 5 or more workouts with a BigBoy Coupon during the week. A BigBoy coupon is a 12”x8”x16” coupon, anything smaller will not count ")])]},proxy:!0}]),model:{value:t.bigBoy,callback:function(e){t.bigBoy=e},expression:"bigBoy"}})],1)],1),o("v-row",{attrs:{justify:"center"}},[o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("p",{staticClass:"font-weight-bold text-h5 mb-3"},[t._v("POP-UPS")])])],1),o("v-text-field",{attrs:{type:"number",label:"How many additional pop-up points did you earn?"},on:{change:t.calc},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("v-tooltip",{attrs:{bottom:"","max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({},n),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" Pay Attention for Daily pop-up points throughout the week too! 5 points each ")])]},proxy:!0}]),model:{value:t.popUpPoints,callback:function(e){t.popUpPoints=e},expression:"popUpPoints"}})],1),o("p",{staticClass:"font-weight-bold text-h5"},[t._v("Total Points: "+t._s(t.totalPoints))])],1),o("v-row",[o("v-col",{staticClass:"mb-1"},[o("p",{staticClass:"font-weight-bold text-h5"},[t._v("NOTES")]),o("p",[t._v(" You can download the original rules posted in Slack "),o("a",{attrs:{href:"https://drive.google.com/file/d/1umKEaqDtspHJiHN5WLtdtG4puinnLiit/view?usp=drivesdk",target:"_blank"}},[t._v("here")])]),o("p",[t._v(" You are only allowed to complete each Power event one time per week. ")]),o("p",[t._v(" i.e. If you do 15 miles on the Power Run you only score 15 points. If you want to score the other 3 pts for the run portion of the daily 3, you would end up running a total of 20 miles that day for 18 points total. ")]),o("p",[t._v(" The Daily 3 and Power events must be done in one attempt, one shot. In other words, there is NO SPLITTING UP distance. I.E. If you’re planning to bike 15 miles, you can NOT do 10 miles in the morning, 5 in the afternoon. It must be done in one attempt, one shot. ")]),o("p",[t._v(" All fitness events are to be held outdoors. This is F3, not Orange Theory or Peloton, etc. ")]),o("p",[t._v(" A Run Club is a post and does NOT count for a daily 3 activity. I.E. Tuesday at the Outpost is Run Club which is worth 5 points, you can’t double dip and get 3 points for running 5 miles during Run Club too. These are separate activities. ")]),o("p",{staticClass:"font-weight-bold text-h5"},[t._v("FNG's")]),o("p",[t._v(" Any PAX that brings an FNG gets to add them & their point total to their respective team. ")]),o("p",{staticClass:"font-weight-bold text-h5"},[t._v("POP-UPS")]),o("p",[t._v(" Pay Attention for Daily pop-up points throughout the week too! 5 points each ")]),o("p",{staticClass:"font-weight-bold text-h5"},[t._v("TOP “X”")]),o("p",[t._v(" At the end of Lincoln Games, the Top “X” individual point earners will be eligible to compete in a future CSAUP experience to determine who’s best of the best. I.E. Top 20 PAX, etc. Details TBA in the near future. ")]),o("p",[t._v("Good Luck!")])])],1)],1)},s=[],l={name:"MainComponent",data:function(){return{totalPoints:0,workoutCount:null,saturdayDoubleTap:null,q:null,dailyRunCount:null,dailyRuckCount:null,dailyBikeCount:null,charity:null,teamDinner:null,volunteer:null,powerRun:null,powerRuck:null,powerBike:null,AOCount:null,sixPack:null,bigBoy:null,popUpPoints:null,yesNoItems:["Yes","No"],numberItems:[0,10,11,12,13,14,15,16,17,18,19,20],bikeNumerItems:[0,30,50]}},methods:{calc:function(){this.workoutCount=this.forceRange(this.workoutCount,0,7),this.dailyRunCount=this.forceRange(this.dailyRunCount,0,6),this.dailyRuckCount=this.forceRange(this.dailyRuckCount,0,6),this.dailyBikeCount=this.forceRange(this.dailyBikeCount,0,6),this.AOCount=this.forceRange(this.AOCount,0,7),this.popUpPoints=this.forceRange(this.popUpPoints,0,1e3),this.totalPoints=0,this.totalPoints+=5*this.workoutCount,this.totalPoints+=this.toBool(this.q)?5:0,this.totalPoints+=3*this.dailyRunCount,this.totalPoints+=3*this.dailyRuckCount,this.totalPoints+=3*this.dailyBikeCount,this.totalPoints+=this.toBool(this.charity)?10:0,this.totalPoints+=this.toBool(this.teamDinner)?25:0,this.totalPoints+=this.toBool(this.volunteer)?10:0,this.totalPoints+=this.powerRun,this.totalPoints+=this.powerRuck,50==this.powerBike?this.totalPoints+=20:30==this.powerBike&&(this.totalPoints+=10),this.totalPoints+=this.AOCount>4?10:0,this.totalPoints+=this.toBool(this.sixPack)?10:0,this.totalPoints+=this.toBool(this.bigBoy)?10:0,this.totalPoints+=this.popUpPoints},toBool:function(t){return t&&"Yes"==t},forceRange:function(t,e,o){return t?t>o?o:t<e?e:parseInt(t):t}}},u=l,c=o(1001),p=o(3453),d=o.n(p),h=o(2102),m=o(247),v=o(6428),y=o(2877),f=o(155),b=o(9964),k=o(9330),w=(0,c.Z)(u,r,s,!1,null,null,null),g=w.exports;d()(w,{VCol:h.Z,VContainer:m.Z,VIcon:v.Z,VRow:y.Z,VSelect:f.Z,VTextField:b.Z,VTooltip:k.Z});var x={name:"App",components:{Main:g},data:function(){return{}}},C=x,P=o(7524),S=o(3583),A=o(7047),B=o(7877),O=(0,c.Z)(C,i,a,!1,null,null,null),I=O.exports;d()(O,{VApp:P.Z,VAppBar:S.Z,VImg:A.Z,VMain:B.Z});var R=o(9132);n.Z.use(R.Z);var _=new R.Z({});n.Z.config.productionTip=!1,new n.Z({vuetify:_,render:function(t){return t(I)}}).$mount("#app")},3056:function(t,e,o){t.exports=o.p+"img/f3naperville-logo.aae54afe.png"},5768:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAABaCAMAAADpVu8YAAADAFBMVEUAAAAWFhYfHx8jIyMpKSksLCw1NTU9PT0+Pj5ERERGRkY9PT1BQUE7Ozs6OjpAQEBTU1NVVVVfX19fX19lZWVhYWFoaGhxcXFvb29ubm51dXV6enp/f39/f3+BgYGBgYGDg4OMjIyHh4eNjY2KioqIiIiNjY2Tk5OVlZWbm5ubm5ugoKClpaWrq6uwsLCzs7O3t7e4uLi6urq0tLSysrKsrKykpKSnp6eoqKilpaWoqKijo6Obm5ufn5+QkJCMjIyHh4eCgoJ+fn54eHhwcHBpaWlxcXF/f3+VlZWVlZW1tbW5ubm+vr60tLTExMTAwMDBwcG8vLy6urqzs7Ourq6rq6unp6erq6uxsbG4uLi9vb27u7u+vr7BwcHFxcXIyMjKysrMzMzQ0NDR0dHPz8/R0dHT09PT09PW1tbY2NjY2Njc3Nzf39/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////KysrJycnHx8fGxsbBwcHCwsLExMTGxsbMzMzQ0NDX19fX19fa2trc3NzU1NTQ0NDJycnExMS9vb25ubm/v7++vr7CwsLFxcXIyMjKysrHx8fHx8fLy8vMzMzNzc3Q0NC5ubm9vb24uLiysrJYWFhYWFhXV1dcXFwdHR0cHBwdHR0XFxfa2trd3d3f39/h4eHi4uLj4+Pl5eXn5+fo6Ojq6urr6+vs7Ozt7e3u7u7v7+/w8PD////Ly8vExMQEVLD/AAAA7XRSTlMAAQIIBg8dExYbDQUsMjpGR1BBMysjGigwOUpGQj8yIhRFUFdfZGlvf4WOl5+gpp+impOLlZOMhn93bmV4fo6AeW5oYWJZUlVQXlBmdH2Q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"}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,a){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],a=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,i,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/f3-lincoln-games/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,r=n[0],s=n[1],l=n[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var c=l(o)}for(e&&e(n);u<r.length;u++)a=r[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(c)},n=self["webpackChunkf3_lincoln_games"]=self["webpackChunkf3_lincoln_games"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4558)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.901cecec.js.map