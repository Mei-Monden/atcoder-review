#include <stdio.h>
#include <string.h>

int main() {
    int R, G, B;
    char C[10];
    
    // 入力の読み取り
    scanf("%d %d %d", &R, &G, &B);
    scanf("%s", C);
    
    int X;

    // 条件に従って最小値を計算
    if (strcmp(C, "Red") == 0) {
        X = G < B ? G : B;
    } else if (strcmp(C, "Green") == 0) {
        X = R < B ? R : B;
    } else if (strcmp(C, "Blue") == 0) {
        X = R < G ? R : G;
    }

    // 結果の出力
    printf("%d\n", X);

    return 0;
}
