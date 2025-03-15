import "./components/Header/Header.js";
import "./components/Card/Card.js";
import "./components/News/News.js"
import "./components/Dial/Dial.js"
import { data } from "./data/data.js";

console.log(data);


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
            margin 32px 0 13px;
            }
            #news-container {
            gap : 64px;
            }

         @media screen and (max-width: 768px) {
    #cards-container {
        grid-template-columns: 1fr;
    }
}

            </style>
            <main>
            <my-header></my-header>
            <section id="cards-container">
          ${data.map(({
                img,
                category,
                title,
                desc,
                userImg,
                userName,
                date }) => {
                return (
                    `
                    <my-card 
                    img="${img}"
                    category="${category}" 
                    title="${title}" desc="${desc}" 
                    userImg="${userImg}" 
                    userName="${userName}" 
                    date="${date}">
                    </my-card>`
                )
            }).join('')
                }
            </section>
            <h2 id="latest">Latest</h2>
            <section id="news-container">
            ${data.map(({
                    category,
                    title,
                    desc,
                    userImg,
                    userName,
                    date }) => {
                    return (
                        `
                        <my-news 
                        category="${category}" 
                        title="${title}"
                         desc="${desc}" 
                        userImg="${userImg}" 
                        userName="${userName}"
                         date="${date}">
                         </my-news>`
                    )
                }).join('')
                }
            </section>
            <my-dial></my-dial>
            </main>
            `
        }
    }
}
console.log('Hola');
customElements.define('app-container', App)