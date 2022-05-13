$('#tab-query').click();
$('#qq3').val('123456')
$('#submit_query').click()
setTimeout(function(){
	var doc = document.querySelector("#list2").querySelectorAll("tr");
	for(var i = 0; i < doc.length; i++){
		var elm = doc[i];
		var btn = elm.querySelector(".btn");
		if(btn == null){
			return;
		}
		btn.click()
	}
	setTimeout(function(){
		var item = document.querySelectorAll('#orderItem')
			for(var i = 0; i< item.length;i++){
			var t = item[i].querySelector('tbody').querySelectorAll('tr');
			t.chi
			for(var k = 0; k <t.length;  k++){
				if(k == 11){
					console.log(t[2].innerText+'\n'+t[4].innerText+'\n卡密:'+t[9].innerText)
					break;
				}
			}
		}	
		var close = document.querySelectorAll('.layui-layer-close');
		for(var i = 0; i < close.length; i++){
			close[i].click()
		}
	},1500)
},1000)

