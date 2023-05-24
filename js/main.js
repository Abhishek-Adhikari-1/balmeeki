(function ($) {
	"use strict";

	//HTMl Content Title, Navbar and Footer
	document.title = "BMSBS";
	document.head.innerHTML += '<link href="img/logo.png" rel="icon" />';

	$(document).ready(function () {
		// Get the reference to the nav element
		var navElement = $("nav");
		var footerElement = $("footer");

		// Update the HTML content of the nav element
		navElement.html(`
		  <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
			<h2 class="m-0 text-primary">
			  <img src="img/logo.png" style="max-height: 50px" class="pe-2" />Balmeeki
			</h2>
		  </a>
		  <button id="joinButton" type="button" class="navbar-toggler me-4 collapsed" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-expanded="false">
			<i class="navbar-toggler-icon"></i>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarMenu">
			<div class="navbar-nav ms-auto p-4 p-lg-0">
			  <a href="index.html" class="nav-item nav-link">Home</a>
			  <a href="about.html" class="nav-item nav-link">About</a>
			  <a href="academics.html" class="nav-item nav-link">Academics</a>
			  <div class="nav-item dropdown">
				<a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Moree</a>
				<div class="dropdown-menu fade-down m-0">
				  <a href="scholarships.html" class="dropdown-item">Fee/Scholarships</a>
				  <a href="result.html" class="dropdown-item">Result & Placement</a>
				  <a href="facilities.html" class="dropdown-item">Facilities</a>
				</div>
			  </div>
			  <a href="contact.html" class="nav-item nav-link">Contact</a>
			</div>
			<a href="" class="join btn btn-primary px-lg-4 d-none d-lg-inline-flex">Join Now <i class="fa fa-location-arrow ms-3"></i></a>
		  </div>
		`);

		var activePage = window.location.pathname.split("/").pop();
		navElement
			.find('.nav-link[href="' + activePage + '"]')
			.addClass("active");
		if (activePage == "") {
			navElement.find('.nav-link[href="index.html"]').addClass("active");
		}
		if (
			activePage == "facilities.html" ||
			activePage == "result.html" ||
			activePage == "scholarships.html"
		) {
			navElement.find(".dropdown-toggle").addClass("active");
			navElement
				.find('.dropdown-item[href="' + activePage + '"]')
				.addClass("active");
		}

		footerElement.html(`<div class="container py-2">
		<div class="row g-5">
			<div class="col-lg-2 col-md-6">
				<h4 class="text-white mb-3">Quick Links</h4>
				<a class="btn btn-link" href="">About Us</a>
				<a class="btn btn-link" href="">Contact Us</a>
				<a class="btn btn-link" href="">Privacy Policy</a>
				<a class="btn btn-link" href="">FAQs & Help</a>
				<a class="btn btn-link" href=""
					>Terms & Condition</a
				>
			</div>
			<div class="col-lg-3 col-md-6">
				<h4 class="text-white mb-3">Contact</h4>
				<p
					class="mb-2 d-inline-flex justify-content-center align-items-center">
					<i class="fa fa-map-marker-alt me-4"></i>
					patharisanischare-02, Buddha Chowk, Morang
				</p>
				<p class="mb-2">
					<i class="fa fa-phone-alt me-3"></i>
					021 - 555 575
				</p>
				<p class="mb-2">
					<i class="fa fa-envelope-open me-3"></i>
					balmeeki.info@gmail.com
				</p>
				<div class="d-flex pt-2">
					<a
						class="btn btn-outline-light btn-social"
						href="">
						<i class="fab fa-twitter"></i>
					</a>
					<a
						class="btn btn-outline-light btn-social"
						href="">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a
						class="btn btn-outline-light btn-social"
						href="">
						<i class="fab fa-youtube"></i>
					</a>
					<a
						class="btn btn-outline-light btn-social"
						href="">
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<h4 class="text-white mb-3">Reach Us</h4>
				<form>
					<div class="row g-3 text-primary">
						<div class="col-md-7">
							<div class="form-floating">
								<input
									type="text"
									class="form-control"
									id="name"
									placeholder="Your Name" />
								<label for="name">Your Name</label>
							</div>
						</div>
						<div class="col-md-5">
							<div class="form-floating">
								<input
									type="text"
									class="form-control"
									id="subject"
									placeholder="Subject" />
								<label for="subject">Subject</label>
							</div>
						</div>
						<div class="col-12">
							<div class="form-floating">
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder="Your Email" />
								<label for="subject"
									>Your Email</label
								>
							</div>
						</div>
						<div class="col-12">
							<div class="form-floating">
								<textarea
									class="form-control"
									placeholder="Leave a message here"
									id="message"
									style="
										min-height: 100px;
									"></textarea>
								<label for="message">Message</label>
							</div>
						</div>
						<div class="col-12">
							<button
								class="btn btn-primary w-100 py-2"
								type="submit">
								Send Message
							</button>
						</div>
					</div>
				</form>
			</div>
			<div class="col-lg-3 col-md-6" data-wow-delay="0.3s">
				<iframe
					class="position-relative rounded w-100 h-100"
					src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12110.242897233724!2d87.55495991804911!3d26.651621896330273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39e589b8c53503b9%3A0x6a3c8fe59d61983f!2sBalmeeki%20Memorial%20Higher%20Secondary%20Boarding%20School%2C%20Pathari%20Shanishchare!3m2!1d26.6513735!2d87.5612921!4m5!1s0x39e589b8c53503b9%3A0x6a3c8fe59d61983f!2sMH26%2BGF6%20Balmeeki%20Memorial%20Higher%20Secondary%20Boarding%20School%2C%20Pathari%20Shanishchare%2056600!3m2!1d26.6513735!2d87.5612921!5e0!3m2!1sen!2snp!4v1684307420628!5m2!1sen!2snp"
					frameborder="0"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0">
				</iframe>
			</div>
		</div>
	</div>
	<div class="container abhi-container">
		<div id="abhi">
			<div
				class="row d-flex flex-row justify-content-around align-items-center">
				<div
					class="col-md-6 text-center text-md-start mb-3 mb-md-0">
					Designed and Developed By
					<a class="border-bottom" href="abhishek.html">
						Abhishek Adhikari
					</a>
					<div class="d-inline-flex">
						<a
							class="btn btn-outline-light"
							style="--color: #0000ff"
							id="btn-abhi"
							href="">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a
							class="btn btn-outline-light"
							style="--color: #ff0000"
							id="btn-abhi"
							href="">
							<i class="fab fa-instagram"></i>
						</a>
						<a
							class="btn btn-outline-light"
							style="--color: #00ff00"
							id="btn-abhi"
							href="">
							<i class="fab fa-whatsapp"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>`);
	});

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner();

	// Initiate the wowjs
	new WOW().init();

	$(window).on("load resize", function () {
		if (this.matchMedia("(max-width: 500px)").matches) {
			$("#about-header").addClass("text-center");
			$("#about-header").find("h6").removeClass("text-start p3-3");
			$("#about-header").find("h6").addClass("text-center px-3");
		}
	});

	// Sticky Navbar
	var lastScrollTop = 0;
	var viewportHeight = $(window).height();

	$(document).scroll(function () {
		var scrollTop = $(this).scrollTop();
		var isMenuOpen = $("#joinButton").attr("aria-expanded") === "true";

		if (!isMenuOpen) {
			if (scrollTop > viewportHeight) {
				if (scrollTop > lastScrollTop) {
					$(".sticky-top").css("top", "-100px");
				} else if (lastScrollTop > scrollTop) {
					$(".sticky-top").css("top", "-1px");
				}
			} else {
				$(".sticky-top").css("top", "-100px");
			}
		}
		lastScrollTop = scrollTop;
	});

	//Navbar Toggle on Small Screen
	function openMenu() {
		var icon = $(".navbar-toggler").find("i");
		icon.removeClass("navbar-toggler-icon");
		icon.addClass("fas fa-times");
		$("#main").addClass("blur-effect");
	}

	function closeMenu() {
		var icon = $(".navbar-toggler").find("i");
		icon.removeClass("fas fa-times");
		icon.addClass("navbar-toggler-icon");
		$("#main").removeClass("blur-effect");
	}

	$(document).ready(function () {
		$(".navbar-toggler").click(function () {
			var ariaExpanded = $(this).attr("aria-expanded");
			if (ariaExpanded === "true") {
				openMenu();
			} else {
				closeMenu();
			}
		});
		$(document).on("click", function (e) {
			if (
				!$(e.target).closest("nav").length &&
				!$("#joinButton").is(e.target)
			) {
				var ariaExpanded = $("#joinButton").attr("aria-expanded");
				if (ariaExpanded === "true") {
					$("#joinButton").click();
					closeMenu();
				}
			}
		});
	});

	// Dropdown on mouse hover
	const dropdown = $(".dropdown");
	const dropdownToggle = $(".dropdown-toggle");
	const dropdownMenu = $(".dropdown-menu");
	const showClass = "show";

	$(window)
		.resize(function () {
			if ($(window).width() >= 990) {
				dropdown.hover(
					function () {
						$(this).addClass(showClass);
						$(this)
							.find(dropdownToggle)
							.attr("aria-expanded", "true");
						$(this).find(dropdownMenu).toggleClass(showClass);
					},
					function () {
						$(this).removeClass(showClass);
						$(this)
							.find(dropdownToggle)
							.attr("aria-expanded", "false");
						$(this).find(dropdownMenu).toggleClass(showClass);
					}
				);
			} else {
				dropdown.off("mouseenter mouseleave");
			}
		})
		.resize();

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			if (window.matchMedia("(max-width: 500px)").matches) {
				$(".back-to-top").css("bottom", "25px");
			} else {
				$(".back-to-top").css("bottom", "45px");
			}
		} else {
			$(".back-to-top").css("bottom", "-55px");
		}
	});
	$(".back-to-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 200, "easeInOutExpo");
		return false;
	});

	// Header carousel
	$(".header-carousel").owlCarousel({
		autoplay: true,
		smartSpeed: 1500,
		items: 1,
		dots: false,
		loop: true,
		nav: true,
		navText: [
			'<i class="bi bi-chevron-left"></i>',
			'<i class="bi bi-chevron-right"></i>',
		],
	});

	//Textarea auto height adjust
	$(document).ready(function () {
		$(".footer textarea").on("keypress", function (e) {
			var scHeight = this.scrollHeight + 2;
			$(this).css("height", "auto");
			$(this).css("height", scHeight + "px");
			$(this).css("transition", "all .7s");
		});
	});
	$(document).ready(function () {
		$(".contact textarea").on("keypress", function (e) {
			var scHeight = this.scrollHeight + 2;
			$(this).css("height", "auto");
			$(this).css("height", scHeight + "px");
			$(this).css("transition", "all .7s");
		});
	});

	//Exact text
	$(".paragraph").each(function () {
		var $paragraph = $(this);
		var total = $paragraph.text();
		var words = total.trim().split(" ");
		var limitedText = words.slice(0, 50).join(" ");
		var limitedText2 = words.slice(50, 80).join(" ");
		var limitedText3 = words.slice(80, 100).join(" ");

		function lessText() {
			if (window.matchMedia("(max-width: 500px)").matches) {
				if (words.length > 50) {
					$paragraph.html(
						limitedText + '<a class="see-more">...SeeMore</a>'
					);
				}
			}
			if (
				window.matchMedia("(min-width: 501px) and (max-width: 700px)")
					.matches
			) {
				if (words.length > 80) {
					$paragraph.html(
						limitedText +
							limitedText2 +
							'<a class="see-more">...SeeMore</a>'
					);
				}
			}
			if (
				window.matchMedia("(min-width: 701px) and (max-width: 990px)")
					.matches
			) {
				if (words.length > 100) {
					$paragraph.html(
						limitedText +
							limitedText2 +
							limitedText3 +
							'<a class="see-more">...SeeMore</a>'
					);
				}
			}
		}
		lessText();
		$paragraph.on("click", ".see-more", function () {
			$paragraph.html(total + '<a class="see-less">...SeeLess</a>');
		});
		$paragraph.on("click", ".see-less", function () {
			lessText();
		});
	});

	// Testimonials carousel
	$(".testimonial-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		smartSpeed: 1000,
		center: true,
		margin: 24,
		dots: true,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			990: {
				items: 3,
			},
		},
	});
})(jQuery);
