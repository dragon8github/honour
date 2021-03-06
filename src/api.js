(function(){

    /**
     * demo
     * wct.AjaxGet(wct.host + wct.api.desk + "10086",function(data){
        self.items = JSON.parse(data.result);
       })
     * */

    var wct = window.wct = window.wct || {};

    wct.host = "http://localhost:8090";
    
    wct.api = {
       'menu':'/ajax/menu/',
       'desk':'/ajax/desk/'
    };

    wct.AjaxGet = function(api,callback){
    	$.ajax({
            type:"POST",
            url:api,
            dataType:"json",
            success:function(json){
            	callback && callback(json);
            }
        });
    }

    wct.AjaxPost = function(api,datas,callback){
    	$.ajax({
            type:"POST",
            url:api,
            data: datas,
            dataType:"json",
            success:function(json){
            	callback && callback(json);
            }
        });
    }

})();