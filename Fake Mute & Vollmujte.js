//META{"name":"ExampleLibraryPlugin", "authorId":"881274999351181362", "invite":"", "source":"https://github.com/phasesfaces", "website":"https://www.youtube.com/watch?v=fIglhNw9zrU&t=100s"}*//
//import {DiscordModules as Modules} from "modules";
class ExampleLibraryPlugin {
    
    getName() {return "Fake Mute & Vollmute";}
    getDescription() {return "Tritt einem Talk bei, vollmute dich , starte und stoppe das Plugin, jetzt un-mute dich und du kannst zuhören und sogar mitreden ;D";}
    getVersion() {return "0.1.1";}
    getAuthor() {return "phases#0001";}
    



    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "LINK_TO_RAW_CODE");
        
        var text = new TextDecoder("utf-8");

WebSocket.prototype.original = WebSocket.prototype.send;
WebSocket.prototype.send = function(data) {
    if (Object.prototype.toString.call(data) === "[object ArrayBuffer]") {
        if (text.decode(data).includes("self_deaf")) {
            console.log("found mute/deafen");
            data = data.replace('"self_mute":false', 'NiceOneDiscord');
            console.log("Activated");
        }
    }
    WebSocket.prototype.original.apply(this, [data]);
}
window.BdApi.alert("fertig!",`jetzt stopp das Plugin!, Nachdem du das Plugin aktiviert hast, kannst du keine anderen Talks beitreten, dafür müsstest du Discord neustarten!`);

    }



    stop() {

    }
}
