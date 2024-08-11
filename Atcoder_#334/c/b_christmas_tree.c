#include <stdio.h>
#include <math.h>

int main() {
    long long a, m, l, r;
    scanf("%lld %lld %lld %lld", &a, &m, &l, &r);

    long long k_min = (long long)ceil((double)(l - a) / m);

    long long k_max = (r - a) / m;

    long long result = k_max - k_min + 1;
    if (result < 0) {
        result = 0;
    }

    printf("%lld\n", result);

    return 0;
}
