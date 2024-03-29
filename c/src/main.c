#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int value;
    struct Node* next;
} Node;

Node* addNode(Node* head, int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->value = value;
    newNode->next = NULL;

    if (head == NULL) {
        return newNode;
    }

    Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = newNode;

    return head;
}

void printList(Node* head) {
    Node* current = head;

    if (current == NULL) {
        printf("The list is empty.\n");
        return;
    }

    printf("Linked List: ");
    int counter = 0;
    while (current != NULL) {
        printf("\n [NODE %d]: %d", counter, current->value);
        current = current->next;
        counter++;
    }
    printf("\n");
}

int main() {
    Node* head = (Node*)malloc(sizeof(Node));
    if (head != NULL) {  // cannot malloc
        head->value = 20;
        head = addNode(head, 30);
        head = addNode(head, 40);
        head = addNode(head, 50);
        printList(head);
    } else {
        exit(EXIT_FAILURE);
    }

    return 0;
}
