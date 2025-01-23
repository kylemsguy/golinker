// Saves options to chrome.storage
const saveOptions = () => {
    const shortlink = document.getElementById('shortlink').value;
    const target = document.getElementById('target').value;
  
    chrome.storage.sync.set(
      { shortlink: shortlink, target: target },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { shortlink: 'go', target: 'aka.ms' },
      (items) => {
        document.getElementById('shortlink').value = items.shortlink;
        document.getElementById('target').value = items.target;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);