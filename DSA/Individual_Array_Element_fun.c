#include<stdio.h>
#include<conio.h>
void check(int num);
int main()
{
    int arr[10];
    int size,i;
    // printf("Enter the size of array:- ");
    // scanf("%d",&size);
    printf("Enter the elements in the array:- ");
    for(i=0;i<10;i++)
    {
        scanf("%d",&arr[i]);
        check(arr[i]);
    }
}
void check(int num)
{
    if(num%2==0)
    
        printf("%d is even numbers \n",num);
    
    else
        printf("%d is odd numbers \n",num);
    
}