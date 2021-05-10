chrome.storage.sync.get(["data"], function(result) {
    document.getElementById("box").value = result.data;
});