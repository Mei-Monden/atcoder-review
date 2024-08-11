#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    for (int x = 0; x <= n; x++) {
        for (int y = 0; y <= n; y++) {
            for (int z = 0; z <= n; z++) {
                if (x + y + z <= n) {
                    printf("%d %d %d\n", x, y, z);
                }
            }
        }
    }

    return 0;
}
