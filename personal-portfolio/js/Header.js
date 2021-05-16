class Nav extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav id="navbar">
            <ul class="nav-wrapper">
                <li class="navItem"><a href="landing-page.html">Home</a></li>
                <li class="navItem"><a href="about.html">About</a></li>
                <li class="navItem"><a href="resume.html">Resume</a></li>
                <li class="navItem"><a href="projects.html">Projects</a></li>
                <li class="navItem"><a href="database-diagram.html">DataBase Diagrams</a></li>
                <li class="navItem"><a href="API-unit-tests.html">API tests</a></li>
                <li class="navItem"><a href="bucket-list.html">Bucket List</a></li>
            </ul>
        </nav>
        `;
    }
}
customElements.define("nav-bar", Nav);