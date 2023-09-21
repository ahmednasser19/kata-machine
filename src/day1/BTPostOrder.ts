function walk(curr: BinaryNode<number> | null, path: number[]) {
    //base case
    if (!curr) {
        return path;
    }
    //pre
    //recuse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);
    //post
    return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
