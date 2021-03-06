/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	let temp = A;
	while (temp.tail != null) {
		temp = temp.tail;
	}
	for (k = B; k.tail != null; k = k.tail) {
		temp.tail = k;
		temp = temp.tail;
	}
	return A;
}


/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	let T = L, R;
	while (start--) {
		T = T.tail;
	}
	R = new List(T.head);
	p = R
	while (T.tail && --len) {
		T = T.tail;
		p.tail = new List(T.head)
		p = p.tail;
	}
	return R
}
