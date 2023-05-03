//Consultar en donde se encuentra el archivo
let patName = new URL(import.meta.url).pathname;

//Traer el archivo 
let name = patName.split("/").pop("").replace(".js", "")

export default class mySection extends HTMLElement{
    static async components(){
        /* let peticion =  */
        return await( await fetch(patName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode : "open"});
        Promise.resolve(mySection.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
        })
    }
}

customElements.define(name, mySection)