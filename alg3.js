/*
    given a  number print sum of digits
    0<=n<=10^9
    -10^9 <= n <= 10^9
    all the inputs
    correctness
    ex: 123 = 1+2+3: 6
            = 3+2+1: 6           
    ex: 1234 = 1+2+3+4: 10

    123 = 123%10 3   123/10 = 12.3 = parseInt(12.3)
    12  = 12%10  2   12/10  = 1.2
    1   = 1%10   1

    3567     = n%10 = 7  356.7
    356      = n%10 = 6  35
    35                5
    3                 3  3/10 = 0.3
    0                 0  0/10  = 0
    0       
*/
function sumOfDigits(n) {
    var sum = 0;
    while (n > 0) {
        var digit = n % 10;
        sum = sum + digit;
        n = parseInt(n / 10);
    }

    return sum;
}

console.log(sumOfDigits(-1234));
console.log(sumOfDigits(3567));
console.log(sumOfDigits(0));
