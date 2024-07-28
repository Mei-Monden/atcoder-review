#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isGoodString(const char *s) {
    int counts[26] = {0};

    for (int i = 0; s[i] != '\0'; ++i) {
        counts[s[i] - 'a']++;
    }

    int frequencyCounts[101] = {0};

    for (int i = 0; i < 26; ++i) {
        if (counts[i] > 0) {
            frequencyCounts[counts[i]]++;
        }
    }

    for (int i = 1; i <= 100; ++i) {
        if (frequencyCounts[i] != 0 && frequencyCounts[i] != 2) {
            return false;
        }
    }

    return true;
}

int main() {
    char s[101];

    scanf("%100s", s);

    if (isGoodString(s)) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }

    return 0;
}
