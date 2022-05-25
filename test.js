let cookout = {
    mealOrders: ["chicken", "burger", "burger", "steak", "chicken"],
    grill: function () {
        let args = [].slice.call(arguments);

        console.log("I am going to cook :" + args.join(","));
    }

}

cookout.grill.apply(cookout, cookout.mealOrders);