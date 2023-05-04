export default {

    patName(url){
        return new URL(url).pathname;
    },

    name(url){
        return this.patName(url).split("/").pop("").replace(".js", "");
    },

    remplace(url){
        return this.patName(url).replace(".js", ".html");
    }
    
}