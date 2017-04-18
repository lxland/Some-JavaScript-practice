/**
 * Created by zlx on 2017/3/6.
 */

$(function () {

    var shareMain = $('.shareMain');
    var shareNavLi = $('.shareNav li');

    $('.mark_bg').on('click',function(){
        shareMain.hide();
        $('.shareMain .detail').hide();
        shareNavLi.removeClass('light');
        $('.mark_bg').hide();
    })

    shareNavLi.click(function ( e ) {
        e.stopPropagation();

        var _t = $(this);
        var _href = _t.find('a').attr('href');
        var _id = _t.attr('for');
        var _text = $('.'+_id+'').find('.text_main').text();
        var _src = $('.'+_id+'').find('p').find('img').attr('src');
        var documentH = $(document).height();

        shareNavLi.removeClass('light');
        shareMain.hide();
        $('.shareMain .detail').hide();

        if( _href == "javascript:void(0);" ){
            if( (_id == "phoneDetail" && (_text != '' && _text != undefined)) || (_id == "emailDetail" && (_text != '' && _text != undefined)) || (_id == "weChatDetail" && ( (_src != '' && _src != undefined) || (_text != '' && _text != undefined) )) || (_id == "qqDetail" && ( (_src != '' && _src != undefined) || (_text != '' && _text != undefined) )) || (_id == "mapDetail" && $('#allmapLoc').val() != '') ){
                shareMain.show();
                $('.'+_id+'').show();

                _t.addClass('light');
                $('.mark_bg').height(documentH).show();
            }
            
        } else if ( _href == "undefined" || _href == undefined || _href == null || _href == '' ){
            return false;
        } else if( _href == "http://" ){
             _t.find('a').attr({'href':'#','target':''});
        } else {
            _t.find('a').attr('href',_href);
        }

    })


    $('.shareMain').click(function(e){
        e.stopPropagation();
    })

    // 地图调用
    $('#mapApi').click(function(){
        var _allmapLoc = $('#allmapLoc').val();

        mapFun( _allmapLoc );
    })

    // 判断 phone
    setPhone();
    function setPhone(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var bodyH = $(document).height();

            $('.card').height(bodyH);
        }
    }

})


function mapFun ( _d ){
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);
    // 创建地址解析器实例
    var myGeo = new BMap.Geocoder();
    // 将地址解析结果显示在地图上,并调整地图视野
    myGeo.getPoint(_d, function(point){
        if (point) {
            map.centerAndZoom(point, 16);
            var m=new BMap.Marker(point)

            map.addOverlay(m);

            var label = new BMap.Label(_d,{offset:new BMap.Size(20,-10)});
            m.setLabel(label);

        }else{
            alert("您选择地址没有解析到结果!");
        }
    }, "");
}
