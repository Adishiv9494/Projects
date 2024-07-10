#include<stdio.h>
#include<conio.h>
int main()
{
    
    int arr[100];
    int temp,i,j,size;
    printf("Enter the size of array:- ");
    scanf("%d",&size);
    printf("Enter the elements in the array:- ");
    for(i=0;i<size;i++)
    {
        scanf("%d",&arr[i]);
       
    }
     
    for(i=0,j=size-1;i<j;i++,j--)
    {
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    printf("After reversing the array is:- \n");
    for(i=0; i<size;i++)
    {
        printf("%d",arr[i]);
        printf("\n");
    }
    
    
}