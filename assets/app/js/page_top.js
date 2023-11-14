const $ = require('jquery');

export const pagetop = () => {
    var pagetop = $('.js-page-top');
    pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
};