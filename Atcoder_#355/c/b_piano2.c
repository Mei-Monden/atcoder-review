// #include <stdio.h>
// #include <stdlib.h>

// int compare(const void *a, const void *b) {
//     return (*(int*)a - *(int*)b);
// }

// int main() {
//     int N, M;
    
//     scanf("%d", &N);
//     int A[N];
//     for (int i = 0; i < N; i++) {
//         scanf("%d", &A[i]);
//     }

//     scanf("%d", &M);
//     int B[M];
//     for (int i = 0; i < M; i++) {
//         scanf("%d", &B[i]);
//     }

//     int C[N + M];
//     for (int i = 0; i < N; i++) {
//         C[i] = A[i];
//     }
//     for (int i = 0; i < M; i++) {
//         C[N + i] = B[i];
//     }

//     qsort(C, N + M, sizeof(int), compare);

//     int is_consecutive = 0;
//     for (int i = 1; i < N + M; i++) {
//         if (C[i] == C[i - 1]) {
//             is_consecutive = 1;
//             break;
//         }
//     }

//     if (is_consecutive) {
//         printf("Yes\n");
//     } else {
//         printf("No\n");
//     }

//     return 0;
// }
