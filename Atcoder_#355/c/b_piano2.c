#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int N, M;
    
    if (scanf("%d %d", &N, &M) != 2) {
        return 1;
    }

    int A[N], B[M], C[N + M];
    int inA[201] = {0};

    for (int i = 0; i < N; i++) {
        if (scanf("%d", &A[i]) != 1) {
            return 1;
        }
        C[i] = A[i];
        inA[A[i]] = 1;
    }

    for (int i = 0; i < M; i++) {
        if (scanf("%d", &B[i]) != 1) {
            return 1;
        }
        C[N + i] = B[i];
    }

    qsort(C, N + M, sizeof(int), compare);

    int is_consecutive = 0;
    for (int i = 0; i < N + M - 1; i++) {
        if (inA[C[i]] && inA[C[i + 1]]) {
            is_consecutive = 1;
            break;
        }
    }

    if (is_consecutive) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }

    return 0;
}
