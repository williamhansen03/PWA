if("serviceWorker" in navigator){
    navigator.serviceWorker.register("js/sw.js", {scope:"https://williamhansen03.github.io"}).then(registration => {
        console.log("SW Registered");
        console.log(registration);
        scope: '/';
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
