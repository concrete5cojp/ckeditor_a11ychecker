if (typeof CKEDITOR !== 'undefined') {
    CKEDITOR.plugins.addExternal(
        'balloonpanel',
        CCM_REL + '/packages/ckeditor_a11ychecker/js/balloonpanel/'
    );
    CKEDITOR.plugins.addExternal(
        'a11ychecker',
        CCM_REL + '/packages/ckeditor_a11ychecker/js/a11ychecker/'
    );
    CKEDITOR.document.appendStyleSheet(CCM_REL + '/packages/ckeditor_a11ychecker/js/a11ychecker/skins/' + CKEDITOR.skin.name + '/contents.css');
}