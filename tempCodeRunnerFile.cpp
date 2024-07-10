#include<stdio.h>

void check(int num[], int size);

int main() 
{
    int arr[100];
    int size, i;

    printf("Enter the size of array:- ");
    scanf("%d", &size);

    printf("Enter the elements in the array:- ");
    for(i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Array elements: ");
    for(i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    printf("\n");
    check(arr, size);

    return 0;
}

void check(int num[], int size) {
    int i,sumOdd=0,sumEven=0;

    printf("\nOdd numbers: ");
    for(i = 0; i < size; i++) {
        if(num[i] % 2 != 0)
            printf("%d ", num[i]);
            sumOdd+=num[i];
            
    }
    printf("Sum of Odd numbers:- %d\n",sumOdd);
    printf("\nEven numbers: ");
    for(i = 0; i < size; i++) {
        if(num[i] % 2 == 0)
            
            printf("%d ", num[i]);
            sumEven+=num[i];
             
    }
    printf("\n");
    
    printf("Sum of Even numbers:- %d",sumEven);
   
}
// int i, odd = 0, even = 0;

//     for(i = 0; i < size; i++) {
//         if(num[i] % 2 == 0)
//             even+=num[i];
//         else
//             odd+=num[i];
//     }
//     printf("\nOdd numbers count: %d\n", odd);
//     printf("Even numbers count: %d\n", even);
// }