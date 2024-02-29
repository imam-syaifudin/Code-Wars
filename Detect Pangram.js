function isPangram(string) {
    let regex = /^(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z).*$/;
    return regex.test(string.toLowerCase());
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("asu")); // false