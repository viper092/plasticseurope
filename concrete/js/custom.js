var header = document.getElementsByTagName('header')[0];
var header_site_title = document.getElementById('header-site-title');
var logo_img = header_site_title.getElementsByTagName('img')[0];
var navigation = document.getElementsByClassName('ccm-responsive-navigation')[0];
var search_bar = document.getElementById('search-form');
var header_ul = navigation.getElementsByTagName('ul')[0];
var submenu_uls = header_ul.getElementsByTagName('ul');
var header_search = document.getElementById('header-search');

var logo_img_width = logo_img.offsetWidth;
var logo_img_height = logo_img.offsetHeight;
var animate_logo_img_width = logo_img_width * 0.7;
var animate_logo_img_height = logo_img_height * 0.7;

var first_scroll_position = 0;
var animation_status = 'normal';

logo_img.style.paddingTop = '2%';
logo_img.style.paddingLeft = '12.5%';
logo_img.style.width = '85%';

window.onload = function() {
    first_scroll_position = $(this).scrollTop();
    if($(this).scrollTop() > 30) {
        header.style.backgroundColor='#0671b9';
        logo_img.style.width = '70%';
        navigation.style.paddingTop = '0px';
        search_bar.style.paddingTop = '0px';
        // for (let i=0; i< submenu_uls.length; i++) {
        //     submenu_uls[i].style.backgroundColor = '#0671b9';
        // }
        header_search.style.paddingTop = '0px';
        $('.nav-path-selected > a').attr('style', 'color: white !important');
    } else {
        header.style.backgroundColor='transparent';
        logo_img.style.width = '85%';
        navigation.style.paddingTop = '1%';
        search_bar.style.paddingTop = '1%';
        // for (let i=0; i< submenu_uls.length; i++) {
        //     submenu_uls[i].style.backgroundColor = 'transparent';
        // }
        header_search.style.paddingTop = '10px';
        $('.nav-path-selected > a').attr('style', 'color: #2ea3f2 !important');
    }

    if ($('.blurb-background')[0]) {
        reset_height('blurb-background');
    }

    if($('.toggle-container')[0]) {
        var toggle_containers = document.getElementsByClassName('toggle-container');

        if(!toggle_containers[0].classList.contains('toggle-open')) {
            toggle_containers[0].classList.add('toggle-open');
        }

        for(let i=1;i<toggle_containers.length;i++) {
            if(toggle_containers[i].classList.contains('toggle-open')) {
                toggle_containers[i].classList.remove('toggle-open');
            }
            $('#' + toggle_containers[i].id + ' h4 img').css('display', 'none');
            toggle_containers[i].classList.add('toggle-close');

            for (let j = 0; j < toggle_containers[i].childNodes.length; j++) {
                if (toggle_containers[i].childNodes[j].className == 'toggle-content') {
                    toggle_containers[i].childNodes[j].style.display = 'none';
                }
            }
        }
    }

    if($('.industry-sector')[0]) {
        reset_height('industry-sector');
    }

    if($('.contact-section')[0]) {
        reset_height('contact-section');
    }

    if($('.fluoropolymer-applications-sector')[0]) {
        reset_height('fluoropolymer-applications-sector');
    }

    $('.contact-section').animate({marginTop:'-50px', height:'312px', opacity: '100%'}, 500);
}

$(window).on('scroll', function() {
    if($(this).scrollTop() >= 30 && animation_status == 'normal') {
        animation_status = 'animation';
        $(header).css('backgroundColor', '#0671b9');
        $(logo_img).animate({width: animate_logo_img_width, height: animate_logo_img_height}, 500);
        $(navigation).animate({paddingTop: '0px'}, 500);
        $(search_bar).animate({paddingTop: '0px'}, 500);
        for (let i=0; i< submenu_uls.length; i++) {
            $(submenu_uls[i]).css('backgroundColor', '#0671b9');
        }
        $(header_search).animate({paddingTop: '0px'}, 500);
        $('.nav-path-selected > a').attr('style', 'color: white !important');
    } else if($(this).scrollTop() < 30 && animation_status == 'animation') {
        animation_status = 'normal';
        $(header).css('backgroundColor', 'transparent');
        $(logo_img).animate({width: logo_img_width, height: logo_img_height}, 500);
        $(navigation).animate({paddingTop: '10px'}, 500);
        $(search_bar).animate({paddingTop: '10px'}, 500);
        for (let i=0; i< submenu_uls.length; i++) {
            $(submenu_uls[i]).css('backgroundColor', 'transparent');
        }
        $(header_search).animate({paddingTop: '10px'}, 500);
        $('.nav-path-selected > a').attr('style', 'color: #2ea3f2 !important');
    }
});

