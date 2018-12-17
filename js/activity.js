$(function(){
	headerCar();
})
function headerCar(){
	var getStr=getCookie("goods");
	var getArr=JSON.parse(getStr);
	if(getStr!=null){
		var money = 0;
		var how = 0;
		for(var i = 0;i<getArr.length;i++){
			money+=getArr[i].goodsTotal;
			how+=getArr[i].goodsCount;
		}
		$("#price").html(money);
		$("#count").html(how);
	}
}