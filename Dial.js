export class Dial extends HTMLElement {
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
            <link rel="stylesheet" href="src/components/Dial/dial.css">
          <nav>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </nav>
            `
        }
    }
}
customElements.define('my-dial', Dial)