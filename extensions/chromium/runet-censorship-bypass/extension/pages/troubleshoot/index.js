'use strict';

chrome.runtime.getBackgroundPage( (backgroundPage) =>
  backgroundPage.apis.errorHandlers.installListenersOnAsync(
    window, 'TRBL', () => {

      document.getElementById('reset-settings').onclick = () => {

        backgroundPage.localStorage.clear();
        chrome.storage.local.clear( () => chrome.runtime.reload() );

      };

      document.getElementById('view-errors').onclick = () =>
        backgroundPage.apis.errorHandlers.viewErrorVoid('all');

    })
);
