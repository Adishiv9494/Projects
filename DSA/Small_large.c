#include<stdio.h>
#include<conio.h>
int main()
{
    int i, arr[10]={2,5,4,1,8,9,11,6,3,7};
    int small,large;
    small=large=arr[0];
    for(i=0;i<10;i++)
    {
        if(arr[i]<small)
        
            small=arr[i];
        
        if(arr[i]>large)
        
            large=arr[i];
    }
    printf("Smallest= %d, Largest= %d",small,large);
    return 0;
}