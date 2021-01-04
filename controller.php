<?php

namespace Concrete\Package\CkeditorA11ychecker;

use Concrete\Core\Application\Application;
use Concrete\Core\Asset\AssetList;
use Concrete\Core\Editor\EditorInterface;
use Concrete\Core\Editor\Plugin;
use Concrete\Core\Package\Package;

class Controller extends Package
{
    protected $pkgHandle = 'ckeditor_a11ychecker';
    protected $pkgVersion = '0.0.1';
    protected $appVersionRequired = '8.5';

    /**
     * {@inheritdoc}
     */
    public function getPackageName()
    {
        return t('Accessibility Checker for CKEditor');
    }

    /**
     * {@inheritdoc}
     */
    public function getPackageDescription()
    {
        return t('Add the Accessibility Checker to content block, etc.');
    }

    public function on_start()
    {
        if (!Application::isRunThroughCommandLineInterface()) {
            $assetList = AssetList::getInstance();
            if (is_object($assetList)) {
                $assetList->register(
                    'javascript',
                    'editor/ckeditor4/a11ychecker',
                    'js/register.js',
                    [],
                    $this->getPackageHandle()
                );
            }

            /** @var EditorInterface $editor */
            $editor = $this->app->make(EditorInterface::class);
            $pluginManager = $editor->getPluginManager();
            try {
                $a11ychecker = new Plugin();
                $a11ychecker->setKey('a11ychecker');
                $a11ychecker->setName(t('Accessibility Checker'));
                $a11ychecker->requireAsset('javascript', 'editor/ckeditor4/a11ychecker');
                $pluginManager->register($a11ychecker);
            } catch (\Exception $e) {
            }
        }
    }
}
