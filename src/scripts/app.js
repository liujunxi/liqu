
require('./lib/swiper-3.3.1.min.js');

require('./lib/spa.min.js');

require('./views/guide.js');

require('./views/index.js');
require('./views/jufl.js');
require('./views/taobao.js');
require('./views/shop.js');
require('./views/myqu.js');



//   配置视图的信息
SPA.config({
	indexView: SPA.util.storage('isVisited') ? "index" : "guide" 
});