#include <stdio.h>
#include <math.h>

#define MAX_POINTS 100

typedef struct {
    int x, y;
} Point;

double euclideanDistance(Point p1, Point p2) {
    return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
}

int main() {
    int n;
    Point points[MAX_POINTS];

    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &points[i].x, &points[i].y);
    }

    for (int i = 0; i < n; i++) {
        double maxDistance = -1;
        int maxPointIndex = -1;

        for (int j = 0; j < n; j++) {
            if (i == j) continue;

            double distance = euclideanDistance(points[i], points[j]);
            if (distance > maxDistance || (distance == maxDistance && j < maxPointIndex)) {
                maxDistance = distance;
                maxPointIndex = j;
            }
        }

        printf("%d\n", maxPointIndex + 1);
    }

    return 0;
}
