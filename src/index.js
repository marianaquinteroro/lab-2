import "./components/Header/Header.js";
import "./components/Card/Card.js";
import "./components/News/News.js"
import "./components/Dial/Dial.js"

class App extends HTMLElement {
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
            <style>
                main {
                max-width : 1200px;
                margin : 40px auto;
                padding : 0 24px;
                }
                section {
                margin : 32px 0 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap : 16px
                }
            #latest {
            font-size : 36px;
            margin 32px 0 16px;
            }
            </style>
            <main>
            <my-header></my-header>
            <section>
            <my-card></my-card>
            <my-card></my-card>
            </section>
            <h2 id="latest">Latest</h2>
            <section>
            <my-news></my-news>
            <my-news></my-news>
            </section>
            <my-dial></my-dial>
            </main>
            `
        }
    }
}
console.log('Hola');
customElements.define('app-container', App)