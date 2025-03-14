import "../Search/Search.js"
export class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/Header/header.css">
            <h1> Blog </h1>
            <p> Stay in the loop with the latest about our products </p>
            <nav> 
                <ul>
                    <li>
                    All categories
                    </li>
                    <li>
                    Company
                    </li>
                    <li>
                    Product
                    </li>
                    <li>
                    Design
                    </li>
                    <li>
                    Engineering
                    </li>
                </ul>
                <my-search></my-search>
             </nav>
            `
        }
    }
}
customElements.define('my-header', Header)