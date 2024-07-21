#include <stdio.h>

int main() {
    int a, b;
    int result;

    scanf("%d %d", &a, &b);

    if (a == b) {
        result = -1;
    } else if ((a == 1 && b == 2) || (a == 2 && b == 1)) {
        result = 3;
    } else if ((a == 2 && b == 3) || (a == 3 && b == 2)) {
        result = 1;
    } else {
        result = 2;
    }

    printf("%d\n", result);

    return 0;
}
