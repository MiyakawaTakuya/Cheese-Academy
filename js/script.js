

// 左上タブの展開
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// 右下タブの展開
$(".openbtn2").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav2").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav2 li").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn2").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav2").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});