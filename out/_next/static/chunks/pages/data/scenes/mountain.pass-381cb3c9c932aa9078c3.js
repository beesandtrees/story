_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"5C+S":function(t,e,o){"use strict";o.r(e);e.default={macguffin:"MACGUFFIN",destination:"TOWN X"}},Wmmq:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data/scenes/mountain.pass",function(){return o("rtot")}])},rtot:function(t,e,o){"use strict";o.r(e);var n=o("5C+S"),i={scenes:[{id:"1-mountain-pass-0",headline:"The path on the right",content:"The path you are walking begins to get more worn. The trees begin to thin out, but you don't see any houses. You can see hills ahead. You start to wonder if this is the right way. You decide it's time to rest for the night and set up camp under a large tree right beside the path.\nAfter eating dinner you start to settle down for the night, but notice a fire a bit off the path in the woods. It could be other travellers.",links:[{id:"1-travellers-1",link_text:"Go check it out"},{id:"1-travellers-2",link_text:"Ignore it. They could be bandits, or fairies or all sorts of weird stuff."}]},{id:"1-travellers-2",headline:"Day 2",content:"You wake up to a beautiful morning.",links:[{id:"1-city-0",link_text:"Continue to ".concat(n.default.destination)}]},{id:"1-travellers-1",headline:"Approach the fire",type:"dialog",dialog:{who:"Other Travellers",questions:[{id:0,setting:"Gathered around a large fire are 3 travellers. They are eating dinner and seem to be joking and having a good time.",question:"Hello there! Friend or Foe? Where are you from?",options:[{id:1,text:"Friend! I'm from SMALL VILLAGE"}]},{id:1,question:"Oh yes, I know that village. Lovely place. Where are you headed? Join us by the fire and get warm!",options:[{id:2,text:"I'm trying to get to ".concat(n.default.destination)}]},{id:2,question:"Ah! That's a tough town. It's hard to even get in.",options:[{id:3,text:"What do you mean by that?"}]},{id:3,question:"There's a password to get through the gate. Luckily we know it. We'll be happy to share it with you. It's Rutabaga.",options:[{id:"1-travellers-2",text:"Thank them for the warm fire and the helpful advice and return to your own camp to get a good night's sleep.",newScene:!0}]}],get:function(t){return this.questions.find((function(e){return e.id.toString()===t.toString()}))}}}]};e.default=i}},[["Wmmq",0]]]);