var Oct=Object.defineProperty;var jct=(T,d,A)=>d in T?Oct(T,d,{enumerable:!0,configurable:!0,writable:!0,value:A}):T[d]=A;var Nct=(T,d)=>()=>(d||T((d={exports:{}}).exports,d),d.exports);var Zt=(T,d,A)=>(jct(T,typeof d!="symbol"?d+"":d,A),A);var Fmt=Nct(A1=>{(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))S(M);new MutationObserver(M=>{for(const f of M)if(f.type==="childList")for(const B of f.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&S(B)}).observe(document,{childList:!0,subtree:!0});function A(M){const f={};return M.integrity&&(f.integrity=M.integrity),M.referrerPolicy&&(f.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?f.credentials="include":M.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function S(M){if(M.ep)return;M.ep=!0;const f=A(M);fetch(M.href,f)}})();var E_=Object.freeze({Linear:Object.freeze({None:function(T){return T},In:function(T){return this.None(T)},Out:function(T){return this.None(T)},InOut:function(T){return this.None(T)}}),Quadratic:Object.freeze({In:function(T){return T*T},Out:function(T){return T*(2-T)},InOut:function(T){return(T*=2)<1?.5*T*T:-.5*(--T*(T-2)-1)}}),Cubic:Object.freeze({In:function(T){return T*T*T},Out:function(T){return--T*T*T+1},InOut:function(T){return(T*=2)<1?.5*T*T*T:.5*((T-=2)*T*T+2)}}),Quartic:Object.freeze({In:function(T){return T*T*T*T},Out:function(T){return 1- --T*T*T*T},InOut:function(T){return(T*=2)<1?.5*T*T*T*T:-.5*((T-=2)*T*T*T-2)}}),Quintic:Object.freeze({In:function(T){return T*T*T*T*T},Out:function(T){return--T*T*T*T*T+1},InOut:function(T){return(T*=2)<1?.5*T*T*T*T*T:.5*((T-=2)*T*T*T*T+2)}}),Sinusoidal:Object.freeze({In:function(T){return 1-Math.sin((1-T)*Math.PI/2)},Out:function(T){return Math.sin(T*Math.PI/2)},InOut:function(T){return .5*(1-Math.sin(Math.PI*(.5-T)))}}),Exponential:Object.freeze({In:function(T){return T===0?0:Math.pow(1024,T-1)},Out:function(T){return T===1?1:1-Math.pow(2,-10*T)},InOut:function(T){return T===0?0:T===1?1:(T*=2)<1?.5*Math.pow(1024,T-1):.5*(-Math.pow(2,-10*(T-1))+2)}}),Circular:Object.freeze({In:function(T){return 1-Math.sqrt(1-T*T)},Out:function(T){return Math.sqrt(1- --T*T)},InOut:function(T){return(T*=2)<1?-.5*(Math.sqrt(1-T*T)-1):.5*(Math.sqrt(1-(T-=2)*T)+1)}}),Elastic:Object.freeze({In:function(T){return T===0?0:T===1?1:-Math.pow(2,10*(T-1))*Math.sin((T-1.1)*5*Math.PI)},Out:function(T){return T===0?0:T===1?1:Math.pow(2,-10*T)*Math.sin((T-.1)*5*Math.PI)+1},InOut:function(T){return T===0?0:T===1?1:(T*=2,T<1?-.5*Math.pow(2,10*(T-1))*Math.sin((T-1.1)*5*Math.PI):.5*Math.pow(2,-10*(T-1))*Math.sin((T-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(T){var d=1.70158;return T===1?1:T*T*((d+1)*T-d)},Out:function(T){var d=1.70158;return T===0?0:--T*T*((d+1)*T+d)+1},InOut:function(T){var d=2.5949095;return(T*=2)<1?.5*(T*T*((d+1)*T-d)):.5*((T-=2)*T*((d+1)*T+d)+2)}}),Bounce:Object.freeze({In:function(T){return 1-E_.Bounce.Out(1-T)},Out:function(T){return T<1/2.75?7.5625*T*T:T<2/2.75?7.5625*(T-=1.5/2.75)*T+.75:T<2.5/2.75?7.5625*(T-=2.25/2.75)*T+.9375:7.5625*(T-=2.625/2.75)*T+.984375},InOut:function(T){return T<.5?E_.Bounce.In(T*2)*.5:E_.Bounce.Out(T*2-1)*.5+.5}}),generatePow:function(T){return T===void 0&&(T=4),T=T<Number.EPSILON?Number.EPSILON:T,T=T>1e4?1e4:T,{In:function(d){return Math.pow(d,T)},Out:function(d){return 1-Math.pow(1-d,T)},InOut:function(d){return d<.5?Math.pow(d*2,T)/2:(1-Math.pow(2-d*2,T))/2+.5}}}}),w_=function(){return performance.now()},$N=function(){function T(){this._tweens={},this._tweensAddedDuringUpdate={}}return T.prototype.getAll=function(){var d=this;return Object.keys(this._tweens).map(function(A){return d._tweens[A]})},T.prototype.removeAll=function(){this._tweens={}},T.prototype.add=function(d){this._tweens[d.getId()]=d,this._tweensAddedDuringUpdate[d.getId()]=d},T.prototype.remove=function(d){delete this._tweens[d.getId()],delete this._tweensAddedDuringUpdate[d.getId()]},T.prototype.update=function(d,A){d===void 0&&(d=w_()),A===void 0&&(A=!1);var S=Object.keys(this._tweens);if(S.length===0)return!1;for(;S.length>0;){this._tweensAddedDuringUpdate={};for(var M=0;M<S.length;M++){var f=this._tweens[S[M]],B=!A;f&&f.update(d,B)===!1&&!A&&delete this._tweens[S[M]]}S=Object.keys(this._tweensAddedDuringUpdate)}return!0},T}(),v1={Linear:function(T,d){var A=T.length-1,S=A*d,M=Math.floor(S),f=v1.Utils.Linear;return d<0?f(T[0],T[1],S):d>1?f(T[A],T[A-1],A-S):f(T[M],T[M+1>A?A:M+1],S-M)},Bezier:function(T,d){for(var A=0,S=T.length-1,M=Math.pow,f=v1.Utils.Bernstein,B=0;B<=S;B++)A+=M(1-d,S-B)*M(d,B)*T[B]*f(S,B);return A},CatmullRom:function(T,d){var A=T.length-1,S=A*d,M=Math.floor(S),f=v1.Utils.CatmullRom;return T[0]===T[A]?(d<0&&(M=Math.floor(S=A*(1+d))),f(T[(M-1+A)%A],T[M],T[(M+1)%A],T[(M+2)%A],S-M)):d<0?T[0]-(f(T[0],T[0],T[1],T[1],-S)-T[0]):d>1?T[A]-(f(T[A],T[A],T[A-1],T[A-1],S-A)-T[A]):f(T[M?M-1:0],T[M],T[A<M+1?A:M+1],T[A<M+2?A:M+2],S-M)},Utils:{Linear:function(T,d,A){return(d-T)*A+T},Bernstein:function(T,d){var A=v1.Utils.Factorial;return A(T)/A(d)/A(T-d)},Factorial:function(){var T=[1];return function(d){var A=1;if(T[d])return T[d];for(var S=d;S>1;S--)A*=S;return T[d]=A,A}}(),CatmullRom:function(T,d,A,S,M){var f=(A-T)*.5,B=(S-d)*.5,F=M*M,W=M*F;return(2*d-2*A+f+B)*W+(-3*d+3*A-2*f-B)*F+f*M+d}}},b6=function(){function T(){}return T.nextId=function(){return T._nextId++},T._nextId=0,T}(),o6=new $N,Wct=function(){function T(d,A){A===void 0&&(A=o6),this._object=d,this._group=A,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=E_.Linear.None,this._interpolationFunction=v1.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=b6.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return T.prototype.getId=function(){return this._id},T.prototype.isPlaying=function(){return this._isPlaying},T.prototype.isPaused=function(){return this._isPaused},T.prototype.getDuration=function(){return this._duration},T.prototype.to=function(d,A){if(A===void 0&&(A=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=d,this._propertiesAreSetUp=!1,this._duration=A<0?0:A,this},T.prototype.duration=function(d){return d===void 0&&(d=1e3),this._duration=d<0?0:d,this},T.prototype.dynamic=function(d){return d===void 0&&(d=!1),this._isDynamic=d,this},T.prototype.start=function(d,A){if(d===void 0&&(d=w_()),A===void 0&&(A=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var S in this._valuesStartRepeat)this._swapEndStartRepeatValues(S),this._valuesStart[S]=this._valuesStartRepeat[S]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=d,this._startTime+=this._delayTime,!this._propertiesAreSetUp||A){if(this._propertiesAreSetUp=!0,!this._isDynamic){var M={};for(var f in this._valuesEnd)M[f]=this._valuesEnd[f];this._valuesEnd=M}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,A)}return this},T.prototype.startFromCurrentValues=function(d){return this.start(d,!0)},T.prototype._setupProperties=function(d,A,S,M,f){for(var B in S){var F=d[B],W=Array.isArray(F),G=W?"array":typeof F,X=!W&&Array.isArray(S[B]);if(!(G==="undefined"||G==="function")){if(X){var Z=S[B];if(Z.length===0)continue;for(var K=[F],$=0,rt=Z.length;$<rt;$+=1){var lt=this._handleRelativeValue(F,Z[$]);if(isNaN(lt)){X=!1,console.warn("Found invalid interpolation list. Skipping.");break}K.push(lt)}X&&(S[B]=K)}if((G==="object"||W)&&F&&!X){A[B]=W?[]:{};var nt=F;for(var tt in nt)A[B][tt]=nt[tt];M[B]=W?[]:{};var Z=S[B];if(!this._isDynamic){var vt={};for(var tt in Z)vt[tt]=Z[tt];S[B]=Z=vt}this._setupProperties(nt,A[B],Z,M[B],f)}else(typeof A[B]>"u"||f)&&(A[B]=F),W||(A[B]*=1),X?M[B]=S[B].slice().reverse():M[B]=A[B]||0}}},T.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},T.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},T.prototype.pause=function(d){return d===void 0&&(d=w_()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=d,this._group&&this._group.remove(this),this)},T.prototype.resume=function(d){return d===void 0&&(d=w_()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=d-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},T.prototype.stopChainedTweens=function(){for(var d=0,A=this._chainedTweens.length;d<A;d++)this._chainedTweens[d].stop();return this},T.prototype.group=function(d){return d===void 0&&(d=o6),this._group=d,this},T.prototype.delay=function(d){return d===void 0&&(d=0),this._delayTime=d,this},T.prototype.repeat=function(d){return d===void 0&&(d=0),this._initialRepeat=d,this._repeat=d,this},T.prototype.repeatDelay=function(d){return this._repeatDelayTime=d,this},T.prototype.yoyo=function(d){return d===void 0&&(d=!1),this._yoyo=d,this},T.prototype.easing=function(d){return d===void 0&&(d=E_.Linear.None),this._easingFunction=d,this},T.prototype.interpolation=function(d){return d===void 0&&(d=v1.Linear),this._interpolationFunction=d,this},T.prototype.chain=function(){for(var d=[],A=0;A<arguments.length;A++)d[A]=arguments[A];return this._chainedTweens=d,this},T.prototype.onStart=function(d){return this._onStartCallback=d,this},T.prototype.onEveryStart=function(d){return this._onEveryStartCallback=d,this},T.prototype.onUpdate=function(d){return this._onUpdateCallback=d,this},T.prototype.onRepeat=function(d){return this._onRepeatCallback=d,this},T.prototype.onComplete=function(d){return this._onCompleteCallback=d,this},T.prototype.onStop=function(d){return this._onStopCallback=d,this},T.prototype.update=function(d,A){var S=this,M;if(d===void 0&&(d=w_()),A===void 0&&(A=!0),this._isPaused)return!0;var f,B=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(d>B)return!1;A&&this.start(d,!0)}if(this._goToEnd=!1,d<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var F=d-this._startTime,W=this._duration+((M=this._repeatDelayTime)!==null&&M!==void 0?M:this._delayTime),G=this._duration+this._repeat*W,X=function(){if(S._duration===0||F>G)return 1;var nt=Math.trunc(F/W),tt=F-nt*W,vt=Math.min(tt/S._duration,1);return vt===0&&F===S._duration?1:vt},Z=X(),K=this._easingFunction(Z);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,K),this._onUpdateCallback&&this._onUpdateCallback(this._object,Z),this._duration===0||F>=this._duration)if(this._repeat>0){var $=Math.min(Math.trunc((F-this._duration)/W)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=$);for(f in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[f]=="string"&&(this._valuesStartRepeat[f]=this._valuesStartRepeat[f]+parseFloat(this._valuesEnd[f])),this._yoyo&&this._swapEndStartRepeatValues(f),this._valuesStart[f]=this._valuesStartRepeat[f];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=W*$,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var rt=0,lt=this._chainedTweens.length;rt<lt;rt++)this._chainedTweens[rt].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},T.prototype._updateProperties=function(d,A,S,M){for(var f in S)if(A[f]!==void 0){var B=A[f]||0,F=S[f],W=Array.isArray(d[f]),G=Array.isArray(F),X=!W&&G;X?d[f]=this._interpolationFunction(F,M):typeof F=="object"&&F?this._updateProperties(d[f],B,F,M):(F=this._handleRelativeValue(B,F),typeof F=="number"&&(d[f]=B+(F-B)*M))}},T.prototype._handleRelativeValue=function(d,A){return typeof A!="string"?A:A.charAt(0)==="+"||A.charAt(0)==="-"?d+parseFloat(A):parseFloat(A)},T.prototype._swapEndStartRepeatValues=function(d){var A=this._valuesStartRepeat[d],S=this._valuesEnd[d];typeof S=="string"?this._valuesStartRepeat[d]=this._valuesStartRepeat[d]+parseFloat(S):this._valuesStartRepeat[d]=this._valuesEnd[d],this._valuesEnd[d]=A},T}(),Uct="23.1.1",Gct=b6.nextId,ao=o6,Hct=ao.getAll.bind(ao),Vct=ao.removeAll.bind(ao),zct=ao.add.bind(ao),Xct=ao.remove.bind(ao),Yct=ao.update.bind(ao),A1={Easing:E_,Group:$N,Interpolation:v1,now:w_,Sequence:b6,nextId:Gct,Tween:Wct,VERSION:Uct,getAll:Hct,removeAll:Vct,add:zct,remove:Xct,update:Yct};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const v6="164",e_={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},n_={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zct=0,UO=1,Qct=2,tW=1,eW=2,Yo=3,ho=0,C0=1,po=2,Is=0,D_=1,s6=2,GO=3,HO=4,qct=5,y1=100,Kct=101,Jct=102,$ct=103,tpt=104,ept=200,npt=201,ipt=202,rpt=203,_6=204,l6=205,opt=206,spt=207,_pt=208,lpt=209,cpt=210,ppt=211,upt=212,fpt=213,apt=214,dpt=0,hpt=1,mpt=2,ju=3,gpt=4,Apt=5,ypt=6,bpt=7,Zu=0,vpt=1,Cpt=2,Ps=0,Spt=1,kpt=2,xpt=3,wpt=4,Mpt=5,Rpt=6,Tpt=7,VO="attached",Ept="detached",nW=300,F_=301,O_=302,c6=303,p6=304,Qu=306,k1=1e3,uo=1001,Nu=1002,v0=1003,iW=1004,uc=1005,Z0=1006,Fu=1007,Zo=1008,Bs=1009,Dpt=1010,Ipt=1011,rW=1012,oW=1013,j_=1014,fo=1015,qu=1016,sW=1017,_W=1018,bc=1020,Ppt=35902,Bpt=1021,Lpt=1022,Or=1023,Fpt=1024,Opt=1025,I_=1026,mc=1027,lW=1028,cW=1029,jpt=1030,pW=1031,uW=1033,d4=33776,h4=33777,m4=33778,g4=33779,zO=35840,XO=35841,YO=35842,ZO=35843,QO=36196,qO=37492,KO=37496,JO=37808,$O=37809,tj=37810,ej=37811,nj=37812,ij=37813,rj=37814,oj=37815,sj=37816,_j=37817,lj=37818,cj=37819,pj=37820,uj=37821,A4=36492,fj=36494,aj=36495,Npt=36283,dj=36284,hj=36285,mj=36286,Wpt=2200,Upt=2201,Gpt=2202,gc=2300,N_=2301,y4=2302,M_=2400,R_=2401,Wu=2402,C6=2500,Hpt=2501,Vpt=0,fW=1,u6=2,zpt=3200,Xpt=3201,vc=0,Ypt=1,Es="",Gi="srgb",zi="srgb-linear",S6="display-p3",Ku="display-p3-linear",Uu="linear",Hn="srgb",Gu="rec709",Hu="p3",i_=7680,gj=519,Zpt=512,Qpt=513,qpt=514,aW=515,Kpt=516,Jpt=517,$pt=518,tut=519,f6=35044,Aj="300 es",Qo=2e3,Vu=2001;class qo{addEventListener(d,A){this._listeners===void 0&&(this._listeners={});const S=this._listeners;S[d]===void 0&&(S[d]=[]),S[d].indexOf(A)===-1&&S[d].push(A)}hasEventListener(d,A){if(this._listeners===void 0)return!1;const S=this._listeners;return S[d]!==void 0&&S[d].indexOf(A)!==-1}removeEventListener(d,A){if(this._listeners===void 0)return;const M=this._listeners[d];if(M!==void 0){const f=M.indexOf(A);f!==-1&&M.splice(f,1)}}dispatchEvent(d){if(this._listeners===void 0)return;const S=this._listeners[d.type];if(S!==void 0){d.target=this;const M=S.slice(0);for(let f=0,B=M.length;f<B;f++)M[f].call(this,d);d.target=null}}}const e0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yj=1234567;const ac=Math.PI/180,W_=180/Math.PI;function jr(){const T=Math.random()*4294967295|0,d=Math.random()*4294967295|0,A=Math.random()*4294967295|0,S=Math.random()*4294967295|0;return(e0[T&255]+e0[T>>8&255]+e0[T>>16&255]+e0[T>>24&255]+"-"+e0[d&255]+e0[d>>8&255]+"-"+e0[d>>16&15|64]+e0[d>>24&255]+"-"+e0[A&63|128]+e0[A>>8&255]+"-"+e0[A>>16&255]+e0[A>>24&255]+e0[S&255]+e0[S>>8&255]+e0[S>>16&255]+e0[S>>24&255]).toLowerCase()}function Hi(T,d,A){return Math.max(d,Math.min(A,T))}function k6(T,d){return(T%d+d)%d}function eut(T,d,A,S,M){return S+(T-d)*(M-S)/(A-d)}function nut(T,d,A){return T!==d?(A-T)/(d-T):0}function dc(T,d,A){return(1-A)*T+A*d}function iut(T,d,A,S){return dc(T,d,1-Math.exp(-A*S))}function rut(T,d=1){return d-Math.abs(k6(T,d*2)-d)}function out(T,d,A){return T<=d?0:T>=A?1:(T=(T-d)/(A-d),T*T*(3-2*T))}function sut(T,d,A){return T<=d?0:T>=A?1:(T=(T-d)/(A-d),T*T*T*(T*(T*6-15)+10))}function _ut(T,d){return T+Math.floor(Math.random()*(d-T+1))}function lut(T,d){return T+Math.random()*(d-T)}function cut(T){return T*(.5-Math.random())}function put(T){T!==void 0&&(yj=T);let d=yj+=1831565813;return d=Math.imul(d^d>>>15,d|1),d^=d+Math.imul(d^d>>>7,d|61),((d^d>>>14)>>>0)/4294967296}function uut(T){return T*ac}function fut(T){return T*W_}function aut(T){return(T&T-1)===0&&T!==0}function dut(T){return Math.pow(2,Math.ceil(Math.log(T)/Math.LN2))}function hut(T){return Math.pow(2,Math.floor(Math.log(T)/Math.LN2))}function mut(T,d,A,S,M){const f=Math.cos,B=Math.sin,F=f(A/2),W=B(A/2),G=f((d+S)/2),X=B((d+S)/2),Z=f((d-S)/2),K=B((d-S)/2),$=f((S-d)/2),rt=B((S-d)/2);switch(M){case"XYX":T.set(F*X,W*Z,W*K,F*G);break;case"YZY":T.set(W*K,F*X,W*Z,F*G);break;case"ZXZ":T.set(W*Z,W*K,F*X,F*G);break;case"XZX":T.set(F*X,W*rt,W*$,F*G);break;case"YXY":T.set(W*$,F*X,W*rt,F*G);break;case"ZYZ":T.set(W*rt,W*$,F*X,F*G);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+M)}}function Lr(T,d){switch(d.constructor){case Float32Array:return T;case Uint32Array:return T/4294967295;case Uint16Array:return T/65535;case Uint8Array:return T/255;case Int32Array:return Math.max(T/2147483647,-1);case Int16Array:return Math.max(T/32767,-1);case Int8Array:return Math.max(T/127,-1);default:throw new Error("Invalid component type.")}}function En(T,d){switch(d.constructor){case Float32Array:return T;case Uint32Array:return Math.round(T*4294967295);case Uint16Array:return Math.round(T*65535);case Uint8Array:return Math.round(T*255);case Int32Array:return Math.round(T*2147483647);case Int16Array:return Math.round(T*32767);case Int8Array:return Math.round(T*127);default:throw new Error("Invalid component type.")}}const dW={DEG2RAD:ac,RAD2DEG:W_,generateUUID:jr,clamp:Hi,euclideanModulo:k6,mapLinear:eut,inverseLerp:nut,lerp:dc,damp:iut,pingpong:rut,smoothstep:out,smootherstep:sut,randInt:_ut,randFloat:lut,randFloatSpread:cut,seededRandom:put,degToRad:uut,radToDeg:fut,isPowerOfTwo:aut,ceilPowerOfTwo:dut,floorPowerOfTwo:hut,setQuaternionFromProperEuler:mut,normalize:En,denormalize:Lr};class e2{constructor(d=0,A=0){e2.prototype.isVector2=!0,this.x=d,this.y=A}get width(){return this.x}set width(d){this.x=d}get height(){return this.y}set height(d){this.y=d}set(d,A){return this.x=d,this.y=A,this}setScalar(d){return this.x=d,this.y=d,this}setX(d){return this.x=d,this}setY(d){return this.y=d,this}setComponent(d,A){switch(d){case 0:this.x=A;break;case 1:this.y=A;break;default:throw new Error("index is out of range: "+d)}return this}getComponent(d){switch(d){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+d)}}clone(){return new this.constructor(this.x,this.y)}copy(d){return this.x=d.x,this.y=d.y,this}add(d){return this.x+=d.x,this.y+=d.y,this}addScalar(d){return this.x+=d,this.y+=d,this}addVectors(d,A){return this.x=d.x+A.x,this.y=d.y+A.y,this}addScaledVector(d,A){return this.x+=d.x*A,this.y+=d.y*A,this}sub(d){return this.x-=d.x,this.y-=d.y,this}subScalar(d){return this.x-=d,this.y-=d,this}subVectors(d,A){return this.x=d.x-A.x,this.y=d.y-A.y,this}multiply(d){return this.x*=d.x,this.y*=d.y,this}multiplyScalar(d){return this.x*=d,this.y*=d,this}divide(d){return this.x/=d.x,this.y/=d.y,this}divideScalar(d){return this.multiplyScalar(1/d)}applyMatrix3(d){const A=this.x,S=this.y,M=d.elements;return this.x=M[0]*A+M[3]*S+M[6],this.y=M[1]*A+M[4]*S+M[7],this}min(d){return this.x=Math.min(this.x,d.x),this.y=Math.min(this.y,d.y),this}max(d){return this.x=Math.max(this.x,d.x),this.y=Math.max(this.y,d.y),this}clamp(d,A){return this.x=Math.max(d.x,Math.min(A.x,this.x)),this.y=Math.max(d.y,Math.min(A.y,this.y)),this}clampScalar(d,A){return this.x=Math.max(d,Math.min(A,this.x)),this.y=Math.max(d,Math.min(A,this.y)),this}clampLength(d,A){const S=this.length();return this.divideScalar(S||1).multiplyScalar(Math.max(d,Math.min(A,S)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(d){return this.x*d.x+this.y*d.y}cross(d){return this.x*d.y-this.y*d.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(d){const A=Math.sqrt(this.lengthSq()*d.lengthSq());if(A===0)return Math.PI/2;const S=this.dot(d)/A;return Math.acos(Hi(S,-1,1))}distanceTo(d){return Math.sqrt(this.distanceToSquared(d))}distanceToSquared(d){const A=this.x-d.x,S=this.y-d.y;return A*A+S*S}manhattanDistanceTo(d){return Math.abs(this.x-d.x)+Math.abs(this.y-d.y)}setLength(d){return this.normalize().multiplyScalar(d)}lerp(d,A){return this.x+=(d.x-this.x)*A,this.y+=(d.y-this.y)*A,this}lerpVectors(d,A,S){return this.x=d.x+(A.x-d.x)*S,this.y=d.y+(A.y-d.y)*S,this}equals(d){return d.x===this.x&&d.y===this.y}fromArray(d,A=0){return this.x=d[A],this.y=d[A+1],this}toArray(d=[],A=0){return d[A]=this.x,d[A+1]=this.y,d}fromBufferAttribute(d,A){return this.x=d.getX(A),this.y=d.getY(A),this}rotateAround(d,A){const S=Math.cos(A),M=Math.sin(A),f=this.x-d.x,B=this.y-d.y;return this.x=f*S-B*M+d.x,this.y=f*M+B*S+d.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Z2{constructor(d,A,S,M,f,B,F,W,G){Z2.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],d!==void 0&&this.set(d,A,S,M,f,B,F,W,G)}set(d,A,S,M,f,B,F,W,G){const X=this.elements;return X[0]=d,X[1]=M,X[2]=F,X[3]=A,X[4]=f,X[5]=W,X[6]=S,X[7]=B,X[8]=G,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(d){const A=this.elements,S=d.elements;return A[0]=S[0],A[1]=S[1],A[2]=S[2],A[3]=S[3],A[4]=S[4],A[5]=S[5],A[6]=S[6],A[7]=S[7],A[8]=S[8],this}extractBasis(d,A,S){return d.setFromMatrix3Column(this,0),A.setFromMatrix3Column(this,1),S.setFromMatrix3Column(this,2),this}setFromMatrix4(d){const A=d.elements;return this.set(A[0],A[4],A[8],A[1],A[5],A[9],A[2],A[6],A[10]),this}multiply(d){return this.multiplyMatrices(this,d)}premultiply(d){return this.multiplyMatrices(d,this)}multiplyMatrices(d,A){const S=d.elements,M=A.elements,f=this.elements,B=S[0],F=S[3],W=S[6],G=S[1],X=S[4],Z=S[7],K=S[2],$=S[5],rt=S[8],lt=M[0],nt=M[3],tt=M[6],vt=M[1],ht=M[4],At=M[7],Pt=M[2],Tt=M[5],wt=M[8];return f[0]=B*lt+F*vt+W*Pt,f[3]=B*nt+F*ht+W*Tt,f[6]=B*tt+F*At+W*wt,f[1]=G*lt+X*vt+Z*Pt,f[4]=G*nt+X*ht+Z*Tt,f[7]=G*tt+X*At+Z*wt,f[2]=K*lt+$*vt+rt*Pt,f[5]=K*nt+$*ht+rt*Tt,f[8]=K*tt+$*At+rt*wt,this}multiplyScalar(d){const A=this.elements;return A[0]*=d,A[3]*=d,A[6]*=d,A[1]*=d,A[4]*=d,A[7]*=d,A[2]*=d,A[5]*=d,A[8]*=d,this}determinant(){const d=this.elements,A=d[0],S=d[1],M=d[2],f=d[3],B=d[4],F=d[5],W=d[6],G=d[7],X=d[8];return A*B*X-A*F*G-S*f*X+S*F*W+M*f*G-M*B*W}invert(){const d=this.elements,A=d[0],S=d[1],M=d[2],f=d[3],B=d[4],F=d[5],W=d[6],G=d[7],X=d[8],Z=X*B-F*G,K=F*W-X*f,$=G*f-B*W,rt=A*Z+S*K+M*$;if(rt===0)return this.set(0,0,0,0,0,0,0,0,0);const lt=1/rt;return d[0]=Z*lt,d[1]=(M*G-X*S)*lt,d[2]=(F*S-M*B)*lt,d[3]=K*lt,d[4]=(X*A-M*W)*lt,d[5]=(M*f-F*A)*lt,d[6]=$*lt,d[7]=(S*W-G*A)*lt,d[8]=(B*A-S*f)*lt,this}transpose(){let d;const A=this.elements;return d=A[1],A[1]=A[3],A[3]=d,d=A[2],A[2]=A[6],A[6]=d,d=A[5],A[5]=A[7],A[7]=d,this}getNormalMatrix(d){return this.setFromMatrix4(d).invert().transpose()}transposeIntoArray(d){const A=this.elements;return d[0]=A[0],d[1]=A[3],d[2]=A[6],d[3]=A[1],d[4]=A[4],d[5]=A[7],d[6]=A[2],d[7]=A[5],d[8]=A[8],this}setUvTransform(d,A,S,M,f,B,F){const W=Math.cos(f),G=Math.sin(f);return this.set(S*W,S*G,-S*(W*B+G*F)+B+d,-M*G,M*W,-M*(-G*B+W*F)+F+A,0,0,1),this}scale(d,A){return this.premultiply(b4.makeScale(d,A)),this}rotate(d){return this.premultiply(b4.makeRotation(-d)),this}translate(d,A){return this.premultiply(b4.makeTranslation(d,A)),this}makeTranslation(d,A){return d.isVector2?this.set(1,0,d.x,0,1,d.y,0,0,1):this.set(1,0,d,0,1,A,0,0,1),this}makeRotation(d){const A=Math.cos(d),S=Math.sin(d);return this.set(A,-S,0,S,A,0,0,0,1),this}makeScale(d,A){return this.set(d,0,0,0,A,0,0,0,1),this}equals(d){const A=this.elements,S=d.elements;for(let M=0;M<9;M++)if(A[M]!==S[M])return!1;return!0}fromArray(d,A=0){for(let S=0;S<9;S++)this.elements[S]=d[S+A];return this}toArray(d=[],A=0){const S=this.elements;return d[A]=S[0],d[A+1]=S[1],d[A+2]=S[2],d[A+3]=S[3],d[A+4]=S[4],d[A+5]=S[5],d[A+6]=S[6],d[A+7]=S[7],d[A+8]=S[8],d}clone(){return new this.constructor().fromArray(this.elements)}}const b4=new Z2;function hW(T){for(let d=T.length-1;d>=0;--d)if(T[d]>=65535)return!0;return!1}function Ac(T){return document.createElementNS("http://www.w3.org/1999/xhtml",T)}function gut(){const T=Ac("canvas");return T.style.display="block",T}const bj={};function mW(T){T in bj||(bj[T]=!0,console.warn(T))}const vj=new Z2().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cj=new Z2().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$p={[zi]:{transfer:Uu,primaries:Gu,toReference:T=>T,fromReference:T=>T},[Gi]:{transfer:Hn,primaries:Gu,toReference:T=>T.convertSRGBToLinear(),fromReference:T=>T.convertLinearToSRGB()},[Ku]:{transfer:Uu,primaries:Hu,toReference:T=>T.applyMatrix3(Cj),fromReference:T=>T.applyMatrix3(vj)},[S6]:{transfer:Hn,primaries:Hu,toReference:T=>T.convertSRGBToLinear().applyMatrix3(Cj),fromReference:T=>T.applyMatrix3(vj).convertLinearToSRGB()}},Aut=new Set([zi,Ku]),Mn={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(T){if(!Aut.has(T))throw new Error(`Unsupported working color space, "${T}".`);this._workingColorSpace=T},convert:function(T,d,A){if(this.enabled===!1||d===A||!d||!A)return T;const S=$p[d].toReference,M=$p[A].fromReference;return M(S(T))},fromWorkingColorSpace:function(T,d){return this.convert(T,this._workingColorSpace,d)},toWorkingColorSpace:function(T,d){return this.convert(T,d,this._workingColorSpace)},getPrimaries:function(T){return $p[T].primaries},getTransfer:function(T){return T===Es?Uu:$p[T].transfer}};function P_(T){return T<.04045?T*.0773993808:Math.pow(T*.9478672986+.0521327014,2.4)}function v4(T){return T<.0031308?T*12.92:1.055*Math.pow(T,.41666)-.055}let r_;class yut{static getDataURL(d){if(/^data:/i.test(d.src)||typeof HTMLCanvasElement>"u")return d.src;let A;if(d instanceof HTMLCanvasElement)A=d;else{r_===void 0&&(r_=Ac("canvas")),r_.width=d.width,r_.height=d.height;const S=r_.getContext("2d");d instanceof ImageData?S.putImageData(d,0,0):S.drawImage(d,0,0,d.width,d.height),A=r_}return A.width>2048||A.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",d),A.toDataURL("image/jpeg",.6)):A.toDataURL("image/png")}static sRGBToLinear(d){if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap){const A=Ac("canvas");A.width=d.width,A.height=d.height;const S=A.getContext("2d");S.drawImage(d,0,0,d.width,d.height);const M=S.getImageData(0,0,d.width,d.height),f=M.data;for(let B=0;B<f.length;B++)f[B]=P_(f[B]/255)*255;return S.putImageData(M,0,0),A}else if(d.data){const A=d.data.slice(0);for(let S=0;S<A.length;S++)A instanceof Uint8Array||A instanceof Uint8ClampedArray?A[S]=Math.floor(P_(A[S]/255)*255):A[S]=P_(A[S]);return{data:A,width:d.width,height:d.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),d}}let but=0;class gW{constructor(d=null){this.isSource=!0,Object.defineProperty(this,"id",{value:but++}),this.uuid=jr(),this.data=d,this.dataReady=!0,this.version=0}set needsUpdate(d){d===!0&&this.version++}toJSON(d){const A=d===void 0||typeof d=="string";if(!A&&d.images[this.uuid]!==void 0)return d.images[this.uuid];const S={uuid:this.uuid,url:""},M=this.data;if(M!==null){let f;if(Array.isArray(M)){f=[];for(let B=0,F=M.length;B<F;B++)M[B].isDataTexture?f.push(C4(M[B].image)):f.push(C4(M[B]))}else f=C4(M);S.url=f}return A||(d.images[this.uuid]=S),S}}function C4(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap?yut.getDataURL(T):T.data?{data:Array.from(T.data),width:T.width,height:T.height,type:T.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vut=0;class Ri extends qo{constructor(d=Ri.DEFAULT_IMAGE,A=Ri.DEFAULT_MAPPING,S=uo,M=uo,f=Z0,B=Zo,F=Or,W=Bs,G=Ri.DEFAULT_ANISOTROPY,X=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vut++}),this.uuid=jr(),this.name="",this.source=new gW(d),this.mipmaps=[],this.mapping=A,this.channel=0,this.wrapS=S,this.wrapT=M,this.magFilter=f,this.minFilter=B,this.anisotropy=G,this.format=F,this.internalFormat=null,this.type=W,this.offset=new e2(0,0),this.repeat=new e2(1,1),this.center=new e2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Z2,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(d=null){this.source.data=d}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(d){return this.name=d.name,this.source=d.source,this.mipmaps=d.mipmaps.slice(0),this.mapping=d.mapping,this.channel=d.channel,this.wrapS=d.wrapS,this.wrapT=d.wrapT,this.magFilter=d.magFilter,this.minFilter=d.minFilter,this.anisotropy=d.anisotropy,this.format=d.format,this.internalFormat=d.internalFormat,this.type=d.type,this.offset.copy(d.offset),this.repeat.copy(d.repeat),this.center.copy(d.center),this.rotation=d.rotation,this.matrixAutoUpdate=d.matrixAutoUpdate,this.matrix.copy(d.matrix),this.generateMipmaps=d.generateMipmaps,this.premultiplyAlpha=d.premultiplyAlpha,this.flipY=d.flipY,this.unpackAlignment=d.unpackAlignment,this.colorSpace=d.colorSpace,this.userData=JSON.parse(JSON.stringify(d.userData)),this.needsUpdate=!0,this}toJSON(d){const A=d===void 0||typeof d=="string";if(!A&&d.textures[this.uuid]!==void 0)return d.textures[this.uuid];const S={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(d).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(S.userData=this.userData),A||(d.textures[this.uuid]=S),S}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(d){if(this.mapping!==nW)return d;if(d.applyMatrix3(this.matrix),d.x<0||d.x>1)switch(this.wrapS){case k1:d.x=d.x-Math.floor(d.x);break;case uo:d.x=d.x<0?0:1;break;case Nu:Math.abs(Math.floor(d.x)%2)===1?d.x=Math.ceil(d.x)-d.x:d.x=d.x-Math.floor(d.x);break}if(d.y<0||d.y>1)switch(this.wrapT){case k1:d.y=d.y-Math.floor(d.y);break;case uo:d.y=d.y<0?0:1;break;case Nu:Math.abs(Math.floor(d.y)%2)===1?d.y=Math.ceil(d.y)-d.y:d.y=d.y-Math.floor(d.y);break}return this.flipY&&(d.y=1-d.y),d}set needsUpdate(d){d===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(d){d===!0&&this.pmremVersion++}}Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=nW;Ri.DEFAULT_ANISOTROPY=1;class Dn{constructor(d=0,A=0,S=0,M=1){Dn.prototype.isVector4=!0,this.x=d,this.y=A,this.z=S,this.w=M}get width(){return this.z}set width(d){this.z=d}get height(){return this.w}set height(d){this.w=d}set(d,A,S,M){return this.x=d,this.y=A,this.z=S,this.w=M,this}setScalar(d){return this.x=d,this.y=d,this.z=d,this.w=d,this}setX(d){return this.x=d,this}setY(d){return this.y=d,this}setZ(d){return this.z=d,this}setW(d){return this.w=d,this}setComponent(d,A){switch(d){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;case 3:this.w=A;break;default:throw new Error("index is out of range: "+d)}return this}getComponent(d){switch(d){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+d)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w!==void 0?d.w:1,this}add(d){return this.x+=d.x,this.y+=d.y,this.z+=d.z,this.w+=d.w,this}addScalar(d){return this.x+=d,this.y+=d,this.z+=d,this.w+=d,this}addVectors(d,A){return this.x=d.x+A.x,this.y=d.y+A.y,this.z=d.z+A.z,this.w=d.w+A.w,this}addScaledVector(d,A){return this.x+=d.x*A,this.y+=d.y*A,this.z+=d.z*A,this.w+=d.w*A,this}sub(d){return this.x-=d.x,this.y-=d.y,this.z-=d.z,this.w-=d.w,this}subScalar(d){return this.x-=d,this.y-=d,this.z-=d,this.w-=d,this}subVectors(d,A){return this.x=d.x-A.x,this.y=d.y-A.y,this.z=d.z-A.z,this.w=d.w-A.w,this}multiply(d){return this.x*=d.x,this.y*=d.y,this.z*=d.z,this.w*=d.w,this}multiplyScalar(d){return this.x*=d,this.y*=d,this.z*=d,this.w*=d,this}applyMatrix4(d){const A=this.x,S=this.y,M=this.z,f=this.w,B=d.elements;return this.x=B[0]*A+B[4]*S+B[8]*M+B[12]*f,this.y=B[1]*A+B[5]*S+B[9]*M+B[13]*f,this.z=B[2]*A+B[6]*S+B[10]*M+B[14]*f,this.w=B[3]*A+B[7]*S+B[11]*M+B[15]*f,this}divideScalar(d){return this.multiplyScalar(1/d)}setAxisAngleFromQuaternion(d){this.w=2*Math.acos(d.w);const A=Math.sqrt(1-d.w*d.w);return A<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=d.x/A,this.y=d.y/A,this.z=d.z/A),this}setAxisAngleFromRotationMatrix(d){let A,S,M,f;const W=d.elements,G=W[0],X=W[4],Z=W[8],K=W[1],$=W[5],rt=W[9],lt=W[2],nt=W[6],tt=W[10];if(Math.abs(X-K)<.01&&Math.abs(Z-lt)<.01&&Math.abs(rt-nt)<.01){if(Math.abs(X+K)<.1&&Math.abs(Z+lt)<.1&&Math.abs(rt+nt)<.1&&Math.abs(G+$+tt-3)<.1)return this.set(1,0,0,0),this;A=Math.PI;const ht=(G+1)/2,At=($+1)/2,Pt=(tt+1)/2,Tt=(X+K)/4,wt=(Z+lt)/4,Ht=(rt+nt)/4;return ht>At&&ht>Pt?ht<.01?(S=0,M=.707106781,f=.707106781):(S=Math.sqrt(ht),M=Tt/S,f=wt/S):At>Pt?At<.01?(S=.707106781,M=0,f=.707106781):(M=Math.sqrt(At),S=Tt/M,f=Ht/M):Pt<.01?(S=.707106781,M=.707106781,f=0):(f=Math.sqrt(Pt),S=wt/f,M=Ht/f),this.set(S,M,f,A),this}let vt=Math.sqrt((nt-rt)*(nt-rt)+(Z-lt)*(Z-lt)+(K-X)*(K-X));return Math.abs(vt)<.001&&(vt=1),this.x=(nt-rt)/vt,this.y=(Z-lt)/vt,this.z=(K-X)/vt,this.w=Math.acos((G+$+tt-1)/2),this}min(d){return this.x=Math.min(this.x,d.x),this.y=Math.min(this.y,d.y),this.z=Math.min(this.z,d.z),this.w=Math.min(this.w,d.w),this}max(d){return this.x=Math.max(this.x,d.x),this.y=Math.max(this.y,d.y),this.z=Math.max(this.z,d.z),this.w=Math.max(this.w,d.w),this}clamp(d,A){return this.x=Math.max(d.x,Math.min(A.x,this.x)),this.y=Math.max(d.y,Math.min(A.y,this.y)),this.z=Math.max(d.z,Math.min(A.z,this.z)),this.w=Math.max(d.w,Math.min(A.w,this.w)),this}clampScalar(d,A){return this.x=Math.max(d,Math.min(A,this.x)),this.y=Math.max(d,Math.min(A,this.y)),this.z=Math.max(d,Math.min(A,this.z)),this.w=Math.max(d,Math.min(A,this.w)),this}clampLength(d,A){const S=this.length();return this.divideScalar(S||1).multiplyScalar(Math.max(d,Math.min(A,S)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(d){return this.x*d.x+this.y*d.y+this.z*d.z+this.w*d.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(d){return this.normalize().multiplyScalar(d)}lerp(d,A){return this.x+=(d.x-this.x)*A,this.y+=(d.y-this.y)*A,this.z+=(d.z-this.z)*A,this.w+=(d.w-this.w)*A,this}lerpVectors(d,A,S){return this.x=d.x+(A.x-d.x)*S,this.y=d.y+(A.y-d.y)*S,this.z=d.z+(A.z-d.z)*S,this.w=d.w+(A.w-d.w)*S,this}equals(d){return d.x===this.x&&d.y===this.y&&d.z===this.z&&d.w===this.w}fromArray(d,A=0){return this.x=d[A],this.y=d[A+1],this.z=d[A+2],this.w=d[A+3],this}toArray(d=[],A=0){return d[A]=this.x,d[A+1]=this.y,d[A+2]=this.z,d[A+3]=this.w,d}fromBufferAttribute(d,A){return this.x=d.getX(A),this.y=d.getY(A),this.z=d.getZ(A),this.w=d.getW(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cut extends qo{constructor(d=1,A=1,S={}){super(),this.isRenderTarget=!0,this.width=d,this.height=A,this.depth=1,this.scissor=new Dn(0,0,d,A),this.scissorTest=!1,this.viewport=new Dn(0,0,d,A);const M={width:d,height:A,depth:1};S=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Z0,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},S);const f=new Ri(M,S.mapping,S.wrapS,S.wrapT,S.magFilter,S.minFilter,S.format,S.type,S.anisotropy,S.colorSpace);f.flipY=!1,f.generateMipmaps=S.generateMipmaps,f.internalFormat=S.internalFormat,this.textures=[];const B=S.count;for(let F=0;F<B;F++)this.textures[F]=f.clone(),this.textures[F].isRenderTargetTexture=!0;this.depthBuffer=S.depthBuffer,this.stencilBuffer=S.stencilBuffer,this.resolveDepthBuffer=S.resolveDepthBuffer,this.resolveStencilBuffer=S.resolveStencilBuffer,this.depthTexture=S.depthTexture,this.samples=S.samples}get texture(){return this.textures[0]}set texture(d){this.textures[0]=d}setSize(d,A,S=1){if(this.width!==d||this.height!==A||this.depth!==S){this.width=d,this.height=A,this.depth=S;for(let M=0,f=this.textures.length;M<f;M++)this.textures[M].image.width=d,this.textures[M].image.height=A,this.textures[M].image.depth=S;this.dispose()}this.viewport.set(0,0,d,A),this.scissor.set(0,0,d,A)}clone(){return new this.constructor().copy(this)}copy(d){this.width=d.width,this.height=d.height,this.depth=d.depth,this.scissor.copy(d.scissor),this.scissorTest=d.scissorTest,this.viewport.copy(d.viewport),this.textures.length=0;for(let S=0,M=d.textures.length;S<M;S++)this.textures[S]=d.textures[S].clone(),this.textures[S].isRenderTargetTexture=!0;const A=Object.assign({},d.texture.image);return this.texture.source=new gW(A),this.depthBuffer=d.depthBuffer,this.stencilBuffer=d.stencilBuffer,this.resolveDepthBuffer=d.resolveDepthBuffer,this.resolveStencilBuffer=d.resolveStencilBuffer,d.depthTexture!==null&&(this.depthTexture=d.depthTexture.clone()),this.samples=d.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends Cut{constructor(d=1,A=1,S={}){super(d,A,S),this.isWebGLRenderTarget=!0}}class AW extends Ri{constructor(d=null,A=1,S=1,M=1){super(null),this.isDataArrayTexture=!0,this.image={data:d,width:A,height:S,depth:M},this.magFilter=v0,this.minFilter=v0,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sut extends Ri{constructor(d=null,A=1,S=1,M=1){super(null),this.isData3DTexture=!0,this.image={data:d,width:A,height:S,depth:M},this.magFilter=v0,this.minFilter=v0,this.wrapR=uo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class o0{constructor(d=0,A=0,S=0,M=1){this.isQuaternion=!0,this._x=d,this._y=A,this._z=S,this._w=M}static slerpFlat(d,A,S,M,f,B,F){let W=S[M+0],G=S[M+1],X=S[M+2],Z=S[M+3];const K=f[B+0],$=f[B+1],rt=f[B+2],lt=f[B+3];if(F===0){d[A+0]=W,d[A+1]=G,d[A+2]=X,d[A+3]=Z;return}if(F===1){d[A+0]=K,d[A+1]=$,d[A+2]=rt,d[A+3]=lt;return}if(Z!==lt||W!==K||G!==$||X!==rt){let nt=1-F;const tt=W*K+G*$+X*rt+Z*lt,vt=tt>=0?1:-1,ht=1-tt*tt;if(ht>Number.EPSILON){const Pt=Math.sqrt(ht),Tt=Math.atan2(Pt,tt*vt);nt=Math.sin(nt*Tt)/Pt,F=Math.sin(F*Tt)/Pt}const At=F*vt;if(W=W*nt+K*At,G=G*nt+$*At,X=X*nt+rt*At,Z=Z*nt+lt*At,nt===1-F){const Pt=1/Math.sqrt(W*W+G*G+X*X+Z*Z);W*=Pt,G*=Pt,X*=Pt,Z*=Pt}}d[A]=W,d[A+1]=G,d[A+2]=X,d[A+3]=Z}static multiplyQuaternionsFlat(d,A,S,M,f,B){const F=S[M],W=S[M+1],G=S[M+2],X=S[M+3],Z=f[B],K=f[B+1],$=f[B+2],rt=f[B+3];return d[A]=F*rt+X*Z+W*$-G*K,d[A+1]=W*rt+X*K+G*Z-F*$,d[A+2]=G*rt+X*$+F*K-W*Z,d[A+3]=X*rt-F*Z-W*K-G*$,d}get x(){return this._x}set x(d){this._x=d,this._onChangeCallback()}get y(){return this._y}set y(d){this._y=d,this._onChangeCallback()}get z(){return this._z}set z(d){this._z=d,this._onChangeCallback()}get w(){return this._w}set w(d){this._w=d,this._onChangeCallback()}set(d,A,S,M){return this._x=d,this._y=A,this._z=S,this._w=M,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(d){return this._x=d.x,this._y=d.y,this._z=d.z,this._w=d.w,this._onChangeCallback(),this}setFromEuler(d,A=!0){const S=d._x,M=d._y,f=d._z,B=d._order,F=Math.cos,W=Math.sin,G=F(S/2),X=F(M/2),Z=F(f/2),K=W(S/2),$=W(M/2),rt=W(f/2);switch(B){case"XYZ":this._x=K*X*Z+G*$*rt,this._y=G*$*Z-K*X*rt,this._z=G*X*rt+K*$*Z,this._w=G*X*Z-K*$*rt;break;case"YXZ":this._x=K*X*Z+G*$*rt,this._y=G*$*Z-K*X*rt,this._z=G*X*rt-K*$*Z,this._w=G*X*Z+K*$*rt;break;case"ZXY":this._x=K*X*Z-G*$*rt,this._y=G*$*Z+K*X*rt,this._z=G*X*rt+K*$*Z,this._w=G*X*Z-K*$*rt;break;case"ZYX":this._x=K*X*Z-G*$*rt,this._y=G*$*Z+K*X*rt,this._z=G*X*rt-K*$*Z,this._w=G*X*Z+K*$*rt;break;case"YZX":this._x=K*X*Z+G*$*rt,this._y=G*$*Z+K*X*rt,this._z=G*X*rt-K*$*Z,this._w=G*X*Z-K*$*rt;break;case"XZY":this._x=K*X*Z-G*$*rt,this._y=G*$*Z-K*X*rt,this._z=G*X*rt+K*$*Z,this._w=G*X*Z+K*$*rt;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+B)}return A===!0&&this._onChangeCallback(),this}setFromAxisAngle(d,A){const S=A/2,M=Math.sin(S);return this._x=d.x*M,this._y=d.y*M,this._z=d.z*M,this._w=Math.cos(S),this._onChangeCallback(),this}setFromRotationMatrix(d){const A=d.elements,S=A[0],M=A[4],f=A[8],B=A[1],F=A[5],W=A[9],G=A[2],X=A[6],Z=A[10],K=S+F+Z;if(K>0){const $=.5/Math.sqrt(K+1);this._w=.25/$,this._x=(X-W)*$,this._y=(f-G)*$,this._z=(B-M)*$}else if(S>F&&S>Z){const $=2*Math.sqrt(1+S-F-Z);this._w=(X-W)/$,this._x=.25*$,this._y=(M+B)/$,this._z=(f+G)/$}else if(F>Z){const $=2*Math.sqrt(1+F-S-Z);this._w=(f-G)/$,this._x=(M+B)/$,this._y=.25*$,this._z=(W+X)/$}else{const $=2*Math.sqrt(1+Z-S-F);this._w=(B-M)/$,this._x=(f+G)/$,this._y=(W+X)/$,this._z=.25*$}return this._onChangeCallback(),this}setFromUnitVectors(d,A){let S=d.dot(A)+1;return S<Number.EPSILON?(S=0,Math.abs(d.x)>Math.abs(d.z)?(this._x=-d.y,this._y=d.x,this._z=0,this._w=S):(this._x=0,this._y=-d.z,this._z=d.y,this._w=S)):(this._x=d.y*A.z-d.z*A.y,this._y=d.z*A.x-d.x*A.z,this._z=d.x*A.y-d.y*A.x,this._w=S),this.normalize()}angleTo(d){return 2*Math.acos(Math.abs(Hi(this.dot(d),-1,1)))}rotateTowards(d,A){const S=this.angleTo(d);if(S===0)return this;const M=Math.min(1,A/S);return this.slerp(d,M),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(d){return this._x*d._x+this._y*d._y+this._z*d._z+this._w*d._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let d=this.length();return d===0?(this._x=0,this._y=0,this._z=0,this._w=1):(d=1/d,this._x=this._x*d,this._y=this._y*d,this._z=this._z*d,this._w=this._w*d),this._onChangeCallback(),this}multiply(d){return this.multiplyQuaternions(this,d)}premultiply(d){return this.multiplyQuaternions(d,this)}multiplyQuaternions(d,A){const S=d._x,M=d._y,f=d._z,B=d._w,F=A._x,W=A._y,G=A._z,X=A._w;return this._x=S*X+B*F+M*G-f*W,this._y=M*X+B*W+f*F-S*G,this._z=f*X+B*G+S*W-M*F,this._w=B*X-S*F-M*W-f*G,this._onChangeCallback(),this}slerp(d,A){if(A===0)return this;if(A===1)return this.copy(d);const S=this._x,M=this._y,f=this._z,B=this._w;let F=B*d._w+S*d._x+M*d._y+f*d._z;if(F<0?(this._w=-d._w,this._x=-d._x,this._y=-d._y,this._z=-d._z,F=-F):this.copy(d),F>=1)return this._w=B,this._x=S,this._y=M,this._z=f,this;const W=1-F*F;if(W<=Number.EPSILON){const $=1-A;return this._w=$*B+A*this._w,this._x=$*S+A*this._x,this._y=$*M+A*this._y,this._z=$*f+A*this._z,this.normalize(),this}const G=Math.sqrt(W),X=Math.atan2(G,F),Z=Math.sin((1-A)*X)/G,K=Math.sin(A*X)/G;return this._w=B*Z+this._w*K,this._x=S*Z+this._x*K,this._y=M*Z+this._y*K,this._z=f*Z+this._z*K,this._onChangeCallback(),this}slerpQuaternions(d,A,S){return this.copy(d).slerp(A,S)}random(){const d=2*Math.PI*Math.random(),A=2*Math.PI*Math.random(),S=Math.random(),M=Math.sqrt(1-S),f=Math.sqrt(S);return this.set(M*Math.sin(d),M*Math.cos(d),f*Math.sin(A),f*Math.cos(A))}equals(d){return d._x===this._x&&d._y===this._y&&d._z===this._z&&d._w===this._w}fromArray(d,A=0){return this._x=d[A],this._y=d[A+1],this._z=d[A+2],this._w=d[A+3],this._onChangeCallback(),this}toArray(d=[],A=0){return d[A]=this._x,d[A+1]=this._y,d[A+2]=this._z,d[A+3]=this._w,d}fromBufferAttribute(d,A){return this._x=d.getX(A),this._y=d.getY(A),this._z=d.getZ(A),this._w=d.getW(A),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(d){return this._onChangeCallback=d,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class xt{constructor(d=0,A=0,S=0){xt.prototype.isVector3=!0,this.x=d,this.y=A,this.z=S}set(d,A,S){return S===void 0&&(S=this.z),this.x=d,this.y=A,this.z=S,this}setScalar(d){return this.x=d,this.y=d,this.z=d,this}setX(d){return this.x=d,this}setY(d){return this.y=d,this}setZ(d){return this.z=d,this}setComponent(d,A){switch(d){case 0:this.x=A;break;case 1:this.y=A;break;case 2:this.z=A;break;default:throw new Error("index is out of range: "+d)}return this}getComponent(d){switch(d){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+d)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(d){return this.x=d.x,this.y=d.y,this.z=d.z,this}add(d){return this.x+=d.x,this.y+=d.y,this.z+=d.z,this}addScalar(d){return this.x+=d,this.y+=d,this.z+=d,this}addVectors(d,A){return this.x=d.x+A.x,this.y=d.y+A.y,this.z=d.z+A.z,this}addScaledVector(d,A){return this.x+=d.x*A,this.y+=d.y*A,this.z+=d.z*A,this}sub(d){return this.x-=d.x,this.y-=d.y,this.z-=d.z,this}subScalar(d){return this.x-=d,this.y-=d,this.z-=d,this}subVectors(d,A){return this.x=d.x-A.x,this.y=d.y-A.y,this.z=d.z-A.z,this}multiply(d){return this.x*=d.x,this.y*=d.y,this.z*=d.z,this}multiplyScalar(d){return this.x*=d,this.y*=d,this.z*=d,this}multiplyVectors(d,A){return this.x=d.x*A.x,this.y=d.y*A.y,this.z=d.z*A.z,this}applyEuler(d){return this.applyQuaternion(Sj.setFromEuler(d))}applyAxisAngle(d,A){return this.applyQuaternion(Sj.setFromAxisAngle(d,A))}applyMatrix3(d){const A=this.x,S=this.y,M=this.z,f=d.elements;return this.x=f[0]*A+f[3]*S+f[6]*M,this.y=f[1]*A+f[4]*S+f[7]*M,this.z=f[2]*A+f[5]*S+f[8]*M,this}applyNormalMatrix(d){return this.applyMatrix3(d).normalize()}applyMatrix4(d){const A=this.x,S=this.y,M=this.z,f=d.elements,B=1/(f[3]*A+f[7]*S+f[11]*M+f[15]);return this.x=(f[0]*A+f[4]*S+f[8]*M+f[12])*B,this.y=(f[1]*A+f[5]*S+f[9]*M+f[13])*B,this.z=(f[2]*A+f[6]*S+f[10]*M+f[14])*B,this}applyQuaternion(d){const A=this.x,S=this.y,M=this.z,f=d.x,B=d.y,F=d.z,W=d.w,G=2*(B*M-F*S),X=2*(F*A-f*M),Z=2*(f*S-B*A);return this.x=A+W*G+B*Z-F*X,this.y=S+W*X+F*G-f*Z,this.z=M+W*Z+f*X-B*G,this}project(d){return this.applyMatrix4(d.matrixWorldInverse).applyMatrix4(d.projectionMatrix)}unproject(d){return this.applyMatrix4(d.projectionMatrixInverse).applyMatrix4(d.matrixWorld)}transformDirection(d){const A=this.x,S=this.y,M=this.z,f=d.elements;return this.x=f[0]*A+f[4]*S+f[8]*M,this.y=f[1]*A+f[5]*S+f[9]*M,this.z=f[2]*A+f[6]*S+f[10]*M,this.normalize()}divide(d){return this.x/=d.x,this.y/=d.y,this.z/=d.z,this}divideScalar(d){return this.multiplyScalar(1/d)}min(d){return this.x=Math.min(this.x,d.x),this.y=Math.min(this.y,d.y),this.z=Math.min(this.z,d.z),this}max(d){return this.x=Math.max(this.x,d.x),this.y=Math.max(this.y,d.y),this.z=Math.max(this.z,d.z),this}clamp(d,A){return this.x=Math.max(d.x,Math.min(A.x,this.x)),this.y=Math.max(d.y,Math.min(A.y,this.y)),this.z=Math.max(d.z,Math.min(A.z,this.z)),this}clampScalar(d,A){return this.x=Math.max(d,Math.min(A,this.x)),this.y=Math.max(d,Math.min(A,this.y)),this.z=Math.max(d,Math.min(A,this.z)),this}clampLength(d,A){const S=this.length();return this.divideScalar(S||1).multiplyScalar(Math.max(d,Math.min(A,S)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(d){return this.x*d.x+this.y*d.y+this.z*d.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(d){return this.normalize().multiplyScalar(d)}lerp(d,A){return this.x+=(d.x-this.x)*A,this.y+=(d.y-this.y)*A,this.z+=(d.z-this.z)*A,this}lerpVectors(d,A,S){return this.x=d.x+(A.x-d.x)*S,this.y=d.y+(A.y-d.y)*S,this.z=d.z+(A.z-d.z)*S,this}cross(d){return this.crossVectors(this,d)}crossVectors(d,A){const S=d.x,M=d.y,f=d.z,B=A.x,F=A.y,W=A.z;return this.x=M*W-f*F,this.y=f*B-S*W,this.z=S*F-M*B,this}projectOnVector(d){const A=d.lengthSq();if(A===0)return this.set(0,0,0);const S=d.dot(this)/A;return this.copy(d).multiplyScalar(S)}projectOnPlane(d){return S4.copy(this).projectOnVector(d),this.sub(S4)}reflect(d){return this.sub(S4.copy(d).multiplyScalar(2*this.dot(d)))}angleTo(d){const A=Math.sqrt(this.lengthSq()*d.lengthSq());if(A===0)return Math.PI/2;const S=this.dot(d)/A;return Math.acos(Hi(S,-1,1))}distanceTo(d){return Math.sqrt(this.distanceToSquared(d))}distanceToSquared(d){const A=this.x-d.x,S=this.y-d.y,M=this.z-d.z;return A*A+S*S+M*M}manhattanDistanceTo(d){return Math.abs(this.x-d.x)+Math.abs(this.y-d.y)+Math.abs(this.z-d.z)}setFromSpherical(d){return this.setFromSphericalCoords(d.radius,d.phi,d.theta)}setFromSphericalCoords(d,A,S){const M=Math.sin(A)*d;return this.x=M*Math.sin(S),this.y=Math.cos(A)*d,this.z=M*Math.cos(S),this}setFromCylindrical(d){return this.setFromCylindricalCoords(d.radius,d.theta,d.y)}setFromCylindricalCoords(d,A,S){return this.x=d*Math.sin(A),this.y=S,this.z=d*Math.cos(A),this}setFromMatrixPosition(d){const A=d.elements;return this.x=A[12],this.y=A[13],this.z=A[14],this}setFromMatrixScale(d){const A=this.setFromMatrixColumn(d,0).length(),S=this.setFromMatrixColumn(d,1).length(),M=this.setFromMatrixColumn(d,2).length();return this.x=A,this.y=S,this.z=M,this}setFromMatrixColumn(d,A){return this.fromArray(d.elements,A*4)}setFromMatrix3Column(d,A){return this.fromArray(d.elements,A*3)}setFromEuler(d){return this.x=d._x,this.y=d._y,this.z=d._z,this}setFromColor(d){return this.x=d.r,this.y=d.g,this.z=d.b,this}equals(d){return d.x===this.x&&d.y===this.y&&d.z===this.z}fromArray(d,A=0){return this.x=d[A],this.y=d[A+1],this.z=d[A+2],this}toArray(d=[],A=0){return d[A]=this.x,d[A+1]=this.y,d[A+2]=this.z,d}fromBufferAttribute(d,A){return this.x=d.getX(A),this.y=d.getY(A),this.z=d.getZ(A),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const d=Math.random()*Math.PI*2,A=Math.random()*2-1,S=Math.sqrt(1-A*A);return this.x=S*Math.cos(d),this.y=A,this.z=S*Math.sin(d),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const S4=new xt,Sj=new o0;class Nr{constructor(d=new xt(1/0,1/0,1/0),A=new xt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=d,this.max=A}set(d,A){return this.min.copy(d),this.max.copy(A),this}setFromArray(d){this.makeEmpty();for(let A=0,S=d.length;A<S;A+=3)this.expandByPoint(Ir.fromArray(d,A));return this}setFromBufferAttribute(d){this.makeEmpty();for(let A=0,S=d.count;A<S;A++)this.expandByPoint(Ir.fromBufferAttribute(d,A));return this}setFromPoints(d){this.makeEmpty();for(let A=0,S=d.length;A<S;A++)this.expandByPoint(d[A]);return this}setFromCenterAndSize(d,A){const S=Ir.copy(A).multiplyScalar(.5);return this.min.copy(d).sub(S),this.max.copy(d).add(S),this}setFromObject(d,A=!1){return this.makeEmpty(),this.expandByObject(d,A)}clone(){return new this.constructor().copy(this)}copy(d){return this.min.copy(d.min),this.max.copy(d.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(d){return this.isEmpty()?d.set(0,0,0):d.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(d){return this.isEmpty()?d.set(0,0,0):d.subVectors(this.max,this.min)}expandByPoint(d){return this.min.min(d),this.max.max(d),this}expandByVector(d){return this.min.sub(d),this.max.add(d),this}expandByScalar(d){return this.min.addScalar(-d),this.max.addScalar(d),this}expandByObject(d,A=!1){d.updateWorldMatrix(!1,!1);const S=d.geometry;if(S!==void 0){const f=S.getAttribute("position");if(A===!0&&f!==void 0&&d.isInstancedMesh!==!0)for(let B=0,F=f.count;B<F;B++)d.isMesh===!0?d.getVertexPosition(B,Ir):Ir.fromBufferAttribute(f,B),Ir.applyMatrix4(d.matrixWorld),this.expandByPoint(Ir);else d.boundingBox!==void 0?(d.boundingBox===null&&d.computeBoundingBox(),tu.copy(d.boundingBox)):(S.boundingBox===null&&S.computeBoundingBox(),tu.copy(S.boundingBox)),tu.applyMatrix4(d.matrixWorld),this.union(tu)}const M=d.children;for(let f=0,B=M.length;f<B;f++)this.expandByObject(M[f],A);return this}containsPoint(d){return!(d.x<this.min.x||d.x>this.max.x||d.y<this.min.y||d.y>this.max.y||d.z<this.min.z||d.z>this.max.z)}containsBox(d){return this.min.x<=d.min.x&&d.max.x<=this.max.x&&this.min.y<=d.min.y&&d.max.y<=this.max.y&&this.min.z<=d.min.z&&d.max.z<=this.max.z}getParameter(d,A){return A.set((d.x-this.min.x)/(this.max.x-this.min.x),(d.y-this.min.y)/(this.max.y-this.min.y),(d.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(d){return!(d.max.x<this.min.x||d.min.x>this.max.x||d.max.y<this.min.y||d.min.y>this.max.y||d.max.z<this.min.z||d.min.z>this.max.z)}intersectsSphere(d){return this.clampPoint(d.center,Ir),Ir.distanceToSquared(d.center)<=d.radius*d.radius}intersectsPlane(d){let A,S;return d.normal.x>0?(A=d.normal.x*this.min.x,S=d.normal.x*this.max.x):(A=d.normal.x*this.max.x,S=d.normal.x*this.min.x),d.normal.y>0?(A+=d.normal.y*this.min.y,S+=d.normal.y*this.max.y):(A+=d.normal.y*this.max.y,S+=d.normal.y*this.min.y),d.normal.z>0?(A+=d.normal.z*this.min.z,S+=d.normal.z*this.max.z):(A+=d.normal.z*this.max.z,S+=d.normal.z*this.min.z),A<=-d.constant&&S>=-d.constant}intersectsTriangle(d){if(this.isEmpty())return!1;this.getCenter($l),eu.subVectors(this.max,$l),o_.subVectors(d.a,$l),s_.subVectors(d.b,$l),__.subVectors(d.c,$l),bs.subVectors(s_,o_),vs.subVectors(__,s_),o1.subVectors(o_,__);let A=[0,-bs.z,bs.y,0,-vs.z,vs.y,0,-o1.z,o1.y,bs.z,0,-bs.x,vs.z,0,-vs.x,o1.z,0,-o1.x,-bs.y,bs.x,0,-vs.y,vs.x,0,-o1.y,o1.x,0];return!k4(A,o_,s_,__,eu)||(A=[1,0,0,0,1,0,0,0,1],!k4(A,o_,s_,__,eu))?!1:(nu.crossVectors(bs,vs),A=[nu.x,nu.y,nu.z],k4(A,o_,s_,__,eu))}clampPoint(d,A){return A.copy(d).clamp(this.min,this.max)}distanceToPoint(d){return this.clampPoint(d,Ir).distanceTo(d)}getBoundingSphere(d){return this.isEmpty()?d.makeEmpty():(this.getCenter(d.center),d.radius=this.getSize(Ir).length()*.5),d}intersect(d){return this.min.max(d.min),this.max.min(d.max),this.isEmpty()&&this.makeEmpty(),this}union(d){return this.min.min(d.min),this.max.max(d.max),this}applyMatrix4(d){return this.isEmpty()?this:(Wo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(d),Wo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(d),Wo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(d),Wo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(d),Wo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(d),Wo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(d),Wo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(d),Wo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(d),this.setFromPoints(Wo),this)}translate(d){return this.min.add(d),this.max.add(d),this}equals(d){return d.min.equals(this.min)&&d.max.equals(this.max)}}const Wo=[new xt,new xt,new xt,new xt,new xt,new xt,new xt,new xt],Ir=new xt,tu=new Nr,o_=new xt,s_=new xt,__=new xt,bs=new xt,vs=new xt,o1=new xt,$l=new xt,eu=new xt,nu=new xt,s1=new xt;function k4(T,d,A,S,M){for(let f=0,B=T.length-3;f<=B;f+=3){s1.fromArray(T,f);const F=M.x*Math.abs(s1.x)+M.y*Math.abs(s1.y)+M.z*Math.abs(s1.z),W=d.dot(s1),G=A.dot(s1),X=S.dot(s1);if(Math.max(-Math.max(W,G,X),Math.min(W,G,X))>F)return!1}return!0}const kut=new Nr,tc=new xt,x4=new xt;let go=class{constructor(d=new xt,A=-1){this.isSphere=!0,this.center=d,this.radius=A}set(d,A){return this.center.copy(d),this.radius=A,this}setFromPoints(d,A){const S=this.center;A!==void 0?S.copy(A):kut.setFromPoints(d).getCenter(S);let M=0;for(let f=0,B=d.length;f<B;f++)M=Math.max(M,S.distanceToSquared(d[f]));return this.radius=Math.sqrt(M),this}copy(d){return this.center.copy(d.center),this.radius=d.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(d){return d.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(d){return d.distanceTo(this.center)-this.radius}intersectsSphere(d){const A=this.radius+d.radius;return d.center.distanceToSquared(this.center)<=A*A}intersectsBox(d){return d.intersectsSphere(this)}intersectsPlane(d){return Math.abs(d.distanceToPoint(this.center))<=this.radius}clampPoint(d,A){const S=this.center.distanceToSquared(d);return A.copy(d),S>this.radius*this.radius&&(A.sub(this.center).normalize(),A.multiplyScalar(this.radius).add(this.center)),A}getBoundingBox(d){return this.isEmpty()?(d.makeEmpty(),d):(d.set(this.center,this.center),d.expandByScalar(this.radius),d)}applyMatrix4(d){return this.center.applyMatrix4(d),this.radius=this.radius*d.getMaxScaleOnAxis(),this}translate(d){return this.center.add(d),this}expandByPoint(d){if(this.isEmpty())return this.center.copy(d),this.radius=0,this;tc.subVectors(d,this.center);const A=tc.lengthSq();if(A>this.radius*this.radius){const S=Math.sqrt(A),M=(S-this.radius)*.5;this.center.addScaledVector(tc,M/S),this.radius+=M}return this}union(d){return d.isEmpty()?this:this.isEmpty()?(this.copy(d),this):(this.center.equals(d.center)===!0?this.radius=Math.max(this.radius,d.radius):(x4.subVectors(d.center,this.center).setLength(d.radius),this.expandByPoint(tc.copy(d.center).add(x4)),this.expandByPoint(tc.copy(d.center).sub(x4))),this)}equals(d){return d.center.equals(this.center)&&d.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Uo=new xt,w4=new xt,iu=new xt,Cs=new xt,M4=new xt,ru=new xt,R4=new xt;class V_{constructor(d=new xt,A=new xt(0,0,-1)){this.origin=d,this.direction=A}set(d,A){return this.origin.copy(d),this.direction.copy(A),this}copy(d){return this.origin.copy(d.origin),this.direction.copy(d.direction),this}at(d,A){return A.copy(this.origin).addScaledVector(this.direction,d)}lookAt(d){return this.direction.copy(d).sub(this.origin).normalize(),this}recast(d){return this.origin.copy(this.at(d,Uo)),this}closestPointToPoint(d,A){A.subVectors(d,this.origin);const S=A.dot(this.direction);return S<0?A.copy(this.origin):A.copy(this.origin).addScaledVector(this.direction,S)}distanceToPoint(d){return Math.sqrt(this.distanceSqToPoint(d))}distanceSqToPoint(d){const A=Uo.subVectors(d,this.origin).dot(this.direction);return A<0?this.origin.distanceToSquared(d):(Uo.copy(this.origin).addScaledVector(this.direction,A),Uo.distanceToSquared(d))}distanceSqToSegment(d,A,S,M){w4.copy(d).add(A).multiplyScalar(.5),iu.copy(A).sub(d).normalize(),Cs.copy(this.origin).sub(w4);const f=d.distanceTo(A)*.5,B=-this.direction.dot(iu),F=Cs.dot(this.direction),W=-Cs.dot(iu),G=Cs.lengthSq(),X=Math.abs(1-B*B);let Z,K,$,rt;if(X>0)if(Z=B*W-F,K=B*F-W,rt=f*X,Z>=0)if(K>=-rt)if(K<=rt){const lt=1/X;Z*=lt,K*=lt,$=Z*(Z+B*K+2*F)+K*(B*Z+K+2*W)+G}else K=f,Z=Math.max(0,-(B*K+F)),$=-Z*Z+K*(K+2*W)+G;else K=-f,Z=Math.max(0,-(B*K+F)),$=-Z*Z+K*(K+2*W)+G;else K<=-rt?(Z=Math.max(0,-(-B*f+F)),K=Z>0?-f:Math.min(Math.max(-f,-W),f),$=-Z*Z+K*(K+2*W)+G):K<=rt?(Z=0,K=Math.min(Math.max(-f,-W),f),$=K*(K+2*W)+G):(Z=Math.max(0,-(B*f+F)),K=Z>0?f:Math.min(Math.max(-f,-W),f),$=-Z*Z+K*(K+2*W)+G);else K=B>0?-f:f,Z=Math.max(0,-(B*K+F)),$=-Z*Z+K*(K+2*W)+G;return S&&S.copy(this.origin).addScaledVector(this.direction,Z),M&&M.copy(w4).addScaledVector(iu,K),$}intersectSphere(d,A){Uo.subVectors(d.center,this.origin);const S=Uo.dot(this.direction),M=Uo.dot(Uo)-S*S,f=d.radius*d.radius;if(M>f)return null;const B=Math.sqrt(f-M),F=S-B,W=S+B;return W<0?null:F<0?this.at(W,A):this.at(F,A)}intersectsSphere(d){return this.distanceSqToPoint(d.center)<=d.radius*d.radius}distanceToPlane(d){const A=d.normal.dot(this.direction);if(A===0)return d.distanceToPoint(this.origin)===0?0:null;const S=-(this.origin.dot(d.normal)+d.constant)/A;return S>=0?S:null}intersectPlane(d,A){const S=this.distanceToPlane(d);return S===null?null:this.at(S,A)}intersectsPlane(d){const A=d.distanceToPoint(this.origin);return A===0||d.normal.dot(this.direction)*A<0}intersectBox(d,A){let S,M,f,B,F,W;const G=1/this.direction.x,X=1/this.direction.y,Z=1/this.direction.z,K=this.origin;return G>=0?(S=(d.min.x-K.x)*G,M=(d.max.x-K.x)*G):(S=(d.max.x-K.x)*G,M=(d.min.x-K.x)*G),X>=0?(f=(d.min.y-K.y)*X,B=(d.max.y-K.y)*X):(f=(d.max.y-K.y)*X,B=(d.min.y-K.y)*X),S>B||f>M||((f>S||isNaN(S))&&(S=f),(B<M||isNaN(M))&&(M=B),Z>=0?(F=(d.min.z-K.z)*Z,W=(d.max.z-K.z)*Z):(F=(d.max.z-K.z)*Z,W=(d.min.z-K.z)*Z),S>W||F>M)||((F>S||S!==S)&&(S=F),(W<M||M!==M)&&(M=W),M<0)?null:this.at(S>=0?S:M,A)}intersectsBox(d){return this.intersectBox(d,Uo)!==null}intersectTriangle(d,A,S,M,f){M4.subVectors(A,d),ru.subVectors(S,d),R4.crossVectors(M4,ru);let B=this.direction.dot(R4),F;if(B>0){if(M)return null;F=1}else if(B<0)F=-1,B=-B;else return null;Cs.subVectors(this.origin,d);const W=F*this.direction.dot(ru.crossVectors(Cs,ru));if(W<0)return null;const G=F*this.direction.dot(M4.cross(Cs));if(G<0||W+G>B)return null;const X=-F*Cs.dot(R4);return X<0?null:this.at(X/B,f)}applyMatrix4(d){return this.origin.applyMatrix4(d),this.direction.transformDirection(d),this}equals(d){return d.origin.equals(this.origin)&&d.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x2{constructor(d,A,S,M,f,B,F,W,G,X,Z,K,$,rt,lt,nt){x2.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],d!==void 0&&this.set(d,A,S,M,f,B,F,W,G,X,Z,K,$,rt,lt,nt)}set(d,A,S,M,f,B,F,W,G,X,Z,K,$,rt,lt,nt){const tt=this.elements;return tt[0]=d,tt[4]=A,tt[8]=S,tt[12]=M,tt[1]=f,tt[5]=B,tt[9]=F,tt[13]=W,tt[2]=G,tt[6]=X,tt[10]=Z,tt[14]=K,tt[3]=$,tt[7]=rt,tt[11]=lt,tt[15]=nt,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new x2().fromArray(this.elements)}copy(d){const A=this.elements,S=d.elements;return A[0]=S[0],A[1]=S[1],A[2]=S[2],A[3]=S[3],A[4]=S[4],A[5]=S[5],A[6]=S[6],A[7]=S[7],A[8]=S[8],A[9]=S[9],A[10]=S[10],A[11]=S[11],A[12]=S[12],A[13]=S[13],A[14]=S[14],A[15]=S[15],this}copyPosition(d){const A=this.elements,S=d.elements;return A[12]=S[12],A[13]=S[13],A[14]=S[14],this}setFromMatrix3(d){const A=d.elements;return this.set(A[0],A[3],A[6],0,A[1],A[4],A[7],0,A[2],A[5],A[8],0,0,0,0,1),this}extractBasis(d,A,S){return d.setFromMatrixColumn(this,0),A.setFromMatrixColumn(this,1),S.setFromMatrixColumn(this,2),this}makeBasis(d,A,S){return this.set(d.x,A.x,S.x,0,d.y,A.y,S.y,0,d.z,A.z,S.z,0,0,0,0,1),this}extractRotation(d){const A=this.elements,S=d.elements,M=1/l_.setFromMatrixColumn(d,0).length(),f=1/l_.setFromMatrixColumn(d,1).length(),B=1/l_.setFromMatrixColumn(d,2).length();return A[0]=S[0]*M,A[1]=S[1]*M,A[2]=S[2]*M,A[3]=0,A[4]=S[4]*f,A[5]=S[5]*f,A[6]=S[6]*f,A[7]=0,A[8]=S[8]*B,A[9]=S[9]*B,A[10]=S[10]*B,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromEuler(d){const A=this.elements,S=d.x,M=d.y,f=d.z,B=Math.cos(S),F=Math.sin(S),W=Math.cos(M),G=Math.sin(M),X=Math.cos(f),Z=Math.sin(f);if(d.order==="XYZ"){const K=B*X,$=B*Z,rt=F*X,lt=F*Z;A[0]=W*X,A[4]=-W*Z,A[8]=G,A[1]=$+rt*G,A[5]=K-lt*G,A[9]=-F*W,A[2]=lt-K*G,A[6]=rt+$*G,A[10]=B*W}else if(d.order==="YXZ"){const K=W*X,$=W*Z,rt=G*X,lt=G*Z;A[0]=K+lt*F,A[4]=rt*F-$,A[8]=B*G,A[1]=B*Z,A[5]=B*X,A[9]=-F,A[2]=$*F-rt,A[6]=lt+K*F,A[10]=B*W}else if(d.order==="ZXY"){const K=W*X,$=W*Z,rt=G*X,lt=G*Z;A[0]=K-lt*F,A[4]=-B*Z,A[8]=rt+$*F,A[1]=$+rt*F,A[5]=B*X,A[9]=lt-K*F,A[2]=-B*G,A[6]=F,A[10]=B*W}else if(d.order==="ZYX"){const K=B*X,$=B*Z,rt=F*X,lt=F*Z;A[0]=W*X,A[4]=rt*G-$,A[8]=K*G+lt,A[1]=W*Z,A[5]=lt*G+K,A[9]=$*G-rt,A[2]=-G,A[6]=F*W,A[10]=B*W}else if(d.order==="YZX"){const K=B*W,$=B*G,rt=F*W,lt=F*G;A[0]=W*X,A[4]=lt-K*Z,A[8]=rt*Z+$,A[1]=Z,A[5]=B*X,A[9]=-F*X,A[2]=-G*X,A[6]=$*Z+rt,A[10]=K-lt*Z}else if(d.order==="XZY"){const K=B*W,$=B*G,rt=F*W,lt=F*G;A[0]=W*X,A[4]=-Z,A[8]=G*X,A[1]=K*Z+lt,A[5]=B*X,A[9]=$*Z-rt,A[2]=rt*Z-$,A[6]=F*X,A[10]=lt*Z+K}return A[3]=0,A[7]=0,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}makeRotationFromQuaternion(d){return this.compose(xut,d,wut)}lookAt(d,A,S){const M=this.elements;return X0.subVectors(d,A),X0.lengthSq()===0&&(X0.z=1),X0.normalize(),Ss.crossVectors(S,X0),Ss.lengthSq()===0&&(Math.abs(S.z)===1?X0.x+=1e-4:X0.z+=1e-4,X0.normalize(),Ss.crossVectors(S,X0)),Ss.normalize(),ou.crossVectors(X0,Ss),M[0]=Ss.x,M[4]=ou.x,M[8]=X0.x,M[1]=Ss.y,M[5]=ou.y,M[9]=X0.y,M[2]=Ss.z,M[6]=ou.z,M[10]=X0.z,this}multiply(d){return this.multiplyMatrices(this,d)}premultiply(d){return this.multiplyMatrices(d,this)}multiplyMatrices(d,A){const S=d.elements,M=A.elements,f=this.elements,B=S[0],F=S[4],W=S[8],G=S[12],X=S[1],Z=S[5],K=S[9],$=S[13],rt=S[2],lt=S[6],nt=S[10],tt=S[14],vt=S[3],ht=S[7],At=S[11],Pt=S[15],Tt=M[0],wt=M[4],Ht=M[8],bt=M[12],at=M[1],Ut=M[5],Xt=M[9],Lt=M[13],ne=M[2],ee=M[6],_e=M[10],Se=M[14],Yt=M[3],pe=M[7],ke=M[11],n2=M[15];return f[0]=B*Tt+F*at+W*ne+G*Yt,f[4]=B*wt+F*Ut+W*ee+G*pe,f[8]=B*Ht+F*Xt+W*_e+G*ke,f[12]=B*bt+F*Lt+W*Se+G*n2,f[1]=X*Tt+Z*at+K*ne+$*Yt,f[5]=X*wt+Z*Ut+K*ee+$*pe,f[9]=X*Ht+Z*Xt+K*_e+$*ke,f[13]=X*bt+Z*Lt+K*Se+$*n2,f[2]=rt*Tt+lt*at+nt*ne+tt*Yt,f[6]=rt*wt+lt*Ut+nt*ee+tt*pe,f[10]=rt*Ht+lt*Xt+nt*_e+tt*ke,f[14]=rt*bt+lt*Lt+nt*Se+tt*n2,f[3]=vt*Tt+ht*at+At*ne+Pt*Yt,f[7]=vt*wt+ht*Ut+At*ee+Pt*pe,f[11]=vt*Ht+ht*Xt+At*_e+Pt*ke,f[15]=vt*bt+ht*Lt+At*Se+Pt*n2,this}multiplyScalar(d){const A=this.elements;return A[0]*=d,A[4]*=d,A[8]*=d,A[12]*=d,A[1]*=d,A[5]*=d,A[9]*=d,A[13]*=d,A[2]*=d,A[6]*=d,A[10]*=d,A[14]*=d,A[3]*=d,A[7]*=d,A[11]*=d,A[15]*=d,this}determinant(){const d=this.elements,A=d[0],S=d[4],M=d[8],f=d[12],B=d[1],F=d[5],W=d[9],G=d[13],X=d[2],Z=d[6],K=d[10],$=d[14],rt=d[3],lt=d[7],nt=d[11],tt=d[15];return rt*(+f*W*Z-M*G*Z-f*F*K+S*G*K+M*F*$-S*W*$)+lt*(+A*W*$-A*G*K+f*B*K-M*B*$+M*G*X-f*W*X)+nt*(+A*G*Z-A*F*$-f*B*Z+S*B*$+f*F*X-S*G*X)+tt*(-M*F*X-A*W*Z+A*F*K+M*B*Z-S*B*K+S*W*X)}transpose(){const d=this.elements;let A;return A=d[1],d[1]=d[4],d[4]=A,A=d[2],d[2]=d[8],d[8]=A,A=d[6],d[6]=d[9],d[9]=A,A=d[3],d[3]=d[12],d[12]=A,A=d[7],d[7]=d[13],d[13]=A,A=d[11],d[11]=d[14],d[14]=A,this}setPosition(d,A,S){const M=this.elements;return d.isVector3?(M[12]=d.x,M[13]=d.y,M[14]=d.z):(M[12]=d,M[13]=A,M[14]=S),this}invert(){const d=this.elements,A=d[0],S=d[1],M=d[2],f=d[3],B=d[4],F=d[5],W=d[6],G=d[7],X=d[8],Z=d[9],K=d[10],$=d[11],rt=d[12],lt=d[13],nt=d[14],tt=d[15],vt=Z*nt*G-lt*K*G+lt*W*$-F*nt*$-Z*W*tt+F*K*tt,ht=rt*K*G-X*nt*G-rt*W*$+B*nt*$+X*W*tt-B*K*tt,At=X*lt*G-rt*Z*G+rt*F*$-B*lt*$-X*F*tt+B*Z*tt,Pt=rt*Z*W-X*lt*W-rt*F*K+B*lt*K+X*F*nt-B*Z*nt,Tt=A*vt+S*ht+M*At+f*Pt;if(Tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const wt=1/Tt;return d[0]=vt*wt,d[1]=(lt*K*f-Z*nt*f-lt*M*$+S*nt*$+Z*M*tt-S*K*tt)*wt,d[2]=(F*nt*f-lt*W*f+lt*M*G-S*nt*G-F*M*tt+S*W*tt)*wt,d[3]=(Z*W*f-F*K*f-Z*M*G+S*K*G+F*M*$-S*W*$)*wt,d[4]=ht*wt,d[5]=(X*nt*f-rt*K*f+rt*M*$-A*nt*$-X*M*tt+A*K*tt)*wt,d[6]=(rt*W*f-B*nt*f-rt*M*G+A*nt*G+B*M*tt-A*W*tt)*wt,d[7]=(B*K*f-X*W*f+X*M*G-A*K*G-B*M*$+A*W*$)*wt,d[8]=At*wt,d[9]=(rt*Z*f-X*lt*f-rt*S*$+A*lt*$+X*S*tt-A*Z*tt)*wt,d[10]=(B*lt*f-rt*F*f+rt*S*G-A*lt*G-B*S*tt+A*F*tt)*wt,d[11]=(X*F*f-B*Z*f-X*S*G+A*Z*G+B*S*$-A*F*$)*wt,d[12]=Pt*wt,d[13]=(X*lt*M-rt*Z*M+rt*S*K-A*lt*K-X*S*nt+A*Z*nt)*wt,d[14]=(rt*F*M-B*lt*M-rt*S*W+A*lt*W+B*S*nt-A*F*nt)*wt,d[15]=(B*Z*M-X*F*M+X*S*W-A*Z*W-B*S*K+A*F*K)*wt,this}scale(d){const A=this.elements,S=d.x,M=d.y,f=d.z;return A[0]*=S,A[4]*=M,A[8]*=f,A[1]*=S,A[5]*=M,A[9]*=f,A[2]*=S,A[6]*=M,A[10]*=f,A[3]*=S,A[7]*=M,A[11]*=f,this}getMaxScaleOnAxis(){const d=this.elements,A=d[0]*d[0]+d[1]*d[1]+d[2]*d[2],S=d[4]*d[4]+d[5]*d[5]+d[6]*d[6],M=d[8]*d[8]+d[9]*d[9]+d[10]*d[10];return Math.sqrt(Math.max(A,S,M))}makeTranslation(d,A,S){return d.isVector3?this.set(1,0,0,d.x,0,1,0,d.y,0,0,1,d.z,0,0,0,1):this.set(1,0,0,d,0,1,0,A,0,0,1,S,0,0,0,1),this}makeRotationX(d){const A=Math.cos(d),S=Math.sin(d);return this.set(1,0,0,0,0,A,-S,0,0,S,A,0,0,0,0,1),this}makeRotationY(d){const A=Math.cos(d),S=Math.sin(d);return this.set(A,0,S,0,0,1,0,0,-S,0,A,0,0,0,0,1),this}makeRotationZ(d){const A=Math.cos(d),S=Math.sin(d);return this.set(A,-S,0,0,S,A,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(d,A){const S=Math.cos(A),M=Math.sin(A),f=1-S,B=d.x,F=d.y,W=d.z,G=f*B,X=f*F;return this.set(G*B+S,G*F-M*W,G*W+M*F,0,G*F+M*W,X*F+S,X*W-M*B,0,G*W-M*F,X*W+M*B,f*W*W+S,0,0,0,0,1),this}makeScale(d,A,S){return this.set(d,0,0,0,0,A,0,0,0,0,S,0,0,0,0,1),this}makeShear(d,A,S,M,f,B){return this.set(1,S,f,0,d,1,B,0,A,M,1,0,0,0,0,1),this}compose(d,A,S){const M=this.elements,f=A._x,B=A._y,F=A._z,W=A._w,G=f+f,X=B+B,Z=F+F,K=f*G,$=f*X,rt=f*Z,lt=B*X,nt=B*Z,tt=F*Z,vt=W*G,ht=W*X,At=W*Z,Pt=S.x,Tt=S.y,wt=S.z;return M[0]=(1-(lt+tt))*Pt,M[1]=($+At)*Pt,M[2]=(rt-ht)*Pt,M[3]=0,M[4]=($-At)*Tt,M[5]=(1-(K+tt))*Tt,M[6]=(nt+vt)*Tt,M[7]=0,M[8]=(rt+ht)*wt,M[9]=(nt-vt)*wt,M[10]=(1-(K+lt))*wt,M[11]=0,M[12]=d.x,M[13]=d.y,M[14]=d.z,M[15]=1,this}decompose(d,A,S){const M=this.elements;let f=l_.set(M[0],M[1],M[2]).length();const B=l_.set(M[4],M[5],M[6]).length(),F=l_.set(M[8],M[9],M[10]).length();this.determinant()<0&&(f=-f),d.x=M[12],d.y=M[13],d.z=M[14],Pr.copy(this);const G=1/f,X=1/B,Z=1/F;return Pr.elements[0]*=G,Pr.elements[1]*=G,Pr.elements[2]*=G,Pr.elements[4]*=X,Pr.elements[5]*=X,Pr.elements[6]*=X,Pr.elements[8]*=Z,Pr.elements[9]*=Z,Pr.elements[10]*=Z,A.setFromRotationMatrix(Pr),S.x=f,S.y=B,S.z=F,this}makePerspective(d,A,S,M,f,B,F=Qo){const W=this.elements,G=2*f/(A-d),X=2*f/(S-M),Z=(A+d)/(A-d),K=(S+M)/(S-M);let $,rt;if(F===Qo)$=-(B+f)/(B-f),rt=-2*B*f/(B-f);else if(F===Vu)$=-B/(B-f),rt=-B*f/(B-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+F);return W[0]=G,W[4]=0,W[8]=Z,W[12]=0,W[1]=0,W[5]=X,W[9]=K,W[13]=0,W[2]=0,W[6]=0,W[10]=$,W[14]=rt,W[3]=0,W[7]=0,W[11]=-1,W[15]=0,this}makeOrthographic(d,A,S,M,f,B,F=Qo){const W=this.elements,G=1/(A-d),X=1/(S-M),Z=1/(B-f),K=(A+d)*G,$=(S+M)*X;let rt,lt;if(F===Qo)rt=(B+f)*Z,lt=-2*Z;else if(F===Vu)rt=f*Z,lt=-1*Z;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+F);return W[0]=2*G,W[4]=0,W[8]=0,W[12]=-K,W[1]=0,W[5]=2*X,W[9]=0,W[13]=-$,W[2]=0,W[6]=0,W[10]=lt,W[14]=-rt,W[3]=0,W[7]=0,W[11]=0,W[15]=1,this}equals(d){const A=this.elements,S=d.elements;for(let M=0;M<16;M++)if(A[M]!==S[M])return!1;return!0}fromArray(d,A=0){for(let S=0;S<16;S++)this.elements[S]=d[S+A];return this}toArray(d=[],A=0){const S=this.elements;return d[A]=S[0],d[A+1]=S[1],d[A+2]=S[2],d[A+3]=S[3],d[A+4]=S[4],d[A+5]=S[5],d[A+6]=S[6],d[A+7]=S[7],d[A+8]=S[8],d[A+9]=S[9],d[A+10]=S[10],d[A+11]=S[11],d[A+12]=S[12],d[A+13]=S[13],d[A+14]=S[14],d[A+15]=S[15],d}}const l_=new xt,Pr=new x2,xut=new xt(0,0,0),wut=new xt(1,1,1),Ss=new xt,ou=new xt,X0=new xt,kj=new x2,xj=new o0;class Cr{constructor(d=0,A=0,S=0,M=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=d,this._y=A,this._z=S,this._order=M}get x(){return this._x}set x(d){this._x=d,this._onChangeCallback()}get y(){return this._y}set y(d){this._y=d,this._onChangeCallback()}get z(){return this._z}set z(d){this._z=d,this._onChangeCallback()}get order(){return this._order}set order(d){this._order=d,this._onChangeCallback()}set(d,A,S,M=this._order){return this._x=d,this._y=A,this._z=S,this._order=M,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(d){return this._x=d._x,this._y=d._y,this._z=d._z,this._order=d._order,this._onChangeCallback(),this}setFromRotationMatrix(d,A=this._order,S=!0){const M=d.elements,f=M[0],B=M[4],F=M[8],W=M[1],G=M[5],X=M[9],Z=M[2],K=M[6],$=M[10];switch(A){case"XYZ":this._y=Math.asin(Hi(F,-1,1)),Math.abs(F)<.9999999?(this._x=Math.atan2(-X,$),this._z=Math.atan2(-B,f)):(this._x=Math.atan2(K,G),this._z=0);break;case"YXZ":this._x=Math.asin(-Hi(X,-1,1)),Math.abs(X)<.9999999?(this._y=Math.atan2(F,$),this._z=Math.atan2(W,G)):(this._y=Math.atan2(-Z,f),this._z=0);break;case"ZXY":this._x=Math.asin(Hi(K,-1,1)),Math.abs(K)<.9999999?(this._y=Math.atan2(-Z,$),this._z=Math.atan2(-B,G)):(this._y=0,this._z=Math.atan2(W,f));break;case"ZYX":this._y=Math.asin(-Hi(Z,-1,1)),Math.abs(Z)<.9999999?(this._x=Math.atan2(K,$),this._z=Math.atan2(W,f)):(this._x=0,this._z=Math.atan2(-B,G));break;case"YZX":this._z=Math.asin(Hi(W,-1,1)),Math.abs(W)<.9999999?(this._x=Math.atan2(-X,G),this._y=Math.atan2(-Z,f)):(this._x=0,this._y=Math.atan2(F,$));break;case"XZY":this._z=Math.asin(-Hi(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(K,G),this._y=Math.atan2(F,f)):(this._x=Math.atan2(-X,$),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+A)}return this._order=A,S===!0&&this._onChangeCallback(),this}setFromQuaternion(d,A,S){return kj.makeRotationFromQuaternion(d),this.setFromRotationMatrix(kj,A,S)}setFromVector3(d,A=this._order){return this.set(d.x,d.y,d.z,A)}reorder(d){return xj.setFromEuler(this),this.setFromQuaternion(xj,d)}equals(d){return d._x===this._x&&d._y===this._y&&d._z===this._z&&d._order===this._order}fromArray(d){return this._x=d[0],this._y=d[1],this._z=d[2],d[3]!==void 0&&(this._order=d[3]),this._onChangeCallback(),this}toArray(d=[],A=0){return d[A]=this._x,d[A+1]=this._y,d[A+2]=this._z,d[A+3]=this._order,d}_onChange(d){return this._onChangeCallback=d,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class x6{constructor(){this.mask=1}set(d){this.mask=(1<<d|0)>>>0}enable(d){this.mask|=1<<d|0}enableAll(){this.mask=-1}toggle(d){this.mask^=1<<d|0}disable(d){this.mask&=~(1<<d|0)}disableAll(){this.mask=0}test(d){return(this.mask&d.mask)!==0}isEnabled(d){return(this.mask&(1<<d|0))!==0}}let Mut=0;const wj=new xt,c_=new o0,Go=new x2,su=new xt,ec=new xt,Rut=new xt,Tut=new o0,Mj=new xt(1,0,0),Rj=new xt(0,1,0),Tj=new xt(0,0,1),Ej={type:"added"},Eut={type:"removed"},p_={type:"childadded",child:null},T4={type:"childremoved",child:null};class Wn extends qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mut++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const d=new xt,A=new Cr,S=new o0,M=new xt(1,1,1);function f(){S.setFromEuler(A,!1)}function B(){A.setFromQuaternion(S,void 0,!1)}A._onChange(f),S._onChange(B),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:d},rotation:{configurable:!0,enumerable:!0,value:A},quaternion:{configurable:!0,enumerable:!0,value:S},scale:{configurable:!0,enumerable:!0,value:M},modelViewMatrix:{value:new x2},normalMatrix:{value:new Z2}}),this.matrix=new x2,this.matrixWorld=new x2,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(d){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(d),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(d){return this.quaternion.premultiply(d),this}setRotationFromAxisAngle(d,A){this.quaternion.setFromAxisAngle(d,A)}setRotationFromEuler(d){this.quaternion.setFromEuler(d,!0)}setRotationFromMatrix(d){this.quaternion.setFromRotationMatrix(d)}setRotationFromQuaternion(d){this.quaternion.copy(d)}rotateOnAxis(d,A){return c_.setFromAxisAngle(d,A),this.quaternion.multiply(c_),this}rotateOnWorldAxis(d,A){return c_.setFromAxisAngle(d,A),this.quaternion.premultiply(c_),this}rotateX(d){return this.rotateOnAxis(Mj,d)}rotateY(d){return this.rotateOnAxis(Rj,d)}rotateZ(d){return this.rotateOnAxis(Tj,d)}translateOnAxis(d,A){return wj.copy(d).applyQuaternion(this.quaternion),this.position.add(wj.multiplyScalar(A)),this}translateX(d){return this.translateOnAxis(Mj,d)}translateY(d){return this.translateOnAxis(Rj,d)}translateZ(d){return this.translateOnAxis(Tj,d)}localToWorld(d){return this.updateWorldMatrix(!0,!1),d.applyMatrix4(this.matrixWorld)}worldToLocal(d){return this.updateWorldMatrix(!0,!1),d.applyMatrix4(Go.copy(this.matrixWorld).invert())}lookAt(d,A,S){d.isVector3?su.copy(d):su.set(d,A,S);const M=this.parent;this.updateWorldMatrix(!0,!1),ec.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Go.lookAt(ec,su,this.up):Go.lookAt(su,ec,this.up),this.quaternion.setFromRotationMatrix(Go),M&&(Go.extractRotation(M.matrixWorld),c_.setFromRotationMatrix(Go),this.quaternion.premultiply(c_.invert()))}add(d){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.add(arguments[A]);return this}return d===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",d),this):(d&&d.isObject3D?(d.removeFromParent(),d.parent=this,this.children.push(d),d.dispatchEvent(Ej),p_.child=d,this.dispatchEvent(p_),p_.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",d),this)}remove(d){if(arguments.length>1){for(let S=0;S<arguments.length;S++)this.remove(arguments[S]);return this}const A=this.children.indexOf(d);return A!==-1&&(d.parent=null,this.children.splice(A,1),d.dispatchEvent(Eut),T4.child=d,this.dispatchEvent(T4),T4.child=null),this}removeFromParent(){const d=this.parent;return d!==null&&d.remove(this),this}clear(){return this.remove(...this.children)}attach(d){return this.updateWorldMatrix(!0,!1),Go.copy(this.matrixWorld).invert(),d.parent!==null&&(d.parent.updateWorldMatrix(!0,!1),Go.multiply(d.parent.matrixWorld)),d.applyMatrix4(Go),d.removeFromParent(),d.parent=this,this.children.push(d),d.updateWorldMatrix(!1,!0),d.dispatchEvent(Ej),p_.child=d,this.dispatchEvent(p_),p_.child=null,this}getObjectById(d){return this.getObjectByProperty("id",d)}getObjectByName(d){return this.getObjectByProperty("name",d)}getObjectByProperty(d,A){if(this[d]===A)return this;for(let S=0,M=this.children.length;S<M;S++){const B=this.children[S].getObjectByProperty(d,A);if(B!==void 0)return B}}getObjectsByProperty(d,A,S=[]){this[d]===A&&S.push(this);const M=this.children;for(let f=0,B=M.length;f<B;f++)M[f].getObjectsByProperty(d,A,S);return S}getWorldPosition(d){return this.updateWorldMatrix(!0,!1),d.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(d){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,d,Rut),d}getWorldScale(d){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ec,Tut,d),d}getWorldDirection(d){this.updateWorldMatrix(!0,!1);const A=this.matrixWorld.elements;return d.set(A[8],A[9],A[10]).normalize()}raycast(){}traverse(d){d(this);const A=this.children;for(let S=0,M=A.length;S<M;S++)A[S].traverse(d)}traverseVisible(d){if(this.visible===!1)return;d(this);const A=this.children;for(let S=0,M=A.length;S<M;S++)A[S].traverseVisible(d)}traverseAncestors(d){const A=this.parent;A!==null&&(d(A),A.traverseAncestors(d))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(d){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||d)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,d=!0);const A=this.children;for(let S=0,M=A.length;S<M;S++){const f=A[S];(f.matrixWorldAutoUpdate===!0||d===!0)&&f.updateMatrixWorld(d)}}updateWorldMatrix(d,A){const S=this.parent;if(d===!0&&S!==null&&S.matrixWorldAutoUpdate===!0&&S.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),A===!0){const M=this.children;for(let f=0,B=M.length;f<B;f++){const F=M[f];F.matrixWorldAutoUpdate===!0&&F.updateWorldMatrix(!1,!0)}}}toJSON(d){const A=d===void 0||typeof d=="string",S={};A&&(d={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},S.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const M={};M.uuid=this.uuid,M.type=this.type,this.name!==""&&(M.name=this.name),this.castShadow===!0&&(M.castShadow=!0),this.receiveShadow===!0&&(M.receiveShadow=!0),this.visible===!1&&(M.visible=!1),this.frustumCulled===!1&&(M.frustumCulled=!1),this.renderOrder!==0&&(M.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(M.userData=this.userData),M.layers=this.layers.mask,M.matrix=this.matrix.toArray(),M.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(M.matrixAutoUpdate=!1),this.isInstancedMesh&&(M.type="InstancedMesh",M.count=this.count,M.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(M.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(M.type="BatchedMesh",M.perObjectFrustumCulled=this.perObjectFrustumCulled,M.sortObjects=this.sortObjects,M.drawRanges=this._drawRanges,M.reservedRanges=this._reservedRanges,M.visibility=this._visibility,M.active=this._active,M.bounds=this._bounds.map(F=>({boxInitialized:F.boxInitialized,boxMin:F.box.min.toArray(),boxMax:F.box.max.toArray(),sphereInitialized:F.sphereInitialized,sphereRadius:F.sphere.radius,sphereCenter:F.sphere.center.toArray()})),M.maxGeometryCount=this._maxGeometryCount,M.maxVertexCount=this._maxVertexCount,M.maxIndexCount=this._maxIndexCount,M.geometryInitialized=this._geometryInitialized,M.geometryCount=this._geometryCount,M.matricesTexture=this._matricesTexture.toJSON(d),this.boundingSphere!==null&&(M.boundingSphere={center:M.boundingSphere.center.toArray(),radius:M.boundingSphere.radius}),this.boundingBox!==null&&(M.boundingBox={min:M.boundingBox.min.toArray(),max:M.boundingBox.max.toArray()}));function f(F,W){return F[W.uuid]===void 0&&(F[W.uuid]=W.toJSON(d)),W.uuid}if(this.isScene)this.background&&(this.background.isColor?M.background=this.background.toJSON():this.background.isTexture&&(M.background=this.background.toJSON(d).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(M.environment=this.environment.toJSON(d).uuid);else if(this.isMesh||this.isLine||this.isPoints){M.geometry=f(d.geometries,this.geometry);const F=this.geometry.parameters;if(F!==void 0&&F.shapes!==void 0){const W=F.shapes;if(Array.isArray(W))for(let G=0,X=W.length;G<X;G++){const Z=W[G];f(d.shapes,Z)}else f(d.shapes,W)}}if(this.isSkinnedMesh&&(M.bindMode=this.bindMode,M.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(d.skeletons,this.skeleton),M.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const F=[];for(let W=0,G=this.material.length;W<G;W++)F.push(f(d.materials,this.material[W]));M.material=F}else M.material=f(d.materials,this.material);if(this.children.length>0){M.children=[];for(let F=0;F<this.children.length;F++)M.children.push(this.children[F].toJSON(d).object)}if(this.animations.length>0){M.animations=[];for(let F=0;F<this.animations.length;F++){const W=this.animations[F];M.animations.push(f(d.animations,W))}}if(A){const F=B(d.geometries),W=B(d.materials),G=B(d.textures),X=B(d.images),Z=B(d.shapes),K=B(d.skeletons),$=B(d.animations),rt=B(d.nodes);F.length>0&&(S.geometries=F),W.length>0&&(S.materials=W),G.length>0&&(S.textures=G),X.length>0&&(S.images=X),Z.length>0&&(S.shapes=Z),K.length>0&&(S.skeletons=K),$.length>0&&(S.animations=$),rt.length>0&&(S.nodes=rt)}return S.object=M,S;function B(F){const W=[];for(const G in F){const X=F[G];delete X.metadata,W.push(X)}return W}}clone(d){return new this.constructor().copy(this,d)}copy(d,A=!0){if(this.name=d.name,this.up.copy(d.up),this.position.copy(d.position),this.rotation.order=d.rotation.order,this.quaternion.copy(d.quaternion),this.scale.copy(d.scale),this.matrix.copy(d.matrix),this.matrixWorld.copy(d.matrixWorld),this.matrixAutoUpdate=d.matrixAutoUpdate,this.matrixWorldAutoUpdate=d.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=d.matrixWorldNeedsUpdate,this.layers.mask=d.layers.mask,this.visible=d.visible,this.castShadow=d.castShadow,this.receiveShadow=d.receiveShadow,this.frustumCulled=d.frustumCulled,this.renderOrder=d.renderOrder,this.animations=d.animations.slice(),this.userData=JSON.parse(JSON.stringify(d.userData)),A===!0)for(let S=0;S<d.children.length;S++){const M=d.children[S];this.add(M.clone())}return this}}Wn.DEFAULT_UP=new xt(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Br=new xt,Ho=new xt,E4=new xt,Vo=new xt,u_=new xt,f_=new xt,Dj=new xt,D4=new xt,I4=new xt,P4=new xt;class Fr{constructor(d=new xt,A=new xt,S=new xt){this.a=d,this.b=A,this.c=S}static getNormal(d,A,S,M){M.subVectors(S,A),Br.subVectors(d,A),M.cross(Br);const f=M.lengthSq();return f>0?M.multiplyScalar(1/Math.sqrt(f)):M.set(0,0,0)}static getBarycoord(d,A,S,M,f){Br.subVectors(M,A),Ho.subVectors(S,A),E4.subVectors(d,A);const B=Br.dot(Br),F=Br.dot(Ho),W=Br.dot(E4),G=Ho.dot(Ho),X=Ho.dot(E4),Z=B*G-F*F;if(Z===0)return f.set(0,0,0),null;const K=1/Z,$=(G*W-F*X)*K,rt=(B*X-F*W)*K;return f.set(1-$-rt,rt,$)}static containsPoint(d,A,S,M){return this.getBarycoord(d,A,S,M,Vo)===null?!1:Vo.x>=0&&Vo.y>=0&&Vo.x+Vo.y<=1}static getInterpolation(d,A,S,M,f,B,F,W){return this.getBarycoord(d,A,S,M,Vo)===null?(W.x=0,W.y=0,"z"in W&&(W.z=0),"w"in W&&(W.w=0),null):(W.setScalar(0),W.addScaledVector(f,Vo.x),W.addScaledVector(B,Vo.y),W.addScaledVector(F,Vo.z),W)}static isFrontFacing(d,A,S,M){return Br.subVectors(S,A),Ho.subVectors(d,A),Br.cross(Ho).dot(M)<0}set(d,A,S){return this.a.copy(d),this.b.copy(A),this.c.copy(S),this}setFromPointsAndIndices(d,A,S,M){return this.a.copy(d[A]),this.b.copy(d[S]),this.c.copy(d[M]),this}setFromAttributeAndIndices(d,A,S,M){return this.a.fromBufferAttribute(d,A),this.b.fromBufferAttribute(d,S),this.c.fromBufferAttribute(d,M),this}clone(){return new this.constructor().copy(this)}copy(d){return this.a.copy(d.a),this.b.copy(d.b),this.c.copy(d.c),this}getArea(){return Br.subVectors(this.c,this.b),Ho.subVectors(this.a,this.b),Br.cross(Ho).length()*.5}getMidpoint(d){return d.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(d){return Fr.getNormal(this.a,this.b,this.c,d)}getPlane(d){return d.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(d,A){return Fr.getBarycoord(d,this.a,this.b,this.c,A)}getInterpolation(d,A,S,M,f){return Fr.getInterpolation(d,this.a,this.b,this.c,A,S,M,f)}containsPoint(d){return Fr.containsPoint(d,this.a,this.b,this.c)}isFrontFacing(d){return Fr.isFrontFacing(this.a,this.b,this.c,d)}intersectsBox(d){return d.intersectsTriangle(this)}closestPointToPoint(d,A){const S=this.a,M=this.b,f=this.c;let B,F;u_.subVectors(M,S),f_.subVectors(f,S),D4.subVectors(d,S);const W=u_.dot(D4),G=f_.dot(D4);if(W<=0&&G<=0)return A.copy(S);I4.subVectors(d,M);const X=u_.dot(I4),Z=f_.dot(I4);if(X>=0&&Z<=X)return A.copy(M);const K=W*Z-X*G;if(K<=0&&W>=0&&X<=0)return B=W/(W-X),A.copy(S).addScaledVector(u_,B);P4.subVectors(d,f);const $=u_.dot(P4),rt=f_.dot(P4);if(rt>=0&&$<=rt)return A.copy(f);const lt=$*G-W*rt;if(lt<=0&&G>=0&&rt<=0)return F=G/(G-rt),A.copy(S).addScaledVector(f_,F);const nt=X*rt-$*Z;if(nt<=0&&Z-X>=0&&$-rt>=0)return Dj.subVectors(f,M),F=(Z-X)/(Z-X+($-rt)),A.copy(M).addScaledVector(Dj,F);const tt=1/(nt+lt+K);return B=lt*tt,F=K*tt,A.copy(S).addScaledVector(u_,B).addScaledVector(f_,F)}equals(d){return d.a.equals(this.a)&&d.b.equals(this.b)&&d.c.equals(this.c)}}const yW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},_u={h:0,s:0,l:0};function B4(T,d,A){return A<0&&(A+=1),A>1&&(A-=1),A<1/6?T+(d-T)*6*A:A<1/2?d:A<2/3?T+(d-T)*6*(2/3-A):T}class i2{constructor(d,A,S){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(d,A,S)}set(d,A,S){if(A===void 0&&S===void 0){const M=d;M&&M.isColor?this.copy(M):typeof M=="number"?this.setHex(M):typeof M=="string"&&this.setStyle(M)}else this.setRGB(d,A,S);return this}setScalar(d){return this.r=d,this.g=d,this.b=d,this}setHex(d,A=Gi){return d=Math.floor(d),this.r=(d>>16&255)/255,this.g=(d>>8&255)/255,this.b=(d&255)/255,Mn.toWorkingColorSpace(this,A),this}setRGB(d,A,S,M=Mn.workingColorSpace){return this.r=d,this.g=A,this.b=S,Mn.toWorkingColorSpace(this,M),this}setHSL(d,A,S,M=Mn.workingColorSpace){if(d=k6(d,1),A=Hi(A,0,1),S=Hi(S,0,1),A===0)this.r=this.g=this.b=S;else{const f=S<=.5?S*(1+A):S+A-S*A,B=2*S-f;this.r=B4(B,f,d+1/3),this.g=B4(B,f,d),this.b=B4(B,f,d-1/3)}return Mn.toWorkingColorSpace(this,M),this}setStyle(d,A=Gi){function S(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+d+" will be ignored.")}let M;if(M=/^(\w+)\(([^\)]*)\)/.exec(d)){let f;const B=M[1],F=M[2];switch(B){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(F))return S(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,A);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(F))return S(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,A);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(F))return S(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,A);break;default:console.warn("THREE.Color: Unknown color model "+d)}}else if(M=/^\#([A-Fa-f\d]+)$/.exec(d)){const f=M[1],B=f.length;if(B===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,A);if(B===6)return this.setHex(parseInt(f,16),A);console.warn("THREE.Color: Invalid hex color "+d)}else if(d&&d.length>0)return this.setColorName(d,A);return this}setColorName(d,A=Gi){const S=yW[d.toLowerCase()];return S!==void 0?this.setHex(S,A):console.warn("THREE.Color: Unknown color "+d),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(d){return this.r=d.r,this.g=d.g,this.b=d.b,this}copySRGBToLinear(d){return this.r=P_(d.r),this.g=P_(d.g),this.b=P_(d.b),this}copyLinearToSRGB(d){return this.r=v4(d.r),this.g=v4(d.g),this.b=v4(d.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(d=Gi){return Mn.fromWorkingColorSpace(n0.copy(this),d),Math.round(Hi(n0.r*255,0,255))*65536+Math.round(Hi(n0.g*255,0,255))*256+Math.round(Hi(n0.b*255,0,255))}getHexString(d=Gi){return("000000"+this.getHex(d).toString(16)).slice(-6)}getHSL(d,A=Mn.workingColorSpace){Mn.fromWorkingColorSpace(n0.copy(this),A);const S=n0.r,M=n0.g,f=n0.b,B=Math.max(S,M,f),F=Math.min(S,M,f);let W,G;const X=(F+B)/2;if(F===B)W=0,G=0;else{const Z=B-F;switch(G=X<=.5?Z/(B+F):Z/(2-B-F),B){case S:W=(M-f)/Z+(M<f?6:0);break;case M:W=(f-S)/Z+2;break;case f:W=(S-M)/Z+4;break}W/=6}return d.h=W,d.s=G,d.l=X,d}getRGB(d,A=Mn.workingColorSpace){return Mn.fromWorkingColorSpace(n0.copy(this),A),d.r=n0.r,d.g=n0.g,d.b=n0.b,d}getStyle(d=Gi){Mn.fromWorkingColorSpace(n0.copy(this),d);const A=n0.r,S=n0.g,M=n0.b;return d!==Gi?`color(${d} ${A.toFixed(3)} ${S.toFixed(3)} ${M.toFixed(3)})`:`rgb(${Math.round(A*255)},${Math.round(S*255)},${Math.round(M*255)})`}offsetHSL(d,A,S){return this.getHSL(ks),this.setHSL(ks.h+d,ks.s+A,ks.l+S)}add(d){return this.r+=d.r,this.g+=d.g,this.b+=d.b,this}addColors(d,A){return this.r=d.r+A.r,this.g=d.g+A.g,this.b=d.b+A.b,this}addScalar(d){return this.r+=d,this.g+=d,this.b+=d,this}sub(d){return this.r=Math.max(0,this.r-d.r),this.g=Math.max(0,this.g-d.g),this.b=Math.max(0,this.b-d.b),this}multiply(d){return this.r*=d.r,this.g*=d.g,this.b*=d.b,this}multiplyScalar(d){return this.r*=d,this.g*=d,this.b*=d,this}lerp(d,A){return this.r+=(d.r-this.r)*A,this.g+=(d.g-this.g)*A,this.b+=(d.b-this.b)*A,this}lerpColors(d,A,S){return this.r=d.r+(A.r-d.r)*S,this.g=d.g+(A.g-d.g)*S,this.b=d.b+(A.b-d.b)*S,this}lerpHSL(d,A){this.getHSL(ks),d.getHSL(_u);const S=dc(ks.h,_u.h,A),M=dc(ks.s,_u.s,A),f=dc(ks.l,_u.l,A);return this.setHSL(S,M,f),this}setFromVector3(d){return this.r=d.x,this.g=d.y,this.b=d.z,this}applyMatrix3(d){const A=this.r,S=this.g,M=this.b,f=d.elements;return this.r=f[0]*A+f[3]*S+f[6]*M,this.g=f[1]*A+f[4]*S+f[7]*M,this.b=f[2]*A+f[5]*S+f[8]*M,this}equals(d){return d.r===this.r&&d.g===this.g&&d.b===this.b}fromArray(d,A=0){return this.r=d[A],this.g=d[A+1],this.b=d[A+2],this}toArray(d=[],A=0){return d[A]=this.r,d[A+1]=this.g,d[A+2]=this.b,d}fromBufferAttribute(d,A){return this.r=d.getX(A),this.g=d.getY(A),this.b=d.getZ(A),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const n0=new i2;i2.NAMES=yW;let Dut=0;class W0 extends qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dut++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=D_,this.side=ho,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_6,this.blendDst=l6,this.blendEquation=y1,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new i2(0,0,0),this.blendAlpha=0,this.depthFunc=ju,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gj,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=i_,this.stencilZFail=i_,this.stencilZPass=i_,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(d){this._alphaTest>0!=d>0&&this.version++,this._alphaTest=d}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(d){if(d!==void 0)for(const A in d){const S=d[A];if(S===void 0){console.warn(`THREE.Material: parameter '${A}' has value of undefined.`);continue}const M=this[A];if(M===void 0){console.warn(`THREE.Material: '${A}' is not a property of THREE.${this.type}.`);continue}M&&M.isColor?M.set(S):M&&M.isVector3&&S&&S.isVector3?M.copy(S):this[A]=S}}toJSON(d){const A=d===void 0||typeof d=="string";A&&(d={textures:{},images:{}});const S={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};S.uuid=this.uuid,S.type=this.type,this.name!==""&&(S.name=this.name),this.color&&this.color.isColor&&(S.color=this.color.getHex()),this.roughness!==void 0&&(S.roughness=this.roughness),this.metalness!==void 0&&(S.metalness=this.metalness),this.sheen!==void 0&&(S.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(S.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(S.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(S.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(S.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(S.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(S.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(S.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(S.shininess=this.shininess),this.clearcoat!==void 0&&(S.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(S.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(S.clearcoatMap=this.clearcoatMap.toJSON(d).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(S.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(d).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(S.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(d).uuid,S.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(S.dispersion=this.dispersion),this.iridescence!==void 0&&(S.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(S.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(S.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(S.iridescenceMap=this.iridescenceMap.toJSON(d).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(S.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(d).uuid),this.anisotropy!==void 0&&(S.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(S.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(S.anisotropyMap=this.anisotropyMap.toJSON(d).uuid),this.map&&this.map.isTexture&&(S.map=this.map.toJSON(d).uuid),this.matcap&&this.matcap.isTexture&&(S.matcap=this.matcap.toJSON(d).uuid),this.alphaMap&&this.alphaMap.isTexture&&(S.alphaMap=this.alphaMap.toJSON(d).uuid),this.lightMap&&this.lightMap.isTexture&&(S.lightMap=this.lightMap.toJSON(d).uuid,S.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(S.aoMap=this.aoMap.toJSON(d).uuid,S.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(S.bumpMap=this.bumpMap.toJSON(d).uuid,S.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(S.normalMap=this.normalMap.toJSON(d).uuid,S.normalMapType=this.normalMapType,S.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(S.displacementMap=this.displacementMap.toJSON(d).uuid,S.displacementScale=this.displacementScale,S.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(S.roughnessMap=this.roughnessMap.toJSON(d).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(S.metalnessMap=this.metalnessMap.toJSON(d).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(S.emissiveMap=this.emissiveMap.toJSON(d).uuid),this.specularMap&&this.specularMap.isTexture&&(S.specularMap=this.specularMap.toJSON(d).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(S.specularIntensityMap=this.specularIntensityMap.toJSON(d).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(S.specularColorMap=this.specularColorMap.toJSON(d).uuid),this.envMap&&this.envMap.isTexture&&(S.envMap=this.envMap.toJSON(d).uuid,this.combine!==void 0&&(S.combine=this.combine)),this.envMapRotation!==void 0&&(S.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(S.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(S.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(S.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(S.gradientMap=this.gradientMap.toJSON(d).uuid),this.transmission!==void 0&&(S.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(S.transmissionMap=this.transmissionMap.toJSON(d).uuid),this.thickness!==void 0&&(S.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(S.thicknessMap=this.thicknessMap.toJSON(d).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(S.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(S.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(S.size=this.size),this.shadowSide!==null&&(S.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(S.sizeAttenuation=this.sizeAttenuation),this.blending!==D_&&(S.blending=this.blending),this.side!==ho&&(S.side=this.side),this.vertexColors===!0&&(S.vertexColors=!0),this.opacity<1&&(S.opacity=this.opacity),this.transparent===!0&&(S.transparent=!0),this.blendSrc!==_6&&(S.blendSrc=this.blendSrc),this.blendDst!==l6&&(S.blendDst=this.blendDst),this.blendEquation!==y1&&(S.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(S.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(S.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(S.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(S.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(S.blendAlpha=this.blendAlpha),this.depthFunc!==ju&&(S.depthFunc=this.depthFunc),this.depthTest===!1&&(S.depthTest=this.depthTest),this.depthWrite===!1&&(S.depthWrite=this.depthWrite),this.colorWrite===!1&&(S.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(S.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gj&&(S.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(S.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(S.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==i_&&(S.stencilFail=this.stencilFail),this.stencilZFail!==i_&&(S.stencilZFail=this.stencilZFail),this.stencilZPass!==i_&&(S.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(S.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(S.rotation=this.rotation),this.polygonOffset===!0&&(S.polygonOffset=!0),this.polygonOffsetFactor!==0&&(S.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(S.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(S.linewidth=this.linewidth),this.dashSize!==void 0&&(S.dashSize=this.dashSize),this.gapSize!==void 0&&(S.gapSize=this.gapSize),this.scale!==void 0&&(S.scale=this.scale),this.dithering===!0&&(S.dithering=!0),this.alphaTest>0&&(S.alphaTest=this.alphaTest),this.alphaHash===!0&&(S.alphaHash=!0),this.alphaToCoverage===!0&&(S.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(S.premultipliedAlpha=!0),this.forceSinglePass===!0&&(S.forceSinglePass=!0),this.wireframe===!0&&(S.wireframe=!0),this.wireframeLinewidth>1&&(S.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(S.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(S.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(S.flatShading=!0),this.visible===!1&&(S.visible=!1),this.toneMapped===!1&&(S.toneMapped=!1),this.fog===!1&&(S.fog=!1),Object.keys(this.userData).length>0&&(S.userData=this.userData);function M(f){const B=[];for(const F in f){const W=f[F];delete W.metadata,B.push(W)}return B}if(A){const f=M(d.textures),B=M(d.images);f.length>0&&(S.textures=f),B.length>0&&(S.images=B)}return S}clone(){return new this.constructor().copy(this)}copy(d){this.name=d.name,this.blending=d.blending,this.side=d.side,this.vertexColors=d.vertexColors,this.opacity=d.opacity,this.transparent=d.transparent,this.blendSrc=d.blendSrc,this.blendDst=d.blendDst,this.blendEquation=d.blendEquation,this.blendSrcAlpha=d.blendSrcAlpha,this.blendDstAlpha=d.blendDstAlpha,this.blendEquationAlpha=d.blendEquationAlpha,this.blendColor.copy(d.blendColor),this.blendAlpha=d.blendAlpha,this.depthFunc=d.depthFunc,this.depthTest=d.depthTest,this.depthWrite=d.depthWrite,this.stencilWriteMask=d.stencilWriteMask,this.stencilFunc=d.stencilFunc,this.stencilRef=d.stencilRef,this.stencilFuncMask=d.stencilFuncMask,this.stencilFail=d.stencilFail,this.stencilZFail=d.stencilZFail,this.stencilZPass=d.stencilZPass,this.stencilWrite=d.stencilWrite;const A=d.clippingPlanes;let S=null;if(A!==null){const M=A.length;S=new Array(M);for(let f=0;f!==M;++f)S[f]=A[f].clone()}return this.clippingPlanes=S,this.clipIntersection=d.clipIntersection,this.clipShadows=d.clipShadows,this.shadowSide=d.shadowSide,this.colorWrite=d.colorWrite,this.precision=d.precision,this.polygonOffset=d.polygonOffset,this.polygonOffsetFactor=d.polygonOffsetFactor,this.polygonOffsetUnits=d.polygonOffsetUnits,this.dithering=d.dithering,this.alphaTest=d.alphaTest,this.alphaHash=d.alphaHash,this.alphaToCoverage=d.alphaToCoverage,this.premultipliedAlpha=d.premultipliedAlpha,this.forceSinglePass=d.forceSinglePass,this.visible=d.visible,this.toneMapped=d.toneMapped,this.userData=JSON.parse(JSON.stringify(d.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(d){d===!0&&this.version++}}class C1 extends W0{constructor(d){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new i2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(d)}copy(d){return super.copy(d),this.color.copy(d.color),this.map=d.map,this.lightMap=d.lightMap,this.lightMapIntensity=d.lightMapIntensity,this.aoMap=d.aoMap,this.aoMapIntensity=d.aoMapIntensity,this.specularMap=d.specularMap,this.alphaMap=d.alphaMap,this.envMap=d.envMap,this.envMapRotation.copy(d.envMapRotation),this.combine=d.combine,this.reflectivity=d.reflectivity,this.refractionRatio=d.refractionRatio,this.wireframe=d.wireframe,this.wireframeLinewidth=d.wireframeLinewidth,this.wireframeLinecap=d.wireframeLinecap,this.wireframeLinejoin=d.wireframeLinejoin,this.fog=d.fog,this}}const Ai=new xt,lu=new e2;class Vi{constructor(d,A,S=!1){if(Array.isArray(d))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=d,this.itemSize=A,this.count=d!==void 0?d.length/A:0,this.normalized=S,this.usage=f6,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fo,this.version=0}onUploadCallback(){}set needsUpdate(d){d===!0&&this.version++}get updateRange(){return mW("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(d){return this.usage=d,this}addUpdateRange(d,A){this.updateRanges.push({start:d,count:A})}clearUpdateRanges(){this.updateRanges.length=0}copy(d){return this.name=d.name,this.array=new d.array.constructor(d.array),this.itemSize=d.itemSize,this.count=d.count,this.normalized=d.normalized,this.usage=d.usage,this.gpuType=d.gpuType,this}copyAt(d,A,S){d*=this.itemSize,S*=A.itemSize;for(let M=0,f=this.itemSize;M<f;M++)this.array[d+M]=A.array[S+M];return this}copyArray(d){return this.array.set(d),this}applyMatrix3(d){if(this.itemSize===2)for(let A=0,S=this.count;A<S;A++)lu.fromBufferAttribute(this,A),lu.applyMatrix3(d),this.setXY(A,lu.x,lu.y);else if(this.itemSize===3)for(let A=0,S=this.count;A<S;A++)Ai.fromBufferAttribute(this,A),Ai.applyMatrix3(d),this.setXYZ(A,Ai.x,Ai.y,Ai.z);return this}applyMatrix4(d){for(let A=0,S=this.count;A<S;A++)Ai.fromBufferAttribute(this,A),Ai.applyMatrix4(d),this.setXYZ(A,Ai.x,Ai.y,Ai.z);return this}applyNormalMatrix(d){for(let A=0,S=this.count;A<S;A++)Ai.fromBufferAttribute(this,A),Ai.applyNormalMatrix(d),this.setXYZ(A,Ai.x,Ai.y,Ai.z);return this}transformDirection(d){for(let A=0,S=this.count;A<S;A++)Ai.fromBufferAttribute(this,A),Ai.transformDirection(d),this.setXYZ(A,Ai.x,Ai.y,Ai.z);return this}set(d,A=0){return this.array.set(d,A),this}getComponent(d,A){let S=this.array[d*this.itemSize+A];return this.normalized&&(S=Lr(S,this.array)),S}setComponent(d,A,S){return this.normalized&&(S=En(S,this.array)),this.array[d*this.itemSize+A]=S,this}getX(d){let A=this.array[d*this.itemSize];return this.normalized&&(A=Lr(A,this.array)),A}setX(d,A){return this.normalized&&(A=En(A,this.array)),this.array[d*this.itemSize]=A,this}getY(d){let A=this.array[d*this.itemSize+1];return this.normalized&&(A=Lr(A,this.array)),A}setY(d,A){return this.normalized&&(A=En(A,this.array)),this.array[d*this.itemSize+1]=A,this}getZ(d){let A=this.array[d*this.itemSize+2];return this.normalized&&(A=Lr(A,this.array)),A}setZ(d,A){return this.normalized&&(A=En(A,this.array)),this.array[d*this.itemSize+2]=A,this}getW(d){let A=this.array[d*this.itemSize+3];return this.normalized&&(A=Lr(A,this.array)),A}setW(d,A){return this.normalized&&(A=En(A,this.array)),this.array[d*this.itemSize+3]=A,this}setXY(d,A,S){return d*=this.itemSize,this.normalized&&(A=En(A,this.array),S=En(S,this.array)),this.array[d+0]=A,this.array[d+1]=S,this}setXYZ(d,A,S,M){return d*=this.itemSize,this.normalized&&(A=En(A,this.array),S=En(S,this.array),M=En(M,this.array)),this.array[d+0]=A,this.array[d+1]=S,this.array[d+2]=M,this}setXYZW(d,A,S,M,f){return d*=this.itemSize,this.normalized&&(A=En(A,this.array),S=En(S,this.array),M=En(M,this.array),f=En(f,this.array)),this.array[d+0]=A,this.array[d+1]=S,this.array[d+2]=M,this.array[d+3]=f,this}onUpload(d){return this.onUploadCallback=d,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const d={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(d.name=this.name),this.usage!==f6&&(d.usage=this.usage),d}}class bW extends Vi{constructor(d,A,S){super(new Uint16Array(d),A,S)}}class vW extends Vi{constructor(d,A,S){super(new Uint32Array(d),A,S)}}class si extends Vi{constructor(d,A,S){super(new Float32Array(d),A,S)}}let Iut=0;const br=new x2,L4=new Wn,a_=new xt,Y0=new Nr,nc=new Nr,Bi=new xt;class Li extends qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iut++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(d){return Array.isArray(d)?this.index=new(hW(d)?vW:bW)(d,1):this.index=d,this}getAttribute(d){return this.attributes[d]}setAttribute(d,A){return this.attributes[d]=A,this}deleteAttribute(d){return delete this.attributes[d],this}hasAttribute(d){return this.attributes[d]!==void 0}addGroup(d,A,S=0){this.groups.push({start:d,count:A,materialIndex:S})}clearGroups(){this.groups=[]}setDrawRange(d,A){this.drawRange.start=d,this.drawRange.count=A}applyMatrix4(d){const A=this.attributes.position;A!==void 0&&(A.applyMatrix4(d),A.needsUpdate=!0);const S=this.attributes.normal;if(S!==void 0){const f=new Z2().getNormalMatrix(d);S.applyNormalMatrix(f),S.needsUpdate=!0}const M=this.attributes.tangent;return M!==void 0&&(M.transformDirection(d),M.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(d){return br.makeRotationFromQuaternion(d),this.applyMatrix4(br),this}rotateX(d){return br.makeRotationX(d),this.applyMatrix4(br),this}rotateY(d){return br.makeRotationY(d),this.applyMatrix4(br),this}rotateZ(d){return br.makeRotationZ(d),this.applyMatrix4(br),this}translate(d,A,S){return br.makeTranslation(d,A,S),this.applyMatrix4(br),this}scale(d,A,S){return br.makeScale(d,A,S),this.applyMatrix4(br),this}lookAt(d){return L4.lookAt(d),L4.updateMatrix(),this.applyMatrix4(L4.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(a_).negate(),this.translate(a_.x,a_.y,a_.z),this}setFromPoints(d){const A=[];for(let S=0,M=d.length;S<M;S++){const f=d[S];A.push(f.x,f.y,f.z||0)}return this.setAttribute("position",new si(A,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const d=this.attributes.position,A=this.morphAttributes.position;if(d&&d.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new xt(-1/0,-1/0,-1/0),new xt(1/0,1/0,1/0));return}if(d!==void 0){if(this.boundingBox.setFromBufferAttribute(d),A)for(let S=0,M=A.length;S<M;S++){const f=A[S];Y0.setFromBufferAttribute(f),this.morphTargetsRelative?(Bi.addVectors(this.boundingBox.min,Y0.min),this.boundingBox.expandByPoint(Bi),Bi.addVectors(this.boundingBox.max,Y0.max),this.boundingBox.expandByPoint(Bi)):(this.boundingBox.expandByPoint(Y0.min),this.boundingBox.expandByPoint(Y0.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const d=this.attributes.position,A=this.morphAttributes.position;if(d&&d.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new xt,1/0);return}if(d){const S=this.boundingSphere.center;if(Y0.setFromBufferAttribute(d),A)for(let f=0,B=A.length;f<B;f++){const F=A[f];nc.setFromBufferAttribute(F),this.morphTargetsRelative?(Bi.addVectors(Y0.min,nc.min),Y0.expandByPoint(Bi),Bi.addVectors(Y0.max,nc.max),Y0.expandByPoint(Bi)):(Y0.expandByPoint(nc.min),Y0.expandByPoint(nc.max))}Y0.getCenter(S);let M=0;for(let f=0,B=d.count;f<B;f++)Bi.fromBufferAttribute(d,f),M=Math.max(M,S.distanceToSquared(Bi));if(A)for(let f=0,B=A.length;f<B;f++){const F=A[f],W=this.morphTargetsRelative;for(let G=0,X=F.count;G<X;G++)Bi.fromBufferAttribute(F,G),W&&(a_.fromBufferAttribute(d,G),Bi.add(a_)),M=Math.max(M,S.distanceToSquared(Bi))}this.boundingSphere.radius=Math.sqrt(M),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const d=this.index,A=this.attributes;if(d===null||A.position===void 0||A.normal===void 0||A.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const S=A.position,M=A.normal,f=A.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*S.count),4));const B=this.getAttribute("tangent"),F=[],W=[];for(let Ht=0;Ht<S.count;Ht++)F[Ht]=new xt,W[Ht]=new xt;const G=new xt,X=new xt,Z=new xt,K=new e2,$=new e2,rt=new e2,lt=new xt,nt=new xt;function tt(Ht,bt,at){G.fromBufferAttribute(S,Ht),X.fromBufferAttribute(S,bt),Z.fromBufferAttribute(S,at),K.fromBufferAttribute(f,Ht),$.fromBufferAttribute(f,bt),rt.fromBufferAttribute(f,at),X.sub(G),Z.sub(G),$.sub(K),rt.sub(K);const Ut=1/($.x*rt.y-rt.x*$.y);isFinite(Ut)&&(lt.copy(X).multiplyScalar(rt.y).addScaledVector(Z,-$.y).multiplyScalar(Ut),nt.copy(Z).multiplyScalar($.x).addScaledVector(X,-rt.x).multiplyScalar(Ut),F[Ht].add(lt),F[bt].add(lt),F[at].add(lt),W[Ht].add(nt),W[bt].add(nt),W[at].add(nt))}let vt=this.groups;vt.length===0&&(vt=[{start:0,count:d.count}]);for(let Ht=0,bt=vt.length;Ht<bt;++Ht){const at=vt[Ht],Ut=at.start,Xt=at.count;for(let Lt=Ut,ne=Ut+Xt;Lt<ne;Lt+=3)tt(d.getX(Lt+0),d.getX(Lt+1),d.getX(Lt+2))}const ht=new xt,At=new xt,Pt=new xt,Tt=new xt;function wt(Ht){Pt.fromBufferAttribute(M,Ht),Tt.copy(Pt);const bt=F[Ht];ht.copy(bt),ht.sub(Pt.multiplyScalar(Pt.dot(bt))).normalize(),At.crossVectors(Tt,bt);const Ut=At.dot(W[Ht])<0?-1:1;B.setXYZW(Ht,ht.x,ht.y,ht.z,Ut)}for(let Ht=0,bt=vt.length;Ht<bt;++Ht){const at=vt[Ht],Ut=at.start,Xt=at.count;for(let Lt=Ut,ne=Ut+Xt;Lt<ne;Lt+=3)wt(d.getX(Lt+0)),wt(d.getX(Lt+1)),wt(d.getX(Lt+2))}}computeVertexNormals(){const d=this.index,A=this.getAttribute("position");if(A!==void 0){let S=this.getAttribute("normal");if(S===void 0)S=new Vi(new Float32Array(A.count*3),3),this.setAttribute("normal",S);else for(let K=0,$=S.count;K<$;K++)S.setXYZ(K,0,0,0);const M=new xt,f=new xt,B=new xt,F=new xt,W=new xt,G=new xt,X=new xt,Z=new xt;if(d)for(let K=0,$=d.count;K<$;K+=3){const rt=d.getX(K+0),lt=d.getX(K+1),nt=d.getX(K+2);M.fromBufferAttribute(A,rt),f.fromBufferAttribute(A,lt),B.fromBufferAttribute(A,nt),X.subVectors(B,f),Z.subVectors(M,f),X.cross(Z),F.fromBufferAttribute(S,rt),W.fromBufferAttribute(S,lt),G.fromBufferAttribute(S,nt),F.add(X),W.add(X),G.add(X),S.setXYZ(rt,F.x,F.y,F.z),S.setXYZ(lt,W.x,W.y,W.z),S.setXYZ(nt,G.x,G.y,G.z)}else for(let K=0,$=A.count;K<$;K+=3)M.fromBufferAttribute(A,K+0),f.fromBufferAttribute(A,K+1),B.fromBufferAttribute(A,K+2),X.subVectors(B,f),Z.subVectors(M,f),X.cross(Z),S.setXYZ(K+0,X.x,X.y,X.z),S.setXYZ(K+1,X.x,X.y,X.z),S.setXYZ(K+2,X.x,X.y,X.z);this.normalizeNormals(),S.needsUpdate=!0}}normalizeNormals(){const d=this.attributes.normal;for(let A=0,S=d.count;A<S;A++)Bi.fromBufferAttribute(d,A),Bi.normalize(),d.setXYZ(A,Bi.x,Bi.y,Bi.z)}toNonIndexed(){function d(F,W){const G=F.array,X=F.itemSize,Z=F.normalized,K=new G.constructor(W.length*X);let $=0,rt=0;for(let lt=0,nt=W.length;lt<nt;lt++){F.isInterleavedBufferAttribute?$=W[lt]*F.data.stride+F.offset:$=W[lt]*X;for(let tt=0;tt<X;tt++)K[rt++]=G[$++]}return new Vi(K,X,Z)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const A=new Li,S=this.index.array,M=this.attributes;for(const F in M){const W=M[F],G=d(W,S);A.setAttribute(F,G)}const f=this.morphAttributes;for(const F in f){const W=[],G=f[F];for(let X=0,Z=G.length;X<Z;X++){const K=G[X],$=d(K,S);W.push($)}A.morphAttributes[F]=W}A.morphTargetsRelative=this.morphTargetsRelative;const B=this.groups;for(let F=0,W=B.length;F<W;F++){const G=B[F];A.addGroup(G.start,G.count,G.materialIndex)}return A}toJSON(){const d={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(d.uuid=this.uuid,d.type=this.type,this.name!==""&&(d.name=this.name),Object.keys(this.userData).length>0&&(d.userData=this.userData),this.parameters!==void 0){const W=this.parameters;for(const G in W)W[G]!==void 0&&(d[G]=W[G]);return d}d.data={attributes:{}};const A=this.index;A!==null&&(d.data.index={type:A.array.constructor.name,array:Array.prototype.slice.call(A.array)});const S=this.attributes;for(const W in S){const G=S[W];d.data.attributes[W]=G.toJSON(d.data)}const M={};let f=!1;for(const W in this.morphAttributes){const G=this.morphAttributes[W],X=[];for(let Z=0,K=G.length;Z<K;Z++){const $=G[Z];X.push($.toJSON(d.data))}X.length>0&&(M[W]=X,f=!0)}f&&(d.data.morphAttributes=M,d.data.morphTargetsRelative=this.morphTargetsRelative);const B=this.groups;B.length>0&&(d.data.groups=JSON.parse(JSON.stringify(B)));const F=this.boundingSphere;return F!==null&&(d.data.boundingSphere={center:F.center.toArray(),radius:F.radius}),d}clone(){return new this.constructor().copy(this)}copy(d){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const A={};this.name=d.name;const S=d.index;S!==null&&this.setIndex(S.clone(A));const M=d.attributes;for(const G in M){const X=M[G];this.setAttribute(G,X.clone(A))}const f=d.morphAttributes;for(const G in f){const X=[],Z=f[G];for(let K=0,$=Z.length;K<$;K++)X.push(Z[K].clone(A));this.morphAttributes[G]=X}this.morphTargetsRelative=d.morphTargetsRelative;const B=d.groups;for(let G=0,X=B.length;G<X;G++){const Z=B[G];this.addGroup(Z.start,Z.count,Z.materialIndex)}const F=d.boundingBox;F!==null&&(this.boundingBox=F.clone());const W=d.boundingSphere;return W!==null&&(this.boundingSphere=W.clone()),this.drawRange.start=d.drawRange.start,this.drawRange.count=d.drawRange.count,this.userData=d.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ij=new x2,_1=new V_,cu=new go,Pj=new xt,d_=new xt,h_=new xt,m_=new xt,F4=new xt,pu=new xt,uu=new e2,fu=new e2,au=new e2,Bj=new xt,Lj=new xt,Fj=new xt,du=new xt,hu=new xt;class ei extends Wn{constructor(d=new Li,A=new C1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=d,this.material=A,this.updateMorphTargets()}copy(d,A){return super.copy(d,A),d.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=d.morphTargetInfluences.slice()),d.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},d.morphTargetDictionary)),this.material=Array.isArray(d.material)?d.material.slice():d.material,this.geometry=d.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,S=Object.keys(A);if(S.length>0){const M=A[S[0]];if(M!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,B=M.length;f<B;f++){const F=M[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[F]=f}}}}getVertexPosition(d,A){const S=this.geometry,M=S.attributes.position,f=S.morphAttributes.position,B=S.morphTargetsRelative;A.fromBufferAttribute(M,d);const F=this.morphTargetInfluences;if(f&&F){pu.set(0,0,0);for(let W=0,G=f.length;W<G;W++){const X=F[W],Z=f[W];X!==0&&(F4.fromBufferAttribute(Z,d),B?pu.addScaledVector(F4,X):pu.addScaledVector(F4.sub(A),X))}A.add(pu)}return A}raycast(d,A){const S=this.geometry,M=this.material,f=this.matrixWorld;M!==void 0&&(S.boundingSphere===null&&S.computeBoundingSphere(),cu.copy(S.boundingSphere),cu.applyMatrix4(f),_1.copy(d.ray).recast(d.near),!(cu.containsPoint(_1.origin)===!1&&(_1.intersectSphere(cu,Pj)===null||_1.origin.distanceToSquared(Pj)>(d.far-d.near)**2))&&(Ij.copy(f).invert(),_1.copy(d.ray).applyMatrix4(Ij),!(S.boundingBox!==null&&_1.intersectsBox(S.boundingBox)===!1)&&this._computeIntersections(d,A,_1)))}_computeIntersections(d,A,S){let M;const f=this.geometry,B=this.material,F=f.index,W=f.attributes.position,G=f.attributes.uv,X=f.attributes.uv1,Z=f.attributes.normal,K=f.groups,$=f.drawRange;if(F!==null)if(Array.isArray(B))for(let rt=0,lt=K.length;rt<lt;rt++){const nt=K[rt],tt=B[nt.materialIndex],vt=Math.max(nt.start,$.start),ht=Math.min(F.count,Math.min(nt.start+nt.count,$.start+$.count));for(let At=vt,Pt=ht;At<Pt;At+=3){const Tt=F.getX(At),wt=F.getX(At+1),Ht=F.getX(At+2);M=mu(this,tt,d,S,G,X,Z,Tt,wt,Ht),M&&(M.faceIndex=Math.floor(At/3),M.face.materialIndex=nt.materialIndex,A.push(M))}}else{const rt=Math.max(0,$.start),lt=Math.min(F.count,$.start+$.count);for(let nt=rt,tt=lt;nt<tt;nt+=3){const vt=F.getX(nt),ht=F.getX(nt+1),At=F.getX(nt+2);M=mu(this,B,d,S,G,X,Z,vt,ht,At),M&&(M.faceIndex=Math.floor(nt/3),A.push(M))}}else if(W!==void 0)if(Array.isArray(B))for(let rt=0,lt=K.length;rt<lt;rt++){const nt=K[rt],tt=B[nt.materialIndex],vt=Math.max(nt.start,$.start),ht=Math.min(W.count,Math.min(nt.start+nt.count,$.start+$.count));for(let At=vt,Pt=ht;At<Pt;At+=3){const Tt=At,wt=At+1,Ht=At+2;M=mu(this,tt,d,S,G,X,Z,Tt,wt,Ht),M&&(M.faceIndex=Math.floor(At/3),M.face.materialIndex=nt.materialIndex,A.push(M))}}else{const rt=Math.max(0,$.start),lt=Math.min(W.count,$.start+$.count);for(let nt=rt,tt=lt;nt<tt;nt+=3){const vt=nt,ht=nt+1,At=nt+2;M=mu(this,B,d,S,G,X,Z,vt,ht,At),M&&(M.faceIndex=Math.floor(nt/3),A.push(M))}}}}function Put(T,d,A,S,M,f,B,F){let W;if(d.side===C0?W=S.intersectTriangle(B,f,M,!0,F):W=S.intersectTriangle(M,f,B,d.side===ho,F),W===null)return null;hu.copy(F),hu.applyMatrix4(T.matrixWorld);const G=A.ray.origin.distanceTo(hu);return G<A.near||G>A.far?null:{distance:G,point:hu.clone(),object:T}}function mu(T,d,A,S,M,f,B,F,W,G){T.getVertexPosition(F,d_),T.getVertexPosition(W,h_),T.getVertexPosition(G,m_);const X=Put(T,d,A,S,d_,h_,m_,du);if(X){M&&(uu.fromBufferAttribute(M,F),fu.fromBufferAttribute(M,W),au.fromBufferAttribute(M,G),X.uv=Fr.getInterpolation(du,d_,h_,m_,uu,fu,au,new e2)),f&&(uu.fromBufferAttribute(f,F),fu.fromBufferAttribute(f,W),au.fromBufferAttribute(f,G),X.uv1=Fr.getInterpolation(du,d_,h_,m_,uu,fu,au,new e2)),B&&(Bj.fromBufferAttribute(B,F),Lj.fromBufferAttribute(B,W),Fj.fromBufferAttribute(B,G),X.normal=Fr.getInterpolation(du,d_,h_,m_,Bj,Lj,Fj,new xt),X.normal.dot(S.direction)>0&&X.normal.multiplyScalar(-1));const Z={a:F,b:W,c:G,normal:new xt,materialIndex:0};Fr.getNormal(d_,h_,m_,Z.normal),X.face=Z}return X}class w1 extends Li{constructor(d=1,A=1,S=1,M=1,f=1,B=1){super(),this.type="BoxGeometry",this.parameters={width:d,height:A,depth:S,widthSegments:M,heightSegments:f,depthSegments:B};const F=this;M=Math.floor(M),f=Math.floor(f),B=Math.floor(B);const W=[],G=[],X=[],Z=[];let K=0,$=0;rt("z","y","x",-1,-1,S,A,d,B,f,0),rt("z","y","x",1,-1,S,A,-d,B,f,1),rt("x","z","y",1,1,d,S,A,M,B,2),rt("x","z","y",1,-1,d,S,-A,M,B,3),rt("x","y","z",1,-1,d,A,S,M,f,4),rt("x","y","z",-1,-1,d,A,-S,M,f,5),this.setIndex(W),this.setAttribute("position",new si(G,3)),this.setAttribute("normal",new si(X,3)),this.setAttribute("uv",new si(Z,2));function rt(lt,nt,tt,vt,ht,At,Pt,Tt,wt,Ht,bt){const at=At/wt,Ut=Pt/Ht,Xt=At/2,Lt=Pt/2,ne=Tt/2,ee=wt+1,_e=Ht+1;let Se=0,Yt=0;const pe=new xt;for(let ke=0;ke<_e;ke++){const n2=ke*Ut-Lt;for(let O2=0;O2<ee;O2++){const j2=O2*at-Xt;pe[lt]=j2*vt,pe[nt]=n2*ht,pe[tt]=ne,G.push(pe.x,pe.y,pe.z),pe[lt]=0,pe[nt]=0,pe[tt]=Tt>0?1:-1,X.push(pe.x,pe.y,pe.z),Z.push(O2/wt),Z.push(1-ke/Ht),Se+=1}}for(let ke=0;ke<Ht;ke++)for(let n2=0;n2<wt;n2++){const O2=K+n2+ee*ke,j2=K+n2+ee*(ke+1),ie=K+(n2+1)+ee*(ke+1),Re=K+(n2+1)+ee*ke;W.push(O2,j2,Re),W.push(j2,ie,Re),Yt+=6}F.addGroup($,Yt,bt),$+=Yt,K+=Se}}copy(d){return super.copy(d),this.parameters=Object.assign({},d.parameters),this}static fromJSON(d){return new w1(d.width,d.height,d.depth,d.widthSegments,d.heightSegments,d.depthSegments)}}function U_(T){const d={};for(const A in T){d[A]={};for(const S in T[A]){const M=T[A][S];M&&(M.isColor||M.isMatrix3||M.isMatrix4||M.isVector2||M.isVector3||M.isVector4||M.isTexture||M.isQuaternion)?M.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),d[A][S]=null):d[A][S]=M.clone():Array.isArray(M)?d[A][S]=M.slice():d[A][S]=M}}return d}function b0(T){const d={};for(let A=0;A<T.length;A++){const S=U_(T[A]);for(const M in S)d[M]=S[M]}return d}function But(T){const d=[];for(let A=0;A<T.length;A++)d.push(T[A].clone());return d}function CW(T){const d=T.getRenderTarget();return d===null?T.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:Mn.workingColorSpace}const zu={clone:U_,merge:b0};var Lut=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fut=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mo extends W0{constructor(d){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lut,this.fragmentShader=Fut,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,d!==void 0&&this.setValues(d)}copy(d){return super.copy(d),this.fragmentShader=d.fragmentShader,this.vertexShader=d.vertexShader,this.uniforms=U_(d.uniforms),this.uniformsGroups=But(d.uniformsGroups),this.defines=Object.assign({},d.defines),this.wireframe=d.wireframe,this.wireframeLinewidth=d.wireframeLinewidth,this.fog=d.fog,this.lights=d.lights,this.clipping=d.clipping,this.extensions=Object.assign({},d.extensions),this.glslVersion=d.glslVersion,this}toJSON(d){const A=super.toJSON(d);A.glslVersion=this.glslVersion,A.uniforms={};for(const M in this.uniforms){const B=this.uniforms[M].value;B&&B.isTexture?A.uniforms[M]={type:"t",value:B.toJSON(d).uuid}:B&&B.isColor?A.uniforms[M]={type:"c",value:B.getHex()}:B&&B.isVector2?A.uniforms[M]={type:"v2",value:B.toArray()}:B&&B.isVector3?A.uniforms[M]={type:"v3",value:B.toArray()}:B&&B.isVector4?A.uniforms[M]={type:"v4",value:B.toArray()}:B&&B.isMatrix3?A.uniforms[M]={type:"m3",value:B.toArray()}:B&&B.isMatrix4?A.uniforms[M]={type:"m4",value:B.toArray()}:A.uniforms[M]={value:B}}Object.keys(this.defines).length>0&&(A.defines=this.defines),A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.lights=this.lights,A.clipping=this.clipping;const S={};for(const M in this.extensions)this.extensions[M]===!0&&(S[M]=!0);return Object.keys(S).length>0&&(A.extensions=S),A}}let w6=class extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new x2,this.projectionMatrix=new x2,this.projectionMatrixInverse=new x2,this.coordinateSystem=Qo}copy(d,A){return super.copy(d,A),this.matrixWorldInverse.copy(d.matrixWorldInverse),this.projectionMatrix.copy(d.projectionMatrix),this.projectionMatrixInverse.copy(d.projectionMatrixInverse),this.coordinateSystem=d.coordinateSystem,this}getWorldDirection(d){return super.getWorldDirection(d).negate()}updateMatrixWorld(d){super.updateMatrixWorld(d),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(d,A){super.updateWorldMatrix(d,A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const xs=new xt,Oj=new e2,jj=new e2;class r0 extends w6{constructor(d=50,A=1,S=.1,M=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=d,this.zoom=1,this.near=S,this.far=M,this.focus=10,this.aspect=A,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(d,A){return super.copy(d,A),this.fov=d.fov,this.zoom=d.zoom,this.near=d.near,this.far=d.far,this.focus=d.focus,this.aspect=d.aspect,this.view=d.view===null?null:Object.assign({},d.view),this.filmGauge=d.filmGauge,this.filmOffset=d.filmOffset,this}setFocalLength(d){const A=.5*this.getFilmHeight()/d;this.fov=W_*2*Math.atan(A),this.updateProjectionMatrix()}getFocalLength(){const d=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/d}getEffectiveFOV(){return W_*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(d,A,S){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(xs.x,xs.y).multiplyScalar(-d/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),S.set(xs.x,xs.y).multiplyScalar(-d/xs.z)}getViewSize(d,A){return this.getViewBounds(d,Oj,jj),A.subVectors(jj,Oj)}setViewOffset(d,A,S,M,f,B){this.aspect=d/A,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=d,this.view.fullHeight=A,this.view.offsetX=S,this.view.offsetY=M,this.view.width=f,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const d=this.near;let A=d*Math.tan(ac*.5*this.fov)/this.zoom,S=2*A,M=this.aspect*S,f=-.5*M;const B=this.view;if(this.view!==null&&this.view.enabled){const W=B.fullWidth,G=B.fullHeight;f+=B.offsetX*M/W,A-=B.offsetY*S/G,M*=B.width/W,S*=B.height/G}const F=this.filmOffset;F!==0&&(f+=d*F/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+M,A,A-S,d,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(d){const A=super.toJSON(d);return A.object.fov=this.fov,A.object.zoom=this.zoom,A.object.near=this.near,A.object.far=this.far,A.object.focus=this.focus,A.object.aspect=this.aspect,this.view!==null&&(A.object.view=Object.assign({},this.view)),A.object.filmGauge=this.filmGauge,A.object.filmOffset=this.filmOffset,A}}const g_=-90,A_=1;class Out extends Wn{constructor(d,A,S){super(),this.type="CubeCamera",this.renderTarget=S,this.coordinateSystem=null,this.activeMipmapLevel=0;const M=new r0(g_,A_,d,A);M.layers=this.layers,this.add(M);const f=new r0(g_,A_,d,A);f.layers=this.layers,this.add(f);const B=new r0(g_,A_,d,A);B.layers=this.layers,this.add(B);const F=new r0(g_,A_,d,A);F.layers=this.layers,this.add(F);const W=new r0(g_,A_,d,A);W.layers=this.layers,this.add(W);const G=new r0(g_,A_,d,A);G.layers=this.layers,this.add(G)}updateCoordinateSystem(){const d=this.coordinateSystem,A=this.children.concat(),[S,M,f,B,F,W]=A;for(const G of A)this.remove(G);if(d===Qo)S.up.set(0,1,0),S.lookAt(1,0,0),M.up.set(0,1,0),M.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),B.up.set(0,0,1),B.lookAt(0,-1,0),F.up.set(0,1,0),F.lookAt(0,0,1),W.up.set(0,1,0),W.lookAt(0,0,-1);else if(d===Vu)S.up.set(0,-1,0),S.lookAt(-1,0,0),M.up.set(0,-1,0),M.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),B.up.set(0,0,-1),B.lookAt(0,-1,0),F.up.set(0,-1,0),F.lookAt(0,0,1),W.up.set(0,-1,0),W.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+d);for(const G of A)this.add(G),G.updateMatrixWorld()}update(d,A){this.parent===null&&this.updateMatrixWorld();const{renderTarget:S,activeMipmapLevel:M}=this;this.coordinateSystem!==d.coordinateSystem&&(this.coordinateSystem=d.coordinateSystem,this.updateCoordinateSystem());const[f,B,F,W,G,X]=this.children,Z=d.getRenderTarget(),K=d.getActiveCubeFace(),$=d.getActiveMipmapLevel(),rt=d.xr.enabled;d.xr.enabled=!1;const lt=S.texture.generateMipmaps;S.texture.generateMipmaps=!1,d.setRenderTarget(S,0,M),d.render(A,f),d.setRenderTarget(S,1,M),d.render(A,B),d.setRenderTarget(S,2,M),d.render(A,F),d.setRenderTarget(S,3,M),d.render(A,W),d.setRenderTarget(S,4,M),d.render(A,G),S.texture.generateMipmaps=lt,d.setRenderTarget(S,5,M),d.render(A,X),d.setRenderTarget(Z,K,$),d.xr.enabled=rt,S.texture.needsPMREMUpdate=!0}}class SW extends Ri{constructor(d,A,S,M,f,B,F,W,G,X){d=d!==void 0?d:[],A=A!==void 0?A:F_,super(d,A,S,M,f,B,F,W,G,X),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(d){this.image=d}}class jut extends Ls{constructor(d=1,A={}){super(d,d,A),this.isWebGLCubeRenderTarget=!0;const S={width:d,height:d,depth:1},M=[S,S,S,S,S,S];this.texture=new SW(M,A.mapping,A.wrapS,A.wrapT,A.magFilter,A.minFilter,A.format,A.type,A.anisotropy,A.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=A.generateMipmaps!==void 0?A.generateMipmaps:!1,this.texture.minFilter=A.minFilter!==void 0?A.minFilter:Z0}fromEquirectangularTexture(d,A){this.texture.type=A.type,this.texture.colorSpace=A.colorSpace,this.texture.generateMipmaps=A.generateMipmaps,this.texture.minFilter=A.minFilter,this.texture.magFilter=A.magFilter;const S={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},M=new w1(5,5,5),f=new mo({name:"CubemapFromEquirect",uniforms:U_(S.uniforms),vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,side:C0,blending:Is});f.uniforms.tEquirect.value=A;const B=new ei(M,f),F=A.minFilter;return A.minFilter===Zo&&(A.minFilter=Z0),new Out(1,10,this).update(d,B),A.minFilter=F,B.geometry.dispose(),B.material.dispose(),this}clear(d,A,S,M){const f=d.getRenderTarget();for(let B=0;B<6;B++)d.setRenderTarget(this,B),d.clear(A,S,M);d.setRenderTarget(f)}}const O4=new xt,Nut=new xt,Wut=new Z2;class lo{constructor(d=new xt(1,0,0),A=0){this.isPlane=!0,this.normal=d,this.constant=A}set(d,A){return this.normal.copy(d),this.constant=A,this}setComponents(d,A,S,M){return this.normal.set(d,A,S),this.constant=M,this}setFromNormalAndCoplanarPoint(d,A){return this.normal.copy(d),this.constant=-A.dot(this.normal),this}setFromCoplanarPoints(d,A,S){const M=O4.subVectors(S,A).cross(Nut.subVectors(d,A)).normalize();return this.setFromNormalAndCoplanarPoint(M,d),this}copy(d){return this.normal.copy(d.normal),this.constant=d.constant,this}normalize(){const d=1/this.normal.length();return this.normal.multiplyScalar(d),this.constant*=d,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(d){return this.normal.dot(d)+this.constant}distanceToSphere(d){return this.distanceToPoint(d.center)-d.radius}projectPoint(d,A){return A.copy(d).addScaledVector(this.normal,-this.distanceToPoint(d))}intersectLine(d,A){const S=d.delta(O4),M=this.normal.dot(S);if(M===0)return this.distanceToPoint(d.start)===0?A.copy(d.start):null;const f=-(d.start.dot(this.normal)+this.constant)/M;return f<0||f>1?null:A.copy(d.start).addScaledVector(S,f)}intersectsLine(d){const A=this.distanceToPoint(d.start),S=this.distanceToPoint(d.end);return A<0&&S>0||S<0&&A>0}intersectsBox(d){return d.intersectsPlane(this)}intersectsSphere(d){return d.intersectsPlane(this)}coplanarPoint(d){return d.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(d,A){const S=A||Wut.getNormalMatrix(d),M=this.coplanarPoint(O4).applyMatrix4(d),f=this.normal.applyMatrix3(S).normalize();return this.constant=-M.dot(f),this}translate(d){return this.constant-=d.dot(this.normal),this}equals(d){return d.normal.equals(this.normal)&&d.constant===this.constant}clone(){return new this.constructor().copy(this)}}const l1=new go,gu=new xt;class M6{constructor(d=new lo,A=new lo,S=new lo,M=new lo,f=new lo,B=new lo){this.planes=[d,A,S,M,f,B]}set(d,A,S,M,f,B){const F=this.planes;return F[0].copy(d),F[1].copy(A),F[2].copy(S),F[3].copy(M),F[4].copy(f),F[5].copy(B),this}copy(d){const A=this.planes;for(let S=0;S<6;S++)A[S].copy(d.planes[S]);return this}setFromProjectionMatrix(d,A=Qo){const S=this.planes,M=d.elements,f=M[0],B=M[1],F=M[2],W=M[3],G=M[4],X=M[5],Z=M[6],K=M[7],$=M[8],rt=M[9],lt=M[10],nt=M[11],tt=M[12],vt=M[13],ht=M[14],At=M[15];if(S[0].setComponents(W-f,K-G,nt-$,At-tt).normalize(),S[1].setComponents(W+f,K+G,nt+$,At+tt).normalize(),S[2].setComponents(W+B,K+X,nt+rt,At+vt).normalize(),S[3].setComponents(W-B,K-X,nt-rt,At-vt).normalize(),S[4].setComponents(W-F,K-Z,nt-lt,At-ht).normalize(),A===Qo)S[5].setComponents(W+F,K+Z,nt+lt,At+ht).normalize();else if(A===Vu)S[5].setComponents(F,Z,lt,ht).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+A);return this}intersectsObject(d){if(d.boundingSphere!==void 0)d.boundingSphere===null&&d.computeBoundingSphere(),l1.copy(d.boundingSphere).applyMatrix4(d.matrixWorld);else{const A=d.geometry;A.boundingSphere===null&&A.computeBoundingSphere(),l1.copy(A.boundingSphere).applyMatrix4(d.matrixWorld)}return this.intersectsSphere(l1)}intersectsSprite(d){return l1.center.set(0,0,0),l1.radius=.7071067811865476,l1.applyMatrix4(d.matrixWorld),this.intersectsSphere(l1)}intersectsSphere(d){const A=this.planes,S=d.center,M=-d.radius;for(let f=0;f<6;f++)if(A[f].distanceToPoint(S)<M)return!1;return!0}intersectsBox(d){const A=this.planes;for(let S=0;S<6;S++){const M=A[S];if(gu.x=M.normal.x>0?d.max.x:d.min.x,gu.y=M.normal.y>0?d.max.y:d.min.y,gu.z=M.normal.z>0?d.max.z:d.min.z,M.distanceToPoint(gu)<0)return!1}return!0}containsPoint(d){const A=this.planes;for(let S=0;S<6;S++)if(A[S].distanceToPoint(d)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kW(){let T=null,d=!1,A=null,S=null;function M(f,B){A(f,B),S=T.requestAnimationFrame(M)}return{start:function(){d!==!0&&A!==null&&(S=T.requestAnimationFrame(M),d=!0)},stop:function(){T.cancelAnimationFrame(S),d=!1},setAnimationLoop:function(f){A=f},setContext:function(f){T=f}}}function Uut(T){const d=new WeakMap;function A(F,W){const G=F.array,X=F.usage,Z=G.byteLength,K=T.createBuffer();T.bindBuffer(W,K),T.bufferData(W,G,X),F.onUploadCallback();let $;if(G instanceof Float32Array)$=T.FLOAT;else if(G instanceof Uint16Array)F.isFloat16BufferAttribute?$=T.HALF_FLOAT:$=T.UNSIGNED_SHORT;else if(G instanceof Int16Array)$=T.SHORT;else if(G instanceof Uint32Array)$=T.UNSIGNED_INT;else if(G instanceof Int32Array)$=T.INT;else if(G instanceof Int8Array)$=T.BYTE;else if(G instanceof Uint8Array)$=T.UNSIGNED_BYTE;else if(G instanceof Uint8ClampedArray)$=T.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+G);return{buffer:K,type:$,bytesPerElement:G.BYTES_PER_ELEMENT,version:F.version,size:Z}}function S(F,W,G){const X=W.array,Z=W._updateRange,K=W.updateRanges;if(T.bindBuffer(G,F),Z.count===-1&&K.length===0&&T.bufferSubData(G,0,X),K.length!==0){for(let $=0,rt=K.length;$<rt;$++){const lt=K[$];T.bufferSubData(G,lt.start*X.BYTES_PER_ELEMENT,X,lt.start,lt.count)}W.clearUpdateRanges()}Z.count!==-1&&(T.bufferSubData(G,Z.offset*X.BYTES_PER_ELEMENT,X,Z.offset,Z.count),Z.count=-1),W.onUploadCallback()}function M(F){return F.isInterleavedBufferAttribute&&(F=F.data),d.get(F)}function f(F){F.isInterleavedBufferAttribute&&(F=F.data);const W=d.get(F);W&&(T.deleteBuffer(W.buffer),d.delete(F))}function B(F,W){if(F.isGLBufferAttribute){const X=d.get(F);(!X||X.version<F.version)&&d.set(F,{buffer:F.buffer,type:F.type,bytesPerElement:F.elementSize,version:F.version});return}F.isInterleavedBufferAttribute&&(F=F.data);const G=d.get(F);if(G===void 0)d.set(F,A(F,W));else if(G.version<F.version){if(G.size!==F.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");S(G.buffer,F,W),G.version=F.version}}return{get:M,remove:f,update:B}}class z_ extends Li{constructor(d=1,A=1,S=1,M=1){super(),this.type="PlaneGeometry",this.parameters={width:d,height:A,widthSegments:S,heightSegments:M};const f=d/2,B=A/2,F=Math.floor(S),W=Math.floor(M),G=F+1,X=W+1,Z=d/F,K=A/W,$=[],rt=[],lt=[],nt=[];for(let tt=0;tt<X;tt++){const vt=tt*K-B;for(let ht=0;ht<G;ht++){const At=ht*Z-f;rt.push(At,-vt,0),lt.push(0,0,1),nt.push(ht/F),nt.push(1-tt/W)}}for(let tt=0;tt<W;tt++)for(let vt=0;vt<F;vt++){const ht=vt+G*tt,At=vt+G*(tt+1),Pt=vt+1+G*(tt+1),Tt=vt+1+G*tt;$.push(ht,At,Tt),$.push(At,Pt,Tt)}this.setIndex($),this.setAttribute("position",new si(rt,3)),this.setAttribute("normal",new si(lt,3)),this.setAttribute("uv",new si(nt,2))}copy(d){return super.copy(d),this.parameters=Object.assign({},d.parameters),this}static fromJSON(d){return new z_(d.width,d.height,d.widthSegments,d.heightSegments)}}var Gut=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hut=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vut=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zut=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xut=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yut=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zut=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qut=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qut=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kut=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jut=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$ut=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tft=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eft=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nft=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ift=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rft=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oft=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sft=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_ft=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lft=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cft=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pft=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uft=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fft=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aft=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dft=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hft=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mft=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gft=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Aft="gl_FragColor = linearToOutputTexel( gl_FragColor );",yft=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bft=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vft=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cft=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sft=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kft=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xft=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wft=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mft=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rft=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tft=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eft=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dft=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ift=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pft=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bft=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lft=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fft=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oft=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jft=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nft=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wft=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uft=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gft=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hft=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vft=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zft=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xft=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yft=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zft=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qft=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qft=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kft=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jft=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$ft=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tat=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eat=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nat=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iat=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rat=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oat=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sat=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_at=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lat=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cat=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pat=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uat=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fat=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aat=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dat=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hat=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mat=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gat=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Aat=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yat=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bat=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vat=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cat=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sat=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,kat=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xat=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wat=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mat=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rat=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tat=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eat=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dat=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iat=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pat=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bat=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lat=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fat=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Oat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nat=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wat=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uat=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gat=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vat=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xat=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yat=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zat=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qat=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qat=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kat=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jat=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$at=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t4t=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e4t=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n4t=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i4t=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r4t=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o4t=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s4t=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_4t=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l4t=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c4t=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p4t=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u4t=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f4t=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a4t=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d4t=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h4t=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m4t=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g4t=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A4t=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y4t=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b4t=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y2={alphahash_fragment:Gut,alphahash_pars_fragment:Hut,alphamap_fragment:Vut,alphamap_pars_fragment:zut,alphatest_fragment:Xut,alphatest_pars_fragment:Yut,aomap_fragment:Zut,aomap_pars_fragment:Qut,batching_pars_vertex:qut,batching_vertex:Kut,begin_vertex:Jut,beginnormal_vertex:$ut,bsdfs:tft,iridescence_fragment:eft,bumpmap_pars_fragment:nft,clipping_planes_fragment:ift,clipping_planes_pars_fragment:rft,clipping_planes_pars_vertex:oft,clipping_planes_vertex:sft,color_fragment:_ft,color_pars_fragment:lft,color_pars_vertex:cft,color_vertex:pft,common:uft,cube_uv_reflection_fragment:fft,defaultnormal_vertex:aft,displacementmap_pars_vertex:dft,displacementmap_vertex:hft,emissivemap_fragment:mft,emissivemap_pars_fragment:gft,colorspace_fragment:Aft,colorspace_pars_fragment:yft,envmap_fragment:bft,envmap_common_pars_fragment:vft,envmap_pars_fragment:Cft,envmap_pars_vertex:Sft,envmap_physical_pars_fragment:Bft,envmap_vertex:kft,fog_vertex:xft,fog_pars_vertex:wft,fog_fragment:Mft,fog_pars_fragment:Rft,gradientmap_pars_fragment:Tft,lightmap_pars_fragment:Eft,lights_lambert_fragment:Dft,lights_lambert_pars_fragment:Ift,lights_pars_begin:Pft,lights_toon_fragment:Lft,lights_toon_pars_fragment:Fft,lights_phong_fragment:Oft,lights_phong_pars_fragment:jft,lights_physical_fragment:Nft,lights_physical_pars_fragment:Wft,lights_fragment_begin:Uft,lights_fragment_maps:Gft,lights_fragment_end:Hft,logdepthbuf_fragment:Vft,logdepthbuf_pars_fragment:zft,logdepthbuf_pars_vertex:Xft,logdepthbuf_vertex:Yft,map_fragment:Zft,map_pars_fragment:Qft,map_particle_fragment:qft,map_particle_pars_fragment:Kft,metalnessmap_fragment:Jft,metalnessmap_pars_fragment:$ft,morphinstance_vertex:tat,morphcolor_vertex:eat,morphnormal_vertex:nat,morphtarget_pars_vertex:iat,morphtarget_vertex:rat,normal_fragment_begin:oat,normal_fragment_maps:sat,normal_pars_fragment:_at,normal_pars_vertex:lat,normal_vertex:cat,normalmap_pars_fragment:pat,clearcoat_normal_fragment_begin:uat,clearcoat_normal_fragment_maps:fat,clearcoat_pars_fragment:aat,iridescence_pars_fragment:dat,opaque_fragment:hat,packing:mat,premultiplied_alpha_fragment:gat,project_vertex:Aat,dithering_fragment:yat,dithering_pars_fragment:bat,roughnessmap_fragment:vat,roughnessmap_pars_fragment:Cat,shadowmap_pars_fragment:Sat,shadowmap_pars_vertex:kat,shadowmap_vertex:xat,shadowmask_pars_fragment:wat,skinbase_vertex:Mat,skinning_pars_vertex:Rat,skinning_vertex:Tat,skinnormal_vertex:Eat,specularmap_fragment:Dat,specularmap_pars_fragment:Iat,tonemapping_fragment:Pat,tonemapping_pars_fragment:Bat,transmission_fragment:Lat,transmission_pars_fragment:Fat,uv_pars_fragment:Oat,uv_pars_vertex:jat,uv_vertex:Nat,worldpos_vertex:Wat,background_vert:Uat,background_frag:Gat,backgroundCube_vert:Hat,backgroundCube_frag:Vat,cube_vert:zat,cube_frag:Xat,depth_vert:Yat,depth_frag:Zat,distanceRGBA_vert:Qat,distanceRGBA_frag:qat,equirect_vert:Kat,equirect_frag:Jat,linedashed_vert:$at,linedashed_frag:t4t,meshbasic_vert:e4t,meshbasic_frag:n4t,meshlambert_vert:i4t,meshlambert_frag:r4t,meshmatcap_vert:o4t,meshmatcap_frag:s4t,meshnormal_vert:_4t,meshnormal_frag:l4t,meshphong_vert:c4t,meshphong_frag:p4t,meshphysical_vert:u4t,meshphysical_frag:f4t,meshtoon_vert:a4t,meshtoon_frag:d4t,points_vert:h4t,points_frag:m4t,shadow_vert:g4t,shadow_frag:A4t,sprite_vert:y4t,sprite_frag:b4t},We={common:{diffuse:{value:new i2(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Z2},alphaMap:{value:null},alphaMapTransform:{value:new Z2},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Z2}},envmap:{envMap:{value:null},envMapRotation:{value:new Z2},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Z2}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Z2}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Z2},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Z2},normalScale:{value:new e2(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Z2},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Z2}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Z2}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Z2}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new i2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new i2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Z2},alphaTest:{value:0},uvTransform:{value:new Z2}},sprite:{diffuse:{value:new i2(16777215)},opacity:{value:1},center:{value:new e2(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Z2},alphaMap:{value:null},alphaMapTransform:{value:new Z2},alphaTest:{value:0}}},co={basic:{uniforms:b0([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Y2.meshbasic_vert,fragmentShader:Y2.meshbasic_frag},lambert:{uniforms:b0([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new i2(0)}}]),vertexShader:Y2.meshlambert_vert,fragmentShader:Y2.meshlambert_frag},phong:{uniforms:b0([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new i2(0)},specular:{value:new i2(1118481)},shininess:{value:30}}]),vertexShader:Y2.meshphong_vert,fragmentShader:Y2.meshphong_frag},standard:{uniforms:b0([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new i2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y2.meshphysical_vert,fragmentShader:Y2.meshphysical_frag},toon:{uniforms:b0([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new i2(0)}}]),vertexShader:Y2.meshtoon_vert,fragmentShader:Y2.meshtoon_frag},matcap:{uniforms:b0([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Y2.meshmatcap_vert,fragmentShader:Y2.meshmatcap_frag},points:{uniforms:b0([We.points,We.fog]),vertexShader:Y2.points_vert,fragmentShader:Y2.points_frag},dashed:{uniforms:b0([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y2.linedashed_vert,fragmentShader:Y2.linedashed_frag},depth:{uniforms:b0([We.common,We.displacementmap]),vertexShader:Y2.depth_vert,fragmentShader:Y2.depth_frag},normal:{uniforms:b0([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Y2.meshnormal_vert,fragmentShader:Y2.meshnormal_frag},sprite:{uniforms:b0([We.sprite,We.fog]),vertexShader:Y2.sprite_vert,fragmentShader:Y2.sprite_frag},background:{uniforms:{uvTransform:{value:new Z2},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y2.background_vert,fragmentShader:Y2.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Z2}},vertexShader:Y2.backgroundCube_vert,fragmentShader:Y2.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y2.cube_vert,fragmentShader:Y2.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y2.equirect_vert,fragmentShader:Y2.equirect_frag},distanceRGBA:{uniforms:b0([We.common,We.displacementmap,{referencePosition:{value:new xt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y2.distanceRGBA_vert,fragmentShader:Y2.distanceRGBA_frag},shadow:{uniforms:b0([We.lights,We.fog,{color:{value:new i2(0)},opacity:{value:1}}]),vertexShader:Y2.shadow_vert,fragmentShader:Y2.shadow_frag}};co.physical={uniforms:b0([co.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Z2},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Z2},clearcoatNormalScale:{value:new e2(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Z2},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Z2},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Z2},sheen:{value:0},sheenColor:{value:new i2(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Z2},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Z2},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Z2},transmissionSamplerSize:{value:new e2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Z2},attenuationDistance:{value:0},attenuationColor:{value:new i2(0)},specularColor:{value:new i2(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Z2},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Z2},anisotropyVector:{value:new e2},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Z2}}]),vertexShader:Y2.meshphysical_vert,fragmentShader:Y2.meshphysical_frag};const Au={r:0,b:0,g:0},c1=new Cr,v4t=new x2;function C4t(T,d,A,S,M,f,B){const F=new i2(0);let W=f===!0?0:1,G,X,Z=null,K=0,$=null;function rt(vt){let ht=vt.isScene===!0?vt.background:null;return ht&&ht.isTexture&&(ht=(vt.backgroundBlurriness>0?A:d).get(ht)),ht}function lt(vt){let ht=!1;const At=rt(vt);At===null?tt(F,W):At&&At.isColor&&(tt(At,1),ht=!0);const Pt=T.xr.getEnvironmentBlendMode();Pt==="additive"?S.buffers.color.setClear(0,0,0,1,B):Pt==="alpha-blend"&&S.buffers.color.setClear(0,0,0,0,B),(T.autoClear||ht)&&T.clear(T.autoClearColor,T.autoClearDepth,T.autoClearStencil)}function nt(vt,ht){const At=rt(ht);At&&(At.isCubeTexture||At.mapping===Qu)?(X===void 0&&(X=new ei(new w1(1,1,1),new mo({name:"BackgroundCubeMaterial",uniforms:U_(co.backgroundCube.uniforms),vertexShader:co.backgroundCube.vertexShader,fragmentShader:co.backgroundCube.fragmentShader,side:C0,depthTest:!1,depthWrite:!1,fog:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(Pt,Tt,wt){this.matrixWorld.copyPosition(wt.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),M.update(X)),c1.copy(ht.backgroundRotation),c1.x*=-1,c1.y*=-1,c1.z*=-1,At.isCubeTexture&&At.isRenderTargetTexture===!1&&(c1.y*=-1,c1.z*=-1),X.material.uniforms.envMap.value=At,X.material.uniforms.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1,X.material.uniforms.backgroundBlurriness.value=ht.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=ht.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(v4t.makeRotationFromEuler(c1)),X.material.toneMapped=Mn.getTransfer(At.colorSpace)!==Hn,(Z!==At||K!==At.version||$!==T.toneMapping)&&(X.material.needsUpdate=!0,Z=At,K=At.version,$=T.toneMapping),X.layers.enableAll(),vt.unshift(X,X.geometry,X.material,0,0,null)):At&&At.isTexture&&(G===void 0&&(G=new ei(new z_(2,2),new mo({name:"BackgroundMaterial",uniforms:U_(co.background.uniforms),vertexShader:co.background.vertexShader,fragmentShader:co.background.fragmentShader,side:ho,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),M.update(G)),G.material.uniforms.t2D.value=At,G.material.uniforms.backgroundIntensity.value=ht.backgroundIntensity,G.material.toneMapped=Mn.getTransfer(At.colorSpace)!==Hn,At.matrixAutoUpdate===!0&&At.updateMatrix(),G.material.uniforms.uvTransform.value.copy(At.matrix),(Z!==At||K!==At.version||$!==T.toneMapping)&&(G.material.needsUpdate=!0,Z=At,K=At.version,$=T.toneMapping),G.layers.enableAll(),vt.unshift(G,G.geometry,G.material,0,0,null))}function tt(vt,ht){vt.getRGB(Au,CW(T)),S.buffers.color.setClear(Au.r,Au.g,Au.b,ht,B)}return{getClearColor:function(){return F},setClearColor:function(vt,ht=1){F.set(vt),W=ht,tt(F,W)},getClearAlpha:function(){return W},setClearAlpha:function(vt){W=vt,tt(F,W)},render:lt,addToRenderList:nt}}function S4t(T,d){const A=T.getParameter(T.MAX_VERTEX_ATTRIBS),S={},M=K(null);let f=M,B=!1;function F(at,Ut,Xt,Lt,ne){let ee=!1;const _e=Z(Lt,Xt,Ut);f!==_e&&(f=_e,G(f.object)),ee=$(at,Lt,Xt,ne),ee&&rt(at,Lt,Xt,ne),ne!==null&&d.update(ne,T.ELEMENT_ARRAY_BUFFER),(ee||B)&&(B=!1,At(at,Ut,Xt,Lt),ne!==null&&T.bindBuffer(T.ELEMENT_ARRAY_BUFFER,d.get(ne).buffer))}function W(){return T.createVertexArray()}function G(at){return T.bindVertexArray(at)}function X(at){return T.deleteVertexArray(at)}function Z(at,Ut,Xt){const Lt=Xt.wireframe===!0;let ne=S[at.id];ne===void 0&&(ne={},S[at.id]=ne);let ee=ne[Ut.id];ee===void 0&&(ee={},ne[Ut.id]=ee);let _e=ee[Lt];return _e===void 0&&(_e=K(W()),ee[Lt]=_e),_e}function K(at){const Ut=[],Xt=[],Lt=[];for(let ne=0;ne<A;ne++)Ut[ne]=0,Xt[ne]=0,Lt[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Ut,enabledAttributes:Xt,attributeDivisors:Lt,object:at,attributes:{},index:null}}function $(at,Ut,Xt,Lt){const ne=f.attributes,ee=Ut.attributes;let _e=0;const Se=Xt.getAttributes();for(const Yt in Se)if(Se[Yt].location>=0){const ke=ne[Yt];let n2=ee[Yt];if(n2===void 0&&(Yt==="instanceMatrix"&&at.instanceMatrix&&(n2=at.instanceMatrix),Yt==="instanceColor"&&at.instanceColor&&(n2=at.instanceColor)),ke===void 0||ke.attribute!==n2||n2&&ke.data!==n2.data)return!0;_e++}return f.attributesNum!==_e||f.index!==Lt}function rt(at,Ut,Xt,Lt){const ne={},ee=Ut.attributes;let _e=0;const Se=Xt.getAttributes();for(const Yt in Se)if(Se[Yt].location>=0){let ke=ee[Yt];ke===void 0&&(Yt==="instanceMatrix"&&at.instanceMatrix&&(ke=at.instanceMatrix),Yt==="instanceColor"&&at.instanceColor&&(ke=at.instanceColor));const n2={};n2.attribute=ke,ke&&ke.data&&(n2.data=ke.data),ne[Yt]=n2,_e++}f.attributes=ne,f.attributesNum=_e,f.index=Lt}function lt(){const at=f.newAttributes;for(let Ut=0,Xt=at.length;Ut<Xt;Ut++)at[Ut]=0}function nt(at){tt(at,0)}function tt(at,Ut){const Xt=f.newAttributes,Lt=f.enabledAttributes,ne=f.attributeDivisors;Xt[at]=1,Lt[at]===0&&(T.enableVertexAttribArray(at),Lt[at]=1),ne[at]!==Ut&&(T.vertexAttribDivisor(at,Ut),ne[at]=Ut)}function vt(){const at=f.newAttributes,Ut=f.enabledAttributes;for(let Xt=0,Lt=Ut.length;Xt<Lt;Xt++)Ut[Xt]!==at[Xt]&&(T.disableVertexAttribArray(Xt),Ut[Xt]=0)}function ht(at,Ut,Xt,Lt,ne,ee,_e){_e===!0?T.vertexAttribIPointer(at,Ut,Xt,ne,ee):T.vertexAttribPointer(at,Ut,Xt,Lt,ne,ee)}function At(at,Ut,Xt,Lt){lt();const ne=Lt.attributes,ee=Xt.getAttributes(),_e=Ut.defaultAttributeValues;for(const Se in ee){const Yt=ee[Se];if(Yt.location>=0){let pe=ne[Se];if(pe===void 0&&(Se==="instanceMatrix"&&at.instanceMatrix&&(pe=at.instanceMatrix),Se==="instanceColor"&&at.instanceColor&&(pe=at.instanceColor)),pe!==void 0){const ke=pe.normalized,n2=pe.itemSize,O2=d.get(pe);if(O2===void 0)continue;const j2=O2.buffer,ie=O2.type,Re=O2.bytesPerElement,$e=ie===T.INT||ie===T.UNSIGNED_INT||pe.gpuType===oW;if(pe.isInterleavedBufferAttribute){const Le=pe.data,V2=Le.stride,W2=pe.offset;if(Le.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Yt.locationSize;Vt++)tt(Yt.location+Vt,Le.meshPerAttribute);at.isInstancedMesh!==!0&&Lt._maxInstanceCount===void 0&&(Lt._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Vt=0;Vt<Yt.locationSize;Vt++)nt(Yt.location+Vt);T.bindBuffer(T.ARRAY_BUFFER,j2);for(let Vt=0;Vt<Yt.locationSize;Vt++)ht(Yt.location+Vt,n2/Yt.locationSize,ie,ke,V2*Re,(W2+n2/Yt.locationSize*Vt)*Re,$e)}else{if(pe.isInstancedBufferAttribute){for(let Le=0;Le<Yt.locationSize;Le++)tt(Yt.location+Le,pe.meshPerAttribute);at.isInstancedMesh!==!0&&Lt._maxInstanceCount===void 0&&(Lt._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Le=0;Le<Yt.locationSize;Le++)nt(Yt.location+Le);T.bindBuffer(T.ARRAY_BUFFER,j2);for(let Le=0;Le<Yt.locationSize;Le++)ht(Yt.location+Le,n2/Yt.locationSize,ie,ke,n2*Re,n2/Yt.locationSize*Le*Re,$e)}}else if(_e!==void 0){const ke=_e[Se];if(ke!==void 0)switch(ke.length){case 2:T.vertexAttrib2fv(Yt.location,ke);break;case 3:T.vertexAttrib3fv(Yt.location,ke);break;case 4:T.vertexAttrib4fv(Yt.location,ke);break;default:T.vertexAttrib1fv(Yt.location,ke)}}}}vt()}function Pt(){Ht();for(const at in S){const Ut=S[at];for(const Xt in Ut){const Lt=Ut[Xt];for(const ne in Lt)X(Lt[ne].object),delete Lt[ne];delete Ut[Xt]}delete S[at]}}function Tt(at){if(S[at.id]===void 0)return;const Ut=S[at.id];for(const Xt in Ut){const Lt=Ut[Xt];for(const ne in Lt)X(Lt[ne].object),delete Lt[ne];delete Ut[Xt]}delete S[at.id]}function wt(at){for(const Ut in S){const Xt=S[Ut];if(Xt[at.id]===void 0)continue;const Lt=Xt[at.id];for(const ne in Lt)X(Lt[ne].object),delete Lt[ne];delete Xt[at.id]}}function Ht(){bt(),B=!0,f!==M&&(f=M,G(f.object))}function bt(){M.geometry=null,M.program=null,M.wireframe=!1}return{setup:F,reset:Ht,resetDefaultState:bt,dispose:Pt,releaseStatesOfGeometry:Tt,releaseStatesOfProgram:wt,initAttributes:lt,enableAttribute:nt,disableUnusedAttributes:vt}}function k4t(T,d,A){let S;function M(G){S=G}function f(G,X){T.drawArrays(S,G,X),A.update(X,S,1)}function B(G,X,Z){Z!==0&&(T.drawArraysInstanced(S,G,X,Z),A.update(X,S,Z))}function F(G,X,Z){if(Z===0)return;const K=d.get("WEBGL_multi_draw");if(K===null)for(let $=0;$<Z;$++)this.render(G[$],X[$]);else{K.multiDrawArraysWEBGL(S,G,0,X,0,Z);let $=0;for(let rt=0;rt<Z;rt++)$+=X[rt];A.update($,S,1)}}function W(G,X,Z,K){if(Z===0)return;const $=d.get("WEBGL_multi_draw");if($===null)for(let rt=0;rt<G.length;rt++)B(G[rt],X[rt],K[rt]);else{$.multiDrawArraysInstancedWEBGL(S,G,0,X,0,K,0,Z);let rt=0;for(let lt=0;lt<Z;lt++)rt+=X[lt];for(let lt=0;lt<K.length;lt++)A.update(rt,S,K[lt])}}this.setMode=M,this.render=f,this.renderInstances=B,this.renderMultiDraw=F,this.renderMultiDrawInstances=W}function x4t(T,d,A,S){let M;function f(){if(M!==void 0)return M;if(d.has("EXT_texture_filter_anisotropic")===!0){const Tt=d.get("EXT_texture_filter_anisotropic");M=T.getParameter(Tt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else M=0;return M}function B(Tt){return!(Tt!==Or&&S.convert(Tt)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_FORMAT))}function F(Tt){const wt=Tt===qu&&(d.has("EXT_color_buffer_half_float")||d.has("EXT_color_buffer_float"));return!(Tt!==Bs&&S.convert(Tt)!==T.getParameter(T.IMPLEMENTATION_COLOR_READ_TYPE)&&Tt!==fo&&!wt)}function W(Tt){if(Tt==="highp"){if(T.getShaderPrecisionFormat(T.VERTEX_SHADER,T.HIGH_FLOAT).precision>0&&T.getShaderPrecisionFormat(T.FRAGMENT_SHADER,T.HIGH_FLOAT).precision>0)return"highp";Tt="mediump"}return Tt==="mediump"&&T.getShaderPrecisionFormat(T.VERTEX_SHADER,T.MEDIUM_FLOAT).precision>0&&T.getShaderPrecisionFormat(T.FRAGMENT_SHADER,T.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let G=A.precision!==void 0?A.precision:"highp";const X=W(G);X!==G&&(console.warn("THREE.WebGLRenderer:",G,"not supported, using",X,"instead."),G=X);const Z=A.logarithmicDepthBuffer===!0,K=T.getParameter(T.MAX_TEXTURE_IMAGE_UNITS),$=T.getParameter(T.MAX_VERTEX_TEXTURE_IMAGE_UNITS),rt=T.getParameter(T.MAX_TEXTURE_SIZE),lt=T.getParameter(T.MAX_CUBE_MAP_TEXTURE_SIZE),nt=T.getParameter(T.MAX_VERTEX_ATTRIBS),tt=T.getParameter(T.MAX_VERTEX_UNIFORM_VECTORS),vt=T.getParameter(T.MAX_VARYING_VECTORS),ht=T.getParameter(T.MAX_FRAGMENT_UNIFORM_VECTORS),At=$>0,Pt=T.getParameter(T.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:W,textureFormatReadable:B,textureTypeReadable:F,precision:G,logarithmicDepthBuffer:Z,maxTextures:K,maxVertexTextures:$,maxTextureSize:rt,maxCubemapSize:lt,maxAttributes:nt,maxVertexUniforms:tt,maxVaryings:vt,maxFragmentUniforms:ht,vertexTextures:At,maxSamples:Pt}}function w4t(T){const d=this;let A=null,S=0,M=!1,f=!1;const B=new lo,F=new Z2,W={value:null,needsUpdate:!1};this.uniform=W,this.numPlanes=0,this.numIntersection=0,this.init=function(Z,K){const $=Z.length!==0||K||S!==0||M;return M=K,S=Z.length,$},this.beginShadows=function(){f=!0,X(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(Z,K){A=X(Z,K,0)},this.setState=function(Z,K,$){const rt=Z.clippingPlanes,lt=Z.clipIntersection,nt=Z.clipShadows,tt=T.get(Z);if(!M||rt===null||rt.length===0||f&&!nt)f?X(null):G();else{const vt=f?0:S,ht=vt*4;let At=tt.clippingState||null;W.value=At,At=X(rt,K,ht,$);for(let Pt=0;Pt!==ht;++Pt)At[Pt]=A[Pt];tt.clippingState=At,this.numIntersection=lt?this.numPlanes:0,this.numPlanes+=vt}};function G(){W.value!==A&&(W.value=A,W.needsUpdate=S>0),d.numPlanes=S,d.numIntersection=0}function X(Z,K,$,rt){const lt=Z!==null?Z.length:0;let nt=null;if(lt!==0){if(nt=W.value,rt!==!0||nt===null){const tt=$+lt*4,vt=K.matrixWorldInverse;F.getNormalMatrix(vt),(nt===null||nt.length<tt)&&(nt=new Float32Array(tt));for(let ht=0,At=$;ht!==lt;++ht,At+=4)B.copy(Z[ht]).applyMatrix4(vt,F),B.normal.toArray(nt,At),nt[At+3]=B.constant}W.value=nt,W.needsUpdate=!0}return d.numPlanes=lt,d.numIntersection=0,nt}}function M4t(T){let d=new WeakMap;function A(B,F){return F===c6?B.mapping=F_:F===p6&&(B.mapping=O_),B}function S(B){if(B&&B.isTexture){const F=B.mapping;if(F===c6||F===p6)if(d.has(B)){const W=d.get(B).texture;return A(W,B.mapping)}else{const W=B.image;if(W&&W.height>0){const G=new jut(W.height);return G.fromEquirectangularTexture(T,B),d.set(B,G),B.addEventListener("dispose",M),A(G.texture,B.mapping)}else return null}}return B}function M(B){const F=B.target;F.removeEventListener("dispose",M);const W=d.get(F);W!==void 0&&(d.delete(F),W.dispose())}function f(){d=new WeakMap}return{get:S,dispose:f}}class Ju extends w6{constructor(d=-1,A=1,S=1,M=-1,f=.1,B=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=d,this.right=A,this.top=S,this.bottom=M,this.near=f,this.far=B,this.updateProjectionMatrix()}copy(d,A){return super.copy(d,A),this.left=d.left,this.right=d.right,this.top=d.top,this.bottom=d.bottom,this.near=d.near,this.far=d.far,this.zoom=d.zoom,this.view=d.view===null?null:Object.assign({},d.view),this}setViewOffset(d,A,S,M,f,B){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=d,this.view.fullHeight=A,this.view.offsetX=S,this.view.offsetY=M,this.view.width=f,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const d=(this.right-this.left)/(2*this.zoom),A=(this.top-this.bottom)/(2*this.zoom),S=(this.right+this.left)/2,M=(this.top+this.bottom)/2;let f=S-d,B=S+d,F=M+A,W=M-A;if(this.view!==null&&this.view.enabled){const G=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=G*this.view.offsetX,B=f+G*this.view.width,F-=X*this.view.offsetY,W=F-X*this.view.height}this.projectionMatrix.makeOrthographic(f,B,F,W,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(d){const A=super.toJSON(d);return A.object.zoom=this.zoom,A.object.left=this.left,A.object.right=this.right,A.object.top=this.top,A.object.bottom=this.bottom,A.object.near=this.near,A.object.far=this.far,this.view!==null&&(A.object.view=Object.assign({},this.view)),A}}const T_=4,Nj=[.125,.215,.35,.446,.526,.582],b1=20,j4=new Ju,Wj=new i2;let N4=null,W4=0,U4=0,G4=!1;const g1=(1+Math.sqrt(5))/2,y_=1/g1,Uj=[new xt(-g1,y_,0),new xt(g1,y_,0),new xt(-y_,0,g1),new xt(y_,0,g1),new xt(0,g1,-y_),new xt(0,g1,y_),new xt(-1,1,-1),new xt(1,1,-1),new xt(-1,1,1),new xt(1,1,1)];class Gj{constructor(d){this._renderer=d,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(d,A=0,S=.1,M=100){N4=this._renderer.getRenderTarget(),W4=this._renderer.getActiveCubeFace(),U4=this._renderer.getActiveMipmapLevel(),G4=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(d,S,M,f),A>0&&this._blur(f,0,0,A),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(d,A=null){return this._fromTexture(d,A)}fromCubemap(d,A=null){return this._fromTexture(d,A)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zj(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vj(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(d){this._lodMax=Math.floor(Math.log2(d)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let d=0;d<this._lodPlanes.length;d++)this._lodPlanes[d].dispose()}_cleanup(d){this._renderer.setRenderTarget(N4,W4,U4),this._renderer.xr.enabled=G4,d.scissorTest=!1,yu(d,0,0,d.width,d.height)}_fromTexture(d,A){d.mapping===F_||d.mapping===O_?this._setSize(d.image.length===0?16:d.image[0].width||d.image[0].image.width):this._setSize(d.image.width/4),N4=this._renderer.getRenderTarget(),W4=this._renderer.getActiveCubeFace(),U4=this._renderer.getActiveMipmapLevel(),G4=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const S=A||this._allocateTargets();return this._textureToCubeUV(d,S),this._applyPMREM(S),this._cleanup(S),S}_allocateTargets(){const d=3*Math.max(this._cubeSize,112),A=4*this._cubeSize,S={magFilter:Z0,minFilter:Z0,generateMipmaps:!1,type:qu,format:Or,colorSpace:zi,depthBuffer:!1},M=Hj(d,A,S);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==d||this._pingPongRenderTarget.height!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hj(d,A,S);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R4t(f)),this._blurMaterial=T4t(f,d,A)}return M}_compileMaterial(d){const A=new ei(this._lodPlanes[0],d);this._renderer.compile(A,j4)}_sceneToCubeUV(d,A,S,M){const F=new r0(90,1,A,S),W=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],X=this._renderer,Z=X.autoClear,K=X.toneMapping;X.getClearColor(Wj),X.toneMapping=Ps,X.autoClear=!1;const $=new C1({name:"PMREM.Background",side:C0,depthWrite:!1,depthTest:!1}),rt=new ei(new w1,$);let lt=!1;const nt=d.background;nt?nt.isColor&&($.color.copy(nt),d.background=null,lt=!0):($.color.copy(Wj),lt=!0);for(let tt=0;tt<6;tt++){const vt=tt%3;vt===0?(F.up.set(0,W[tt],0),F.lookAt(G[tt],0,0)):vt===1?(F.up.set(0,0,W[tt]),F.lookAt(0,G[tt],0)):(F.up.set(0,W[tt],0),F.lookAt(0,0,G[tt]));const ht=this._cubeSize;yu(M,vt*ht,tt>2?ht:0,ht,ht),X.setRenderTarget(M),lt&&X.render(rt,F),X.render(d,F)}rt.geometry.dispose(),rt.material.dispose(),X.toneMapping=K,X.autoClear=Z,d.background=nt}_textureToCubeUV(d,A){const S=this._renderer,M=d.mapping===F_||d.mapping===O_;M?(this._cubemapMaterial===null&&(this._cubemapMaterial=zj()),this._cubemapMaterial.uniforms.flipEnvMap.value=d.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vj());const f=M?this._cubemapMaterial:this._equirectMaterial,B=new ei(this._lodPlanes[0],f),F=f.uniforms;F.envMap.value=d;const W=this._cubeSize;yu(A,0,0,3*W,2*W),S.setRenderTarget(A),S.render(B,j4)}_applyPMREM(d){const A=this._renderer,S=A.autoClear;A.autoClear=!1;const M=this._lodPlanes.length;for(let f=1;f<M;f++){const B=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),F=Uj[(M-f-1)%Uj.length];this._blur(d,f-1,f,B,F)}A.autoClear=S}_blur(d,A,S,M,f){const B=this._pingPongRenderTarget;this._halfBlur(d,B,A,S,M,"latitudinal",f),this._halfBlur(B,d,S,S,M,"longitudinal",f)}_halfBlur(d,A,S,M,f,B,F){const W=this._renderer,G=this._blurMaterial;B!=="latitudinal"&&B!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const X=3,Z=new ei(this._lodPlanes[M],G),K=G.uniforms,$=this._sizeLods[S]-1,rt=isFinite(f)?Math.PI/(2*$):2*Math.PI/(2*b1-1),lt=f/rt,nt=isFinite(f)?1+Math.floor(X*lt):b1;nt>b1&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${nt} samples when the maximum is set to ${b1}`);const tt=[];let vt=0;for(let wt=0;wt<b1;++wt){const Ht=wt/lt,bt=Math.exp(-Ht*Ht/2);tt.push(bt),wt===0?vt+=bt:wt<nt&&(vt+=2*bt)}for(let wt=0;wt<tt.length;wt++)tt[wt]=tt[wt]/vt;K.envMap.value=d.texture,K.samples.value=nt,K.weights.value=tt,K.latitudinal.value=B==="latitudinal",F&&(K.poleAxis.value=F);const{_lodMax:ht}=this;K.dTheta.value=rt,K.mipInt.value=ht-S;const At=this._sizeLods[M],Pt=3*At*(M>ht-T_?M-ht+T_:0),Tt=4*(this._cubeSize-At);yu(A,Pt,Tt,3*At,2*At),W.setRenderTarget(A),W.render(Z,j4)}}function R4t(T){const d=[],A=[],S=[];let M=T;const f=T-T_+1+Nj.length;for(let B=0;B<f;B++){const F=Math.pow(2,M);A.push(F);let W=1/F;B>T-T_?W=Nj[B-T+T_-1]:B===0&&(W=0),S.push(W);const G=1/(F-2),X=-G,Z=1+G,K=[X,X,Z,X,Z,Z,X,X,Z,Z,X,Z],$=6,rt=6,lt=3,nt=2,tt=1,vt=new Float32Array(lt*rt*$),ht=new Float32Array(nt*rt*$),At=new Float32Array(tt*rt*$);for(let Tt=0;Tt<$;Tt++){const wt=Tt%3*2/3-1,Ht=Tt>2?0:-1,bt=[wt,Ht,0,wt+2/3,Ht,0,wt+2/3,Ht+1,0,wt,Ht,0,wt+2/3,Ht+1,0,wt,Ht+1,0];vt.set(bt,lt*rt*Tt),ht.set(K,nt*rt*Tt);const at=[Tt,Tt,Tt,Tt,Tt,Tt];At.set(at,tt*rt*Tt)}const Pt=new Li;Pt.setAttribute("position",new Vi(vt,lt)),Pt.setAttribute("uv",new Vi(ht,nt)),Pt.setAttribute("faceIndex",new Vi(At,tt)),d.push(Pt),M>T_&&M--}return{lodPlanes:d,sizeLods:A,sigmas:S}}function Hj(T,d,A){const S=new Ls(T,d,A);return S.texture.mapping=Qu,S.texture.name="PMREM.cubeUv",S.scissorTest=!0,S}function yu(T,d,A,S,M){T.viewport.set(d,A,S,M),T.scissor.set(d,A,S,M)}function T4t(T,d,A){const S=new Float32Array(b1),M=new xt(0,1,0);return new mo({name:"SphericalGaussianBlur",defines:{n:b1,CUBEUV_TEXEL_WIDTH:1/d,CUBEUV_TEXEL_HEIGHT:1/A,CUBEUV_MAX_MIP:`${T}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:S},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:M}},vertexShader:R6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Vj(){return new mo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:R6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function zj(){return new mo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:R6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function R6(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E4t(T){let d=new WeakMap,A=null;function S(F){if(F&&F.isTexture){const W=F.mapping,G=W===c6||W===p6,X=W===F_||W===O_;if(G||X){let Z=d.get(F);const K=Z!==void 0?Z.texture.pmremVersion:0;if(F.isRenderTargetTexture&&F.pmremVersion!==K)return A===null&&(A=new Gj(T)),Z=G?A.fromEquirectangular(F,Z):A.fromCubemap(F,Z),Z.texture.pmremVersion=F.pmremVersion,d.set(F,Z),Z.texture;if(Z!==void 0)return Z.texture;{const $=F.image;return G&&$&&$.height>0||X&&$&&M($)?(A===null&&(A=new Gj(T)),Z=G?A.fromEquirectangular(F):A.fromCubemap(F),Z.texture.pmremVersion=F.pmremVersion,d.set(F,Z),F.addEventListener("dispose",f),Z.texture):null}}}return F}function M(F){let W=0;const G=6;for(let X=0;X<G;X++)F[X]!==void 0&&W++;return W===G}function f(F){const W=F.target;W.removeEventListener("dispose",f);const G=d.get(W);G!==void 0&&(d.delete(W),G.dispose())}function B(){d=new WeakMap,A!==null&&(A.dispose(),A=null)}return{get:S,dispose:B}}function D4t(T){const d={};function A(S){if(d[S]!==void 0)return d[S];let M;switch(S){case"WEBGL_depth_texture":M=T.getExtension("WEBGL_depth_texture")||T.getExtension("MOZ_WEBGL_depth_texture")||T.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":M=T.getExtension("EXT_texture_filter_anisotropic")||T.getExtension("MOZ_EXT_texture_filter_anisotropic")||T.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":M=T.getExtension("WEBGL_compressed_texture_s3tc")||T.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||T.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":M=T.getExtension("WEBGL_compressed_texture_pvrtc")||T.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:M=T.getExtension(S)}return d[S]=M,M}return{has:function(S){return A(S)!==null},init:function(){A("EXT_color_buffer_float"),A("WEBGL_clip_cull_distance"),A("OES_texture_float_linear"),A("EXT_color_buffer_half_float"),A("WEBGL_multisampled_render_to_texture"),A("WEBGL_render_shared_exponent")},get:function(S){const M=A(S);return M===null&&console.warn("THREE.WebGLRenderer: "+S+" extension not supported."),M}}}function I4t(T,d,A,S){const M={},f=new WeakMap;function B(Z){const K=Z.target;K.index!==null&&d.remove(K.index);for(const rt in K.attributes)d.remove(K.attributes[rt]);for(const rt in K.morphAttributes){const lt=K.morphAttributes[rt];for(let nt=0,tt=lt.length;nt<tt;nt++)d.remove(lt[nt])}K.removeEventListener("dispose",B),delete M[K.id];const $=f.get(K);$&&(d.remove($),f.delete(K)),S.releaseStatesOfGeometry(K),K.isInstancedBufferGeometry===!0&&delete K._maxInstanceCount,A.memory.geometries--}function F(Z,K){return M[K.id]===!0||(K.addEventListener("dispose",B),M[K.id]=!0,A.memory.geometries++),K}function W(Z){const K=Z.attributes;for(const rt in K)d.update(K[rt],T.ARRAY_BUFFER);const $=Z.morphAttributes;for(const rt in $){const lt=$[rt];for(let nt=0,tt=lt.length;nt<tt;nt++)d.update(lt[nt],T.ARRAY_BUFFER)}}function G(Z){const K=[],$=Z.index,rt=Z.attributes.position;let lt=0;if($!==null){const vt=$.array;lt=$.version;for(let ht=0,At=vt.length;ht<At;ht+=3){const Pt=vt[ht+0],Tt=vt[ht+1],wt=vt[ht+2];K.push(Pt,Tt,Tt,wt,wt,Pt)}}else if(rt!==void 0){const vt=rt.array;lt=rt.version;for(let ht=0,At=vt.length/3-1;ht<At;ht+=3){const Pt=ht+0,Tt=ht+1,wt=ht+2;K.push(Pt,Tt,Tt,wt,wt,Pt)}}else return;const nt=new(hW(K)?vW:bW)(K,1);nt.version=lt;const tt=f.get(Z);tt&&d.remove(tt),f.set(Z,nt)}function X(Z){const K=f.get(Z);if(K){const $=Z.index;$!==null&&K.version<$.version&&G(Z)}else G(Z);return f.get(Z)}return{get:F,update:W,getWireframeAttribute:X}}function P4t(T,d,A){let S;function M(K){S=K}let f,B;function F(K){f=K.type,B=K.bytesPerElement}function W(K,$){T.drawElements(S,$,f,K*B),A.update($,S,1)}function G(K,$,rt){rt!==0&&(T.drawElementsInstanced(S,$,f,K*B,rt),A.update($,S,rt))}function X(K,$,rt){if(rt===0)return;const lt=d.get("WEBGL_multi_draw");if(lt===null)for(let nt=0;nt<rt;nt++)this.render(K[nt]/B,$[nt]);else{lt.multiDrawElementsWEBGL(S,$,0,f,K,0,rt);let nt=0;for(let tt=0;tt<rt;tt++)nt+=$[tt];A.update(nt,S,1)}}function Z(K,$,rt,lt){if(rt===0)return;const nt=d.get("WEBGL_multi_draw");if(nt===null)for(let tt=0;tt<K.length;tt++)G(K[tt]/B,$[tt],lt[tt]);else{nt.multiDrawElementsInstancedWEBGL(S,$,0,f,K,0,lt,0,rt);let tt=0;for(let vt=0;vt<rt;vt++)tt+=$[vt];for(let vt=0;vt<lt.length;vt++)A.update(tt,S,lt[vt])}}this.setMode=M,this.setIndex=F,this.render=W,this.renderInstances=G,this.renderMultiDraw=X,this.renderMultiDrawInstances=Z}function B4t(T){const d={geometries:0,textures:0},A={frame:0,calls:0,triangles:0,points:0,lines:0};function S(f,B,F){switch(A.calls++,B){case T.TRIANGLES:A.triangles+=F*(f/3);break;case T.LINES:A.lines+=F*(f/2);break;case T.LINE_STRIP:A.lines+=F*(f-1);break;case T.LINE_LOOP:A.lines+=F*f;break;case T.POINTS:A.points+=F*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",B);break}}function M(){A.calls=0,A.triangles=0,A.points=0,A.lines=0}return{memory:d,render:A,programs:null,autoReset:!0,reset:M,update:S}}function L4t(T,d,A){const S=new WeakMap,M=new Dn;function f(B,F,W){const G=B.morphTargetInfluences,X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=X!==void 0?X.length:0;let K=S.get(F);if(K===void 0||K.count!==Z){let at=function(){Ht.dispose(),S.delete(F),F.removeEventListener("dispose",at)};var $=at;K!==void 0&&K.texture.dispose();const rt=F.morphAttributes.position!==void 0,lt=F.morphAttributes.normal!==void 0,nt=F.morphAttributes.color!==void 0,tt=F.morphAttributes.position||[],vt=F.morphAttributes.normal||[],ht=F.morphAttributes.color||[];let At=0;rt===!0&&(At=1),lt===!0&&(At=2),nt===!0&&(At=3);let Pt=F.attributes.position.count*At,Tt=1;Pt>d.maxTextureSize&&(Tt=Math.ceil(Pt/d.maxTextureSize),Pt=d.maxTextureSize);const wt=new Float32Array(Pt*Tt*4*Z),Ht=new AW(wt,Pt,Tt,Z);Ht.type=fo,Ht.needsUpdate=!0;const bt=At*4;for(let Ut=0;Ut<Z;Ut++){const Xt=tt[Ut],Lt=vt[Ut],ne=ht[Ut],ee=Pt*Tt*4*Ut;for(let _e=0;_e<Xt.count;_e++){const Se=_e*bt;rt===!0&&(M.fromBufferAttribute(Xt,_e),wt[ee+Se+0]=M.x,wt[ee+Se+1]=M.y,wt[ee+Se+2]=M.z,wt[ee+Se+3]=0),lt===!0&&(M.fromBufferAttribute(Lt,_e),wt[ee+Se+4]=M.x,wt[ee+Se+5]=M.y,wt[ee+Se+6]=M.z,wt[ee+Se+7]=0),nt===!0&&(M.fromBufferAttribute(ne,_e),wt[ee+Se+8]=M.x,wt[ee+Se+9]=M.y,wt[ee+Se+10]=M.z,wt[ee+Se+11]=ne.itemSize===4?M.w:1)}}K={count:Z,texture:Ht,size:new e2(Pt,Tt)},S.set(F,K),F.addEventListener("dispose",at)}if(B.isInstancedMesh===!0&&B.morphTexture!==null)W.getUniforms().setValue(T,"morphTexture",B.morphTexture,A);else{let rt=0;for(let nt=0;nt<G.length;nt++)rt+=G[nt];const lt=F.morphTargetsRelative?1:1-rt;W.getUniforms().setValue(T,"morphTargetBaseInfluence",lt),W.getUniforms().setValue(T,"morphTargetInfluences",G)}W.getUniforms().setValue(T,"morphTargetsTexture",K.texture,A),W.getUniforms().setValue(T,"morphTargetsTextureSize",K.size)}return{update:f}}function F4t(T,d,A,S){let M=new WeakMap;function f(W){const G=S.render.frame,X=W.geometry,Z=d.get(W,X);if(M.get(Z)!==G&&(d.update(Z),M.set(Z,G)),W.isInstancedMesh&&(W.hasEventListener("dispose",F)===!1&&W.addEventListener("dispose",F),M.get(W)!==G&&(A.update(W.instanceMatrix,T.ARRAY_BUFFER),W.instanceColor!==null&&A.update(W.instanceColor,T.ARRAY_BUFFER),M.set(W,G))),W.isSkinnedMesh){const K=W.skeleton;M.get(K)!==G&&(K.update(),M.set(K,G))}return Z}function B(){M=new WeakMap}function F(W){const G=W.target;G.removeEventListener("dispose",F),A.remove(G.instanceMatrix),G.instanceColor!==null&&A.remove(G.instanceColor)}return{update:f,dispose:B}}class xW extends Ri{constructor(d,A,S,M,f,B,F,W,G,X){if(X=X!==void 0?X:I_,X!==I_&&X!==mc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");S===void 0&&X===I_&&(S=j_),S===void 0&&X===mc&&(S=bc),super(null,M,f,B,F,W,X,S,G),this.isDepthTexture=!0,this.image={width:d,height:A},this.magFilter=F!==void 0?F:v0,this.minFilter=W!==void 0?W:v0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(d){return super.copy(d),this.compareFunction=d.compareFunction,this}toJSON(d){const A=super.toJSON(d);return this.compareFunction!==null&&(A.compareFunction=this.compareFunction),A}}const wW=new Ri,MW=new xW(1,1);MW.compareFunction=aW;const RW=new AW,TW=new Sut,EW=new SW,Xj=[],Yj=[],Zj=new Float32Array(16),Qj=new Float32Array(9),qj=new Float32Array(4);function X_(T,d,A){const S=T[0];if(S<=0||S>0)return T;const M=d*A;let f=Xj[M];if(f===void 0&&(f=new Float32Array(M),Xj[M]=f),d!==0){S.toArray(f,0);for(let B=1,F=0;B!==d;++B)F+=A,T[B].toArray(f,F)}return f}function Ti(T,d){if(T.length!==d.length)return!1;for(let A=0,S=T.length;A<S;A++)if(T[A]!==d[A])return!1;return!0}function Ei(T,d){for(let A=0,S=d.length;A<S;A++)T[A]=d[A]}function $u(T,d){let A=Yj[d];A===void 0&&(A=new Int32Array(d),Yj[d]=A);for(let S=0;S!==d;++S)A[S]=T.allocateTextureUnit();return A}function O4t(T,d){const A=this.cache;A[0]!==d&&(T.uniform1f(this.addr,d),A[0]=d)}function j4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y)&&(T.uniform2f(this.addr,d.x,d.y),A[0]=d.x,A[1]=d.y);else{if(Ti(A,d))return;T.uniform2fv(this.addr,d),Ei(A,d)}}function N4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z)&&(T.uniform3f(this.addr,d.x,d.y,d.z),A[0]=d.x,A[1]=d.y,A[2]=d.z);else if(d.r!==void 0)(A[0]!==d.r||A[1]!==d.g||A[2]!==d.b)&&(T.uniform3f(this.addr,d.r,d.g,d.b),A[0]=d.r,A[1]=d.g,A[2]=d.b);else{if(Ti(A,d))return;T.uniform3fv(this.addr,d),Ei(A,d)}}function W4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z||A[3]!==d.w)&&(T.uniform4f(this.addr,d.x,d.y,d.z,d.w),A[0]=d.x,A[1]=d.y,A[2]=d.z,A[3]=d.w);else{if(Ti(A,d))return;T.uniform4fv(this.addr,d),Ei(A,d)}}function U4t(T,d){const A=this.cache,S=d.elements;if(S===void 0){if(Ti(A,d))return;T.uniformMatrix2fv(this.addr,!1,d),Ei(A,d)}else{if(Ti(A,S))return;qj.set(S),T.uniformMatrix2fv(this.addr,!1,qj),Ei(A,S)}}function G4t(T,d){const A=this.cache,S=d.elements;if(S===void 0){if(Ti(A,d))return;T.uniformMatrix3fv(this.addr,!1,d),Ei(A,d)}else{if(Ti(A,S))return;Qj.set(S),T.uniformMatrix3fv(this.addr,!1,Qj),Ei(A,S)}}function H4t(T,d){const A=this.cache,S=d.elements;if(S===void 0){if(Ti(A,d))return;T.uniformMatrix4fv(this.addr,!1,d),Ei(A,d)}else{if(Ti(A,S))return;Zj.set(S),T.uniformMatrix4fv(this.addr,!1,Zj),Ei(A,S)}}function V4t(T,d){const A=this.cache;A[0]!==d&&(T.uniform1i(this.addr,d),A[0]=d)}function z4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y)&&(T.uniform2i(this.addr,d.x,d.y),A[0]=d.x,A[1]=d.y);else{if(Ti(A,d))return;T.uniform2iv(this.addr,d),Ei(A,d)}}function X4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z)&&(T.uniform3i(this.addr,d.x,d.y,d.z),A[0]=d.x,A[1]=d.y,A[2]=d.z);else{if(Ti(A,d))return;T.uniform3iv(this.addr,d),Ei(A,d)}}function Y4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z||A[3]!==d.w)&&(T.uniform4i(this.addr,d.x,d.y,d.z,d.w),A[0]=d.x,A[1]=d.y,A[2]=d.z,A[3]=d.w);else{if(Ti(A,d))return;T.uniform4iv(this.addr,d),Ei(A,d)}}function Z4t(T,d){const A=this.cache;A[0]!==d&&(T.uniform1ui(this.addr,d),A[0]=d)}function Q4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y)&&(T.uniform2ui(this.addr,d.x,d.y),A[0]=d.x,A[1]=d.y);else{if(Ti(A,d))return;T.uniform2uiv(this.addr,d),Ei(A,d)}}function q4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z)&&(T.uniform3ui(this.addr,d.x,d.y,d.z),A[0]=d.x,A[1]=d.y,A[2]=d.z);else{if(Ti(A,d))return;T.uniform3uiv(this.addr,d),Ei(A,d)}}function K4t(T,d){const A=this.cache;if(d.x!==void 0)(A[0]!==d.x||A[1]!==d.y||A[2]!==d.z||A[3]!==d.w)&&(T.uniform4ui(this.addr,d.x,d.y,d.z,d.w),A[0]=d.x,A[1]=d.y,A[2]=d.z,A[3]=d.w);else{if(Ti(A,d))return;T.uniform4uiv(this.addr,d),Ei(A,d)}}function J4t(T,d,A){const S=this.cache,M=A.allocateTextureUnit();S[0]!==M&&(T.uniform1i(this.addr,M),S[0]=M);const f=this.type===T.SAMPLER_2D_SHADOW?MW:wW;A.setTexture2D(d||f,M)}function $4t(T,d,A){const S=this.cache,M=A.allocateTextureUnit();S[0]!==M&&(T.uniform1i(this.addr,M),S[0]=M),A.setTexture3D(d||TW,M)}function t6t(T,d,A){const S=this.cache,M=A.allocateTextureUnit();S[0]!==M&&(T.uniform1i(this.addr,M),S[0]=M),A.setTextureCube(d||EW,M)}function e6t(T,d,A){const S=this.cache,M=A.allocateTextureUnit();S[0]!==M&&(T.uniform1i(this.addr,M),S[0]=M),A.setTexture2DArray(d||RW,M)}function n6t(T){switch(T){case 5126:return O4t;case 35664:return j4t;case 35665:return N4t;case 35666:return W4t;case 35674:return U4t;case 35675:return G4t;case 35676:return H4t;case 5124:case 35670:return V4t;case 35667:case 35671:return z4t;case 35668:case 35672:return X4t;case 35669:case 35673:return Y4t;case 5125:return Z4t;case 36294:return Q4t;case 36295:return q4t;case 36296:return K4t;case 35678:case 36198:case 36298:case 36306:case 35682:return J4t;case 35679:case 36299:case 36307:return $4t;case 35680:case 36300:case 36308:case 36293:return t6t;case 36289:case 36303:case 36311:case 36292:return e6t}}function i6t(T,d){T.uniform1fv(this.addr,d)}function r6t(T,d){const A=X_(d,this.size,2);T.uniform2fv(this.addr,A)}function o6t(T,d){const A=X_(d,this.size,3);T.uniform3fv(this.addr,A)}function s6t(T,d){const A=X_(d,this.size,4);T.uniform4fv(this.addr,A)}function _6t(T,d){const A=X_(d,this.size,4);T.uniformMatrix2fv(this.addr,!1,A)}function l6t(T,d){const A=X_(d,this.size,9);T.uniformMatrix3fv(this.addr,!1,A)}function c6t(T,d){const A=X_(d,this.size,16);T.uniformMatrix4fv(this.addr,!1,A)}function p6t(T,d){T.uniform1iv(this.addr,d)}function u6t(T,d){T.uniform2iv(this.addr,d)}function f6t(T,d){T.uniform3iv(this.addr,d)}function a6t(T,d){T.uniform4iv(this.addr,d)}function d6t(T,d){T.uniform1uiv(this.addr,d)}function h6t(T,d){T.uniform2uiv(this.addr,d)}function m6t(T,d){T.uniform3uiv(this.addr,d)}function g6t(T,d){T.uniform4uiv(this.addr,d)}function A6t(T,d,A){const S=this.cache,M=d.length,f=$u(A,M);Ti(S,f)||(T.uniform1iv(this.addr,f),Ei(S,f));for(let B=0;B!==M;++B)A.setTexture2D(d[B]||wW,f[B])}function y6t(T,d,A){const S=this.cache,M=d.length,f=$u(A,M);Ti(S,f)||(T.uniform1iv(this.addr,f),Ei(S,f));for(let B=0;B!==M;++B)A.setTexture3D(d[B]||TW,f[B])}function b6t(T,d,A){const S=this.cache,M=d.length,f=$u(A,M);Ti(S,f)||(T.uniform1iv(this.addr,f),Ei(S,f));for(let B=0;B!==M;++B)A.setTextureCube(d[B]||EW,f[B])}function v6t(T,d,A){const S=this.cache,M=d.length,f=$u(A,M);Ti(S,f)||(T.uniform1iv(this.addr,f),Ei(S,f));for(let B=0;B!==M;++B)A.setTexture2DArray(d[B]||RW,f[B])}function C6t(T){switch(T){case 5126:return i6t;case 35664:return r6t;case 35665:return o6t;case 35666:return s6t;case 35674:return _6t;case 35675:return l6t;case 35676:return c6t;case 5124:case 35670:return p6t;case 35667:case 35671:return u6t;case 35668:case 35672:return f6t;case 35669:case 35673:return a6t;case 5125:return d6t;case 36294:return h6t;case 36295:return m6t;case 36296:return g6t;case 35678:case 36198:case 36298:case 36306:case 35682:return A6t;case 35679:case 36299:case 36307:return y6t;case 35680:case 36300:case 36308:case 36293:return b6t;case 36289:case 36303:case 36311:case 36292:return v6t}}class S6t{constructor(d,A,S){this.id=d,this.addr=S,this.cache=[],this.type=A.type,this.setValue=n6t(A.type)}}class k6t{constructor(d,A,S){this.id=d,this.addr=S,this.cache=[],this.type=A.type,this.size=A.size,this.setValue=C6t(A.type)}}class x6t{constructor(d){this.id=d,this.seq=[],this.map={}}setValue(d,A,S){const M=this.seq;for(let f=0,B=M.length;f!==B;++f){const F=M[f];F.setValue(d,A[F.id],S)}}}const H4=/(\w+)(\])?(\[|\.)?/g;function Kj(T,d){T.seq.push(d),T.map[d.id]=d}function w6t(T,d,A){const S=T.name,M=S.length;for(H4.lastIndex=0;;){const f=H4.exec(S),B=H4.lastIndex;let F=f[1];const W=f[2]==="]",G=f[3];if(W&&(F=F|0),G===void 0||G==="["&&B+2===M){Kj(A,G===void 0?new S6t(F,T,d):new k6t(F,T,d));break}else{let Z=A.map[F];Z===void 0&&(Z=new x6t(F),Kj(A,Z)),A=Z}}}class Ou{constructor(d,A){this.seq=[],this.map={};const S=d.getProgramParameter(A,d.ACTIVE_UNIFORMS);for(let M=0;M<S;++M){const f=d.getActiveUniform(A,M),B=d.getUniformLocation(A,f.name);w6t(f,B,this)}}setValue(d,A,S,M){const f=this.map[A];f!==void 0&&f.setValue(d,S,M)}setOptional(d,A,S){const M=A[S];M!==void 0&&this.setValue(d,S,M)}static upload(d,A,S,M){for(let f=0,B=A.length;f!==B;++f){const F=A[f],W=S[F.id];W.needsUpdate!==!1&&F.setValue(d,W.value,M)}}static seqWithValue(d,A){const S=[];for(let M=0,f=d.length;M!==f;++M){const B=d[M];B.id in A&&S.push(B)}return S}}function Jj(T,d,A){const S=T.createShader(d);return T.shaderSource(S,A),T.compileShader(S),S}const M6t=37297;let R6t=0;function T6t(T,d){const A=T.split(`
`),S=[],M=Math.max(d-6,0),f=Math.min(d+6,A.length);for(let B=M;B<f;B++){const F=B+1;S.push(`${F===d?">":" "} ${F}: ${A[B]}`)}return S.join(`
`)}function E6t(T){const d=Mn.getPrimaries(Mn.workingColorSpace),A=Mn.getPrimaries(T);let S;switch(d===A?S="":d===Hu&&A===Gu?S="LinearDisplayP3ToLinearSRGB":d===Gu&&A===Hu&&(S="LinearSRGBToLinearDisplayP3"),T){case zi:case Ku:return[S,"LinearTransferOETF"];case Gi:case S6:return[S,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",T),[S,"LinearTransferOETF"]}}function $j(T,d,A){const S=T.getShaderParameter(d,T.COMPILE_STATUS),M=T.getShaderInfoLog(d).trim();if(S&&M==="")return"";const f=/ERROR: 0:(\d+)/.exec(M);if(f){const B=parseInt(f[1]);return A.toUpperCase()+`

`+M+`

`+T6t(T.getShaderSource(d),B)}else return M}function D6t(T,d){const A=E6t(d);return`vec4 ${T}( vec4 value ) { return ${A[0]}( ${A[1]}( value ) ); }`}function I6t(T,d){let A;switch(d){case Spt:A="Linear";break;case kpt:A="Reinhard";break;case xpt:A="OptimizedCineon";break;case wpt:A="ACESFilmic";break;case Rpt:A="AgX";break;case Tpt:A="Neutral";break;case Mpt:A="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",d),A="Linear"}return"vec3 "+T+"( vec3 color ) { return "+A+"ToneMapping( color ); }"}function P6t(T){return[T.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",T.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fc).join(`
`)}function B6t(T){const d=[];for(const A in T){const S=T[A];S!==!1&&d.push("#define "+A+" "+S)}return d.join(`
`)}function L6t(T,d){const A={},S=T.getProgramParameter(d,T.ACTIVE_ATTRIBUTES);for(let M=0;M<S;M++){const f=T.getActiveAttrib(d,M),B=f.name;let F=1;f.type===T.FLOAT_MAT2&&(F=2),f.type===T.FLOAT_MAT3&&(F=3),f.type===T.FLOAT_MAT4&&(F=4),A[B]={type:f.type,location:T.getAttribLocation(d,B),locationSize:F}}return A}function fc(T){return T!==""}function tN(T,d){const A=d.numSpotLightShadows+d.numSpotLightMaps-d.numSpotLightShadowsWithMaps;return T.replace(/NUM_DIR_LIGHTS/g,d.numDirLights).replace(/NUM_SPOT_LIGHTS/g,d.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,d.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,A).replace(/NUM_RECT_AREA_LIGHTS/g,d.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,d.numPointLights).replace(/NUM_HEMI_LIGHTS/g,d.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,d.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,d.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,d.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,d.numPointLightShadows)}function eN(T,d){return T.replace(/NUM_CLIPPING_PLANES/g,d.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,d.numClippingPlanes-d.numClipIntersection)}const F6t=/^[ \t]*#include +<([\w\d./]+)>/gm;function a6(T){return T.replace(F6t,j6t)}const O6t=new Map;function j6t(T,d){let A=Y2[d];if(A===void 0){const S=O6t.get(d);if(S!==void 0)A=Y2[S],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',d,S);else throw new Error("Can not resolve #include <"+d+">")}return a6(A)}const N6t=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nN(T){return T.replace(N6t,W6t)}function W6t(T,d,A,S){let M="";for(let f=parseInt(d);f<parseInt(A);f++)M+=S.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return M}function iN(T){let d=`precision ${T.precision} float;
	precision ${T.precision} int;
	precision ${T.precision} sampler2D;
	precision ${T.precision} samplerCube;
	precision ${T.precision} sampler3D;
	precision ${T.precision} sampler2DArray;
	precision ${T.precision} sampler2DShadow;
	precision ${T.precision} samplerCubeShadow;
	precision ${T.precision} sampler2DArrayShadow;
	precision ${T.precision} isampler2D;
	precision ${T.precision} isampler3D;
	precision ${T.precision} isamplerCube;
	precision ${T.precision} isampler2DArray;
	precision ${T.precision} usampler2D;
	precision ${T.precision} usampler3D;
	precision ${T.precision} usamplerCube;
	precision ${T.precision} usampler2DArray;
	`;return T.precision==="highp"?d+=`
#define HIGH_PRECISION`:T.precision==="mediump"?d+=`
#define MEDIUM_PRECISION`:T.precision==="lowp"&&(d+=`
#define LOW_PRECISION`),d}function U6t(T){let d="SHADOWMAP_TYPE_BASIC";return T.shadowMapType===tW?d="SHADOWMAP_TYPE_PCF":T.shadowMapType===eW?d="SHADOWMAP_TYPE_PCF_SOFT":T.shadowMapType===Yo&&(d="SHADOWMAP_TYPE_VSM"),d}function G6t(T){let d="ENVMAP_TYPE_CUBE";if(T.envMap)switch(T.envMapMode){case F_:case O_:d="ENVMAP_TYPE_CUBE";break;case Qu:d="ENVMAP_TYPE_CUBE_UV";break}return d}function H6t(T){let d="ENVMAP_MODE_REFLECTION";if(T.envMap)switch(T.envMapMode){case O_:d="ENVMAP_MODE_REFRACTION";break}return d}function V6t(T){let d="ENVMAP_BLENDING_NONE";if(T.envMap)switch(T.combine){case Zu:d="ENVMAP_BLENDING_MULTIPLY";break;case vpt:d="ENVMAP_BLENDING_MIX";break;case Cpt:d="ENVMAP_BLENDING_ADD";break}return d}function z6t(T){const d=T.envMapCubeUVHeight;if(d===null)return null;const A=Math.log2(d)-2,S=1/d;return{texelWidth:1/(3*Math.max(Math.pow(2,A),7*16)),texelHeight:S,maxMip:A}}function X6t(T,d,A,S){const M=T.getContext(),f=A.defines;let B=A.vertexShader,F=A.fragmentShader;const W=U6t(A),G=G6t(A),X=H6t(A),Z=V6t(A),K=z6t(A),$=P6t(A),rt=B6t(f),lt=M.createProgram();let nt,tt,vt=A.glslVersion?"#version "+A.glslVersion+`
`:"";A.isRawShaderMaterial?(nt=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,rt].filter(fc).join(`
`),nt.length>0&&(nt+=`
`),tt=["#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,rt].filter(fc).join(`
`),tt.length>0&&(tt+=`
`)):(nt=[iN(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,rt,A.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",A.batching?"#define USE_BATCHING":"",A.instancing?"#define USE_INSTANCING":"",A.instancingColor?"#define USE_INSTANCING_COLOR":"",A.instancingMorph?"#define USE_INSTANCING_MORPH":"",A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.map?"#define USE_MAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+X:"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.displacementMap?"#define USE_DISPLACEMENTMAP":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.mapUv?"#define MAP_UV "+A.mapUv:"",A.alphaMapUv?"#define ALPHAMAP_UV "+A.alphaMapUv:"",A.lightMapUv?"#define LIGHTMAP_UV "+A.lightMapUv:"",A.aoMapUv?"#define AOMAP_UV "+A.aoMapUv:"",A.emissiveMapUv?"#define EMISSIVEMAP_UV "+A.emissiveMapUv:"",A.bumpMapUv?"#define BUMPMAP_UV "+A.bumpMapUv:"",A.normalMapUv?"#define NORMALMAP_UV "+A.normalMapUv:"",A.displacementMapUv?"#define DISPLACEMENTMAP_UV "+A.displacementMapUv:"",A.metalnessMapUv?"#define METALNESSMAP_UV "+A.metalnessMapUv:"",A.roughnessMapUv?"#define ROUGHNESSMAP_UV "+A.roughnessMapUv:"",A.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+A.anisotropyMapUv:"",A.clearcoatMapUv?"#define CLEARCOATMAP_UV "+A.clearcoatMapUv:"",A.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+A.clearcoatNormalMapUv:"",A.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+A.clearcoatRoughnessMapUv:"",A.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+A.iridescenceMapUv:"",A.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+A.iridescenceThicknessMapUv:"",A.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+A.sheenColorMapUv:"",A.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+A.sheenRoughnessMapUv:"",A.specularMapUv?"#define SPECULARMAP_UV "+A.specularMapUv:"",A.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+A.specularColorMapUv:"",A.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+A.specularIntensityMapUv:"",A.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+A.transmissionMapUv:"",A.thicknessMapUv?"#define THICKNESSMAP_UV "+A.thicknessMapUv:"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.flatShading?"#define FLAT_SHADED":"",A.skinning?"#define USE_SKINNING":"",A.morphTargets?"#define USE_MORPHTARGETS":"",A.morphNormals&&A.flatShading===!1?"#define USE_MORPHNORMALS":"",A.morphColors?"#define USE_MORPHCOLORS":"",A.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",A.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+A.morphTextureStride:"",A.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+A.morphTargetsCount:"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+W:"",A.sizeAttenuation?"#define USE_SIZEATTENUATION":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fc).join(`
`),tt=[iN(A),"#define SHADER_TYPE "+A.shaderType,"#define SHADER_NAME "+A.shaderName,rt,A.useFog&&A.fog?"#define USE_FOG":"",A.useFog&&A.fogExp2?"#define FOG_EXP2":"",A.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",A.map?"#define USE_MAP":"",A.matcap?"#define USE_MATCAP":"",A.envMap?"#define USE_ENVMAP":"",A.envMap?"#define "+G:"",A.envMap?"#define "+X:"",A.envMap?"#define "+Z:"",K?"#define CUBEUV_TEXEL_WIDTH "+K.texelWidth:"",K?"#define CUBEUV_TEXEL_HEIGHT "+K.texelHeight:"",K?"#define CUBEUV_MAX_MIP "+K.maxMip+".0":"",A.lightMap?"#define USE_LIGHTMAP":"",A.aoMap?"#define USE_AOMAP":"",A.bumpMap?"#define USE_BUMPMAP":"",A.normalMap?"#define USE_NORMALMAP":"",A.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",A.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",A.emissiveMap?"#define USE_EMISSIVEMAP":"",A.anisotropy?"#define USE_ANISOTROPY":"",A.anisotropyMap?"#define USE_ANISOTROPYMAP":"",A.clearcoat?"#define USE_CLEARCOAT":"",A.clearcoatMap?"#define USE_CLEARCOATMAP":"",A.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",A.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",A.dispersion?"#define USE_DISPERSION":"",A.iridescence?"#define USE_IRIDESCENCE":"",A.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",A.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",A.specularMap?"#define USE_SPECULARMAP":"",A.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",A.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",A.roughnessMap?"#define USE_ROUGHNESSMAP":"",A.metalnessMap?"#define USE_METALNESSMAP":"",A.alphaMap?"#define USE_ALPHAMAP":"",A.alphaTest?"#define USE_ALPHATEST":"",A.alphaHash?"#define USE_ALPHAHASH":"",A.sheen?"#define USE_SHEEN":"",A.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",A.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",A.transmission?"#define USE_TRANSMISSION":"",A.transmissionMap?"#define USE_TRANSMISSIONMAP":"",A.thicknessMap?"#define USE_THICKNESSMAP":"",A.vertexTangents&&A.flatShading===!1?"#define USE_TANGENT":"",A.vertexColors||A.instancingColor?"#define USE_COLOR":"",A.vertexAlphas?"#define USE_COLOR_ALPHA":"",A.vertexUv1s?"#define USE_UV1":"",A.vertexUv2s?"#define USE_UV2":"",A.vertexUv3s?"#define USE_UV3":"",A.pointsUvs?"#define USE_POINTS_UV":"",A.gradientMap?"#define USE_GRADIENTMAP":"",A.flatShading?"#define FLAT_SHADED":"",A.doubleSided?"#define DOUBLE_SIDED":"",A.flipSided?"#define FLIP_SIDED":"",A.shadowMapEnabled?"#define USE_SHADOWMAP":"",A.shadowMapEnabled?"#define "+W:"",A.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",A.numLightProbes>0?"#define USE_LIGHT_PROBES":"",A.useLegacyLights?"#define LEGACY_LIGHTS":"",A.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",A.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",A.toneMapping!==Ps?"#define TONE_MAPPING":"",A.toneMapping!==Ps?Y2.tonemapping_pars_fragment:"",A.toneMapping!==Ps?I6t("toneMapping",A.toneMapping):"",A.dithering?"#define DITHERING":"",A.opaque?"#define OPAQUE":"",Y2.colorspace_pars_fragment,D6t("linearToOutputTexel",A.outputColorSpace),A.useDepthPacking?"#define DEPTH_PACKING "+A.depthPacking:"",`
`].filter(fc).join(`
`)),B=a6(B),B=tN(B,A),B=eN(B,A),F=a6(F),F=tN(F,A),F=eN(F,A),B=nN(B),F=nN(F),A.isRawShaderMaterial!==!0&&(vt=`#version 300 es
`,nt=[$,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+nt,tt=["#define varying in",A.glslVersion===Aj?"":"layout(location = 0) out highp vec4 pc_fragColor;",A.glslVersion===Aj?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+tt);const ht=vt+nt+B,At=vt+tt+F,Pt=Jj(M,M.VERTEX_SHADER,ht),Tt=Jj(M,M.FRAGMENT_SHADER,At);M.attachShader(lt,Pt),M.attachShader(lt,Tt),A.index0AttributeName!==void 0?M.bindAttribLocation(lt,0,A.index0AttributeName):A.morphTargets===!0&&M.bindAttribLocation(lt,0,"position"),M.linkProgram(lt);function wt(Ut){if(T.debug.checkShaderErrors){const Xt=M.getProgramInfoLog(lt).trim(),Lt=M.getShaderInfoLog(Pt).trim(),ne=M.getShaderInfoLog(Tt).trim();let ee=!0,_e=!0;if(M.getProgramParameter(lt,M.LINK_STATUS)===!1)if(ee=!1,typeof T.debug.onShaderError=="function")T.debug.onShaderError(M,lt,Pt,Tt);else{const Se=$j(M,Pt,"vertex"),Yt=$j(M,Tt,"fragment");console.error("THREE.WebGLProgram: Shader Error "+M.getError()+" - VALIDATE_STATUS "+M.getProgramParameter(lt,M.VALIDATE_STATUS)+`

Material Name: `+Ut.name+`
Material Type: `+Ut.type+`

Program Info Log: `+Xt+`
`+Se+`
`+Yt)}else Xt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Xt):(Lt===""||ne==="")&&(_e=!1);_e&&(Ut.diagnostics={runnable:ee,programLog:Xt,vertexShader:{log:Lt,prefix:nt},fragmentShader:{log:ne,prefix:tt}})}M.deleteShader(Pt),M.deleteShader(Tt),Ht=new Ou(M,lt),bt=L6t(M,lt)}let Ht;this.getUniforms=function(){return Ht===void 0&&wt(this),Ht};let bt;this.getAttributes=function(){return bt===void 0&&wt(this),bt};let at=A.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return at===!1&&(at=M.getProgramParameter(lt,M6t)),at},this.destroy=function(){S.releaseStatesOfProgram(this),M.deleteProgram(lt),this.program=void 0},this.type=A.shaderType,this.name=A.shaderName,this.id=R6t++,this.cacheKey=d,this.usedTimes=1,this.program=lt,this.vertexShader=Pt,this.fragmentShader=Tt,this}let Y6t=0;class Z6t{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(d){const A=d.vertexShader,S=d.fragmentShader,M=this._getShaderStage(A),f=this._getShaderStage(S),B=this._getShaderCacheForMaterial(d);return B.has(M)===!1&&(B.add(M),M.usedTimes++),B.has(f)===!1&&(B.add(f),f.usedTimes++),this}remove(d){const A=this.materialCache.get(d);for(const S of A)S.usedTimes--,S.usedTimes===0&&this.shaderCache.delete(S.code);return this.materialCache.delete(d),this}getVertexShaderID(d){return this._getShaderStage(d.vertexShader).id}getFragmentShaderID(d){return this._getShaderStage(d.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(d){const A=this.materialCache;let S=A.get(d);return S===void 0&&(S=new Set,A.set(d,S)),S}_getShaderStage(d){const A=this.shaderCache;let S=A.get(d);return S===void 0&&(S=new Q6t(d),A.set(d,S)),S}}class Q6t{constructor(d){this.id=Y6t++,this.code=d,this.usedTimes=0}}function q6t(T,d,A,S,M,f,B){const F=new x6,W=new Z6t,G=new Set,X=[],Z=M.logarithmicDepthBuffer,K=M.vertexTextures;let $=M.precision;const rt={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function lt(bt){return G.add(bt),bt===0?"uv":`uv${bt}`}function nt(bt,at,Ut,Xt,Lt){const ne=Xt.fog,ee=Lt.geometry,_e=bt.isMeshStandardMaterial?Xt.environment:null,Se=(bt.isMeshStandardMaterial?A:d).get(bt.envMap||_e),Yt=Se&&Se.mapping===Qu?Se.image.height:null,pe=rt[bt.type];bt.precision!==null&&($=M.getMaxPrecision(bt.precision),$!==bt.precision&&console.warn("THREE.WebGLProgram.getParameters:",bt.precision,"not supported, using",$,"instead."));const ke=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,n2=ke!==void 0?ke.length:0;let O2=0;ee.morphAttributes.position!==void 0&&(O2=1),ee.morphAttributes.normal!==void 0&&(O2=2),ee.morphAttributes.color!==void 0&&(O2=3);let j2,ie,Re,$e;if(pe){const rn=co[pe];j2=rn.vertexShader,ie=rn.fragmentShader}else j2=bt.vertexShader,ie=bt.fragmentShader,W.update(bt),Re=W.getVertexShaderID(bt),$e=W.getFragmentShaderID(bt);const Le=T.getRenderTarget(),V2=Lt.isInstancedMesh===!0,W2=Lt.isBatchedMesh===!0,Vt=!!bt.map,gn=!!bt.matcap,c2=!!Se,sn=!!bt.aoMap,u2=!!bt.lightMap,B2=!!bt.bumpMap,S2=!!bt.normalMap,C2=!!bt.displacementMap,Ln=!!bt.emissiveMap,Mt=!!bt.metalnessMap,mt=!!bt.roughnessMap,$t=bt.anisotropy>0,le=bt.clearcoat>0,Ae=bt.dispersion>0,be=bt.iridescence>0,a2=bt.sheen>0,Pe=bt.transmission>0,Fe=$t&&!!bt.anisotropyMap,k2=le&&!!bt.clearcoatMap,Ie=le&&!!bt.clearcoatNormalMap,f2=le&&!!bt.clearcoatRoughnessMap,Q2=be&&!!bt.iridescenceMap,h2=be&&!!bt.iridescenceThicknessMap,Xe=a2&&!!bt.sheenColorMap,D2=a2&&!!bt.sheenRoughnessMap,U2=!!bt.specularMap,An=!!bt.specularColorMap,L2=!!bt.specularIntensityMap,pt=Pe&&!!bt.transmissionMap,Nt=Pe&&!!bt.thicknessMap,zt=!!bt.gradientMap,de=!!bt.alphaMap,De=bt.alphaTest>0,I2=!!bt.alphaHash,G2=!!bt.extensions;let Nn=Ps;bt.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Nn=T.toneMapping);const _i={shaderID:pe,shaderType:bt.type,shaderName:bt.name,vertexShader:j2,fragmentShader:ie,defines:bt.defines,customVertexShaderID:Re,customFragmentShaderID:$e,isRawShaderMaterial:bt.isRawShaderMaterial===!0,glslVersion:bt.glslVersion,precision:$,batching:W2,instancing:V2,instancingColor:V2&&Lt.instanceColor!==null,instancingMorph:V2&&Lt.morphTexture!==null,supportsVertexTextures:K,outputColorSpace:Le===null?T.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:zi,alphaToCoverage:!!bt.alphaToCoverage,map:Vt,matcap:gn,envMap:c2,envMapMode:c2&&Se.mapping,envMapCubeUVHeight:Yt,aoMap:sn,lightMap:u2,bumpMap:B2,normalMap:S2,displacementMap:K&&C2,emissiveMap:Ln,normalMapObjectSpace:S2&&bt.normalMapType===Ypt,normalMapTangentSpace:S2&&bt.normalMapType===vc,metalnessMap:Mt,roughnessMap:mt,anisotropy:$t,anisotropyMap:Fe,clearcoat:le,clearcoatMap:k2,clearcoatNormalMap:Ie,clearcoatRoughnessMap:f2,dispersion:Ae,iridescence:be,iridescenceMap:Q2,iridescenceThicknessMap:h2,sheen:a2,sheenColorMap:Xe,sheenRoughnessMap:D2,specularMap:U2,specularColorMap:An,specularIntensityMap:L2,transmission:Pe,transmissionMap:pt,thicknessMap:Nt,gradientMap:zt,opaque:bt.transparent===!1&&bt.blending===D_&&bt.alphaToCoverage===!1,alphaMap:de,alphaTest:De,alphaHash:I2,combine:bt.combine,mapUv:Vt&&lt(bt.map.channel),aoMapUv:sn&&lt(bt.aoMap.channel),lightMapUv:u2&&lt(bt.lightMap.channel),bumpMapUv:B2&&lt(bt.bumpMap.channel),normalMapUv:S2&&lt(bt.normalMap.channel),displacementMapUv:C2&&lt(bt.displacementMap.channel),emissiveMapUv:Ln&&lt(bt.emissiveMap.channel),metalnessMapUv:Mt&&lt(bt.metalnessMap.channel),roughnessMapUv:mt&&lt(bt.roughnessMap.channel),anisotropyMapUv:Fe&&lt(bt.anisotropyMap.channel),clearcoatMapUv:k2&&lt(bt.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&lt(bt.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:f2&&lt(bt.clearcoatRoughnessMap.channel),iridescenceMapUv:Q2&&lt(bt.iridescenceMap.channel),iridescenceThicknessMapUv:h2&&lt(bt.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&lt(bt.sheenColorMap.channel),sheenRoughnessMapUv:D2&&lt(bt.sheenRoughnessMap.channel),specularMapUv:U2&&lt(bt.specularMap.channel),specularColorMapUv:An&&lt(bt.specularColorMap.channel),specularIntensityMapUv:L2&&lt(bt.specularIntensityMap.channel),transmissionMapUv:pt&&lt(bt.transmissionMap.channel),thicknessMapUv:Nt&&lt(bt.thicknessMap.channel),alphaMapUv:de&&lt(bt.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(S2||$t),vertexColors:bt.vertexColors,vertexAlphas:bt.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Lt.isPoints===!0&&!!ee.attributes.uv&&(Vt||de),fog:!!ne,useFog:bt.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:bt.flatShading===!0,sizeAttenuation:bt.sizeAttenuation===!0,logarithmicDepthBuffer:Z,skinning:Lt.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:n2,morphTextureStride:O2,numDirLights:at.directional.length,numPointLights:at.point.length,numSpotLights:at.spot.length,numSpotLightMaps:at.spotLightMap.length,numRectAreaLights:at.rectArea.length,numHemiLights:at.hemi.length,numDirLightShadows:at.directionalShadowMap.length,numPointLightShadows:at.pointShadowMap.length,numSpotLightShadows:at.spotShadowMap.length,numSpotLightShadowsWithMaps:at.numSpotLightShadowsWithMaps,numLightProbes:at.numLightProbes,numClippingPlanes:B.numPlanes,numClipIntersection:B.numIntersection,dithering:bt.dithering,shadowMapEnabled:T.shadowMap.enabled&&Ut.length>0,shadowMapType:T.shadowMap.type,toneMapping:Nn,useLegacyLights:T._useLegacyLights,decodeVideoTexture:Vt&&bt.map.isVideoTexture===!0&&Mn.getTransfer(bt.map.colorSpace)===Hn,premultipliedAlpha:bt.premultipliedAlpha,doubleSided:bt.side===po,flipSided:bt.side===C0,useDepthPacking:bt.depthPacking>=0,depthPacking:bt.depthPacking||0,index0AttributeName:bt.index0AttributeName,extensionClipCullDistance:G2&&bt.extensions.clipCullDistance===!0&&S.has("WEBGL_clip_cull_distance"),extensionMultiDraw:G2&&bt.extensions.multiDraw===!0&&S.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:S.has("KHR_parallel_shader_compile"),customProgramCacheKey:bt.customProgramCacheKey()};return _i.vertexUv1s=G.has(1),_i.vertexUv2s=G.has(2),_i.vertexUv3s=G.has(3),G.clear(),_i}function tt(bt){const at=[];if(bt.shaderID?at.push(bt.shaderID):(at.push(bt.customVertexShaderID),at.push(bt.customFragmentShaderID)),bt.defines!==void 0)for(const Ut in bt.defines)at.push(Ut),at.push(bt.defines[Ut]);return bt.isRawShaderMaterial===!1&&(vt(at,bt),ht(at,bt),at.push(T.outputColorSpace)),at.push(bt.customProgramCacheKey),at.join()}function vt(bt,at){bt.push(at.precision),bt.push(at.outputColorSpace),bt.push(at.envMapMode),bt.push(at.envMapCubeUVHeight),bt.push(at.mapUv),bt.push(at.alphaMapUv),bt.push(at.lightMapUv),bt.push(at.aoMapUv),bt.push(at.bumpMapUv),bt.push(at.normalMapUv),bt.push(at.displacementMapUv),bt.push(at.emissiveMapUv),bt.push(at.metalnessMapUv),bt.push(at.roughnessMapUv),bt.push(at.anisotropyMapUv),bt.push(at.clearcoatMapUv),bt.push(at.clearcoatNormalMapUv),bt.push(at.clearcoatRoughnessMapUv),bt.push(at.iridescenceMapUv),bt.push(at.iridescenceThicknessMapUv),bt.push(at.sheenColorMapUv),bt.push(at.sheenRoughnessMapUv),bt.push(at.specularMapUv),bt.push(at.specularColorMapUv),bt.push(at.specularIntensityMapUv),bt.push(at.transmissionMapUv),bt.push(at.thicknessMapUv),bt.push(at.combine),bt.push(at.fogExp2),bt.push(at.sizeAttenuation),bt.push(at.morphTargetsCount),bt.push(at.morphAttributeCount),bt.push(at.numDirLights),bt.push(at.numPointLights),bt.push(at.numSpotLights),bt.push(at.numSpotLightMaps),bt.push(at.numHemiLights),bt.push(at.numRectAreaLights),bt.push(at.numDirLightShadows),bt.push(at.numPointLightShadows),bt.push(at.numSpotLightShadows),bt.push(at.numSpotLightShadowsWithMaps),bt.push(at.numLightProbes),bt.push(at.shadowMapType),bt.push(at.toneMapping),bt.push(at.numClippingPlanes),bt.push(at.numClipIntersection),bt.push(at.depthPacking)}function ht(bt,at){F.disableAll(),at.supportsVertexTextures&&F.enable(0),at.instancing&&F.enable(1),at.instancingColor&&F.enable(2),at.instancingMorph&&F.enable(3),at.matcap&&F.enable(4),at.envMap&&F.enable(5),at.normalMapObjectSpace&&F.enable(6),at.normalMapTangentSpace&&F.enable(7),at.clearcoat&&F.enable(8),at.iridescence&&F.enable(9),at.alphaTest&&F.enable(10),at.vertexColors&&F.enable(11),at.vertexAlphas&&F.enable(12),at.vertexUv1s&&F.enable(13),at.vertexUv2s&&F.enable(14),at.vertexUv3s&&F.enable(15),at.vertexTangents&&F.enable(16),at.anisotropy&&F.enable(17),at.alphaHash&&F.enable(18),at.batching&&F.enable(19),at.dispersion&&F.enable(20),bt.push(F.mask),F.disableAll(),at.fog&&F.enable(0),at.useFog&&F.enable(1),at.flatShading&&F.enable(2),at.logarithmicDepthBuffer&&F.enable(3),at.skinning&&F.enable(4),at.morphTargets&&F.enable(5),at.morphNormals&&F.enable(6),at.morphColors&&F.enable(7),at.premultipliedAlpha&&F.enable(8),at.shadowMapEnabled&&F.enable(9),at.useLegacyLights&&F.enable(10),at.doubleSided&&F.enable(11),at.flipSided&&F.enable(12),at.useDepthPacking&&F.enable(13),at.dithering&&F.enable(14),at.transmission&&F.enable(15),at.sheen&&F.enable(16),at.opaque&&F.enable(17),at.pointsUvs&&F.enable(18),at.decodeVideoTexture&&F.enable(19),at.alphaToCoverage&&F.enable(20),bt.push(F.mask)}function At(bt){const at=rt[bt.type];let Ut;if(at){const Xt=co[at];Ut=zu.clone(Xt.uniforms)}else Ut=bt.uniforms;return Ut}function Pt(bt,at){let Ut;for(let Xt=0,Lt=X.length;Xt<Lt;Xt++){const ne=X[Xt];if(ne.cacheKey===at){Ut=ne,++Ut.usedTimes;break}}return Ut===void 0&&(Ut=new X6t(T,at,bt,f),X.push(Ut)),Ut}function Tt(bt){if(--bt.usedTimes===0){const at=X.indexOf(bt);X[at]=X[X.length-1],X.pop(),bt.destroy()}}function wt(bt){W.remove(bt)}function Ht(){W.dispose()}return{getParameters:nt,getProgramCacheKey:tt,getUniforms:At,acquireProgram:Pt,releaseProgram:Tt,releaseShaderCache:wt,programs:X,dispose:Ht}}function K6t(){let T=new WeakMap;function d(f){let B=T.get(f);return B===void 0&&(B={},T.set(f,B)),B}function A(f){T.delete(f)}function S(f,B,F){T.get(f)[B]=F}function M(){T=new WeakMap}return{get:d,remove:A,update:S,dispose:M}}function J6t(T,d){return T.groupOrder!==d.groupOrder?T.groupOrder-d.groupOrder:T.renderOrder!==d.renderOrder?T.renderOrder-d.renderOrder:T.material.id!==d.material.id?T.material.id-d.material.id:T.z!==d.z?T.z-d.z:T.id-d.id}function rN(T,d){return T.groupOrder!==d.groupOrder?T.groupOrder-d.groupOrder:T.renderOrder!==d.renderOrder?T.renderOrder-d.renderOrder:T.z!==d.z?d.z-T.z:T.id-d.id}function oN(){const T=[];let d=0;const A=[],S=[],M=[];function f(){d=0,A.length=0,S.length=0,M.length=0}function B(Z,K,$,rt,lt,nt){let tt=T[d];return tt===void 0?(tt={id:Z.id,object:Z,geometry:K,material:$,groupOrder:rt,renderOrder:Z.renderOrder,z:lt,group:nt},T[d]=tt):(tt.id=Z.id,tt.object=Z,tt.geometry=K,tt.material=$,tt.groupOrder=rt,tt.renderOrder=Z.renderOrder,tt.z=lt,tt.group=nt),d++,tt}function F(Z,K,$,rt,lt,nt){const tt=B(Z,K,$,rt,lt,nt);$.transmission>0?S.push(tt):$.transparent===!0?M.push(tt):A.push(tt)}function W(Z,K,$,rt,lt,nt){const tt=B(Z,K,$,rt,lt,nt);$.transmission>0?S.unshift(tt):$.transparent===!0?M.unshift(tt):A.unshift(tt)}function G(Z,K){A.length>1&&A.sort(Z||J6t),S.length>1&&S.sort(K||rN),M.length>1&&M.sort(K||rN)}function X(){for(let Z=d,K=T.length;Z<K;Z++){const $=T[Z];if($.id===null)break;$.id=null,$.object=null,$.geometry=null,$.material=null,$.group=null}}return{opaque:A,transmissive:S,transparent:M,init:f,push:F,unshift:W,finish:X,sort:G}}function $6t(){let T=new WeakMap;function d(S,M){const f=T.get(S);let B;return f===void 0?(B=new oN,T.set(S,[B])):M>=f.length?(B=new oN,f.push(B)):B=f[M],B}function A(){T=new WeakMap}return{get:d,dispose:A}}function tdt(){const T={};return{get:function(d){if(T[d.id]!==void 0)return T[d.id];let A;switch(d.type){case"DirectionalLight":A={direction:new xt,color:new i2};break;case"SpotLight":A={position:new xt,direction:new xt,color:new i2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":A={position:new xt,color:new i2,distance:0,decay:0};break;case"HemisphereLight":A={direction:new xt,skyColor:new i2,groundColor:new i2};break;case"RectAreaLight":A={color:new i2,position:new xt,halfWidth:new xt,halfHeight:new xt};break}return T[d.id]=A,A}}}function edt(){const T={};return{get:function(d){if(T[d.id]!==void 0)return T[d.id];let A;switch(d.type){case"DirectionalLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e2};break;case"SpotLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e2};break;case"PointLight":A={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e2,shadowCameraNear:1,shadowCameraFar:1e3};break}return T[d.id]=A,A}}}let ndt=0;function idt(T,d){return(d.castShadow?2:0)-(T.castShadow?2:0)+(d.map?1:0)-(T.map?1:0)}function rdt(T){const d=new tdt,A=edt(),S={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let G=0;G<9;G++)S.probe.push(new xt);const M=new xt,f=new x2,B=new x2;function F(G,X){let Z=0,K=0,$=0;for(let Ut=0;Ut<9;Ut++)S.probe[Ut].set(0,0,0);let rt=0,lt=0,nt=0,tt=0,vt=0,ht=0,At=0,Pt=0,Tt=0,wt=0,Ht=0;G.sort(idt);const bt=X===!0?Math.PI:1;for(let Ut=0,Xt=G.length;Ut<Xt;Ut++){const Lt=G[Ut],ne=Lt.color,ee=Lt.intensity,_e=Lt.distance,Se=Lt.shadow&&Lt.shadow.map?Lt.shadow.map.texture:null;if(Lt.isAmbientLight)Z+=ne.r*ee*bt,K+=ne.g*ee*bt,$+=ne.b*ee*bt;else if(Lt.isLightProbe){for(let Yt=0;Yt<9;Yt++)S.probe[Yt].addScaledVector(Lt.sh.coefficients[Yt],ee);Ht++}else if(Lt.isDirectionalLight){const Yt=d.get(Lt);if(Yt.color.copy(Lt.color).multiplyScalar(Lt.intensity*bt),Lt.castShadow){const pe=Lt.shadow,ke=A.get(Lt);ke.shadowBias=pe.bias,ke.shadowNormalBias=pe.normalBias,ke.shadowRadius=pe.radius,ke.shadowMapSize=pe.mapSize,S.directionalShadow[rt]=ke,S.directionalShadowMap[rt]=Se,S.directionalShadowMatrix[rt]=Lt.shadow.matrix,ht++}S.directional[rt]=Yt,rt++}else if(Lt.isSpotLight){const Yt=d.get(Lt);Yt.position.setFromMatrixPosition(Lt.matrixWorld),Yt.color.copy(ne).multiplyScalar(ee*bt),Yt.distance=_e,Yt.coneCos=Math.cos(Lt.angle),Yt.penumbraCos=Math.cos(Lt.angle*(1-Lt.penumbra)),Yt.decay=Lt.decay,S.spot[nt]=Yt;const pe=Lt.shadow;if(Lt.map&&(S.spotLightMap[Tt]=Lt.map,Tt++,pe.updateMatrices(Lt),Lt.castShadow&&wt++),S.spotLightMatrix[nt]=pe.matrix,Lt.castShadow){const ke=A.get(Lt);ke.shadowBias=pe.bias,ke.shadowNormalBias=pe.normalBias,ke.shadowRadius=pe.radius,ke.shadowMapSize=pe.mapSize,S.spotShadow[nt]=ke,S.spotShadowMap[nt]=Se,Pt++}nt++}else if(Lt.isRectAreaLight){const Yt=d.get(Lt);Yt.color.copy(ne).multiplyScalar(ee),Yt.halfWidth.set(Lt.width*.5,0,0),Yt.halfHeight.set(0,Lt.height*.5,0),S.rectArea[tt]=Yt,tt++}else if(Lt.isPointLight){const Yt=d.get(Lt);if(Yt.color.copy(Lt.color).multiplyScalar(Lt.intensity*bt),Yt.distance=Lt.distance,Yt.decay=Lt.decay,Lt.castShadow){const pe=Lt.shadow,ke=A.get(Lt);ke.shadowBias=pe.bias,ke.shadowNormalBias=pe.normalBias,ke.shadowRadius=pe.radius,ke.shadowMapSize=pe.mapSize,ke.shadowCameraNear=pe.camera.near,ke.shadowCameraFar=pe.camera.far,S.pointShadow[lt]=ke,S.pointShadowMap[lt]=Se,S.pointShadowMatrix[lt]=Lt.shadow.matrix,At++}S.point[lt]=Yt,lt++}else if(Lt.isHemisphereLight){const Yt=d.get(Lt);Yt.skyColor.copy(Lt.color).multiplyScalar(ee*bt),Yt.groundColor.copy(Lt.groundColor).multiplyScalar(ee*bt),S.hemi[vt]=Yt,vt++}}tt>0&&(T.has("OES_texture_float_linear")===!0?(S.rectAreaLTC1=We.LTC_FLOAT_1,S.rectAreaLTC2=We.LTC_FLOAT_2):(S.rectAreaLTC1=We.LTC_HALF_1,S.rectAreaLTC2=We.LTC_HALF_2)),S.ambient[0]=Z,S.ambient[1]=K,S.ambient[2]=$;const at=S.hash;(at.directionalLength!==rt||at.pointLength!==lt||at.spotLength!==nt||at.rectAreaLength!==tt||at.hemiLength!==vt||at.numDirectionalShadows!==ht||at.numPointShadows!==At||at.numSpotShadows!==Pt||at.numSpotMaps!==Tt||at.numLightProbes!==Ht)&&(S.directional.length=rt,S.spot.length=nt,S.rectArea.length=tt,S.point.length=lt,S.hemi.length=vt,S.directionalShadow.length=ht,S.directionalShadowMap.length=ht,S.pointShadow.length=At,S.pointShadowMap.length=At,S.spotShadow.length=Pt,S.spotShadowMap.length=Pt,S.directionalShadowMatrix.length=ht,S.pointShadowMatrix.length=At,S.spotLightMatrix.length=Pt+Tt-wt,S.spotLightMap.length=Tt,S.numSpotLightShadowsWithMaps=wt,S.numLightProbes=Ht,at.directionalLength=rt,at.pointLength=lt,at.spotLength=nt,at.rectAreaLength=tt,at.hemiLength=vt,at.numDirectionalShadows=ht,at.numPointShadows=At,at.numSpotShadows=Pt,at.numSpotMaps=Tt,at.numLightProbes=Ht,S.version=ndt++)}function W(G,X){let Z=0,K=0,$=0,rt=0,lt=0;const nt=X.matrixWorldInverse;for(let tt=0,vt=G.length;tt<vt;tt++){const ht=G[tt];if(ht.isDirectionalLight){const At=S.directional[Z];At.direction.setFromMatrixPosition(ht.matrixWorld),M.setFromMatrixPosition(ht.target.matrixWorld),At.direction.sub(M),At.direction.transformDirection(nt),Z++}else if(ht.isSpotLight){const At=S.spot[$];At.position.setFromMatrixPosition(ht.matrixWorld),At.position.applyMatrix4(nt),At.direction.setFromMatrixPosition(ht.matrixWorld),M.setFromMatrixPosition(ht.target.matrixWorld),At.direction.sub(M),At.direction.transformDirection(nt),$++}else if(ht.isRectAreaLight){const At=S.rectArea[rt];At.position.setFromMatrixPosition(ht.matrixWorld),At.position.applyMatrix4(nt),B.identity(),f.copy(ht.matrixWorld),f.premultiply(nt),B.extractRotation(f),At.halfWidth.set(ht.width*.5,0,0),At.halfHeight.set(0,ht.height*.5,0),At.halfWidth.applyMatrix4(B),At.halfHeight.applyMatrix4(B),rt++}else if(ht.isPointLight){const At=S.point[K];At.position.setFromMatrixPosition(ht.matrixWorld),At.position.applyMatrix4(nt),K++}else if(ht.isHemisphereLight){const At=S.hemi[lt];At.direction.setFromMatrixPosition(ht.matrixWorld),At.direction.transformDirection(nt),lt++}}}return{setup:F,setupView:W,state:S}}function sN(T){const d=new rdt(T),A=[],S=[];function M(X){G.camera=X,A.length=0,S.length=0}function f(X){A.push(X)}function B(X){S.push(X)}function F(X){d.setup(A,X)}function W(X){d.setupView(A,X)}const G={lightsArray:A,shadowsArray:S,camera:null,lights:d,transmissionRenderTarget:{}};return{init:M,state:G,setupLights:F,setupLightsView:W,pushLight:f,pushShadow:B}}function odt(T){let d=new WeakMap;function A(M,f=0){const B=d.get(M);let F;return B===void 0?(F=new sN(T),d.set(M,[F])):f>=B.length?(F=new sN(T),B.push(F)):F=B[f],F}function S(){d=new WeakMap}return{get:A,dispose:S}}class sdt extends W0{constructor(d){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zpt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(d)}copy(d){return super.copy(d),this.depthPacking=d.depthPacking,this.map=d.map,this.alphaMap=d.alphaMap,this.displacementMap=d.displacementMap,this.displacementScale=d.displacementScale,this.displacementBias=d.displacementBias,this.wireframe=d.wireframe,this.wireframeLinewidth=d.wireframeLinewidth,this}}class _dt extends W0{constructor(d){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(d)}copy(d){return super.copy(d),this.map=d.map,this.alphaMap=d.alphaMap,this.displacementMap=d.displacementMap,this.displacementScale=d.displacementScale,this.displacementBias=d.displacementBias,this}}const ldt=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cdt=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pdt(T,d,A){let S=new M6;const M=new e2,f=new e2,B=new Dn,F=new sdt({depthPacking:Xpt}),W=new _dt,G={},X=A.maxTextureSize,Z={[ho]:C0,[C0]:ho,[po]:po},K=new mo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new e2},radius:{value:4}},vertexShader:ldt,fragmentShader:cdt}),$=K.clone();$.defines.HORIZONTAL_PASS=1;const rt=new Li;rt.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const lt=new ei(rt,K),nt=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tW;let tt=this.type;this.render=function(Tt,wt,Ht){if(nt.enabled===!1||nt.autoUpdate===!1&&nt.needsUpdate===!1||Tt.length===0)return;const bt=T.getRenderTarget(),at=T.getActiveCubeFace(),Ut=T.getActiveMipmapLevel(),Xt=T.state;Xt.setBlending(Is),Xt.buffers.color.setClear(1,1,1,1),Xt.buffers.depth.setTest(!0),Xt.setScissorTest(!1);const Lt=tt!==Yo&&this.type===Yo,ne=tt===Yo&&this.type!==Yo;for(let ee=0,_e=Tt.length;ee<_e;ee++){const Se=Tt[ee],Yt=Se.shadow;if(Yt===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(Yt.autoUpdate===!1&&Yt.needsUpdate===!1)continue;M.copy(Yt.mapSize);const pe=Yt.getFrameExtents();if(M.multiply(pe),f.copy(Yt.mapSize),(M.x>X||M.y>X)&&(M.x>X&&(f.x=Math.floor(X/pe.x),M.x=f.x*pe.x,Yt.mapSize.x=f.x),M.y>X&&(f.y=Math.floor(X/pe.y),M.y=f.y*pe.y,Yt.mapSize.y=f.y)),Yt.map===null||Lt===!0||ne===!0){const n2=this.type!==Yo?{minFilter:v0,magFilter:v0}:{};Yt.map!==null&&Yt.map.dispose(),Yt.map=new Ls(M.x,M.y,n2),Yt.map.texture.name=Se.name+".shadowMap",Yt.camera.updateProjectionMatrix()}T.setRenderTarget(Yt.map),T.clear();const ke=Yt.getViewportCount();for(let n2=0;n2<ke;n2++){const O2=Yt.getViewport(n2);B.set(f.x*O2.x,f.y*O2.y,f.x*O2.z,f.y*O2.w),Xt.viewport(B),Yt.updateMatrices(Se,n2),S=Yt.getFrustum(),At(wt,Ht,Yt.camera,Se,this.type)}Yt.isPointLightShadow!==!0&&this.type===Yo&&vt(Yt,Ht),Yt.needsUpdate=!1}tt=this.type,nt.needsUpdate=!1,T.setRenderTarget(bt,at,Ut)};function vt(Tt,wt){const Ht=d.update(lt);K.defines.VSM_SAMPLES!==Tt.blurSamples&&(K.defines.VSM_SAMPLES=Tt.blurSamples,$.defines.VSM_SAMPLES=Tt.blurSamples,K.needsUpdate=!0,$.needsUpdate=!0),Tt.mapPass===null&&(Tt.mapPass=new Ls(M.x,M.y)),K.uniforms.shadow_pass.value=Tt.map.texture,K.uniforms.resolution.value=Tt.mapSize,K.uniforms.radius.value=Tt.radius,T.setRenderTarget(Tt.mapPass),T.clear(),T.renderBufferDirect(wt,null,Ht,K,lt,null),$.uniforms.shadow_pass.value=Tt.mapPass.texture,$.uniforms.resolution.value=Tt.mapSize,$.uniforms.radius.value=Tt.radius,T.setRenderTarget(Tt.map),T.clear(),T.renderBufferDirect(wt,null,Ht,$,lt,null)}function ht(Tt,wt,Ht,bt){let at=null;const Ut=Ht.isPointLight===!0?Tt.customDistanceMaterial:Tt.customDepthMaterial;if(Ut!==void 0)at=Ut;else if(at=Ht.isPointLight===!0?W:F,T.localClippingEnabled&&wt.clipShadows===!0&&Array.isArray(wt.clippingPlanes)&&wt.clippingPlanes.length!==0||wt.displacementMap&&wt.displacementScale!==0||wt.alphaMap&&wt.alphaTest>0||wt.map&&wt.alphaTest>0){const Xt=at.uuid,Lt=wt.uuid;let ne=G[Xt];ne===void 0&&(ne={},G[Xt]=ne);let ee=ne[Lt];ee===void 0&&(ee=at.clone(),ne[Lt]=ee,wt.addEventListener("dispose",Pt)),at=ee}if(at.visible=wt.visible,at.wireframe=wt.wireframe,bt===Yo?at.side=wt.shadowSide!==null?wt.shadowSide:wt.side:at.side=wt.shadowSide!==null?wt.shadowSide:Z[wt.side],at.alphaMap=wt.alphaMap,at.alphaTest=wt.alphaTest,at.map=wt.map,at.clipShadows=wt.clipShadows,at.clippingPlanes=wt.clippingPlanes,at.clipIntersection=wt.clipIntersection,at.displacementMap=wt.displacementMap,at.displacementScale=wt.displacementScale,at.displacementBias=wt.displacementBias,at.wireframeLinewidth=wt.wireframeLinewidth,at.linewidth=wt.linewidth,Ht.isPointLight===!0&&at.isMeshDistanceMaterial===!0){const Xt=T.properties.get(at);Xt.light=Ht}return at}function At(Tt,wt,Ht,bt,at){if(Tt.visible===!1)return;if(Tt.layers.test(wt.layers)&&(Tt.isMesh||Tt.isLine||Tt.isPoints)&&(Tt.castShadow||Tt.receiveShadow&&at===Yo)&&(!Tt.frustumCulled||S.intersectsObject(Tt))){Tt.modelViewMatrix.multiplyMatrices(Ht.matrixWorldInverse,Tt.matrixWorld);const Lt=d.update(Tt),ne=Tt.material;if(Array.isArray(ne)){const ee=Lt.groups;for(let _e=0,Se=ee.length;_e<Se;_e++){const Yt=ee[_e],pe=ne[Yt.materialIndex];if(pe&&pe.visible){const ke=ht(Tt,pe,bt,at);Tt.onBeforeShadow(T,Tt,wt,Ht,Lt,ke,Yt),T.renderBufferDirect(Ht,null,Lt,ke,Tt,Yt),Tt.onAfterShadow(T,Tt,wt,Ht,Lt,ke,Yt)}}}else if(ne.visible){const ee=ht(Tt,ne,bt,at);Tt.onBeforeShadow(T,Tt,wt,Ht,Lt,ee,null),T.renderBufferDirect(Ht,null,Lt,ee,Tt,null),Tt.onAfterShadow(T,Tt,wt,Ht,Lt,ee,null)}}const Xt=Tt.children;for(let Lt=0,ne=Xt.length;Lt<ne;Lt++)At(Xt[Lt],wt,Ht,bt,at)}function Pt(Tt){Tt.target.removeEventListener("dispose",Pt);for(const Ht in G){const bt=G[Ht],at=Tt.target.uuid;at in bt&&(bt[at].dispose(),delete bt[at])}}}function udt(T){function d(){let pt=!1;const Nt=new Dn;let zt=null;const de=new Dn(0,0,0,0);return{setMask:function(De){zt!==De&&!pt&&(T.colorMask(De,De,De,De),zt=De)},setLocked:function(De){pt=De},setClear:function(De,I2,G2,Nn,_i){_i===!0&&(De*=Nn,I2*=Nn,G2*=Nn),Nt.set(De,I2,G2,Nn),de.equals(Nt)===!1&&(T.clearColor(De,I2,G2,Nn),de.copy(Nt))},reset:function(){pt=!1,zt=null,de.set(-1,0,0,0)}}}function A(){let pt=!1,Nt=null,zt=null,de=null;return{setTest:function(De){De?$e(T.DEPTH_TEST):Le(T.DEPTH_TEST)},setMask:function(De){Nt!==De&&!pt&&(T.depthMask(De),Nt=De)},setFunc:function(De){if(zt!==De){switch(De){case dpt:T.depthFunc(T.NEVER);break;case hpt:T.depthFunc(T.ALWAYS);break;case mpt:T.depthFunc(T.LESS);break;case ju:T.depthFunc(T.LEQUAL);break;case gpt:T.depthFunc(T.EQUAL);break;case Apt:T.depthFunc(T.GEQUAL);break;case ypt:T.depthFunc(T.GREATER);break;case bpt:T.depthFunc(T.NOTEQUAL);break;default:T.depthFunc(T.LEQUAL)}zt=De}},setLocked:function(De){pt=De},setClear:function(De){de!==De&&(T.clearDepth(De),de=De)},reset:function(){pt=!1,Nt=null,zt=null,de=null}}}function S(){let pt=!1,Nt=null,zt=null,de=null,De=null,I2=null,G2=null,Nn=null,_i=null;return{setTest:function(rn){pt||(rn?$e(T.STENCIL_TEST):Le(T.STENCIL_TEST))},setMask:function(rn){Nt!==rn&&!pt&&(T.stencilMask(rn),Nt=rn)},setFunc:function(rn,Xn,In){(zt!==rn||de!==Xn||De!==In)&&(T.stencilFunc(rn,Xn,In),zt=rn,de=Xn,De=In)},setOp:function(rn,Xn,In){(I2!==rn||G2!==Xn||Nn!==In)&&(T.stencilOp(rn,Xn,In),I2=rn,G2=Xn,Nn=In)},setLocked:function(rn){pt=rn},setClear:function(rn){_i!==rn&&(T.clearStencil(rn),_i=rn)},reset:function(){pt=!1,Nt=null,zt=null,de=null,De=null,I2=null,G2=null,Nn=null,_i=null}}}const M=new d,f=new A,B=new S,F=new WeakMap,W=new WeakMap;let G={},X={},Z=new WeakMap,K=[],$=null,rt=!1,lt=null,nt=null,tt=null,vt=null,ht=null,At=null,Pt=null,Tt=new i2(0,0,0),wt=0,Ht=!1,bt=null,at=null,Ut=null,Xt=null,Lt=null;const ne=T.getParameter(T.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,_e=0;const Se=T.getParameter(T.VERSION);Se.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(Se)[1]),ee=_e>=1):Se.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),ee=_e>=2);let Yt=null,pe={};const ke=T.getParameter(T.SCISSOR_BOX),n2=T.getParameter(T.VIEWPORT),O2=new Dn().fromArray(ke),j2=new Dn().fromArray(n2);function ie(pt,Nt,zt,de){const De=new Uint8Array(4),I2=T.createTexture();T.bindTexture(pt,I2),T.texParameteri(pt,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(pt,T.TEXTURE_MAG_FILTER,T.NEAREST);for(let G2=0;G2<zt;G2++)pt===T.TEXTURE_3D||pt===T.TEXTURE_2D_ARRAY?T.texImage3D(Nt,0,T.RGBA,1,1,de,0,T.RGBA,T.UNSIGNED_BYTE,De):T.texImage2D(Nt+G2,0,T.RGBA,1,1,0,T.RGBA,T.UNSIGNED_BYTE,De);return I2}const Re={};Re[T.TEXTURE_2D]=ie(T.TEXTURE_2D,T.TEXTURE_2D,1),Re[T.TEXTURE_CUBE_MAP]=ie(T.TEXTURE_CUBE_MAP,T.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[T.TEXTURE_2D_ARRAY]=ie(T.TEXTURE_2D_ARRAY,T.TEXTURE_2D_ARRAY,1,1),Re[T.TEXTURE_3D]=ie(T.TEXTURE_3D,T.TEXTURE_3D,1,1),M.setClear(0,0,0,1),f.setClear(1),B.setClear(0),$e(T.DEPTH_TEST),f.setFunc(ju),B2(!1),S2(UO),$e(T.CULL_FACE),sn(Is);function $e(pt){G[pt]!==!0&&(T.enable(pt),G[pt]=!0)}function Le(pt){G[pt]!==!1&&(T.disable(pt),G[pt]=!1)}function V2(pt,Nt){return X[pt]!==Nt?(T.bindFramebuffer(pt,Nt),X[pt]=Nt,pt===T.DRAW_FRAMEBUFFER&&(X[T.FRAMEBUFFER]=Nt),pt===T.FRAMEBUFFER&&(X[T.DRAW_FRAMEBUFFER]=Nt),!0):!1}function W2(pt,Nt){let zt=K,de=!1;if(pt){zt=Z.get(Nt),zt===void 0&&(zt=[],Z.set(Nt,zt));const De=pt.textures;if(zt.length!==De.length||zt[0]!==T.COLOR_ATTACHMENT0){for(let I2=0,G2=De.length;I2<G2;I2++)zt[I2]=T.COLOR_ATTACHMENT0+I2;zt.length=De.length,de=!0}}else zt[0]!==T.BACK&&(zt[0]=T.BACK,de=!0);de&&T.drawBuffers(zt)}function Vt(pt){return $!==pt?(T.useProgram(pt),$=pt,!0):!1}const gn={[y1]:T.FUNC_ADD,[Kct]:T.FUNC_SUBTRACT,[Jct]:T.FUNC_REVERSE_SUBTRACT};gn[$ct]=T.MIN,gn[tpt]=T.MAX;const c2={[ept]:T.ZERO,[npt]:T.ONE,[ipt]:T.SRC_COLOR,[_6]:T.SRC_ALPHA,[cpt]:T.SRC_ALPHA_SATURATE,[_pt]:T.DST_COLOR,[opt]:T.DST_ALPHA,[rpt]:T.ONE_MINUS_SRC_COLOR,[l6]:T.ONE_MINUS_SRC_ALPHA,[lpt]:T.ONE_MINUS_DST_COLOR,[spt]:T.ONE_MINUS_DST_ALPHA,[ppt]:T.CONSTANT_COLOR,[upt]:T.ONE_MINUS_CONSTANT_COLOR,[fpt]:T.CONSTANT_ALPHA,[apt]:T.ONE_MINUS_CONSTANT_ALPHA};function sn(pt,Nt,zt,de,De,I2,G2,Nn,_i,rn){if(pt===Is){rt===!0&&(Le(T.BLEND),rt=!1);return}if(rt===!1&&($e(T.BLEND),rt=!0),pt!==qct){if(pt!==lt||rn!==Ht){if((nt!==y1||ht!==y1)&&(T.blendEquation(T.FUNC_ADD),nt=y1,ht=y1),rn)switch(pt){case D_:T.blendFuncSeparate(T.ONE,T.ONE_MINUS_SRC_ALPHA,T.ONE,T.ONE_MINUS_SRC_ALPHA);break;case s6:T.blendFunc(T.ONE,T.ONE);break;case GO:T.blendFuncSeparate(T.ZERO,T.ONE_MINUS_SRC_COLOR,T.ZERO,T.ONE);break;case HO:T.blendFuncSeparate(T.ZERO,T.SRC_COLOR,T.ZERO,T.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",pt);break}else switch(pt){case D_:T.blendFuncSeparate(T.SRC_ALPHA,T.ONE_MINUS_SRC_ALPHA,T.ONE,T.ONE_MINUS_SRC_ALPHA);break;case s6:T.blendFunc(T.SRC_ALPHA,T.ONE);break;case GO:T.blendFuncSeparate(T.ZERO,T.ONE_MINUS_SRC_COLOR,T.ZERO,T.ONE);break;case HO:T.blendFunc(T.ZERO,T.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",pt);break}tt=null,vt=null,At=null,Pt=null,Tt.set(0,0,0),wt=0,lt=pt,Ht=rn}return}De=De||Nt,I2=I2||zt,G2=G2||de,(Nt!==nt||De!==ht)&&(T.blendEquationSeparate(gn[Nt],gn[De]),nt=Nt,ht=De),(zt!==tt||de!==vt||I2!==At||G2!==Pt)&&(T.blendFuncSeparate(c2[zt],c2[de],c2[I2],c2[G2]),tt=zt,vt=de,At=I2,Pt=G2),(Nn.equals(Tt)===!1||_i!==wt)&&(T.blendColor(Nn.r,Nn.g,Nn.b,_i),Tt.copy(Nn),wt=_i),lt=pt,Ht=!1}function u2(pt,Nt){pt.side===po?Le(T.CULL_FACE):$e(T.CULL_FACE);let zt=pt.side===C0;Nt&&(zt=!zt),B2(zt),pt.blending===D_&&pt.transparent===!1?sn(Is):sn(pt.blending,pt.blendEquation,pt.blendSrc,pt.blendDst,pt.blendEquationAlpha,pt.blendSrcAlpha,pt.blendDstAlpha,pt.blendColor,pt.blendAlpha,pt.premultipliedAlpha),f.setFunc(pt.depthFunc),f.setTest(pt.depthTest),f.setMask(pt.depthWrite),M.setMask(pt.colorWrite);const de=pt.stencilWrite;B.setTest(de),de&&(B.setMask(pt.stencilWriteMask),B.setFunc(pt.stencilFunc,pt.stencilRef,pt.stencilFuncMask),B.setOp(pt.stencilFail,pt.stencilZFail,pt.stencilZPass)),Ln(pt.polygonOffset,pt.polygonOffsetFactor,pt.polygonOffsetUnits),pt.alphaToCoverage===!0?$e(T.SAMPLE_ALPHA_TO_COVERAGE):Le(T.SAMPLE_ALPHA_TO_COVERAGE)}function B2(pt){bt!==pt&&(pt?T.frontFace(T.CW):T.frontFace(T.CCW),bt=pt)}function S2(pt){pt!==Zct?($e(T.CULL_FACE),pt!==at&&(pt===UO?T.cullFace(T.BACK):pt===Qct?T.cullFace(T.FRONT):T.cullFace(T.FRONT_AND_BACK))):Le(T.CULL_FACE),at=pt}function C2(pt){pt!==Ut&&(ee&&T.lineWidth(pt),Ut=pt)}function Ln(pt,Nt,zt){pt?($e(T.POLYGON_OFFSET_FILL),(Xt!==Nt||Lt!==zt)&&(T.polygonOffset(Nt,zt),Xt=Nt,Lt=zt)):Le(T.POLYGON_OFFSET_FILL)}function Mt(pt){pt?$e(T.SCISSOR_TEST):Le(T.SCISSOR_TEST)}function mt(pt){pt===void 0&&(pt=T.TEXTURE0+ne-1),Yt!==pt&&(T.activeTexture(pt),Yt=pt)}function $t(pt,Nt,zt){zt===void 0&&(Yt===null?zt=T.TEXTURE0+ne-1:zt=Yt);let de=pe[zt];de===void 0&&(de={type:void 0,texture:void 0},pe[zt]=de),(de.type!==pt||de.texture!==Nt)&&(Yt!==zt&&(T.activeTexture(zt),Yt=zt),T.bindTexture(pt,Nt||Re[pt]),de.type=pt,de.texture=Nt)}function le(){const pt=pe[Yt];pt!==void 0&&pt.type!==void 0&&(T.bindTexture(pt.type,null),pt.type=void 0,pt.texture=void 0)}function Ae(){try{T.compressedTexImage2D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function be(){try{T.compressedTexImage3D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function a2(){try{T.texSubImage2D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function Pe(){try{T.texSubImage3D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function Fe(){try{T.compressedTexSubImage2D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function k2(){try{T.compressedTexSubImage3D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function Ie(){try{T.texStorage2D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function f2(){try{T.texStorage3D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function Q2(){try{T.texImage2D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function h2(){try{T.texImage3D.apply(T,arguments)}catch(pt){console.error("THREE.WebGLState:",pt)}}function Xe(pt){O2.equals(pt)===!1&&(T.scissor(pt.x,pt.y,pt.z,pt.w),O2.copy(pt))}function D2(pt){j2.equals(pt)===!1&&(T.viewport(pt.x,pt.y,pt.z,pt.w),j2.copy(pt))}function U2(pt,Nt){let zt=W.get(Nt);zt===void 0&&(zt=new WeakMap,W.set(Nt,zt));let de=zt.get(pt);de===void 0&&(de=T.getUniformBlockIndex(Nt,pt.name),zt.set(pt,de))}function An(pt,Nt){const de=W.get(Nt).get(pt);F.get(Nt)!==de&&(T.uniformBlockBinding(Nt,de,pt.__bindingPointIndex),F.set(Nt,de))}function L2(){T.disable(T.BLEND),T.disable(T.CULL_FACE),T.disable(T.DEPTH_TEST),T.disable(T.POLYGON_OFFSET_FILL),T.disable(T.SCISSOR_TEST),T.disable(T.STENCIL_TEST),T.disable(T.SAMPLE_ALPHA_TO_COVERAGE),T.blendEquation(T.FUNC_ADD),T.blendFunc(T.ONE,T.ZERO),T.blendFuncSeparate(T.ONE,T.ZERO,T.ONE,T.ZERO),T.blendColor(0,0,0,0),T.colorMask(!0,!0,!0,!0),T.clearColor(0,0,0,0),T.depthMask(!0),T.depthFunc(T.LESS),T.clearDepth(1),T.stencilMask(4294967295),T.stencilFunc(T.ALWAYS,0,4294967295),T.stencilOp(T.KEEP,T.KEEP,T.KEEP),T.clearStencil(0),T.cullFace(T.BACK),T.frontFace(T.CCW),T.polygonOffset(0,0),T.activeTexture(T.TEXTURE0),T.bindFramebuffer(T.FRAMEBUFFER,null),T.bindFramebuffer(T.DRAW_FRAMEBUFFER,null),T.bindFramebuffer(T.READ_FRAMEBUFFER,null),T.useProgram(null),T.lineWidth(1),T.scissor(0,0,T.canvas.width,T.canvas.height),T.viewport(0,0,T.canvas.width,T.canvas.height),G={},Yt=null,pe={},X={},Z=new WeakMap,K=[],$=null,rt=!1,lt=null,nt=null,tt=null,vt=null,ht=null,At=null,Pt=null,Tt=new i2(0,0,0),wt=0,Ht=!1,bt=null,at=null,Ut=null,Xt=null,Lt=null,O2.set(0,0,T.canvas.width,T.canvas.height),j2.set(0,0,T.canvas.width,T.canvas.height),M.reset(),f.reset(),B.reset()}return{buffers:{color:M,depth:f,stencil:B},enable:$e,disable:Le,bindFramebuffer:V2,drawBuffers:W2,useProgram:Vt,setBlending:sn,setMaterial:u2,setFlipSided:B2,setCullFace:S2,setLineWidth:C2,setPolygonOffset:Ln,setScissorTest:Mt,activeTexture:mt,bindTexture:$t,unbindTexture:le,compressedTexImage2D:Ae,compressedTexImage3D:be,texImage2D:Q2,texImage3D:h2,updateUBOMapping:U2,uniformBlockBinding:An,texStorage2D:Ie,texStorage3D:f2,texSubImage2D:a2,texSubImage3D:Pe,compressedTexSubImage2D:Fe,compressedTexSubImage3D:k2,scissor:Xe,viewport:D2,reset:L2}}function fdt(T,d,A,S,M,f,B){const F=d.has("WEBGL_multisampled_render_to_texture")?d.get("WEBGL_multisampled_render_to_texture"):null,W=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new e2,X=new WeakMap;let Z;const K=new WeakMap;let $=!1;try{$=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function rt(Mt,mt){return $?new OffscreenCanvas(Mt,mt):Ac("canvas")}function lt(Mt,mt,$t){let le=1;const Ae=Ln(Mt);if((Ae.width>$t||Ae.height>$t)&&(le=$t/Math.max(Ae.width,Ae.height)),le<1)if(typeof HTMLImageElement<"u"&&Mt instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Mt instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Mt instanceof ImageBitmap||typeof VideoFrame<"u"&&Mt instanceof VideoFrame){const be=Math.floor(le*Ae.width),a2=Math.floor(le*Ae.height);Z===void 0&&(Z=rt(be,a2));const Pe=mt?rt(be,a2):Z;return Pe.width=be,Pe.height=a2,Pe.getContext("2d").drawImage(Mt,0,0,be,a2),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+be+"x"+a2+")."),Pe}else return"data"in Mt&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),Mt;return Mt}function nt(Mt){return Mt.generateMipmaps&&Mt.minFilter!==v0&&Mt.minFilter!==Z0}function tt(Mt){T.generateMipmap(Mt)}function vt(Mt,mt,$t,le,Ae=!1){if(Mt!==null){if(T[Mt]!==void 0)return T[Mt];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Mt+"'")}let be=mt;if(mt===T.RED&&($t===T.FLOAT&&(be=T.R32F),$t===T.HALF_FLOAT&&(be=T.R16F),$t===T.UNSIGNED_BYTE&&(be=T.R8)),mt===T.RED_INTEGER&&($t===T.UNSIGNED_BYTE&&(be=T.R8UI),$t===T.UNSIGNED_SHORT&&(be=T.R16UI),$t===T.UNSIGNED_INT&&(be=T.R32UI),$t===T.BYTE&&(be=T.R8I),$t===T.SHORT&&(be=T.R16I),$t===T.INT&&(be=T.R32I)),mt===T.RG&&($t===T.FLOAT&&(be=T.RG32F),$t===T.HALF_FLOAT&&(be=T.RG16F),$t===T.UNSIGNED_BYTE&&(be=T.RG8)),mt===T.RG_INTEGER&&($t===T.UNSIGNED_BYTE&&(be=T.RG8UI),$t===T.UNSIGNED_SHORT&&(be=T.RG16UI),$t===T.UNSIGNED_INT&&(be=T.RG32UI),$t===T.BYTE&&(be=T.RG8I),$t===T.SHORT&&(be=T.RG16I),$t===T.INT&&(be=T.RG32I)),mt===T.RGB&&$t===T.UNSIGNED_INT_5_9_9_9_REV&&(be=T.RGB9_E5),mt===T.RGBA){const a2=Ae?Uu:Mn.getTransfer(le);$t===T.FLOAT&&(be=T.RGBA32F),$t===T.HALF_FLOAT&&(be=T.RGBA16F),$t===T.UNSIGNED_BYTE&&(be=a2===Hn?T.SRGB8_ALPHA8:T.RGBA8),$t===T.UNSIGNED_SHORT_4_4_4_4&&(be=T.RGBA4),$t===T.UNSIGNED_SHORT_5_5_5_1&&(be=T.RGB5_A1)}return(be===T.R16F||be===T.R32F||be===T.RG16F||be===T.RG32F||be===T.RGBA16F||be===T.RGBA32F)&&d.get("EXT_color_buffer_float"),be}function ht(Mt,mt){return nt(Mt)===!0||Mt.isFramebufferTexture&&Mt.minFilter!==v0&&Mt.minFilter!==Z0?Math.log2(Math.max(mt.width,mt.height))+1:Mt.mipmaps!==void 0&&Mt.mipmaps.length>0?Mt.mipmaps.length:Mt.isCompressedTexture&&Array.isArray(Mt.image)?mt.mipmaps.length:1}function At(Mt){const mt=Mt.target;mt.removeEventListener("dispose",At),Tt(mt),mt.isVideoTexture&&X.delete(mt)}function Pt(Mt){const mt=Mt.target;mt.removeEventListener("dispose",Pt),Ht(mt)}function Tt(Mt){const mt=S.get(Mt);if(mt.__webglInit===void 0)return;const $t=Mt.source,le=K.get($t);if(le){const Ae=le[mt.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&wt(Mt),Object.keys(le).length===0&&K.delete($t)}S.remove(Mt)}function wt(Mt){const mt=S.get(Mt);T.deleteTexture(mt.__webglTexture);const $t=Mt.source,le=K.get($t);delete le[mt.__cacheKey],B.memory.textures--}function Ht(Mt){const mt=S.get(Mt);if(Mt.depthTexture&&Mt.depthTexture.dispose(),Mt.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(mt.__webglFramebuffer[le]))for(let Ae=0;Ae<mt.__webglFramebuffer[le].length;Ae++)T.deleteFramebuffer(mt.__webglFramebuffer[le][Ae]);else T.deleteFramebuffer(mt.__webglFramebuffer[le]);mt.__webglDepthbuffer&&T.deleteRenderbuffer(mt.__webglDepthbuffer[le])}else{if(Array.isArray(mt.__webglFramebuffer))for(let le=0;le<mt.__webglFramebuffer.length;le++)T.deleteFramebuffer(mt.__webglFramebuffer[le]);else T.deleteFramebuffer(mt.__webglFramebuffer);if(mt.__webglDepthbuffer&&T.deleteRenderbuffer(mt.__webglDepthbuffer),mt.__webglMultisampledFramebuffer&&T.deleteFramebuffer(mt.__webglMultisampledFramebuffer),mt.__webglColorRenderbuffer)for(let le=0;le<mt.__webglColorRenderbuffer.length;le++)mt.__webglColorRenderbuffer[le]&&T.deleteRenderbuffer(mt.__webglColorRenderbuffer[le]);mt.__webglDepthRenderbuffer&&T.deleteRenderbuffer(mt.__webglDepthRenderbuffer)}const $t=Mt.textures;for(let le=0,Ae=$t.length;le<Ae;le++){const be=S.get($t[le]);be.__webglTexture&&(T.deleteTexture(be.__webglTexture),B.memory.textures--),S.remove($t[le])}S.remove(Mt)}let bt=0;function at(){bt=0}function Ut(){const Mt=bt;return Mt>=M.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Mt+" texture units while this GPU supports only "+M.maxTextures),bt+=1,Mt}function Xt(Mt){const mt=[];return mt.push(Mt.wrapS),mt.push(Mt.wrapT),mt.push(Mt.wrapR||0),mt.push(Mt.magFilter),mt.push(Mt.minFilter),mt.push(Mt.anisotropy),mt.push(Mt.internalFormat),mt.push(Mt.format),mt.push(Mt.type),mt.push(Mt.generateMipmaps),mt.push(Mt.premultiplyAlpha),mt.push(Mt.flipY),mt.push(Mt.unpackAlignment),mt.push(Mt.colorSpace),mt.join()}function Lt(Mt,mt){const $t=S.get(Mt);if(Mt.isVideoTexture&&S2(Mt),Mt.isRenderTargetTexture===!1&&Mt.version>0&&$t.__version!==Mt.version){const le=Mt.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O2($t,Mt,mt);return}}A.bindTexture(T.TEXTURE_2D,$t.__webglTexture,T.TEXTURE0+mt)}function ne(Mt,mt){const $t=S.get(Mt);if(Mt.version>0&&$t.__version!==Mt.version){O2($t,Mt,mt);return}A.bindTexture(T.TEXTURE_2D_ARRAY,$t.__webglTexture,T.TEXTURE0+mt)}function ee(Mt,mt){const $t=S.get(Mt);if(Mt.version>0&&$t.__version!==Mt.version){O2($t,Mt,mt);return}A.bindTexture(T.TEXTURE_3D,$t.__webglTexture,T.TEXTURE0+mt)}function _e(Mt,mt){const $t=S.get(Mt);if(Mt.version>0&&$t.__version!==Mt.version){j2($t,Mt,mt);return}A.bindTexture(T.TEXTURE_CUBE_MAP,$t.__webglTexture,T.TEXTURE0+mt)}const Se={[k1]:T.REPEAT,[uo]:T.CLAMP_TO_EDGE,[Nu]:T.MIRRORED_REPEAT},Yt={[v0]:T.NEAREST,[iW]:T.NEAREST_MIPMAP_NEAREST,[uc]:T.NEAREST_MIPMAP_LINEAR,[Z0]:T.LINEAR,[Fu]:T.LINEAR_MIPMAP_NEAREST,[Zo]:T.LINEAR_MIPMAP_LINEAR},pe={[Zpt]:T.NEVER,[tut]:T.ALWAYS,[Qpt]:T.LESS,[aW]:T.LEQUAL,[qpt]:T.EQUAL,[$pt]:T.GEQUAL,[Kpt]:T.GREATER,[Jpt]:T.NOTEQUAL};function ke(Mt,mt){if(mt.type===fo&&d.has("OES_texture_float_linear")===!1&&(mt.magFilter===Z0||mt.magFilter===Fu||mt.magFilter===uc||mt.magFilter===Zo||mt.minFilter===Z0||mt.minFilter===Fu||mt.minFilter===uc||mt.minFilter===Zo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),T.texParameteri(Mt,T.TEXTURE_WRAP_S,Se[mt.wrapS]),T.texParameteri(Mt,T.TEXTURE_WRAP_T,Se[mt.wrapT]),(Mt===T.TEXTURE_3D||Mt===T.TEXTURE_2D_ARRAY)&&T.texParameteri(Mt,T.TEXTURE_WRAP_R,Se[mt.wrapR]),T.texParameteri(Mt,T.TEXTURE_MAG_FILTER,Yt[mt.magFilter]),T.texParameteri(Mt,T.TEXTURE_MIN_FILTER,Yt[mt.minFilter]),mt.compareFunction&&(T.texParameteri(Mt,T.TEXTURE_COMPARE_MODE,T.COMPARE_REF_TO_TEXTURE),T.texParameteri(Mt,T.TEXTURE_COMPARE_FUNC,pe[mt.compareFunction])),d.has("EXT_texture_filter_anisotropic")===!0){if(mt.magFilter===v0||mt.minFilter!==uc&&mt.minFilter!==Zo||mt.type===fo&&d.has("OES_texture_float_linear")===!1)return;if(mt.anisotropy>1||S.get(mt).__currentAnisotropy){const $t=d.get("EXT_texture_filter_anisotropic");T.texParameterf(Mt,$t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(mt.anisotropy,M.getMaxAnisotropy())),S.get(mt).__currentAnisotropy=mt.anisotropy}}}function n2(Mt,mt){let $t=!1;Mt.__webglInit===void 0&&(Mt.__webglInit=!0,mt.addEventListener("dispose",At));const le=mt.source;let Ae=K.get(le);Ae===void 0&&(Ae={},K.set(le,Ae));const be=Xt(mt);if(be!==Mt.__cacheKey){Ae[be]===void 0&&(Ae[be]={texture:T.createTexture(),usedTimes:0},B.memory.textures++,$t=!0),Ae[be].usedTimes++;const a2=Ae[Mt.__cacheKey];a2!==void 0&&(Ae[Mt.__cacheKey].usedTimes--,a2.usedTimes===0&&wt(mt)),Mt.__cacheKey=be,Mt.__webglTexture=Ae[be].texture}return $t}function O2(Mt,mt,$t){let le=T.TEXTURE_2D;(mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(le=T.TEXTURE_2D_ARRAY),mt.isData3DTexture&&(le=T.TEXTURE_3D);const Ae=n2(Mt,mt),be=mt.source;A.bindTexture(le,Mt.__webglTexture,T.TEXTURE0+$t);const a2=S.get(be);if(be.version!==a2.__version||Ae===!0){A.activeTexture(T.TEXTURE0+$t);const Pe=Mn.getPrimaries(Mn.workingColorSpace),Fe=mt.colorSpace===Es?null:Mn.getPrimaries(mt.colorSpace),k2=mt.colorSpace===Es||Pe===Fe?T.NONE:T.BROWSER_DEFAULT_WEBGL;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,mt.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,mt.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,mt.unpackAlignment),T.pixelStorei(T.UNPACK_COLORSPACE_CONVERSION_WEBGL,k2);let Ie=lt(mt.image,!1,M.maxTextureSize);Ie=C2(mt,Ie);const f2=f.convert(mt.format,mt.colorSpace),Q2=f.convert(mt.type);let h2=vt(mt.internalFormat,f2,Q2,mt.colorSpace,mt.isVideoTexture);ke(le,mt);let Xe;const D2=mt.mipmaps,U2=mt.isVideoTexture!==!0,An=a2.__version===void 0||Ae===!0,L2=be.dataReady,pt=ht(mt,Ie);if(mt.isDepthTexture)h2=T.DEPTH_COMPONENT16,mt.type===fo?h2=T.DEPTH_COMPONENT32F:mt.type===j_?h2=T.DEPTH_COMPONENT24:mt.type===bc&&(h2=T.DEPTH24_STENCIL8),An&&(U2?A.texStorage2D(T.TEXTURE_2D,1,h2,Ie.width,Ie.height):A.texImage2D(T.TEXTURE_2D,0,h2,Ie.width,Ie.height,0,f2,Q2,null));else if(mt.isDataTexture)if(D2.length>0){U2&&An&&A.texStorage2D(T.TEXTURE_2D,pt,h2,D2[0].width,D2[0].height);for(let Nt=0,zt=D2.length;Nt<zt;Nt++)Xe=D2[Nt],U2?L2&&A.texSubImage2D(T.TEXTURE_2D,Nt,0,0,Xe.width,Xe.height,f2,Q2,Xe.data):A.texImage2D(T.TEXTURE_2D,Nt,h2,Xe.width,Xe.height,0,f2,Q2,Xe.data);mt.generateMipmaps=!1}else U2?(An&&A.texStorage2D(T.TEXTURE_2D,pt,h2,Ie.width,Ie.height),L2&&A.texSubImage2D(T.TEXTURE_2D,0,0,0,Ie.width,Ie.height,f2,Q2,Ie.data)):A.texImage2D(T.TEXTURE_2D,0,h2,Ie.width,Ie.height,0,f2,Q2,Ie.data);else if(mt.isCompressedTexture)if(mt.isCompressedArrayTexture){U2&&An&&A.texStorage3D(T.TEXTURE_2D_ARRAY,pt,h2,D2[0].width,D2[0].height,Ie.depth);for(let Nt=0,zt=D2.length;Nt<zt;Nt++)Xe=D2[Nt],mt.format!==Or?f2!==null?U2?L2&&A.compressedTexSubImage3D(T.TEXTURE_2D_ARRAY,Nt,0,0,0,Xe.width,Xe.height,Ie.depth,f2,Xe.data,0,0):A.compressedTexImage3D(T.TEXTURE_2D_ARRAY,Nt,h2,Xe.width,Xe.height,Ie.depth,0,Xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U2?L2&&A.texSubImage3D(T.TEXTURE_2D_ARRAY,Nt,0,0,0,Xe.width,Xe.height,Ie.depth,f2,Q2,Xe.data):A.texImage3D(T.TEXTURE_2D_ARRAY,Nt,h2,Xe.width,Xe.height,Ie.depth,0,f2,Q2,Xe.data)}else{U2&&An&&A.texStorage2D(T.TEXTURE_2D,pt,h2,D2[0].width,D2[0].height);for(let Nt=0,zt=D2.length;Nt<zt;Nt++)Xe=D2[Nt],mt.format!==Or?f2!==null?U2?L2&&A.compressedTexSubImage2D(T.TEXTURE_2D,Nt,0,0,Xe.width,Xe.height,f2,Xe.data):A.compressedTexImage2D(T.TEXTURE_2D,Nt,h2,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U2?L2&&A.texSubImage2D(T.TEXTURE_2D,Nt,0,0,Xe.width,Xe.height,f2,Q2,Xe.data):A.texImage2D(T.TEXTURE_2D,Nt,h2,Xe.width,Xe.height,0,f2,Q2,Xe.data)}else if(mt.isDataArrayTexture)U2?(An&&A.texStorage3D(T.TEXTURE_2D_ARRAY,pt,h2,Ie.width,Ie.height,Ie.depth),L2&&A.texSubImage3D(T.TEXTURE_2D_ARRAY,0,0,0,0,Ie.width,Ie.height,Ie.depth,f2,Q2,Ie.data)):A.texImage3D(T.TEXTURE_2D_ARRAY,0,h2,Ie.width,Ie.height,Ie.depth,0,f2,Q2,Ie.data);else if(mt.isData3DTexture)U2?(An&&A.texStorage3D(T.TEXTURE_3D,pt,h2,Ie.width,Ie.height,Ie.depth),L2&&A.texSubImage3D(T.TEXTURE_3D,0,0,0,0,Ie.width,Ie.height,Ie.depth,f2,Q2,Ie.data)):A.texImage3D(T.TEXTURE_3D,0,h2,Ie.width,Ie.height,Ie.depth,0,f2,Q2,Ie.data);else if(mt.isFramebufferTexture){if(An)if(U2)A.texStorage2D(T.TEXTURE_2D,pt,h2,Ie.width,Ie.height);else{let Nt=Ie.width,zt=Ie.height;for(let de=0;de<pt;de++)A.texImage2D(T.TEXTURE_2D,de,h2,Nt,zt,0,f2,Q2,null),Nt>>=1,zt>>=1}}else if(D2.length>0){if(U2&&An){const Nt=Ln(D2[0]);A.texStorage2D(T.TEXTURE_2D,pt,h2,Nt.width,Nt.height)}for(let Nt=0,zt=D2.length;Nt<zt;Nt++)Xe=D2[Nt],U2?L2&&A.texSubImage2D(T.TEXTURE_2D,Nt,0,0,f2,Q2,Xe):A.texImage2D(T.TEXTURE_2D,Nt,h2,f2,Q2,Xe);mt.generateMipmaps=!1}else if(U2){if(An){const Nt=Ln(Ie);A.texStorage2D(T.TEXTURE_2D,pt,h2,Nt.width,Nt.height)}L2&&A.texSubImage2D(T.TEXTURE_2D,0,0,0,f2,Q2,Ie)}else A.texImage2D(T.TEXTURE_2D,0,h2,f2,Q2,Ie);nt(mt)&&tt(le),a2.__version=be.version,mt.onUpdate&&mt.onUpdate(mt)}Mt.__version=mt.version}function j2(Mt,mt,$t){if(mt.image.length!==6)return;const le=n2(Mt,mt),Ae=mt.source;A.bindTexture(T.TEXTURE_CUBE_MAP,Mt.__webglTexture,T.TEXTURE0+$t);const be=S.get(Ae);if(Ae.version!==be.__version||le===!0){A.activeTexture(T.TEXTURE0+$t);const a2=Mn.getPrimaries(Mn.workingColorSpace),Pe=mt.colorSpace===Es?null:Mn.getPrimaries(mt.colorSpace),Fe=mt.colorSpace===Es||a2===Pe?T.NONE:T.BROWSER_DEFAULT_WEBGL;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,mt.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,mt.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,mt.unpackAlignment),T.pixelStorei(T.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const k2=mt.isCompressedTexture||mt.image[0].isCompressedTexture,Ie=mt.image[0]&&mt.image[0].isDataTexture,f2=[];for(let zt=0;zt<6;zt++)!k2&&!Ie?f2[zt]=lt(mt.image[zt],!0,M.maxCubemapSize):f2[zt]=Ie?mt.image[zt].image:mt.image[zt],f2[zt]=C2(mt,f2[zt]);const Q2=f2[0],h2=f.convert(mt.format,mt.colorSpace),Xe=f.convert(mt.type),D2=vt(mt.internalFormat,h2,Xe,mt.colorSpace),U2=mt.isVideoTexture!==!0,An=be.__version===void 0||le===!0,L2=Ae.dataReady;let pt=ht(mt,Q2);ke(T.TEXTURE_CUBE_MAP,mt);let Nt;if(k2){U2&&An&&A.texStorage2D(T.TEXTURE_CUBE_MAP,pt,D2,Q2.width,Q2.height);for(let zt=0;zt<6;zt++){Nt=f2[zt].mipmaps;for(let de=0;de<Nt.length;de++){const De=Nt[de];mt.format!==Or?h2!==null?U2?L2&&A.compressedTexSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de,0,0,De.width,De.height,h2,De.data):A.compressedTexImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de,D2,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U2?L2&&A.texSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de,0,0,De.width,De.height,h2,Xe,De.data):A.texImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de,D2,De.width,De.height,0,h2,Xe,De.data)}}}else{if(Nt=mt.mipmaps,U2&&An){Nt.length>0&&pt++;const zt=Ln(f2[0]);A.texStorage2D(T.TEXTURE_CUBE_MAP,pt,D2,zt.width,zt.height)}for(let zt=0;zt<6;zt++)if(Ie){U2?L2&&A.texSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,f2[zt].width,f2[zt].height,h2,Xe,f2[zt].data):A.texImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,D2,f2[zt].width,f2[zt].height,0,h2,Xe,f2[zt].data);for(let de=0;de<Nt.length;de++){const I2=Nt[de].image[zt].image;U2?L2&&A.texSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de+1,0,0,I2.width,I2.height,h2,Xe,I2.data):A.texImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de+1,D2,I2.width,I2.height,0,h2,Xe,I2.data)}}else{U2?L2&&A.texSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,0,0,h2,Xe,f2[zt]):A.texImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,D2,h2,Xe,f2[zt]);for(let de=0;de<Nt.length;de++){const De=Nt[de];U2?L2&&A.texSubImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de+1,0,0,h2,Xe,De.image[zt]):A.texImage2D(T.TEXTURE_CUBE_MAP_POSITIVE_X+zt,de+1,D2,h2,Xe,De.image[zt])}}}nt(mt)&&tt(T.TEXTURE_CUBE_MAP),be.__version=Ae.version,mt.onUpdate&&mt.onUpdate(mt)}Mt.__version=mt.version}function ie(Mt,mt,$t,le,Ae,be){const a2=f.convert($t.format,$t.colorSpace),Pe=f.convert($t.type),Fe=vt($t.internalFormat,a2,Pe,$t.colorSpace);if(!S.get(mt).__hasExternalTextures){const Ie=Math.max(1,mt.width>>be),f2=Math.max(1,mt.height>>be);Ae===T.TEXTURE_3D||Ae===T.TEXTURE_2D_ARRAY?A.texImage3D(Ae,be,Fe,Ie,f2,mt.depth,0,a2,Pe,null):A.texImage2D(Ae,be,Fe,Ie,f2,0,a2,Pe,null)}A.bindFramebuffer(T.FRAMEBUFFER,Mt),B2(mt)?F.framebufferTexture2DMultisampleEXT(T.FRAMEBUFFER,le,Ae,S.get($t).__webglTexture,0,u2(mt)):(Ae===T.TEXTURE_2D||Ae>=T.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=T.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&T.framebufferTexture2D(T.FRAMEBUFFER,le,Ae,S.get($t).__webglTexture,be),A.bindFramebuffer(T.FRAMEBUFFER,null)}function Re(Mt,mt,$t){if(T.bindRenderbuffer(T.RENDERBUFFER,Mt),mt.depthBuffer&&!mt.stencilBuffer){let le=T.DEPTH_COMPONENT24;if($t||B2(mt)){const Ae=mt.depthTexture;Ae&&Ae.isDepthTexture&&(Ae.type===fo?le=T.DEPTH_COMPONENT32F:Ae.type===j_&&(le=T.DEPTH_COMPONENT24));const be=u2(mt);B2(mt)?F.renderbufferStorageMultisampleEXT(T.RENDERBUFFER,be,le,mt.width,mt.height):T.renderbufferStorageMultisample(T.RENDERBUFFER,be,le,mt.width,mt.height)}else T.renderbufferStorage(T.RENDERBUFFER,le,mt.width,mt.height);T.framebufferRenderbuffer(T.FRAMEBUFFER,T.DEPTH_ATTACHMENT,T.RENDERBUFFER,Mt)}else if(mt.depthBuffer&&mt.stencilBuffer){const le=u2(mt);$t&&B2(mt)===!1?T.renderbufferStorageMultisample(T.RENDERBUFFER,le,T.DEPTH24_STENCIL8,mt.width,mt.height):B2(mt)?F.renderbufferStorageMultisampleEXT(T.RENDERBUFFER,le,T.DEPTH24_STENCIL8,mt.width,mt.height):T.renderbufferStorage(T.RENDERBUFFER,T.DEPTH_STENCIL,mt.width,mt.height),T.framebufferRenderbuffer(T.FRAMEBUFFER,T.DEPTH_STENCIL_ATTACHMENT,T.RENDERBUFFER,Mt)}else{const le=mt.textures;for(let Ae=0;Ae<le.length;Ae++){const be=le[Ae],a2=f.convert(be.format,be.colorSpace),Pe=f.convert(be.type),Fe=vt(be.internalFormat,a2,Pe,be.colorSpace),k2=u2(mt);$t&&B2(mt)===!1?T.renderbufferStorageMultisample(T.RENDERBUFFER,k2,Fe,mt.width,mt.height):B2(mt)?F.renderbufferStorageMultisampleEXT(T.RENDERBUFFER,k2,Fe,mt.width,mt.height):T.renderbufferStorage(T.RENDERBUFFER,Fe,mt.width,mt.height)}}T.bindRenderbuffer(T.RENDERBUFFER,null)}function $e(Mt,mt){if(mt&&mt.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(A.bindFramebuffer(T.FRAMEBUFFER,Mt),!(mt.depthTexture&&mt.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!S.get(mt.depthTexture).__webglTexture||mt.depthTexture.image.width!==mt.width||mt.depthTexture.image.height!==mt.height)&&(mt.depthTexture.image.width=mt.width,mt.depthTexture.image.height=mt.height,mt.depthTexture.needsUpdate=!0),Lt(mt.depthTexture,0);const le=S.get(mt.depthTexture).__webglTexture,Ae=u2(mt);if(mt.depthTexture.format===I_)B2(mt)?F.framebufferTexture2DMultisampleEXT(T.FRAMEBUFFER,T.DEPTH_ATTACHMENT,T.TEXTURE_2D,le,0,Ae):T.framebufferTexture2D(T.FRAMEBUFFER,T.DEPTH_ATTACHMENT,T.TEXTURE_2D,le,0);else if(mt.depthTexture.format===mc)B2(mt)?F.framebufferTexture2DMultisampleEXT(T.FRAMEBUFFER,T.DEPTH_STENCIL_ATTACHMENT,T.TEXTURE_2D,le,0,Ae):T.framebufferTexture2D(T.FRAMEBUFFER,T.DEPTH_STENCIL_ATTACHMENT,T.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Le(Mt){const mt=S.get(Mt),$t=Mt.isWebGLCubeRenderTarget===!0;if(Mt.depthTexture&&!mt.__autoAllocateDepthBuffer){if($t)throw new Error("target.depthTexture not supported in Cube render targets");$e(mt.__webglFramebuffer,Mt)}else if($t){mt.__webglDepthbuffer=[];for(let le=0;le<6;le++)A.bindFramebuffer(T.FRAMEBUFFER,mt.__webglFramebuffer[le]),mt.__webglDepthbuffer[le]=T.createRenderbuffer(),Re(mt.__webglDepthbuffer[le],Mt,!1)}else A.bindFramebuffer(T.FRAMEBUFFER,mt.__webglFramebuffer),mt.__webglDepthbuffer=T.createRenderbuffer(),Re(mt.__webglDepthbuffer,Mt,!1);A.bindFramebuffer(T.FRAMEBUFFER,null)}function V2(Mt,mt,$t){const le=S.get(Mt);mt!==void 0&&ie(le.__webglFramebuffer,Mt,Mt.texture,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,0),$t!==void 0&&Le(Mt)}function W2(Mt){const mt=Mt.texture,$t=S.get(Mt),le=S.get(mt);Mt.addEventListener("dispose",Pt);const Ae=Mt.textures,be=Mt.isWebGLCubeRenderTarget===!0,a2=Ae.length>1;if(a2||(le.__webglTexture===void 0&&(le.__webglTexture=T.createTexture()),le.__version=mt.version,B.memory.textures++),be){$t.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(mt.mipmaps&&mt.mipmaps.length>0){$t.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<mt.mipmaps.length;Fe++)$t.__webglFramebuffer[Pe][Fe]=T.createFramebuffer()}else $t.__webglFramebuffer[Pe]=T.createFramebuffer()}else{if(mt.mipmaps&&mt.mipmaps.length>0){$t.__webglFramebuffer=[];for(let Pe=0;Pe<mt.mipmaps.length;Pe++)$t.__webglFramebuffer[Pe]=T.createFramebuffer()}else $t.__webglFramebuffer=T.createFramebuffer();if(a2)for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++){const k2=S.get(Ae[Pe]);k2.__webglTexture===void 0&&(k2.__webglTexture=T.createTexture(),B.memory.textures++)}if(Mt.samples>0&&B2(Mt)===!1){$t.__webglMultisampledFramebuffer=T.createFramebuffer(),$t.__webglColorRenderbuffer=[],A.bindFramebuffer(T.FRAMEBUFFER,$t.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Ae.length;Pe++){const Fe=Ae[Pe];$t.__webglColorRenderbuffer[Pe]=T.createRenderbuffer(),T.bindRenderbuffer(T.RENDERBUFFER,$t.__webglColorRenderbuffer[Pe]);const k2=f.convert(Fe.format,Fe.colorSpace),Ie=f.convert(Fe.type),f2=vt(Fe.internalFormat,k2,Ie,Fe.colorSpace,Mt.isXRRenderTarget===!0),Q2=u2(Mt);T.renderbufferStorageMultisample(T.RENDERBUFFER,Q2,f2,Mt.width,Mt.height),T.framebufferRenderbuffer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pe,T.RENDERBUFFER,$t.__webglColorRenderbuffer[Pe])}T.bindRenderbuffer(T.RENDERBUFFER,null),Mt.depthBuffer&&($t.__webglDepthRenderbuffer=T.createRenderbuffer(),Re($t.__webglDepthRenderbuffer,Mt,!0)),A.bindFramebuffer(T.FRAMEBUFFER,null)}}if(be){A.bindTexture(T.TEXTURE_CUBE_MAP,le.__webglTexture),ke(T.TEXTURE_CUBE_MAP,mt);for(let Pe=0;Pe<6;Pe++)if(mt.mipmaps&&mt.mipmaps.length>0)for(let Fe=0;Fe<mt.mipmaps.length;Fe++)ie($t.__webglFramebuffer[Pe][Fe],Mt,mt,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else ie($t.__webglFramebuffer[Pe],Mt,mt,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);nt(mt)&&tt(T.TEXTURE_CUBE_MAP),A.unbindTexture()}else if(a2){for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++){const k2=Ae[Pe],Ie=S.get(k2);A.bindTexture(T.TEXTURE_2D,Ie.__webglTexture),ke(T.TEXTURE_2D,k2),ie($t.__webglFramebuffer,Mt,k2,T.COLOR_ATTACHMENT0+Pe,T.TEXTURE_2D,0),nt(k2)&&tt(T.TEXTURE_2D)}A.unbindTexture()}else{let Pe=T.TEXTURE_2D;if((Mt.isWebGL3DRenderTarget||Mt.isWebGLArrayRenderTarget)&&(Pe=Mt.isWebGL3DRenderTarget?T.TEXTURE_3D:T.TEXTURE_2D_ARRAY),A.bindTexture(Pe,le.__webglTexture),ke(Pe,mt),mt.mipmaps&&mt.mipmaps.length>0)for(let Fe=0;Fe<mt.mipmaps.length;Fe++)ie($t.__webglFramebuffer[Fe],Mt,mt,T.COLOR_ATTACHMENT0,Pe,Fe);else ie($t.__webglFramebuffer,Mt,mt,T.COLOR_ATTACHMENT0,Pe,0);nt(mt)&&tt(Pe),A.unbindTexture()}Mt.depthBuffer&&Le(Mt)}function Vt(Mt){const mt=Mt.textures;for(let $t=0,le=mt.length;$t<le;$t++){const Ae=mt[$t];if(nt(Ae)){const be=Mt.isWebGLCubeRenderTarget?T.TEXTURE_CUBE_MAP:T.TEXTURE_2D,a2=S.get(Ae).__webglTexture;A.bindTexture(be,a2),tt(be),A.unbindTexture()}}}const gn=[],c2=[];function sn(Mt){if(Mt.samples>0){if(B2(Mt)===!1){const mt=Mt.textures,$t=Mt.width,le=Mt.height;let Ae=T.COLOR_BUFFER_BIT;const be=Mt.stencilBuffer?T.DEPTH_STENCIL_ATTACHMENT:T.DEPTH_ATTACHMENT,a2=S.get(Mt),Pe=mt.length>1;if(Pe)for(let Fe=0;Fe<mt.length;Fe++)A.bindFramebuffer(T.FRAMEBUFFER,a2.__webglMultisampledFramebuffer),T.framebufferRenderbuffer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,T.RENDERBUFFER,null),A.bindFramebuffer(T.FRAMEBUFFER,a2.__webglFramebuffer),T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,T.TEXTURE_2D,null,0);A.bindFramebuffer(T.READ_FRAMEBUFFER,a2.__webglMultisampledFramebuffer),A.bindFramebuffer(T.DRAW_FRAMEBUFFER,a2.__webglFramebuffer);for(let Fe=0;Fe<mt.length;Fe++){if(Mt.resolveDepthBuffer&&(Mt.depthBuffer&&(Ae|=T.DEPTH_BUFFER_BIT),Mt.stencilBuffer&&Mt.resolveStencilBuffer&&(Ae|=T.STENCIL_BUFFER_BIT)),Pe){T.framebufferRenderbuffer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.RENDERBUFFER,a2.__webglColorRenderbuffer[Fe]);const k2=S.get(mt[Fe]).__webglTexture;T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,k2,0)}T.blitFramebuffer(0,0,$t,le,0,0,$t,le,Ae,T.NEAREST),W===!0&&(gn.length=0,c2.length=0,gn.push(T.COLOR_ATTACHMENT0+Fe),Mt.depthBuffer&&Mt.resolveDepthBuffer===!1&&(gn.push(be),c2.push(be),T.invalidateFramebuffer(T.DRAW_FRAMEBUFFER,c2)),T.invalidateFramebuffer(T.READ_FRAMEBUFFER,gn))}if(A.bindFramebuffer(T.READ_FRAMEBUFFER,null),A.bindFramebuffer(T.DRAW_FRAMEBUFFER,null),Pe)for(let Fe=0;Fe<mt.length;Fe++){A.bindFramebuffer(T.FRAMEBUFFER,a2.__webglMultisampledFramebuffer),T.framebufferRenderbuffer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,T.RENDERBUFFER,a2.__webglColorRenderbuffer[Fe]);const k2=S.get(mt[Fe]).__webglTexture;A.bindFramebuffer(T.FRAMEBUFFER,a2.__webglFramebuffer),T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,T.TEXTURE_2D,k2,0)}A.bindFramebuffer(T.DRAW_FRAMEBUFFER,a2.__webglMultisampledFramebuffer)}else if(Mt.depthBuffer&&Mt.resolveDepthBuffer===!1&&W){const mt=Mt.stencilBuffer?T.DEPTH_STENCIL_ATTACHMENT:T.DEPTH_ATTACHMENT;T.invalidateFramebuffer(T.DRAW_FRAMEBUFFER,[mt])}}}function u2(Mt){return Math.min(M.maxSamples,Mt.samples)}function B2(Mt){const mt=S.get(Mt);return Mt.samples>0&&d.has("WEBGL_multisampled_render_to_texture")===!0&&mt.__useRenderToTexture!==!1}function S2(Mt){const mt=B.render.frame;X.get(Mt)!==mt&&(X.set(Mt,mt),Mt.update())}function C2(Mt,mt){const $t=Mt.colorSpace,le=Mt.format,Ae=Mt.type;return Mt.isCompressedTexture===!0||Mt.isVideoTexture===!0||$t!==zi&&$t!==Es&&(Mn.getTransfer($t)===Hn?(le!==Or||Ae!==Bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$t)),mt}function Ln(Mt){return typeof HTMLImageElement<"u"&&Mt instanceof HTMLImageElement?(G.width=Mt.naturalWidth||Mt.width,G.height=Mt.naturalHeight||Mt.height):typeof VideoFrame<"u"&&Mt instanceof VideoFrame?(G.width=Mt.displayWidth,G.height=Mt.displayHeight):(G.width=Mt.width,G.height=Mt.height),G}this.allocateTextureUnit=Ut,this.resetTextureUnits=at,this.setTexture2D=Lt,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=_e,this.rebindTextures=V2,this.setupRenderTarget=W2,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=B2}function adt(T,d){function A(S,M=Es){let f;const B=Mn.getTransfer(M);if(S===Bs)return T.UNSIGNED_BYTE;if(S===sW)return T.UNSIGNED_SHORT_4_4_4_4;if(S===_W)return T.UNSIGNED_SHORT_5_5_5_1;if(S===Ppt)return T.UNSIGNED_INT_5_9_9_9_REV;if(S===Dpt)return T.BYTE;if(S===Ipt)return T.SHORT;if(S===rW)return T.UNSIGNED_SHORT;if(S===oW)return T.INT;if(S===j_)return T.UNSIGNED_INT;if(S===fo)return T.FLOAT;if(S===qu)return T.HALF_FLOAT;if(S===Bpt)return T.ALPHA;if(S===Lpt)return T.RGB;if(S===Or)return T.RGBA;if(S===Fpt)return T.LUMINANCE;if(S===Opt)return T.LUMINANCE_ALPHA;if(S===I_)return T.DEPTH_COMPONENT;if(S===mc)return T.DEPTH_STENCIL;if(S===lW)return T.RED;if(S===cW)return T.RED_INTEGER;if(S===jpt)return T.RG;if(S===pW)return T.RG_INTEGER;if(S===uW)return T.RGBA_INTEGER;if(S===d4||S===h4||S===m4||S===g4)if(B===Hn)if(f=d.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(S===d4)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(S===h4)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(S===m4)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(S===g4)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=d.get("WEBGL_compressed_texture_s3tc"),f!==null){if(S===d4)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(S===h4)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(S===m4)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(S===g4)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(S===zO||S===XO||S===YO||S===ZO)if(f=d.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(S===zO)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(S===XO)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(S===YO)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(S===ZO)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(S===QO||S===qO||S===KO)if(f=d.get("WEBGL_compressed_texture_etc"),f!==null){if(S===QO||S===qO)return B===Hn?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(S===KO)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(S===JO||S===$O||S===tj||S===ej||S===nj||S===ij||S===rj||S===oj||S===sj||S===_j||S===lj||S===cj||S===pj||S===uj)if(f=d.get("WEBGL_compressed_texture_astc"),f!==null){if(S===JO)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(S===$O)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(S===tj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(S===ej)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(S===nj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(S===ij)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(S===rj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(S===oj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(S===sj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(S===_j)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(S===lj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(S===cj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(S===pj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(S===uj)return B===Hn?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(S===A4||S===fj||S===aj)if(f=d.get("EXT_texture_compression_bptc"),f!==null){if(S===A4)return B===Hn?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(S===fj)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(S===aj)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(S===Npt||S===dj||S===hj||S===mj)if(f=d.get("EXT_texture_compression_rgtc"),f!==null){if(S===A4)return f.COMPRESSED_RED_RGTC1_EXT;if(S===dj)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(S===hj)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(S===mj)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return S===bc?T.UNSIGNED_INT_24_8:T[S]!==void 0?T[S]:null}return{convert:A}}class ddt extends r0{constructor(d=[]){super(),this.isArrayCamera=!0,this.cameras=d}}class S1 extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hdt={type:"move"};class V4{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new S1,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new S1,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new xt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new xt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new S1,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new xt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new xt),this._grip}dispatchEvent(d){return this._targetRay!==null&&this._targetRay.dispatchEvent(d),this._grip!==null&&this._grip.dispatchEvent(d),this._hand!==null&&this._hand.dispatchEvent(d),this}connect(d){if(d&&d.hand){const A=this._hand;if(A)for(const S of d.hand.values())this._getHandJoint(A,S)}return this.dispatchEvent({type:"connected",data:d}),this}disconnect(d){return this.dispatchEvent({type:"disconnected",data:d}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(d,A,S){let M=null,f=null,B=null;const F=this._targetRay,W=this._grip,G=this._hand;if(d&&A.session.visibilityState!=="visible-blurred"){if(G&&d.hand){B=!0;for(const lt of d.hand.values()){const nt=A.getJointPose(lt,S),tt=this._getHandJoint(G,lt);nt!==null&&(tt.matrix.fromArray(nt.transform.matrix),tt.matrix.decompose(tt.position,tt.rotation,tt.scale),tt.matrixWorldNeedsUpdate=!0,tt.jointRadius=nt.radius),tt.visible=nt!==null}const X=G.joints["index-finger-tip"],Z=G.joints["thumb-tip"],K=X.position.distanceTo(Z.position),$=.02,rt=.005;G.inputState.pinching&&K>$+rt?(G.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:d.handedness,target:this})):!G.inputState.pinching&&K<=$-rt&&(G.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:d.handedness,target:this}))}else W!==null&&d.gripSpace&&(f=A.getPose(d.gripSpace,S),f!==null&&(W.matrix.fromArray(f.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,f.linearVelocity?(W.hasLinearVelocity=!0,W.linearVelocity.copy(f.linearVelocity)):W.hasLinearVelocity=!1,f.angularVelocity?(W.hasAngularVelocity=!0,W.angularVelocity.copy(f.angularVelocity)):W.hasAngularVelocity=!1));F!==null&&(M=A.getPose(d.targetRaySpace,S),M===null&&f!==null&&(M=f),M!==null&&(F.matrix.fromArray(M.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,M.linearVelocity?(F.hasLinearVelocity=!0,F.linearVelocity.copy(M.linearVelocity)):F.hasLinearVelocity=!1,M.angularVelocity?(F.hasAngularVelocity=!0,F.angularVelocity.copy(M.angularVelocity)):F.hasAngularVelocity=!1,this.dispatchEvent(hdt)))}return F!==null&&(F.visible=M!==null),W!==null&&(W.visible=f!==null),G!==null&&(G.visible=B!==null),this}_getHandJoint(d,A){if(d.joints[A.jointName]===void 0){const S=new S1;S.matrixAutoUpdate=!1,S.visible=!1,d.joints[A.jointName]=S,d.add(S)}return d.joints[A.jointName]}}const mdt=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gdt=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Emt extends ZW{constructor(A=1e4){super();Zt(this,"setEnv",A=>{const S=this.material.uniforms;A.turbidity&&(S.turbidity.value=A.turbidity),A.rayleigh&&(S.rayleigh.value=A.rayleigh),A.mieCoefficient&&(S.mieCoefficient.value=A.mieCoefficient),A.mieDirectionalG&&(S.mieDirectionalG.value=A.mieDirectionalG)});Zt(this,"setLight",A=>{this.material.uniforms.sunPosition.value.copy(A.position)});this.scale.setScalar(A);const S=this.material.uniforms;S.turbidity.value=10,S.rayleigh.value=2,S.mieCoefficient.value=.005,S.mieDirectionalG.value=.8}}class KN extends ei{constructor(A,S=Math.floor(Math.random()*(1<<24))){super(new P6(A,20,20),new nf({color:S}));Zt(this,"radius");this.radius=A,this.receiveShadow=!0,this.castShadow=!0}}class Dmt extends xdt{constructor(A,S=1,M=!1){super(new IW({map:A,fog:M}));Zt(this,"initWindowWidth",0);Zt(this,"initWindowHeight",0);Zt(this,"w",0);Zt(this,"h",0);Zt(this,"setPos",(A,S)=>{const M=window.innerWidth/2,f=window.innerHeight/2;this.position.set(M*A,f*S,this.position.z)});Zt(this,"setCenter",(A={left:!1,top:!1,bottom:!1,right:!1,center:!0})=>{A.center?this.center.set(.5,.5):A.left&&A.top?this.center.set(1,0):A.left&&A.bottom?this.center.set(1,1):A.right&&A.top?this.center.set(0,0):A.right&&A.bottom&&this.center.set(0,1)});Zt(this,"setSize",(A,S)=>{this.w=A,this.h=S;const M=(window.innerWidth+window.innerHeight)/(this.initWindowWidth+this.initWindowHeight);this.scale.set(A*M,S*M,this.scale.z)});Zt(this,"setDepth",A=>{this.position.z=A});Zt(this,"onResizeWindow",()=>{const A=(window.innerWidth+window.innerHeight)/(this.initWindowWidth+this.initWindowHeight);this.scale.set(this.w*A,this.h*A,this.scale.z)});this.initWindowWidth=window.innerWidth,this.initWindowHeight=window.innerHeight,this.position.set(0,0,S),this.center.set(.5,.5),this.scale.set(A.image.width,A.image.height,S)}}class JN extends e2{}class yi extends xt{}let Imt=class extends ei{constructor(d,A={}){super(d),this.isWater=!0;const S=this,M=A.textureWidth!==void 0?A.textureWidth:512,f=A.textureHeight!==void 0?A.textureHeight:512,B=A.clipBias!==void 0?A.clipBias:0,F=A.alpha!==void 0?A.alpha:1,W=A.time!==void 0?A.time:0,G=A.waterNormals!==void 0?A.waterNormals:null,X=A.sunDirection!==void 0?A.sunDirection:new xt(.70707,.70707,0),Z=new i2(A.sunColor!==void 0?A.sunColor:16777215),K=new i2(A.waterColor!==void 0?A.waterColor:8355711),$=A.eye!==void 0?A.eye:new xt(0,0,0),rt=A.distortionScale!==void 0?A.distortionScale:20,lt=A.side!==void 0?A.side:ho,nt=A.fog!==void 0?A.fog:!1,tt=new lo,vt=new xt,ht=new xt,At=new xt,Pt=new x2,Tt=new xt(0,0,-1),wt=new Dn,Ht=new xt,bt=new xt,at=new Dn,Ut=new x2,Xt=new r0,Lt=new Ls(M,f),ne={name:"MirrorShader",uniforms:zu.merge([We.fog,We.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new x2},sunColor:{value:new i2(8355711)},sunDirection:{value:new xt(.70707,.70707,0)},eye:{value:new xt},waterColor:{value:new i2(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},ee=new mo({name:ne.name,uniforms:zu.clone(ne.uniforms),vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,lights:!0,side:lt,fog:nt});ee.uniforms.mirrorSampler.value=Lt.texture,ee.uniforms.textureMatrix.value=Ut,ee.uniforms.alpha.value=F,ee.uniforms.time.value=W,ee.uniforms.normalSampler.value=G,ee.uniforms.sunColor.value=Z,ee.uniforms.waterColor.value=K,ee.uniforms.sunDirection.value=X,ee.uniforms.distortionScale.value=rt,ee.uniforms.eye.value=$,S.material=ee,S.onBeforeRender=function(_e,Se,Yt){if(ht.setFromMatrixPosition(S.matrixWorld),At.setFromMatrixPosition(Yt.matrixWorld),Pt.extractRotation(S.matrixWorld),vt.set(0,0,1),vt.applyMatrix4(Pt),Ht.subVectors(ht,At),Ht.dot(vt)>0)return;Ht.reflect(vt).negate(),Ht.add(ht),Pt.extractRotation(Yt.matrixWorld),Tt.set(0,0,-1),Tt.applyMatrix4(Pt),Tt.add(At),bt.subVectors(ht,Tt),bt.reflect(vt).negate(),bt.add(ht),Xt.position.copy(Ht),Xt.up.set(0,1,0),Xt.up.applyMatrix4(Pt),Xt.up.reflect(vt),Xt.lookAt(bt),Xt.far=Yt.far,Xt.updateMatrixWorld(),Xt.projectionMatrix.copy(Yt.projectionMatrix),Ut.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),Ut.multiply(Xt.projectionMatrix),Ut.multiply(Xt.matrixWorldInverse),tt.setFromNormalAndCoplanarPoint(vt,ht),tt.applyMatrix4(Xt.matrixWorldInverse),wt.set(tt.normal.x,tt.normal.y,tt.normal.z,tt.constant);const pe=Xt.projectionMatrix;at.x=(Math.sign(wt.x)+pe.elements[8])/pe.elements[0],at.y=(Math.sign(wt.y)+pe.elements[9])/pe.elements[5],at.z=-1,at.w=(1+pe.elements[10])/pe.elements[14],wt.multiplyScalar(2/wt.dot(at)),pe.elements[2]=wt.x,pe.elements[6]=wt.y,pe.elements[10]=wt.z+1-B,pe.elements[14]=wt.w,$.setFromMatrixPosition(Yt.matrixWorld);const ke=_e.getRenderTarget(),n2=_e.xr.enabled,O2=_e.shadowMap.autoUpdate;S.visible=!1,_e.xr.enabled=!1,_e.shadowMap.autoUpdate=!1,_e.setRenderTarget(Lt),_e.state.buffers.depth.setMask(!0),_e.autoClear===!1&&_e.clear(),_e.render(Se,Xt),S.visible=!0,_e.xr.enabled=n2,_e.shadowMap.autoUpdate=O2,_e.setRenderTarget(ke);const j2=Yt.viewport;j2!==void 0&&_e.state.viewport(j2)}}};class Pmt extends Imt{constructor(A,S=7695,M=16777215,f=!1,B=1e4,F=512){const W=new z_(B,B);super(W,{textureWidth:F,textureHeight:F,waterNormals:new rf().load("./textures/waternormals.jpg",G=>{G.wrapS=G.wrapT=k1}),sunDirection:A?A.position.clone().normalize():void 0,sunColor:M,waterColor:S,distortionScale:3.7,alpha:1,fog:f});Zt(this,"setEnv",A=>{const S=this.material.uniforms;A.distortionScale&&(S.distortionScale.value=A.distortionScale),A.alpha&&(S.alpha.value=A.alpha)});Zt(this,"setLight",A=>{this.material.uniforms.sunDirection.value.copy(A.position).normalize()});Zt(this,"update",(A=1/60)=>{this.material.uniforms.time.value+=A});this.rotation.x=-Math.PI/2}}class Bmt{constructor(){Zt(this,"clock");Zt(this,"loader");Zt(this,"scene");Zt(this,"sceneOrtho");Zt(this,"renderer");Zt(this,"physicsWorld");Zt(this,"rayCaster");Zt(this,"camera");Zt(this,"controlCamera");Zt(this,"selectCamera");Zt(this,"isDebug",!1);Zt(this,"cameraOrtho");Zt(this,"audioListener");Zt(this,"buffer");Zt(this,"soundBuffer");Zt(this,"bgm");Zt(this,"sound");Zt(this,"light");Zt(this,"ambient");Zt(this,"sky");Zt(this,"water");Zt(this,"heightMap");Zt(this,"trees",[]);Zt(this,"model");Zt(this,"isGround",!1);Zt(this,"particle");Zt(this,"grid");Zt(this,"axis");Zt(this,"sprite");Zt(this,"tween");Zt(this,"tweenBack");Zt(this,"keyboard");Zt(this,"dynamicObjects",[]);Zt(this,"dragControls");Zt(this,"helper");Zt(this,"clicked",!1);Zt(this,"clickPos",new yi);Zt(this,"objectTimePeriod",0);Zt(this,"timeNextSpawn",0);Zt(this,"prevPressC",!1);Zt(this,"jumbTime",0);Zt(this,"init",async()=>{var $;this.clock=new Rht,this.loader=new ymt,this.scene=new qN,this.sceneOrtho=new qN,this.scene.fog=new Pht,this.renderer=new Tmt(this.onResize),this.physicsWorld=new wmt,await this.physicsWorld.init(),this.rayCaster=new Rmt;const d=new yi(0,50,-150),A=new yi(0,0,0);this.camera=new ON(d,A),this.scene.add(this.camera),this.scene.add(this.camera.helper);const S=new yi(100,200,200),M=new yi(0,0,0);this.controlCamera=new ON(S,M,1,4e3),this.controlCamera.controls=this.controlCamera.createControls(this.renderer),this.selectCamera=this.controlCamera,this.isDebug=!0,this.cameraOrtho=new xht,this.audioListener=new Sht,this.buffer=await this.loader.loadAudio("./sounds/bgm_maoudamashii_healing13.mp3"),this.bgm=new Cht(this.buffer,this.audioListener),this.bgm.setLoop(!0),this.bgm.setVolume(.1),this.bgm.play(),this.soundBuffer=await this.loader.loadAudio("./sounds/ping_pong.mp3"),this.selectCamera.add(this.audioListener),this.sound=new Mmt(this.soundBuffer,this.audioListener),this.sound.setVolume(10),this.light=new Eht;const f={distance:400,inclination:.3,azimuth:.205},B=Math.PI*(f.inclination-.5),F=2*Math.PI*(f.azimuth-.5);this.light.position.x=f.distance*Math.cos(F),this.light.position.y=f.distance*Math.sin(F)*Math.sin(B),this.light.position.z=f.distance*Math.sin(F)*Math.cos(B),this.scene.add(this.light),this.ambient=new vht,this.scene.add(this.ambient),this.sky=new Emt,this.sky.setEnv({turbidity:10,rayleigh:2,mieCoefficient:.005,mieDirectionalG:.8}),this.sky.setLight(this.light),this.scene.add(this.sky),this.water=new Pmt(this.light),this.water.setEnv({distortionScale:3.7,alpha:.95}),this.water.setLight(this.light),this.scene.add(this.water),this.heightMap=new Fht,this.scene.add(this.heightMap),this.physicsWorld.addHeightMapBody(this.heightMap);const W=await this.loader.loadGLTFModel("./model/tree.glb"),G=[new yi(132,20,-190),new yi(216,20,80),new yi(-82,20,222),new yi(13,20,-125),new yi(-100,20,31)];this.trees=[];for(let rt=0;rt<5;rt++)this.trees.push(new VN(W,!0,!0)),this.trees[rt].init(G[rt],0,8),this.trees[rt].getCenter(),this.physicsWorld.addBoxBody(this.trees[rt].object,this.trees[rt].size.multiplyScalar(.8),0,!0),this.scene.add(this.trees[rt].object);const X=await this.loader.loadGLTFModel("./model/Soldier.glb");this.model=new VN(X,!0),this.model.init(new yi(0,20,0),-Math.PI,10),($=this.model.actions)==null||$[1].play(),this.model.getCenter(),this.physicsWorld.addHumanBody(this.model.object,this.model.size,.5),this.scene.add(this.model.object),this.isGround=!1,this.particle=new bmt("./textures/particle2.png"),this.scene.add(this.particle),this.grid=new Bht,this.scene.add(this.grid),this.axis=new kht,this.scene.add(this.axis);const Z=await this.loader.loadTexture("./textures/sprite1.png");this.sprite=new Dmt(Z),this.sprite.setPos(-1,1),this.sprite.setCenter({right:!0,bottom:!0}),this.sprite.setSize(64,64),this.sceneOrtho.add(this.sprite);const K={x:-1,y:1};this.tween=new A1.Tween(K).to({x:-1,y:0},3e3).easing(A1.Easing.Quadratic.Out).onUpdate(()=>{this.sprite.setPos(K.x,K.y)}),this.tweenBack=new A1.Tween(K).to({x:-1,y:1},3e3).easing(A1.Easing.Quadratic.Out).onUpdate(()=>{this.sprite.setPos(K.x,K.y)}),this.tween.chain(this.tweenBack),this.tweenBack.chain(this.tween),this.tween.delay(3e3).start(),this.keyboard=new Oht,this.dynamicObjects=[],this.dragControls=new Iht(this.dynamicObjects,this.controlCamera,this.renderer,this.onDragStart,this.onDragEnd),this.helper=new Tht(20,100),this.helper.geometry.translate(0,50,0),this.helper.geometry.rotateX(Math.PI/2),this.helper.geometry.scale(.1,.1,.1),this.scene.add(this.helper),document.addEventListener("mousemove",this.onMouseMove,!1),document.addEventListener("mousedown",this.onMouseClick,!1),this.clicked=!1,this.clickPos=new yi,this.objectTimePeriod=3,this.timeNextSpawn=this.objectTimePeriod,requestAnimationFrame(this.loop)});Zt(this,"onDragStart",d=>{this.selectCamera.controls&&(this.selectCamera.controls.enabled=!1),d.object.userData&&(d.object.userData.ignorePhysics=!0)});Zt(this,"onDragEnd",d=>{d.object.userData&&(this.physicsWorld.setPhysicsPose(d.object),d.object.userData.ignorePhysics=!1),this.selectCamera.controls&&(this.selectCamera.controls.enabled=!0)});Zt(this,"loop",d=>{requestAnimationFrame(this.loop),this.render(d)});Zt(this,"onResize",()=>{this.renderer.resize();const d=[this.camera,this.cameraOrtho,this.controlCamera];for(const A of d)A.resize();this.sprite.onResizeWindow()});Zt(this,"onMouseMove",d=>{var M;const A=new JN(d.clientX/this.renderer.domElement.clientWidth*2-1,-(d.clientY/this.renderer.domElement.clientHeight)*2+1),S=this.rayCaster.getIntersect(A,this.selectCamera,this.heightMap);(M=S[0])!=null&&M.face&&S[0].point&&(this.helper.position.set(0,0,0),this.helper.lookAt(S[0].face.normal),this.helper.position.copy(S[0].point))});Zt(this,"onMouseClick",d=>{const A=new JN(d.clientX/this.renderer.domElement.clientWidth*2-1,-(d.clientY/this.renderer.domElement.clientHeight)*2+1),S=this.rayCaster.getIntersect(A,this.selectCamera,this.heightMap);S.length>0&&(this.clicked=!0,this.clickPos=S[0].point)});Zt(this,"render",d=>{var W,G,X;const{delta:A,time:S}=this.clock.update();this.camera.lookAt(new yi(this.model.position.x,this.model.position.y+10,this.model.position.z));const M=new yi(this.model.position.x-this.camera.position.x,0,this.model.position.z-this.camera.position.z),f=100;if(M.length()>f){const Z=M.normalize().multiplyScalar(f);this.camera.position.copy(new yi(this.model.position.x-Z.x,this.camera.position.y,this.model.position.z-Z.z))}if(A1.update(d),(W=this.model.mixer)==null||W.update(A),this.dynamicObjects.length<5&&S>this.timeNextSpawn){const Z=Math.ceil(Math.random()*4);let K=null;const $=new yi(0,100,0),rt=2;switch(Z){case 1:K=new KN(3+Math.random()*rt),K instanceof KN&&(K.position.set($.x,$.y,$.z),this.physicsWorld.addSphereBody(K,K.radius,rt*5));break;case 2:K=new PN(new yi(4+Math.random()*rt,4+Math.random()*rt,4+Math.random()*rt)),K instanceof PN&&(K.position.set($.x,$.y,$.z),this.physicsWorld.addBoxBody(K,K.size,rt*5));break;case 3:K=new NN(3+Math.random()*rt,3+Math.random()*rt),K instanceof NN&&(K.position.set($.x,$.y,$.z),this.physicsWorld.addCylinderBody(K,K.radius,K.height,rt*5));break;default:K=new jN(3+Math.random()*rt,2+Math.random()*rt),K instanceof jN&&(K.position.set($.x,$.y,$.z),this.physicsWorld.addConeBody(K,K.radius,K.height,rt*5));break}this.scene.add(K),this.dynamicObjects.push(K),this.timeNextSpawn=S+this.objectTimePeriod}this.keyboard.isPressC()&&!this.prevPressC?(this.isDebug=!this.isDebug,this.prevPressC=!0,this.isDebug?(this.selectCamera.remove(this.audioListener),this.selectCamera=this.controlCamera,this.camera.helper.visible=!0,this.grid.visible=!0,this.axis.visible=!0,this.selectCamera.add(this.audioListener)):(this.selectCamera.remove(this.audioListener),this.selectCamera=this.camera,this.camera.helper.visible=!1,this.grid.visible=!1,this.axis.visible=!1,this.selectCamera.add(this.audioListener))):this.keyboard.isPressC()||(this.prevPressC=!1),this.keyboard.isPressA()||this.keyboard.isPressD()||this.keyboard.isPressW()||this.keyboard.isPressS()?this.keyboard.isPressA()?this.model.move(this.selectCamera,Math.PI/2):this.keyboard.isPressD()?this.model.move(this.selectCamera,-Math.PI/2):this.keyboard.isPressW()?this.model.move(this.selectCamera,0):this.keyboard.isPressS()&&this.model.move(this.selectCamera,Math.PI):this.model.stop(),this.clicked&&(new yi(this.clickPos.x-this.model.position.x,0,this.clickPos.z-this.model.position.z).length()<3&&(this.clicked=!1),this.model.moveTo(this.clickPos)),this.physicsWorld.setPhysicsPose(this.model.object);const B=3;this.isGround&&S>(this.jumbTime||0)+B&&this.keyboard.isPressSpace()&&(this.physicsWorld.addImpulse(this.model.object,new yi(0,8e3,0)),this.sound.play(),this.isGround=!1,this.jumbTime=S),this.physicsWorld.addForce(this.model.object,new yi(0,-3e3,0)),this.physicsWorld.update(A);const F=this.physicsWorld.hitTest([this.heightMap,this.model.object]);Object.keys(F).length>0&&S>(this.jumbTime||0)+B&&(this.isGround=!0);for(let Z=0;Z<this.dynamicObjects.length;Z++){const K=this.dynamicObjects[Z];(G=K.userData)!=null&&G.ignorePhysics||this.physicsWorld.setModelPose(K)}this.particle.update(A*.1),this.water.update(),this.physicsWorld.setModelPose(this.model.object),(X=this.controlCamera.controls)==null||X.update(),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,this.selectCamera),this.renderer.clearDepth(),this.renderer.render(this.sceneOrtho,this.cameraOrtho)})}}const L_=document.getElementById("startButton");function Lmt(){L_==null||L_.remove(),new Bmt().init()}L_==null||L_.addEventListener("click",Lmt)});export default Fmt();