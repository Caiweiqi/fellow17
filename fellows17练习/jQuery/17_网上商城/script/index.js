/**
 * Created by apple on 17/12/3.
 */
/*ÊäÈë¿ò*/
$(':input').on('focus',function(){
    $(this).addClass('selected');
    if(this.value == this.defaultValue){
        this.value = '';
    }
}).on('blur',function(){
    $(this).removeClass('selected');
    if(this.value == ''){
        this.value = this.defaultValue;
    }
});
/*»»·ô*/
    $('#skin li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var $skin = $(this).attr('id');
        $('#cssfile').attr('href','styles/skin/'+ $skin +'.css');
    });
    $('#skin li').eq().trigger('click');


/* ÂÖ²¥Í¼*/
$(function(){
    $('#jnBtn a').on('mouseover',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        $('#JS_imgWrap img').eq($(this).index()).fadeIn().siblings().fadeOut();
    });

})

/*×îÐÂ¶¯Ì¬*/
$('.tooltip').on('mouseover',function(e){
    this.currTitle = this.title;
    $('<div id="tip">'+this.currTitle+'</div>').appendTo('body').offset({
        left: e.pageX+20,
        top: e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('#tip').offset({
        left: e.pageX+20,
        top: e.pageY+20
    });
}).on('mouseout',function(){
    $('#tip').remove();
    $(this).attr('title',this.currTitle);
});