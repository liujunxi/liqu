// 引入模板
var tplGuide = require('../tpl/guide.string');

// 定义一个视图
SPA.defineView('guide', {
	html: tplGuide,
	
	// 添加插件
	plugins: ['delegated'],
	
	// 绑定事件
	//action-type="exit"  为事件 添加到HTML标签元素中
	bindActions: {
	    'goto.index': function () {
	      SPA.open('index');
	      SPA.util.storage('isVisited', true);
	    }
	},
	// 给视图绑定事件
	bindEvents: {
	    'beforeShow': function () {
		      var guideSwiper = new Swiper('#guideSwiper', {
		        loop: false,
		        // 如果需要分页器
   				pagination: '.swiper-pagination',
		      });
	    }
 	}
	
});