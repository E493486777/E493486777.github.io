var screenAnimateElements={
	'.screen-1':[
		'.screen-1__heading',
		'.screen-1-phone',
		'.screen-1-shadow',
	],
	'.screen-2':[
		'.screen-2__heading',
		'.screen-2__subheading',
		'.screen-2-phone',
		'.screen-2__point_i_1',
		'.screen-2__point_i_2',
		'.screen-2__point_i_3',
	],
	'.screen-3':[
		'.screen-3__heading',
		'.screen-3__subheading',
		'.screen-3-phone',
		'.screen-3__features',
	],
	'.screen-4':[
		'.screen-4__heading',
		'.screen-4__subheading',
		'.screen-4__type__item_i_1',
		'.screen-4__type__item_i_2',
		'.screen-4__type__item_i_3',
		'.screen-4__type__item_i_4',
		'.screen-4__type__item__color',
		'.screen-4__type__item__storage',
	],
	'.screen-5':[
		'.screen-5__heading',
		'.screen-5__subheading',
		'.screen-5__bg',
	]
}
function setScreenAnimate(screenCls){
	var screen=document.querySelector(screenCls);//获取当前屏的元素
	var animateElements=screenAnimateElements[screenCls];//需要设置动画的元素
    var isSetAnimateClass=false;//是否有初始化元素的样式
    var isAnimateDone=false;//当前屏下所有子元素的状态是done？
    screen.onclick=function(){
    	//初始化样式，增加init A A_init
    	if(isSetAnimateClass===false){
    		for(var i=0;i<animateElements.length;i++){
    			var elements=document.querySelector(animateElements[i])
    			var baseCls=elements.getAttribute('class');
    			elements.setAttribute('class',baseCls+' '+animateElements[i].substr(1)+'_animate_init');
    		}
    		isSetAnimateClass=true;
    		return;
    	}
    	//切换所有的animateElements的 init——>done A A_done
    	if(isAnimateDone===false){
    		for(var i=0;i<animateElements.length;i++){
    			var elements=document.querySelector(animateElements[i])
    			var baseCls=elements.getAttribute('class');
    			elements.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
    		}
    		isAnimateDone=true;
    		return;
    	}
    	//切换所有的animateElements的 done——>init A A_init
    	if(isAnimateDone===true){
    		for(var i=0;i<animateElements.length;i++){
    			var elements=document.querySelector(animateElements[i])
    			var baseCls=elements.getAttribute('class');
    			elements.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
    		}
    		isAnimateDone=false;
    		return;
    	}
    }
}
for(k in screenAnimateElements){
	setScreenAnimate(k);
}