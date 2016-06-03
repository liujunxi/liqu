var indexTpl = require('../tpl/index.string');

SPA.defineView('index', {
	html: indexTpl,
	plugins: ['delegated'],
	
	// 子视图的嵌套定义
	modules: [{
	  name: 'content',
	  container: '.m-index-container',
	  views: ['home', 'jufl', 'taobao' , 'shop' , 'myqu'],
	  defaultTag: 'home'
	}],
		
	// 初始化视图属性和方法
	init: {
	  indexSwiper: null,
	  setActive: function (obj) {
	    obj.addClass('active').siblings().removeClass('active');
	  }
	},
	bindActions: {
	    'switch.swiper': function (e) {
	      this.setActive($(e.el));
	      this.indexSwiper.slideTo($(e.el).index());
	    },
	    
	    'switch.view': function (e) {
	      // 视图切换方法
	      console.log(e);
	      this.modules.content.launch(e.data.tag);
	      this.setActive($(e.el));
	    },
	},
	
	// 给视图绑定事件
	bindEvents: {
	    'beforeShow': function () {
		      var iSwiper = new Swiper('#indexSwiper', {
		        loop: true,
		        autoplay:2000,
		        speed:5,
		        autoplayDisableOnInteraction : false,
		      });
		      this.indexSwiper = new Swiper('#containerSwiper', {
		        loop: false,
		        onSlideChangeStart: function (swiper) {
		        	
		          	$('#index-nav li').eq(swiper.activeIndex)
		            .addClass('active').siblings().removeClass('active');
		        }
		      });
	    }
 	}
	
});
