import config from "./config.js";

export default class mySelection extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        /* let peticion =  */
        return await( await fetch(config.remplace(mySelection.url))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode : "open"});
    }

    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log("Sirvo pa algo Selection");
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(mySelection.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.Button = this.shadowRoot.querySelector(".btn")
            this.Button.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(config.name(mySelection.url), mySelection)