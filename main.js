$(function() {
    // Start Review を消す
    function deleteReviewBtn(){
        $('button.js-dismiss-review-tutorial').remove();
        $('button.review-simple-reply-button').addClass('btn-primary');
    }
    deleteReviewBtn();
    $('button.js-add-single-line-comment').click(function(){
        deleteReviewBtn();
    })
});

