let goTopBtn = document.getElementById("goTopBtn");
            window.onscroll = function () {
                scrollFunction();
            };
            function scrollFunction() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    goTopBtn.style.display = "flex";
                } else {
                    goTopBtn.style.display = "none";
                }
            }