/**
 * @license Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/license
 */

( function() {
	'use strict';

	CKEDITOR.plugins.a11ychecker.quickFixes.get( { langCode: 'ja',
		name: 'ImgAlt',
		callback: function( ImgAlt ) {

			/**
			 * Fixes the image with missing alt attribute, requiring non-empty alt.
			 *
			 * @constructor
			 */
			function ImgAltNonEmpty( issue ) {
				ImgAlt.call( this, issue );
			}

			ImgAltNonEmpty.prototype = new ImgAlt();
			ImgAltNonEmpty.prototype.constructor = ImgAltNonEmpty;

			ImgAltNonEmpty.prototype.validate = function( formAttributes ) {
				var ret = [],
					proposedAlt = formAttributes.alt + '';

				if ( !proposedAlt ) {
					ret.push( this.lang.errorEmpty );
				}

				if ( !ret.length ) {
					ret = ImgAlt.prototype.validate.call( this, formAttributes );
				}

				return ret;
			};

			ImgAltNonEmpty.prototype.lang = {"altLabel":"代替テキスト","errorTooLong":"代替テキストが長すぎます。現在{length}文字ですが、{limit}文字以下が望ましいです。","errorWhitespace":"代替テキストに空白文字だけを含むことはできません。","errorSameAsFileName":"画像の代替テキストはファイル名と同じにはできません。","errorEmpty":"代替テキストは空にはできません。"};
			CKEDITOR.plugins.a11ychecker.quickFixes.add( 'ja/ImgAltNonEmpty', ImgAltNonEmpty );
		}
	} );
}() );
