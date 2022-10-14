if("serviceWorker" in navigator){
    navigator.serviceWorker.register("js/sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
        ServiceWorkerContainer.register("https://williamhansen03.github.io");
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}
