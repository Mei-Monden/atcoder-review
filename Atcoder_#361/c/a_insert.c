#include <stdio.h>

void insertElement(int A[], int *N, int K, int X) {
    for (int i = *N; i > K; i--) {
        A[i] = A[i - 1];
    }
    A[K] = X;
    (*N)++;
}

int main() {
    int N, K, X;
    scanf("%d", &N);
    scanf("%d", &K);
    scanf("%d", &X);

    int A[100];
    for (int i = 0; i < N; i++) {
        scanf("%d", &A[i]);
    }

    insertElement(A, &N, K, X);

    for (int i = 0; i < N; i++) {
        printf("%d ", A[i]);
    }
    printf("\n");

    return 0;
}
