const reverse = rec(
    rev => (
        (w, start) => typeof (start) === "string"
            ? (!w ? start : rev(w.substring(1), w[0] + start))
            : rev(w, '')
    )
);
//   reverse("olleh"); "hello"