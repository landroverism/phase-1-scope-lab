var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Sarah';

function changeLeastFavoriteCustomer() {
    // Error: Cannot assign to constant variable
    // leastFavoriteCustomer = 'probably Sarah';
    var leastFavoriteCustomer = 'probably Sarah';
    leastFavoriteCustomer = 'Sarah';
    function changeLeastFavoriteCustomer() {
        leastFavoriteCustomer = 'Sarah';
    }
}

