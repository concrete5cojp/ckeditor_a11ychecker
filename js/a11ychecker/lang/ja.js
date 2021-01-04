/**
 * @license Copyright (c) 2014-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11ychecker', 'ja', {
	toolbar: 'アクセシビリティチェック',
	closeBtn: '閉じる',
	testability: {
		'0': '通知',
		'0.5': '警告',
		'1': 'エラー'
	},
	ignoreBtn: '無視',
	ignoreBtnTitle: 'この問題を無視',
	stopIgnoreBtn: '無視を中断',
	listeningInfo: 'コンテンツの手動修正待ちです。終わったら下の<strong>再チェック</strong>をクリックしてください。',
	listeningCheckAgain: '再チェック',
	balloonLabel: 'アクセシビリティチェッカー',
	navigationNext: '次',
	navigationNextTitle: '次の問題',
	navigationPrev: '前',
	navigationPrevTitle: '前の問題',
	quickFixButton: 'クイック修正',
	quickFixButtonTitle: 'この問題をクイック修正する',
	navigationCounter: '{total} 中の {current} つめの問題 ({testability})',
	noIssuesMessage: 'アクセシビリティの問題はありませんでした。'
} );
