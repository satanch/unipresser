/*
    Unipresser by satanch
    Native addon download script
*/

const axios = require('axios');
const fs = require('fs');

(async () => {
    try {
        console.log('✨  Looking for a native addon for your os and node version...');

        const addonRepos = {
            win32: 'satanch/unipresser-win32'
        };

        if (typeof addonRepos[process.platform] !== 'string')
            throw new Error(`Addon for your operating system (${process.platform}) is not implemented yet!`);

        const releaseRequest = await axios({
            method: 'GET',
            url: `https://api.github.com/repos/${addonRepos[process.platform]}/releases/latest`,
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        });

        let addonUrl = false;

        for (let asset of releaseRequest.data.assets) {
            if (asset.name.indexOf(process.version) !== -1)
                addonUrl = asset.browser_download_url;
        }

        if (!addonUrl)
            throw new Error(`There is no compiled addon for Node.js version: ${process.version}`);

        console.log(`⬇️  Downloading native addon...`);

        const addonRequest = await axios({
            method: 'GET',
            url: addonUrl,
            responseType: 'arraybuffer'
        });

        console.log(`💾  Saving native addon...`);

        fs.mkdirSync('./.addon');
        fs.writeFileSync('./.addon/unipresser.node', addonRequest.data, {encoding: null});

        console.log(`✔️  Done!`);
    } catch (err) {
        console.error('Native addon is not downloaded due error!');
        console.error(err);
    }
})();
