(function() {

    var sidebar = $('#menusidebar'),
        sidebarAlphaLayer = $('.sidebar-alpha-layer');

    // Apply events to menu
    $(document).on('ready',function(event){
        $('.hamburger-button').on('click',toggleSideMenu);
        $('.sidebar-alpha-layer').on('click',hideSideMenu);
        $('.side-nav li>a').on('click',smoothScroll);
        $(window).on('resize',function(event){
            sidebarAlphaLayer.css('display','none');
            if($(window).width() > 768){
                sidebar.css('left','0');
            }else{
                sidebar.css('left','-100%');
            }
        });
    });

    function toggleSideMenu(event){
        if(sidebar.css('left') === '0'){
            sidebar.css('left','-100%');
            sidebarAlphaLayer.css('display','none');
        }else{
            sidebar.css('left','0');
            sidebarAlphaLayer.css('display','initial');
        }
    }

    function hideSideMenu(){
        if($('.hamburger-button').css('display') != 'none'){
            sidebar.css('left','-100%');
            sidebarAlphaLayer.css('display','none');
        }
    }

    function smoothScroll(){
        event.preventDefault();
        href = $(event.currentTarget).attr('href');
        if(href.startsWith("#")){
            $('html,body').animate({scrollTop: $(href).offset().top}, 1000);
        }
        document.location=href;
        return hideSideMenu();
    }

}());
