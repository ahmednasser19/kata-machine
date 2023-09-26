export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    //structural test
    if (a === null && b === null) {
        return true;
    }
    //structural test
    if (a === null || b === null) {
        return false;
    }
    //value test
    if (a?.value !== b?.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
