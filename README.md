# Brightspace HTML Templates

## Deployment

The deployment of this code can be found in Brightspace under `Shared Files` in `/shared/HTML-Template-Library/HTML-Templates-V4`.

<ul>
    <li>_assets
        <ul>
            <li>css (The scss that compiles to min.css and css)</li>
            <li>img (All the shared images in templates etc.)</li>
            <li>js (script.js + min.js)</li>
            <li>thirdpartylib
                <ul>
                    <li>animate-css</li>
                    <li>bootstrap-4.3.1</li>
                    <li>fontawesome-free-5.9.0-web</li>
                    <li>jquery</li>
                    <li>popper-js</li>
                    <li>wheelnavjs</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>pages (Templates available in Content Editor)</li>
</ul>

### To Deploy

Upload the files to the appropriate folder inside `/shared/HTML-Template-Library/HTML-Templates-V4`.

## Development

Edit files in your favorite IDE, update the repository, and upload to Brightspace.

This folder can be run in any web server which will serve static pages.

The index file contains links to test pages that will display the current templates.

***Recommended:***
1. Visual Studio Code
2. scss-to-css : https://marketplace.visualstudio.com/items?itemName=yutent.scss-to-css
    - @ext:yutent.scss-to-css
        - Compile on Save : on
        - Output: expanded | compressed
