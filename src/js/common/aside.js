$('aside img').attr('src',);
var datas = JSON.parse(localStorage.getItem('userinfo'));
$('.aside img').attr('src',datas.tc_avatar);
$('.aside h4').text(datas.tc_name);



var path  = location.pathname;
console.log(path);
$('.navs a').removeClass('active');
$('.navs a[href="'+path+'"]').addClass('active').parents('ul').show();




