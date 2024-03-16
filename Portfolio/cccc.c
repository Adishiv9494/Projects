#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";
    int a;
    double b;
    char c[40];

    // Read and save an integer, double, and String to your variables.
    scanf("%d", &a);
    scanf("%lf", &b);
    for (int i = 0; i < 50; i++) {
        scanf(" %c ", &c[i]); // Note the space before %c to consume newline characters.
    }

    // Print the sum of both integer variables on a new line.
    printf("%d\n", a + i);

    // Print the sum of the double variables on a new line.
    printf("%.1lf\n", d + b);

    // Concatenate and print the String variables on a new line.
    // The 's' variable above should be printed first.
    printf("%s", s);
    for (int i = 0; i < 50; i++) {
        printf("%c", c[i]);
    }

    return 0;
}