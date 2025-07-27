chrome.storage.local.get("timeSpent", data => {
  const display = document.getElementById("dataDisplay");
  const entries = Object.entries(data.timeSpent || {});
  display.innerHTML = entries.map(([site, time]) => `<p>${site}: ${time}s</p>`).join('');
});