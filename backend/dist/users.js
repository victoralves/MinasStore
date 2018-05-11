"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "teste@gmail.com": new User('teste@gmail.com', 'Teste', 'teste123'),
    "teste2@gmail.com": new User('teste2@gmail.com', 'Teste2', 'teste1232')
};
