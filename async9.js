// sync -> async
(function () {
    for (var i = 0; i < 1000000000; i++) {
        setTimeout(function () {
            console.log(i);
        }, 0);
    }
})();