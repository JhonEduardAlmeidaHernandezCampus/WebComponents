import config from "./config.js";
export default class myFooter extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await( await fetch(config.remplace(myFooter.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode : "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }
    enviarWorker(e){
        console.log("Sirvo pa algo Footer");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.myButton = this.shadowRoot.querySelector(".btn")
            this.myButton.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(config.name(myFooter.url), myFooter)