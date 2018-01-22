/**
 * Created by LittleCai on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function($){
    return{
        open:function(arg){
            //var html = '<div class="mask">'
            //              +  ' <div class="title">'
            //                 + ' <h2>aa</h2>'
            //                 +'<span class="close">×</span>'
            //                 +'</div>'
            //                  +'<div class="content">hh'
            //                  +'</div>'
            //             +'</div>';
            //$('body').append(html);
            //var value = $.extend(this.defaultValue,arg);
            //$('.container').css({
            //    width:value.width,
            //   height:value.height,
            //    marginLeft:-value.width/2,
            //    marginTop:-value.height/2,
            //});
            //$('.title h2').html(arg.title);
            //$('.content').html(arg.content);
            this.defaultValue = {
                width:300,
                height:200
            }
            var value = $.extend(this.defaultValue,arg)
        }

        //close:function(){}

        }

})