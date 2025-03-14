export class News extends HTMLElement {
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
            <link rel="stylesheet" href="src/components/News/news.css">
           <article>
            <div class='card-info'>
            <p class='category'>Engineering</p>
            <h3 class="title">Revolutionizing software development with cutting-edge tools</h3>
            <p class='desc'>Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software</p>
            </div>
            <div class='user-info'>
                <div>
                <img src="https://mui.com/static/images/avatar/1.jpg" alt="user-img"/>
                <p>Remy Sharp</p>
                </div>
                <p> July 14, 2021 </p>
            </div>
           </article>
            `
        }
    }
}
customElements.define('my-news', News)