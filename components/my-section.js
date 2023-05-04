import config from "./config.js";

export default class mySection extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        /* let peticion =  */
        return await( await fetch(config.remplace(mySection.url))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode : "open"});
    }

    handleEvent(e){
        (e.type === "click") ? this.EnviarWorker(e) : undefined;
    }

    EnviarWorker(e){
        console.log("Sirvo pa algo Section");
        e.preventDefault();
    }

    connectedCallback(){
        Promise.resolve(mySection.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
            this.myButton = this.shadowRoot.querySelector(".btn");
            this.myButton.addEventListener("click", this.handleEvent.bind(this))
        })
    }

}

customElements.define(config.name(mySection.url), mySection)