window.onresize = function() {
    if($('.industry-sector')[0]) {
        reset_height('industry-sector');
    }

    if($('.contact-section')[0]) {
        reset_height('contact-section');
    }

    if($('.fluoropolymer-applications-sector')[0]) {
        reset_height('fluoropolymer-applications-sector');
    }
}

$('#search_icon').click(function () {
    let top_navigation = document.getElementsByClassName('ccm-responsive-navigation original')[0];
    top_navigation.style.display = 'none';
    let search_form = document.getElementById('search-form');
    search_form.style.display = 'block';
});

$('#search-close').click(function () {
    let top_navigation = document.getElementsByClassName('ccm-responsive-navigation original')[0];
    top_navigation.style.display = 'block';
    let search_form = document.getElementById('search-form');
    search_form.style.display = 'none';
});

$(document).on('click', '.toggle-title', function () {
    var parent_element = $(this).parent();
    let current_id = parent_element.attr('id');

    if(!$('#' + current_id).hasClass('toggle-open')) {
        $('#' + current_id).addClass('toggle-open');
        $('#' + current_id).find('div.toggle-content').slideDown();
        $('#' + current_id + ' h4 img').css('display', 'block');
        if($('#' + current_id).hasClass('toggle-close')) {
            $('#' + current_id).removeClass('toggle-close');
        }
    }

    var toggle_containers = document.getElementsByClassName('toggle-container');
    for(let i=0;i<toggle_containers.length;i++) {
        if(toggle_containers[i].id != current_id) {
            if(toggle_containers[i].classList.contains('toggle-open')) {
                toggle_containers[i].classList.remove('toggle-open');
            }
            $('#' + toggle_containers[i].id + ' h4 img').css('display', 'none');
            toggle_containers[i].classList.add('toggle-close');

            for (let j=0; j<toggle_containers[i].childNodes.length; j++) {
                if (toggle_containers[i].childNodes[j].className == 'toggle-content') {
                    $(toggle_containers[i].childNodes[j]).slideUp();
                }
            }
        }
    }
});

$(document).on('click', '#header-search img', function () {
    $('#search-form').slideDown();
    $('#search-form').css('display', 'flex');
    $('#header-navigation').slideUp();
});

$(document).on('click', '#close-header-search img', function () {
    $('#search-form').slideUp();
    $('#search-form').css('display', 'none');
    $('#header-navigation').slideDown();
});

function reset_height(classname) {
    let first_parent_element = document.getElementsByClassName(classname)[0].parentElement;
    let second_parent_element = first_parent_element.parentElement;
    let third_parent_element = second_parent_element.parentElement;
    let child_row_elements = third_parent_element.querySelectorAll('.row');

    for(let i=0; i<child_row_elements.length; i++) {
        let sector_elements = child_row_elements[i].querySelectorAll('.' + classname);
        if(sector_elements != undefined && sector_elements.length != 0) {
            //Get max height
            let heights = [];
            for (let j=0; j<sector_elements.length; j++) {
                sector_elements[j].style.height = 'auto';
                heights[j] = sector_elements[j].offsetHeight;
            }

            let max_height = heights.reduce(function (a, b) {
                return Math.max(a, b);
            });

            for (let j=0; j<sector_elements.length;j++) {
                if(sector_elements[j].offsetHeight < max_height) {
                    sector_elements[j].style.height = max_height + 'px';
                }
            }
        }
    }
}