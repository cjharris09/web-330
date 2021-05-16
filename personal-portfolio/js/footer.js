class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class='footer'>
            <ul>
                <li class="navItem"><a href="https://github.com/cjharris09"> GitHub</a></li>     
                <li class="navItem"><a href="https://www.bellevue.edu/">Bellevue</a></li>
                <li class="navItem"><a href="#">Web-330 Youtube</a></li>
                <li class="navItem"><a href="https://github.com/buwebdev/web-330">Web-330 Github</a></li>
            </ul>   
            </footer>`;
    }
}

customElements.define("footer-nav", Footer);