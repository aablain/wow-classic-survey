(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(11),i=n.n(a),o=(n(19),n(2)),l=n(3),c=n(6),u=n(4),h=n(5),p=n(8),d=n(9),m=n(7),g=n(1),f={answers:{ageRange:["Under 18","18 - 24","25 - 34","35 - 44","44 - 55","55+"],characterGender:["Male","Female"],class:["Shaman","Rogue","Priest","Warrior","Paladin","Mage","Warlock","Hunter","Druid"],classComparison:["I will be rolling the same class as my previous main","I will be rolling a class I have played extensively, but did not main","I will be rolling a new class, or one that I played minimally"],contentInterest:["Questing","Dungeons","World PvP","Battlegrounds","Raids","Role Playing","Collecting items/recipes/wealth","Barrens Chat"],expectedTimeTo60:["< 1 week","1 - 2 weeks","2 - 4 weeks","1 - 2 months","2 - 4 months","4 - 6 months","6+ months"],faction:["For the Horde!","For the Alliance!"],firstRetailExpansionPlayed:["Vanilla","The Burning Crusade","Wrath of the Lich King","Cataclysm","Mists of Pandaria","Warlords of Draenor","Legion","Battle for Azeroth"],hasActiveSub:["Yes","No"],hasPlayedPrivateServer:["Yes","No"],mostRecentExpansionPlayed:["Vanilla","The Burning Crusade","Wrath of the Lich King","Cataclysm","Mists of Pandaria","Warlords of Draenor","Legion","Battle for Azeroth"],prof60:["Alchemy","Blacksmithing","Enchanting","Engineering","Herbalism","Leatherworking","Mining","Skinning","Tailoring"],profLeveling:["Alchemy","Blacksmithing","Enchanting","Engineering","Herbalism","Leatherworking","Mining","Skinning","Tailoring"],race:["Human","Dwarf","Night Elf","Gnome","Orc","Undead","Tauren","Troll"],region:["Americas","Oceanic","Europe","Asia"],role:["DPS","Healer","Tank"],serverType:["PvP","PvE","RP","RP-PvP"]},colors:["#C0392B","#2980B9","#9B59B6","#D35400","#1E8449","#B7950B","#D98880","#7FB3D5","#C39BD3","#F0B27A","#7DCEA0","#B3B6B7"],colorBlindColors:["#154360","#1A5276","#1F618D","#1F618D","#2980B9","#5499C7","#5DADE2","#7FB3D5","#85C1E9"],colorsObj:{Druid:"#FF7D0A",Hunter:"#ABD473",Mage:"#40C7EB",Paladin:"#F58CBA",Priest:"#858585",Rogue:"#F1C40F",Shaman:"#0070DE",Warlock:"#8787ED",Warrior:"#C79C6E",DK:"#C41F3B",DH:"#A330C9",Monk:"#00FF96",alt1:"tomato",alt2:"blanchedalmond"},questions:["ageRange","characterGender","class","classComparison","contentInterest","expectedTimeTo60","faction","firstRetailExpansionPlayed","hasActiveSub","hasPlayedPrivateServer","mostRecentExpansionPlayed","profLeveling","prof60","race","region","role","serverType"],titles:{ageRange:"What is your age",characterGender:"What gender will your character be",class:"What class will your character be",classComparison:"Will you roll the same class your previous main, or try a new one",contentInterest:"What content are you most excited about",expectedTimeTo60:"From the launch of Classic, how long do you anticipate it will take you, in real-world-time, to reach level 60",faction:"What faction will your character belong to",firstRetailExpansionPlayed:"What is the earliest retail World of Warcraft expansion you played",hasActiveSub:"Do you have an active World of Warcraft subscription",hasPlayedPrivateServer:"Had you played on a Vanilla WoW private server, prior to Classic's announcement",mostRecentExpansionPlayed:"What is the most recent retail World of Warcraft expansion you played?",profLeveling:"What primary professions will you be using while leveling from 1-60",prof60:"What primary professions will you be using at level 60",race:"What race will your character be",region:"What region will you be playing on",responseDate:"Response Timestamp",role:"What will the primary role of your character be",serverType:"What type of sever will you be playing on"}},v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="Checkbox",n.startOnSelect=n.startOnSelect.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"filters-filter-checkbox-cont",style:this.props.style},r.createElement("button",{className:"filters-filter-checkbox",onClick:this.startOnSelect,style:{backgroundColor:this.props.isSelected?this.props.isColorBlind?"#1F618D":"#F1C40F":"transparent"}}),r.createElement("label",{className:"filters-filter-checkbox-answer-text",role:"button",onClick:this.startOnSelect},this.props.answer))}},{key:"startOnSelect",value:function(e){this.props.onSelect(this.props.answer,!!this.props.isSelected,this.props.type)}}]),t}(r.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="FilterComp",n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.idx,s=t.selectedAnswers,a=t.type,i=f.titles[a],o=f.answers[a];return r.createElement("div",{className:"filters-filter-cont"},r.createElement("h4",{className:"filters-filter-title"},n,". ",i,"?"),o&&o.map(function(t){return r.createElement(v,{answer:t,isColorBlind:e.props.isColorBlind,isSelected:!!s[t],key:t,onSelect:e.props.toggleAnswer,type:e.props.type})}))}}]),t}(r.Component),w=(n(20),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="Filters",n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.createElement("div",{className:"filters-main-cont",style:{height:this.props.innerHeight}},r.createElement("h2",{className:"filters-title"},"Filters"),r.createElement("div",{className:"filters-filters-cont"},f.questions.map(function(t,n){return r.createElement(y,{idx:n+1,isColorBlind:e.props.isColorBlind,key:t,selectedAnswers:e.props.selectedAnswers[t],type:t,toggleAnswer:e.props.toggleAnswer})})),r.createElement("div",{className:"filter-button-cont"},r.createElement("button",{className:"filter-button",onClick:this.props.applyFilter},"Apply Filter"),r.createElement(v,{isSelected:this.props.isColorBlind,isColorBlind:!0,answer:"I'm colorblind",onSelect:function(t,n,r){return e.props.updateColorBlind()},style:{transform:"scale(0.7)"},type:"expectedTimeTo60"})))}}]),t}(r.Component)),b=n(12),C=n.n(b),E=(n(24),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="BarGraph",n.getAnswerWidth=n.getAnswerWidth.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.createElement("div",{className:"bar-graph"},this.props.answers&&this.props.answers.map(function(t){return!!t.value&&r.createElement("p",{className:"answer-bar","data-content":"".concat(t.title,": ").concat(t.value," (").concat(e.getAnswerWidth(t),"%)"),key:t.title,style:{width:"".concat(e.getAnswerWidth(t),"%"),backgroundColor:t.color}})}),r.createElement("p",{className:"bar-graph-range"},r.createElement("span",null,"0"),r.createElement("span",null,this.props.totalAnswers)))}},{key:"getAnswerWidth",value:function(e){return(e.value/this.props.totalAnswers*100).toFixed(2)}}]),t}(r.Component)),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="Result",n.state={counts:n._getCountsAsArray(e.answerCounts)},n.getColor=n.getColor.bind(Object(g.a)(n)),n.getChartType=n.getChartType.bind(Object(g.a)(n)),n.renderBarGraph=n.renderBarGraph.bind(Object(g.a)(n)),n.renderPieChart=n.renderPieChart.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"_getCountsAsArray",value:function(e){var t=this;return Object.entries(e).map(function(e,n){var r=Object(m.a)(e,2),s=r[0];return{title:s,value:r[1],color:t.getColor(n,s)}})}},{key:"_getCountsAssARrayofArrays",value:function(e){return Object.entries(e)}},{key:"componentDidUpdate",value:function(e){this.props.answerCounts===e.answerCounts&&this.props.isColorBlind===e.isColorBlind||this.setState({counts:this._getCountsAsArray(this.props.answerCounts)})}},{key:"render",value:function(){var e=this;return r.createElement("div",{className:"result-cont"},r.createElement("h4",{className:"result-title"},f.titles[this.props.question],"?"),r.createElement("div",{className:"info-cont"},"BarChart"===this.getChartType()?this.renderBarGraph():this.renderPieChart(),r.createElement("ul",{className:"stats-list-cont"},!!this.state.counts.length&&this.state.counts.map(function(t){var n=t.color,s=t.title,a=t.value;return r.createElement("li",{className:"result-text",key:s,style:{color:n,textDecoration:a?"":"line-through"}},r.createElement("span",{className:"result-text-title"},s,":")," ",r.createElement("span",{className:"result-text-value"},a," -"," ",r.createElement("span",{className:"result-text-value-percentage",style:{borderColor:n}},(a/e.props.totalAnswers*100).toFixed(2),"%")))}))))}},{key:"getColor",value:function(e,t){return this.props.isColorBlind?f.colorBlindColors[e]:"class"===this.props.question?f.colorsObj[t]:f.colors[e]}},{key:"getChartType",value:function(){switch(this.props.question){case"prof60":case"profLeveling":case"contentInterest":return"BarChart";default:return"PieChart"}}},{key:"renderBarGraph",value:function(){return r.createElement(E,{answers:this.state.counts,totalAnswers:this.props.totalAnswers})}},{key:"renderPieChart",value:function(){var e={data:this.state.counts,label:j,labelPosition:112,labelStyle:{fontSize:"8x"}};return r.createElement(C.a,e)}}]),t}(r.Component),j=function(e){return e.data[e.dataIndex].percentage.toFixed(2)+"%"},A=(n(25),function(e){var t=e.activeFilters?e.activeFilters.length:0;return r.createElement("div",{className:"results-main-cont",style:{height:e.innerHeight}},r.createElement("h1",{className:"results-title"},"Results"),r.createElement("h3",{className:"results-subtitle"},e.computedResponsesLength," Responses match your filters, Representing"," ",(e.computedResponsesLength/e.allResponsesCount*100).toFixed(2),"% of respondees"),e.activeFilters&&!!e.activeFilters.length&&r.createElement("p",null,"Filtering for"," ",e.activeFilters.map(function(n,s){var a=Object(m.a)(n,2),i=(a[0],a[1]);return r.createElement(r.Fragment,null,r.createElement("span",{style:{color:e.isColorBlind?f.colorBlindColors[s]:f.colors[s]}},s+1,".[",i.map(function(e,t){return t&&t+1===i.length?" or ".concat(e):"".concat(t&&t+1!==i.length?", ":" ").concat(e)})," ","]")," ",s+1!==t?", and ":"")})),r.createElement("div",{className:"results-results-cont"},f.questions.map(function(t,n){return r.createElement(O,{idx:n,isColorBlind:e.isColorBlind,key:t,question:t,answerCounts:e.answerCounts[t],totalAnswers:e.computedResponsesLength})})))});var B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).displayName="Wrapper",n.state={answers:{ageRange:{},characterGender:{},class:{},classComparison:{},contentInterest:{},expectedTimeTo60:{},faction:{},firstRetailExpansionPlayed:{},hasActiveSub:{},hasPlayedPrivateServer:{},mostRecentExpansionPlayed:{},prof60:{},profLeveling:{},race:{},region:{},responseDate:{},role:{},serverType:{}},answerCounts:n._calcAnswerQuantities([]),computedResponsesLength:0,filtering:!1,innerHeight:window.innerHeight,isMobile:window.innerWidth<480,isColorBlind:!1,loaded:!1,responses:[],showFilters:window.innerWidth>480},n._calcAnswerQuantities=n._calcAnswerQuantities.bind(Object(g.a)(n)),n._getAnswersTemplate=n._getAnswersTemplate.bind(Object(g.a)(n)),n.toggleAnswerFilter=n.toggleAnswerFilter.bind(Object(g.a)(n)),n.applyFilter=n.applyFilter.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"_calcAnswerQuantities",value:function(e){return e.reduce(function(e,t){return Object.entries(t).forEach(function(t){var n=Object(m.a)(t,2),r=n[0],s=n[1];if("responseDate"===r)return e;"prof60"===r||"profLeveling"===r||"contentInterest"===r?s.split(", ").forEach(function(t){e[r][t]?e[r][t]++:e[r][t]=1}):e[r][s]?e[r][s]++:e[r][s]=1;return e}),e},this._getAnswersTemplate())}},{key:"_getAnswersTemplate",value:function(){return Object.entries(f.answers).reduce(function(e,t){var n=Object(m.a)(t,2),r=n[0],s=n[1];return e[r]={},s.forEach(function(t){e[r][t]=0}),e},{})}},{key:"_getSurveyResults",value:function(){var e=this;!function(e){var t=new XMLHttpRequest;function n(t){e(new Error("..."))}t.addEventListener("load",function(r){if(t.status>=400)n();else{var s=JSON.parse(this.responseText);e(null,s)}}),t.addEventListener("error",n),t.addEventListener("abort",n),t.open("GET","https://aablain.github.io/classic-survey-results/classic-survey-export.json"),t.send()}(function(t,n){if(t)e.setState({failedToLoad:!0});else{var r=e._calcAnswerQuantities(n);e.setState({answerCounts:r,computedResponsesLength:n.length,responses:n,loaded:!0})}})}},{key:"_setHeight",value:function(){var e=this;this.timeoutID&&clearTimeout(this.timeoutID),this.timeoutID=setTimeout(function(){e.setState({innerHeight:window.innerHeight})},300)}},{key:"componentDidMount",value:function(){var e=this;this._getSurveyResults(),window.addEventListener("resize",function(){return e.setState({innerHeight:window.innerHeight})})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",function(){return e.setState({innerHeight:window.innerHeight})})}},{key:"render",value:function(){var e=this;return this.state.failedToLoad?r.createElement("div",{className:"main-wrapper"},"Survey Results Failed to load :("):this.state.loaded?r.createElement("div",{className:"main-wrapper"},this.state.isMobile&&r.createElement("button",{className:"filters-toggle",onClick:function(){return e.setState({showFilters:!e.state.showFilters})}},this.state.showFilters?"Hide":"Filters"),this.state.showFilters&&r.createElement(w,{applyFilter:this.applyFilter,innerHeight:this.state.innerHeight,isColorBlind:this.state.isColorBlind,selectedAnswers:this.state.answers,toggleAnswer:this.toggleAnswerFilter,updateColorBlind:function(){return e.setState({isColorBlind:!e.state.isColorBlind})}}),this.state.answerCounts&&r.createElement(A,{answerCounts:this.state.answerCounts,activeFilters:this.state.activeFilters,computedResponsesLength:this.state.computedResponsesLength,allResponsesCount:this.state.responses.length,innerHeight:this.state.innerHeight,isColorBlind:this.state.isColorBlind})):r.createElement("div",{className:"loading-cont "},r.createElement("h1",{className:"loading-message"},"Loadin' that sweet, sweet data..."),r.createElement("h4",{className:"loading-message-sub"},"That means Survey Results"))}},{key:"applyFilter",value:function(){var e=this;this.setState({filtering:!0},function(){var t=e.state.answers,n=e.getFilters(t);if(!n.length)return e.setState({activeFilters:[],filtering:!1,answerCounts:e._calcAnswerQuantities(e.state.responses),computedResponsesLength:e.state.responses.length});var r=e.getFilteredResponses(e.state.responses||[],n),s=e._calcAnswerQuantities(r);e.setState({activeFilters:n,answerCounts:s,filtering:!1,computedResponsesLength:r.length})})}},{key:"getFilters",value:function(e){return Object.entries(e).reduce(function(e,t){var n=Object(m.a)(t,2),r=n[0],s=n[1],a=Object.entries(s).filter(function(e){var t=Object(m.a)(e,2);t[0];return t[1]}).map(function(e){return Object(m.a)(e,1)[0]});return a.length?e.concat([[r,a]]):e},[])}},{key:"getFilteredResponses",value:function(e,t){return e.filter(function(e){return t.every(function(t){var n=Object(m.a)(t,2),r=n[0];return n[1].some(function(t){return"contentInterest"===r||"prof60"===r||"profLeveling"===r?e[r].includes(t):e[r]===t})})})}},{key:"toggleAnswerFilter",value:function(e,t,n){var r=Object(d.a)({},this.state.answers[n],Object(p.a)({},e,!t));this.setState({answers:Object(d.a)({},this.state.answers,Object(p.a)({},n,r))})}}]),t}(r.Component),F=(n(26),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(B,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.58a9941c.chunk.js.map