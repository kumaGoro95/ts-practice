// カリー化前
{
    const multiply = (n, m) => n * m;
    console.log(multiply(2, 4));
}

// カリー化
{
    function withMultiply(n) {
      return (m) => n * m;
    }
    console.log(withMultiply(2)(4));
}

// アロー関数でカリー化
{
    const withMultiply = (n) => (m) => n * m;
    console.log(withMultiply(2)(4));

    // 部分適用
    const triple = withMultiply(3);
    console.log(triple(5));
}