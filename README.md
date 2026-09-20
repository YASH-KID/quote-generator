# Quote Generator

A tiny one-page quote generator. No install, no server — it runs entirely in
your browser and remembers your light/dark theme choice on your own computer
(in `localStorage`).

## How to open it

Double-click the **Quote Generator** icon on your Desktop. It opens as its
own app window (no browser tabs/address bar).

You can also just double-click `index.html` in this folder to open it in
any browser — it works the same way, just inside a normal browser tab.

## Setting it up on a new computer

Double-click **`Setup Quote Generator.bat`**. It opens a small setup window
that checks for Chrome or Edge (the only thing this app needs) and creates
the Desktop shortcut for you — no manual steps. Nothing else gets
installed, since this app has no other dependencies.

## How it works

- Click **New Quote** to see a random quote (won't repeat the one just shown).
- Click the moon/sun icon (top-right) to switch between light and dark mode
  — your choice is remembered next time you open the app.

## Files in this folder

```
quote-generator/
├── index.html                     <- page structure (the HTML skeleton: quote card, buttons)
├── style.css                      <- all visual design (colors, layout, light/dark theme, fonts)
├── script.js                      <- app logic (quote data, random picker, theme toggle)
├── icon.ico                       <- custom app icon, used by the Desktop shortcut
├── Setup Quote Generator.bat      <- double-click to set up / recreate the Desktop shortcut
├── setup.ps1                      <- the setup wizard logic the .bat runs
├── installers/                    <- zip packages for setting this app up on another computer
└── README.md                      <- this file
```

## Where your data lives

Your theme preference (light or dark) is saved in your browser's
`localStorage`, tied to this `index.html` file. No account or internet
connection needed. If you move or rename this folder, the Desktop shortcut
will need to be recreated to point at the new location.
