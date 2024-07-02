# Brightspace HTML Templates

## Deployment

The deployment of this code can be found in Brightspace under `Shared Files` in `/shared/HTML-Template-Library/HTML-Templates-V3`.

<ul>
    <li>_assets
        <ul>
            <li>css (The scss that compiles to min.css and css)</li>
            <li>img (All the shared images in templates etc.)</li>
            <li>js (script.js + min.js)</li>
            <li>thirdpartylib
            <ul>
                <li>animate-css</li>
                <li>bootstrap-3.3.7 (Backward compatibility)</li>
                <li>bootstrap-4.3.1 (Current)</li>
                <li>font-awesome-sass-4.7.0 (Backward compatibility)</li>
                <li>fontawesome-free-5.9.0-web (Current)</li>
                <li>jquery (JQuery JS)</li>
                <li>popper-js</li>
                <li>wheelnavjs</li>
            </ul>  
            </li>
        </ul>
    </li>
    <li>pages (Templates available in Content Editor)</li>
</ul>

### To Deploy

Upload the files to the appropriate folder inside `/shared/HTML-Template-Library/HTML-Templates-V3`.

## Development

Edit files in your favorite IDE, update the repository, and upload to Brightspace

***Recommended:*** 
1. Visual Studio Code
2. scss-to-css : https://marketplace.visualstudio.com/items?itemName=yutent.scss-to-css
    - @ext:yutent.scss-to-css
        - Compile on Save : on
        - Output: expanded | compressed
