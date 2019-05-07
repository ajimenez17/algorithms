 function sumEven(n) {
     var sum = 0;
     for (i = 1; i <= n; i++) {
         if (i % 2 == 1) {
         }
         else {
             sum = sum + i;
         }
     }
     console.log('sum of first ' + n + ' terms: ' + sum);
 }
 sumEven(100);