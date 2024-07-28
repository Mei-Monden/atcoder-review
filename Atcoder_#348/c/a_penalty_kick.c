#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    char result[101];
    int index = 0;

    for (int i = 0; i < n; i++) {
        if ((i + 1) % 3 == 0) {
            result[index++] = 'x';
        } else {
            result[index++] = 'o';
        }
    }

    result[index] = '\0';

    printf("%s\n", result);

    return 0;
}
