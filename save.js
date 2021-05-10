document.getElementById("save").addEventListener("click", function () {
    chrome.storage.sync.set({data: document.getElementById("box").value}, function() {
       //document.getElementById("box").value = "saved " + document.getElementById("box").value;
    });
});
