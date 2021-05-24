let moduleMap = {
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'src/scripts/body/index.js' () { return require('src/scripts/body/index.js') },
'src/scripts/common/index.js' () { return require('src/scripts/common/index.js') },
'src/scripts/rPdk/index.js' () { return require('src/scripts/rPdk/index.js') },
'assets/main/index.js' () { return require('assets/main/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};