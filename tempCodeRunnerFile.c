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
    int i,odd=0,even=0;

    printf("\nOdd numbers: ");
    for(i = 0; i < size; i++) {
        if(num[i] % 2 != 0)
            printf("%d ", num[i]);
            
            
    }
   
    printf("\nEven numbers: ");
    for(i = 0; i < size; i++) {
        if(num[i] % 2 == 0)
            
            printf("%d ", num[i]);
            
             
    }
    printf("\n");
    
    for(i = 0; i < size; i++) {
        if(num[i] % 2 == 0)
            even+=num[i];
            even++;
        else
            odd+=num[i];
            odd++;
    }
    printf("\nSum of Odd numbers:- %d\n", odd);
    printf("Sum of Even numbers:- %d\n", even);
    printf("\nOdd numbers count: %d\n", odd);
    printf("Even numbers count: %d\n", even);
}