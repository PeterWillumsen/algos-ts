type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};

declare type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | undefined;
    right: BinaryNode<T> | undefined;
};
