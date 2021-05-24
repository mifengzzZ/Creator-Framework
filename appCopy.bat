rd /s /q .\updateProj

MD .\updateProj

MD .\updateProj\resources
xcopy .\assets\resources.meta .\updateProj
xcopy .\assets\resources\project.manifest .\updateProj\resources
xcopy .\assets\resources\project.manifest.meta .\updateProj\resources
xcopy .\assets\resources\version.manifest .\updateProj\resources
xcopy .\assets\resources\version.manifest.meta .\updateProj\resources

MD .\updateProj\res
xcopy .\assets\res.meta .\updateProj

MD .\updateProj\res\body
xcopy .\assets\res\body.meta .\updateProj\res

MD .\updateProj\res\body\assets
xcopy .\assets\res\body\assets.meta .\updateProj\res\body
xcopy .\assets\res\body\assets .\updateProj\res\body\assets

MD .\updateProj\res\body\splash
xcopy .\assets\res\body\splash.meta .\updateProj\res\body
xcopy .\assets\res\body\splash .\updateProj\res\body\splash

MD .\updateProj\scenes
xcopy .\assets\scenes.meta .\updateProj
xcopy .\assets\scenes\AssetsScene.fire .\updateProj\scenes
xcopy .\assets\scenes\AssetsScene.fire.meta .\updateProj\scenes
xcopy .\assets\scenes\SplashScene.fire .\updateProj\scenes
xcopy .\assets\scenes\SplashScene.fire.meta .\updateProj\scenes

MD .\updateProj\scripts
MD .\updateProj\scripts\assets
xcopy .\assets\scripts.meta .\updateProj
xcopy .\assets\scripts\assets.meta .\updateProj\scripts
xcopy .\assets\scripts\assets .\updateProj\scripts\assets
xcopy .\assets\scripts\AppConfig.ts .\updateProj\scripts
xcopy .\assets\scripts\AppConfig.ts.meta .\updateProj\scripts

MD .\updateProj\scripts\splash
xcopy .\assets\scripts\splash.meta .\updateProj\scripts
xcopy .\assets\scripts\splash .\updateProj\scripts\splash

rd /s /q .\assets

MD .\assets

xcopy .\updateProj .\assets /e

pause