document.write(
    `<nav class='navbar navbar-expand-sm navbar-light' id='neubar'>
        <div class='container'>
            <div class='navbar-brand' href='#'><img src='./img/dlsulogowhite.png' height='60' /></div>
            <div class='navbar-brand' href='#'><img src='./img/gcoelogo.png' height='60' /></div>
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
                            <li><a class='dropdown-item' href='#'>About the Department</a></li>
                            <li><a class='dropdown-item' href='#'>Community Engagement</a></li>
                            <li><a class='dropdown-item' href='#'>Contact Us</a></li>
                        </ul>
                    </li>

                    <li class='nav-item dropdown'>
                        <a class='nav-link mx-2 dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Academics </a>
                        <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                            <li><a class='dropdown-item' href='#'>Computer Engineering</a></li>
                            <li><a class='dropdown-item' href='#'>Electronics Engineering</a></li>
                        </ul>
                    </li>

                    <li class='nav-item'>
                        <a class='nav-link mx-2' href='#'>Faculty</a>
                    </li>

                    <li class='nav-item dropdown'>
                        <a class='nav-link mx-2 dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'> Research </a>
                        <ul class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                            <li><a class='dropdown-item' href='#'>Thesis Archive</a></li>
                            <li><a class='dropdown-item' href='#'>Laboratories and Facilities</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`
);