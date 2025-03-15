export class Card extends HTMLElement {
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
            <link rel="stylesheet" href="src/components/Card/card.css">
           <article>
           <img src=${this.getAttribute('img') || 'https://picsum.photos/800/450?random=1'} alt="card-img"/>
            <div class="card-info">
            <p class="category">${this.getAttribute('category') || 'Category'}</p>
            <h3 class="title">${this.getAttribute('title') || 'Title'}</h3>
            <p class="desc">${this.getAttribute('desc') || 'Description'}</p>
            </div>
            <div>
                <div class="user-info">
                <div>
                <img src=${this.getAttribute('userImg') || 'https://mui.com/static/images/avatar/1.jpg'} alt="user-img"/>
                <p>${this.getAttribute('userName') || 'User Name'}</p>
                </div>
                <p> ${this.getAttribute('date') || 'Date'} </p>
                </div>
            </div>
           </article>
            `
        }
    }
}
customElements.define('my-card', Card)