"use strict";
(function () {

    angular.module("mailApp", []);

    /** a very basic service */
    function AccountServiceImpl() {
        var accountEmail = "carlo.bonamico@gmail.com";

        this.getAccountEmail = function () {
            return accountEmail;
        };
    }

    angular.module("mailApp")
        .service("AccountService", AccountServiceImpl);

    /** a very basic controller which requests injection of a service */
    function AccountController(AccountService) {
        this.accountEmail = AccountService.getAccountEmail();
    }

    angular.module("mailApp")
        .controller("AccountController", AccountController);

})();




