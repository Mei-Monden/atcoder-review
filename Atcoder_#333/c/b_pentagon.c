#include <stdio.h>
#include <string.h>

int main() {
    int n;
    char nString[12];
    char result[120001];

    scanf("%d", &n);

    sprintf(nString, "%d", n);

    result[0] = '\0';
    for (int i=0; i < n; i++) {
      strcat(result, nString);
    }

    printf("%s\n", result);

    return 0;
}
