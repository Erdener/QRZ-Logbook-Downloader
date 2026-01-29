// ==UserScript==
// @name         QRZ Logbook CSV Downloader
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Download the QRZ Logbook table as CSV
// @author       Erdener Tuna
// @match        https://logbook.qrz.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qrz.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to Download the CSV
    function downloadTableAsCSV() {
        let csv = [];
        // Find the Rows of the Table
        let rows = document.querySelectorAll("#lbtab tr.lrow");

        if (rows.length === 0) {
            alert("No data in the table or table not loaded yet!");
            return;
        }

        // CSV Titles
        csv.push(['Date', 'Time', 'Callsign', 'Frequency', 'Mode', 'Grid', 'Country', 'Name', 'Status'].join(","));

        // Look at All Rows
        rows.forEach(row => {
            let cols = [];

            // Clean and Get the Cell Data
            let getVal = (cls) => {
                let el = row.querySelector('.' + cls);
                return el ? '"' + el.innerText.trim().replace(/"/g, '""') + '"' : '""';
            };

            cols.push(getVal('td_date'));      // Date
            cols.push(getVal('td_time'));      // Time
            cols.push(getVal('td_call2'));     // Callsign
            cols.push(getVal('td_freq2'));     // Frequency
            cols.push(getVal('td_mode2'));     // Mode
            cols.push(getVal('td_grid2'));     // Grid
            cols.push(getVal('td_country2'));  // Country
            cols.push(getVal('td_name2'));     // Name

            // Get from the Approval Status (Confirmed, Rejected etc.) title
            let statusEl = row.querySelector('.td_status span');
            let status = statusEl ? statusEl.getAttribute('title') : "";
            cols.push('"' + status + '"');

            csv.push(cols.join(","));
        });

        // Create the File and Download
        let csvFile = new Blob([csv.join("\n")], {type: "text/csv"});
        let downloadLink = document.createElement("a");
        downloadLink.download = "QRZ_Logbook_" + new Date().toISOString().slice(0,10) + ".csv";
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    // Add the Floating Button
    function addFloatingButton() {
        // If the button already exists don't add
        if (document.getElementById('csvFloatingBtn')) return;

        // Button Container
        let btnContainer = document.createElement("div");
        btnContainer.id = "csvFloatingBtn";
        btnContainer.style.position = "fixed";
        btnContainer.style.bottom = "20px";
        btnContainer.style.right = "20px";
        btnContainer.style.zIndex = "99999";
        btnContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        btnContainer.style.borderRadius = "5px";

        // The Button Itself
        let btn = document.createElement("button");
        btn.innerHTML = '📥 DOWNLOAD CSV';
        // Style Conf
        btn.style.backgroundColor = "#d9534f"; // Red color
        btn.style.color = "white";
        btn.style.border = "none";
        btn.style.padding = "10px 20px";
        btn.style.fontSize = "14px";
        btn.style.fontWeight = "bold";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.fontFamily = "Arial, sans-serif";

        // Hover effect
        btn.onmouseover = function() { btn.style.backgroundColor = "#c9302c"; };
        btn.onmouseout = function() { btn.style.backgroundColor = "#d9534f"; };

        // Clicking event
        btn.onclick = downloadTableAsCSV;

        // Add the button to the page
        btnContainer.appendChild(btn);
        document.body.appendChild(btnContainer);
    }

    // Continuous control (If the page is reloaded, the button reappears)
    setInterval(addFloatingButton, 1000);

})();
