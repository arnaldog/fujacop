
function permutation_lexico (a) {
	var n = a.length - 1;

	var i  = n - 1;
	while (a[i] >= a[i+1]) {
		i--;
	}

	var j = n;

	while(a[i] >=	 a[j]) {
		j--;
	}

	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;

	j = n;
	i = i +1;
	while (i < j) {
		var tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;

		i++;
		j--;
	}
}

function lexico_perm (a) {
	var n = a.length - 1;
	var i, j;

	function swap(a, i, j) {
		var tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}

	for (i = n - 1; a[i] >= a[i + 1]; i--);
	for (j = n; a[i] >= a[j]; j--);
		swap(a, i, j);
	for (j = n, i = i + 1; i < j; i++, j--)
		swap(a, i, j);



}