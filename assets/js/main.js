$(function() {
    //Change repsonsive menu button when clicked
    $('#sidebarCollapse').click(function() {
        $(this)
            .find('i')
            .toggleClass('fa-bar fa-times');
    });

    //Sidebar functions
    $('#sidebar').mCustomScrollbar({
        theme: 'minimal'
    });
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});
