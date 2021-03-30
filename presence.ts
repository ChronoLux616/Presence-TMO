var presence = new Presence({
    clientId: "ClientID"
});

var browsingStamp = Math.floor(Date.now() / 1000);
var user = document.querySelector("#app > section > header > section > div > div > div > h1 > a");


presence.on("UpdateData", async () => {
    const presenceData: PresenceData = {
        largeImageKey: "tmo"
    }

    //from lectorTMO
    if (document.location.hostname == "lectortmo.com") {
        if (document.location.pathname == "/") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "View Main Page";
        }

        //Section Library
        else if (document.location.pathname == "/library") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Library";
        }
        else if (document.location.pathname.includes("/library/manga/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Manga";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/library/manhwa/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Manhwa";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/library/manhua/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Manhua";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/library/doujinshi/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Doujinshi";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/library/novel/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Novel";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/library/one_shot/")) {
            var title = document.querySelector("#app > section > header > section > div > div > div:nth-child(3) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing One Shot";
            presenceData.state = title.textContent;
        }
        else if (document.location.pathname.includes("/viewer/")){
            var title = document.querySelector("#app > section > div > div > h1");
            var cap = document.querySelector("#app > section > div > div > h2")
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing " + title.textContent;
            presenceData.state = cap.textContent;
            presenceData.smallImageKey = "reading";
            presenceData.smallImageText = "Reading " + title.textContent;
        }

        //Section Groups
        else if (document.location.pathname == "/groups") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Groups";
        }
        else if (document.location.pathname.includes("/groups/")) {
            var group = document.querySelector("#app > section > header > section > div > div > div:nth-child(2) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Group";
            presenceData.state = group.textContent;
        }

        //Section List
        else if (document.location.pathname == "/lists") {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing List";
        }
        else if (document.location.pathname.includes("/lists/")){
            var list = document.querySelector("#app > section > header > section > div > div > div:nth-child(2) > h1")
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Browsing List"
            presenceData.state = list.textContent;
        }

        //section Profile        
        else if (document.location.pathname == "/profile") {
            var pic = document.querySelector("#app > section > header > section > div > div > div > div > img")
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Profile";
            presenceData.state = user.textContent;
            presenceData.smallImageKey = pic.getAttribute(".img");
        }
        else if (document.location.pathname.includes("/profile/read")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Leidos";
        }
        else if (document.location.pathname.includes("/profile/pending")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Pendientes";
        }
        else if (document.location.pathname.includes("/profile/follow")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Siguiendo";
        }
        else if (document.location.pathname.includes("/profile/wish")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Favorito";
        }
        else if (document.location.pathname.includes("/profile/have")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Lo tengo";
        }
        else if (document.location.pathname.includes("/profile/abandoned")) {
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = user.textContent;
            presenceData.state = "Abandonado";
        }
        else if (document.location.pathname.includes("/users/")){
            var users = document.querySelector("#app > section > header > section > div > div > div:nth-child(2) > h1");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing User";
            presenceData.state = users.textContent;
        }
        //end section profile
    }

    //tmocommunity
    if (document.location.hostname == "tmocommunity.com") {
        if (document.location.pathname == "/"){
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Browsing Forum";
        }
        else if (document.location.pathname.includes("/d/")){
            var post = document.querySelector("#content > div > div header > div > ul > li > h2");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Reading post";
            presenceData.state = post.textContent;
        }
        else if (document.location.pathname.includes("/t/tmocommunity")){
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "TMO Community";
        }
        else if (document.location.pathname.includes("/u/")){
            var user = document.querySelector("#content > div > div > div > div > div > h2 > span");
            presenceData.startTimestamp = browsingStamp;
            presenceData.details = "Viewing Profile";
            presenceData.state = user.textContent;
        }
    }

    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    } else {
        presence.setActivity(presenceData);
    }
});
