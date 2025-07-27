let activeTabId = null;
let timeSpent = {};

chrome.tabs.onActivated.addListener(activeInfo => {
  activeTabId = activeInfo.tabId;
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tabId === activeTabId && changeInfo.status === 'complete') {
    const url = new URL(tab.url);
    const domain = url.hostname;
    timeSpent[domain] = (timeSpent[domain] || 0) + 1;
    chrome.storage.local.set({ timeSpent });
  }
});