import config from "./config.js";
export default class myHeader extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        /* let peticion =  */
        return await( await fetch(config.remplace(myHeader.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode : "open"});
    }
    handleEvent(e){
        (e.type === "click") ? this.enviarWorker(e) : undefined;
    }

    enviarWorker(e){
        console.log("Sirvo pa algo Header");
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myHeader.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.myButton = this.shadowRoot.querySelector(".btn");
            this.myButton.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}

customElements.define(config.name(myHeader.url), myHeader)