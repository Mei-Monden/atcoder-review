#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int min(int a, int b) {
    return (a < b) ? a : b;
}

int main() {
    int a,b,c,d,e,f;
    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);
    scanf("%d", &d);
    scanf("%d", &e);
    scanf("%d", &f);

    int g,h,i,j,k,l;
    scanf("%d", &g);
    scanf("%d", &h);
    scanf("%d", &i);
    scanf("%d", &j);
    scanf("%d", &k);
    scanf("%d", &l);

    int x = max(0, min(d, j) - max(a, g));
    int y = max(0, min(e, k) - max(b, h));
    int z = max(0, min(f, l) - max(c, i));

    int intersectVolume = x * y * z;

    if (intersectVolume > 0) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }

    return 0;
}
