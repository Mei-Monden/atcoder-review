#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    int a[n-1];
    for (int i = 0; i < n-1; i++) {
        scanf("%d", &a[i]);
    }

    int a_sum = 0;
    for (int i = 0; i < n-1; i++) {
        a_sum += a[i];
    }

    int result = -a_sum;
    if (result == 0) {
        result = 0;
    }

    printf("%d\n", result);

    return 0;
}
