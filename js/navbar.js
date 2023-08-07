document.write(
    `<nav class='navbar navbar-expand-sm navbar-light' id='neubar'>
        <div class='container'>
        <a class='navbar-brand' href='./index.html'><img src='./img/dlsulogowhite.png' height='60' onclick='window.location.href="./index.html";'/></a>
        <a class='navbar-brand' href='./index.html'><img src='./img/gcoelogo.png' height='60' onclick='window.location.href="./index.html";'/></a>
            <div class='navbar-brand' id='website-title'>
                Department of Electronics and <br>Computer Engineering
            </div>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>

            <div class=' collapse navbar-collapse' id='navbarNavDropdown'>
                <ul class='navbar-nav ms-auto '>
                    <li class='nav-item dropdown'>
                        <a class='nav-link mx-2 dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>About</a>
                        <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                            <li><a class='dropdown-item' href='./index.html'>Home</a></li>
                            <li><a class='dropdown-item' href='./AboutUs.html'>About the Department</a></li>
                            <li><a class='dropdown-item' href='./community-engagement-linkages.html'>Community Engagement</a></li>
                            <li><a class='dropdown-item' href='./contact-us.html'>Contact Us</a></li>
                            <li><a class='dropdown-item' href='./prof-dev.html''>Continuing Professional Development</a></li>
                            <li><a class='dropdown-item' href='./awards.html''>Awards and Achievements</a></li>
                        </ul>
                    </li>

                    <li class='nav-item dropdown'>
                        <a class='nav-link mx-2 dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Academics </a>
                        <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                            <li><a class='dropdown-item' href='./cpe-program.html'>Computer Engineering</a></li>
                            <li><a class='dropdown-item' href='./ece-program.html'>Electronics Engineering</a></li>
                            <li><a class='dropdown-item' href='./graduate.html'>Graduate Studies</a></li>
                        </ul>
                    </li>

                    <li class='nav-item'>
                        <a class='nav-link mx-2' href='./faculty-admin.html'>Faculty</a>
                    </li>

                    <li class='nav-item dropdown'>
                        <a class='nav-link mx-2 dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Research </a>
                        <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                            <li><a class='dropdown-item' href='./thesis-archive.html'>Thesis Archive</a></li>
                            <li><a class='dropdown-item' href='./lab-and-facilities.html'>Laboratories and Facilities</a></li>
                            <li><a class='dropdown-item' href='./conferences.html'>Conferences</a></li>
                            <li><a class='dropdown-item' href='./downloadables.html'>Downloadable Forms and Policies</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>  
    </nav>`
);

