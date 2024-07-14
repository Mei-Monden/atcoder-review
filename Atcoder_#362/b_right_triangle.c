#include <stdio.h>
#include <math.h>

// 2点間の距離の2乗を計算する関数
int distanceSquared(int x1, int y1, int x2, int y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
}

int main() {
    int xa, ya, xb, yb, xc, yc;
    
    // 座標の入力
    scanf("%d %d", &xa, &ya);
    scanf("%d %d", &xb, &yb);
    scanf("%d %d", &xc, &yc);
    
    // 各点間の距離の2乗を計算
    int ab = distanceSquared(xa, ya, xb, yb);
    int bc = distanceSquared(xb, yb, xc, yc);
    int ac = distanceSquared(xa, ya, xc, yc);
    
    // 距離の2乗をソート
    int distances[3] = {ab, bc, ac};
    for (int i = 0; i < 3; ++i) {
        for (int j = i + 1; j < 3; ++j) {
            if (distances[i] > distances[j]) {
                int temp = distances[i];
                distances[i] = distances[j];
                distances[j] = temp;
            }
        }
    }
    
    // 三平方の定理による直角三角形の判定
    if (distances[2] == distances[0] + distances[1]) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }
    
    return 0;
}
