$(document).ready(function() {
    $('.open-meno-bar').click(function () {
        if($(this).attr('data-open') == 'open') {
            $('.dropdown-meno-mb').slideDown('fast'); 
            $(this).find('i.fa-times').css('display','block');
            $(this).find('i.fa-bars').css('display','none');
            $('main.container').css('display','none');            
            $(this).attr('data-open','close');
        } else {
            $('.dropdown-meno-mb').slideUp('fast');
            $(this).find('i.fa-bars').css('display','block');
            $(this).find('i.fa-times').css('display','none');
            $('main.container').css('display','block');             
            $(this).attr('data-open','open');
        }
    });

    $('.more-vert').click(function () {
        if($(this).attr('data-lan') == 'open') {
            $('.btn-change-lan').slideDown('normal');
            $(this).attr('data-lan','close');
        } else {
            $('.btn-change-lan').slideUp('normal');
            $(this).attr('data-lan','open');
        }
    });

    $('.fa-angle-down').click(function () {
        if($(this).attr('data-open') == 'open') {
            $('.height-320').removeClass('height-320');
            $(this).removeClass('fa-angle-down');
            $(this).addClass('fa-angle-up');
            $('.drawer-collapsible').removeClass('bg-gradiant')
            $(this).attr('data-open','close');
        } else {
            $('.box-collapsible').addClass('height-320');
            $(this).addClass('fa-angle-down');
            $(this).removeClass('fa-angle-up');
            $('.drawer-collapsible').addClass('bg-gradiant')
            $(this).attr('data-open','open');
        }
    });
});
  