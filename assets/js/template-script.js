//  Hiệu ứng input form login
$('.input-effect').blur(function () {
	$(this).val() != '' ? $(this).addClass('valid') : $(this).removeClass('valid');
});

// Active sidebar dashboard
var activeSidebar = function () {
	$('.sidebar .navbar .collapse').on('show.bs.collapse', function () {
		$(this).prev('.nav-link').addClass('active');
		$('.sidebar .navbar > .nav > .nav-item > .nav-link').removeClass('active');
	})
};
activeSidebar();

//  Toggle Sidebar - Toggle Class element Boby
// let windowWidth = $(window).width();
var toggleSidebar = function () {
	$('.toggleSidebar').click(function () {
		$('.home-page').toggleClass('active-sidebar');
		// if (windowWidth > 992) {
		// $('.sidebar .navbar .collapse.show').removeClass('show');
		// }
	});
}

toggleSidebar();

$('.sidebar-overlay').click(function (e) {
	$('.home-page').removeClass('active-sidebar');
})
